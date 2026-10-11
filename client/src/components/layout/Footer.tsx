import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <Link href="/" className="footer-wordmark">Vandit Katbamna<span>.</span></Link>
          <p>Thoughtful software for the way your business works.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/tech-stack">Technology</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-socials" aria-label="Contact and social links">
          <a href="https://github.com/vandit0703" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a href="https://linkedin.com/in/katbamna-vandit-115122327" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a href="tel:+917383817077" aria-label="Call Vandit"><Phone size={18} /></a>
          <a href="https://wa.me/917383817077" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={19} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanditkatbamna7@gmail.com" target="_blank" rel="noreferrer" aria-label="Email Vandit">
            <Mail size={19} />
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Vandit Katbamna. All rights reserved.</span>
        <span>Designed & built by Vandit Katbamna · 2026</span>
      </div>
    </footer>
  );
}
