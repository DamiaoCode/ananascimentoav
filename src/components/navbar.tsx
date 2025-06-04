"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl font-bold ml-1">Ana Nascimento</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Início
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-primary">
            Sobre
          </Link>
          <Link href="/servicos" className="text-sm font-medium hover:text-primary">
            Serviços
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-primary">
            Contacto
          </Link>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contato">Agendar Consulta</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-border bg-background">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link 
              href="/sobre" 
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link 
              href="/servicos" 
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Serviços
            </Link>
            <Link 
              href="/contato" 
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato" onClick={toggleMenu}>Agendar Consulta</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 