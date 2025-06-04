import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Star, FileText, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <h3 className="text-lg font-bold">Ana Nascimento</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Assistente virtual especializada em melhorar a eficiência do seu negócio 
              através de serviços de gestão profissional.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-md font-medium">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-md font-medium">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-accent" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-accent" />
                <span>contacto@ananascimento.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-accent" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-md font-medium">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/ananascimento.av.pt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ana-nascimento-13452366?fbclid=PAZXh0bgNhZW0CMTEAAacaIgclH0nkzbo2Duq-YDedZM67oSB2x_5hcUo93PIz9AL0szVnmJhFnf1N2A_aem_b4LdaOpWQK6ki-SXZOq7cw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/people/Ana-Nascimento-AV/61556663317223/?ref=_ig_profile_ac" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col items-center space-y-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://ananascimento.com.pt/wp-content/uploads/2024/03/Termos-Condic%CC%A7o%CC%83es-Poi%CC%81tica-de-Privacidade-Ana-Nascimento-2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FileText size={14} />
              <span>Termos & Condições / Política de Privacidade</span>
            </a>
            <a 
              href="https://www.livroreclamacoes.pt/Inicio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <BookOpen size={14} />
              <span>Livro de Reclamações</span>
            </a>
          </div>
          <p>© {year} Ana Nascimento - Assistente Virtual. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 