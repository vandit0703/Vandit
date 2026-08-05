import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold">Vandit Katbamna</h3>
            <p className="text-muted-foreground mt-2 max-w-sm">
              Full Stack Developer building custom business software and automation systems.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/vandit0703" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/katbamna-vandit-115122327" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a
              href="tel:+917383817077"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors"
            >
              <Phone size={20} />
            </a>

            <a
              href="https://wa.me/917383817077"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanditkatbamna7@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vandit Katbamna. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Built By <Heart size={14} className="mx-1 text-destructive" /> Vandit Katbamna  2026
          </p>
        </div>
      </div>
    </footer>
  );
}
