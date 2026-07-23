const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1a1523]/80 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-lg text-violet-100 tracking-wide">Nátilla Alves</span>
        <nav className="flex gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-violet-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
