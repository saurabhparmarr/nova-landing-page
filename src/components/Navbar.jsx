import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "Features", href: "#features" },
{ name: "About", href: "#about" },
{ name: "Solutions", href: "#solutions" },
{ name: "Pricing", href: "#pricing" },
{ name: "FAQ", href: "#faq" },
];

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const closeMenu = () => setIsOpen(false);

return ( <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"> <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

    {/* Logo */}
    <a
      href="#home"
      className="flex items-center gap-2.5"
      onClick={closeMenu}
      aria-label="NOVA Home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white shadow-sm">
        N
      </span>

      <span className="text-lg font-bold tracking-tight text-slate-950">
        NOVA
      </span>
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950"
        >
          {link.name}
        </a>
      ))}
    </nav>

    {/* Desktop CTA */}
    <a
      href="#cta"
      className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-300/40 lg:flex"
    >
      Get Started
      <ArrowRight size={16} />
    </a>

    {/* Mobile Menu Button */}
    <button
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 transition-colors hover:bg-slate-50 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>

  {/* Mobile Navigation */}
  <div
    className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={closeMenu}
          className="border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
        >
          {link.name}
        </a>
      ))}

      <a
        href="#cta"
        onClick={closeMenu}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800"
      >
        Get Started
        <ArrowRight size={16} />
      </a>
    </nav>
  </div>
</header>


);
}

export default Navbar;
