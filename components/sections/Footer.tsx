export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-6 md:px-12 lg:px-20 pt-10 pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/40">
      <div>© {year} Selyan Mouhali</div>
      <div className="flex items-center gap-6">
        <a
          href="https://privasee.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          privasee.fr ↗
        </a>
        <a href="#hero" className="hover:text-accent transition-colors">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
