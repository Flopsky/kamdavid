export function SiteFooter() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-sm md:flex-row">
        <p className="text-muted-foreground">© {new Date().getFullYear()} David Kamgang</p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a className="hover:underline" href="https://github.com/Flopsky" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/dkamgang/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:underline" href="mailto:davidkamgang84@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}


