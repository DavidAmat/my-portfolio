import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div>
            <p className="tracking-tight">David Amat</p>
            <p className="text-sm text-foreground/60">
              Full Stack Data Scientist & AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-foreground/70" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 text-center">
          <p className="text-sm text-foreground/50">
            © {currentYear} David Amat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
