import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const runtime = 'edge';
export const revalidate = 0; // always fetch fresh data

// GET /api/daily-sentiment?metric=positive|negative|net
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const metricParam = (url.searchParams.get('metric') || 'positive').toLowerCase();
    const validMetrics = new Set(['positive', 'negative', 'net']);
    const metric = validMetrics.has(metricParam) ? metricParam : 'positive';

    const connectionString = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
    if (!connectionString) {
      return NextResponse.json(
        { error: 'Missing DATABASE_URL (or NEON_DATABASE_URL) environment variable.' },
        { status: 500 }
      );
    }

    const sql = neon(connectionString);
    // Direct query to the expected table in the 'sentiment' database
    const rows = await sql`
      SELECT company, positive, negative
      FROM public.daily_sentiments
      WHERE as_of_date = (SELECT MAX(as_of_date) FROM public.daily_sentiments)
    `;
    const resultRows = Array.isArray(rows) ? rows : [];

    const valueFor = (row) => {
      if (metric === 'positive') return Number(row.positive) || 0;
      if (metric === 'negative') return Number(row.negative) || 0;
      // net = positive + negative (negative is already a negative number)
      return (Number(row.positive) || 0) + (Number(row.negative) || 0);
    };

    if (!resultRows.length) {
      return NextResponse.json({ name: 'Root', children: [] }, { headers: { 'Cache-Control': 'no-store' } });
    }

    const children = resultRows.map((r) => ({
      name: r.company,
      children: [
        {
          name: r.company,
          value: valueFor(r),
        },
      ],
    }));

    const data = { name: 'Root', children };
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return NextResponse.json({ error: error?.message || 'Unexpected error' }, { status: 500 });
  }
}


