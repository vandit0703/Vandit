import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Technology", path: "/tech-stack" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const isCurrentPage = (path: string) =>
    location === path || (path === "/projects" && location.startsWith("/projects/"));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" onClick={closeMenu} className="wordmark" aria-label="Vandit Katbamna home">
          VK<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isCurrentPage(item.path) ? "page" : undefined}
              className={isCurrentPage(item.path) ? "nav-link nav-link--active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-contact">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenu}>Home</Link>
          {navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={closeMenu}
              aria-current={isCurrentPage(item.path) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu}>Start a project ↗</Link>
        </nav>
      )}
    </header>
  );
}
