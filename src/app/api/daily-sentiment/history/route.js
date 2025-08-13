import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const runtime = 'edge';
export const revalidate = 0;

// GET /api/daily-sentiment/history?days=30
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const daysParam = Number(url.searchParams.get('days') || 30);
    const days = Number.isFinite(daysParam) && daysParam > 0 ? Math.min(daysParam, 365) : 30;

    const connectionString = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
    if (!connectionString) {
      return NextResponse.json(
        { error: 'Missing DATABASE_URL (or NEON_DATABASE_URL) environment variable.' },
        { status: 500 }
      );
    }

    const sql = neon(connectionString);
    // Aggregate by date; limit by most recent N dates
    const rows = await sql`
      WITH daily AS (
        SELECT as_of_date::date AS date,
               SUM(positive)::float AS positive_sum,
               SUM(negative)::float AS negative_sum
        FROM public.daily_sentiments_unique
        GROUP BY as_of_date::date
        ORDER BY as_of_date::date DESC
        LIMIT ${days}
      )
      SELECT * FROM daily ORDER BY date ASC;
    `;

    const series = (Array.isArray(rows) ? rows : []).map(r => {
      const date = r.date ? String(r.date).slice(0, 10) : null;
      const positive = typeof r.positive_sum === 'number' ? r.positive_sum : Number(r.positive_sum) || 0;
      const negative = typeof r.negative_sum === 'number' ? r.negative_sum : Number(r.negative_sum) || 0;
      const net = positive + negative;
      return { date, positive, negative, net };
    });

    return NextResponse.json({ series }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return NextResponse.json({ error: error?.message || 'Unexpected error' }, { status: 500 });
  }
}


