import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Sobre | Ana Nascimento - Assistente Virtual",
  description: "Conheça Ana Nascimento, assistente virtual com experiência em gestão administrativa e organização para pequenas e médias empresas",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                Sobre <span className="text-primary">Ana Nascimento</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Assistente virtual dedicada a ajudar empreendedores e pequenas empresas 
                a alcançarem o próximo nível através da organização e eficiência.
              </p>
              <Button asChild>
                <Link href="/contato">
                  Entre em Contacto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 rounded-lg z-10"></div>
              {/* Substitua por uma imagem real */}
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <p className="text-primary font-medium">Imagem da Ana Nascimento</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* História */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">A Minha História</h2>
              <p className="text-muted-foreground">
                Com mais de 5 anos de experiência em administração e gestão, iniciei a minha carreira como 
                assistente executiva numa empresa multinacional, onde desenvolvi competências excecionais 
                de organização e gestão.
              </p>
              <p className="text-muted-foreground">
                Em 2019, decidi utilizar a minha experiência para ajudar empreendedores e pequenas empresas 
                que precisavam de apoio administrativo de qualidade, mas não tinham condições de contratar 
                um assistente a tempo inteiro.
              </p>
              <p className="text-muted-foreground">
                Desde então, tenho colaborado com diversos clientes, desde profissionais liberais até 
                empresas de média dimensão, sempre com foco em aumentar a produtividade e melhorar 
                a organização dos negócios.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">A Minha Missão</h2>
              <p className="text-muted-foreground">
                A minha missão é libertar o seu tempo e potencializar o seu negócio através de serviços 
                administrativos de excelência, permitindo que se foque no que realmente importa: 
                o crescimento da sua empresa e o atendimento aos seus clientes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Valores</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Excelência</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Confidencialidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Compromisso</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Organização</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Eficiência</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Adaptabilidade</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Habilidades */}
      <section className="py-16 md:py-24 bg-muted">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Competências</h2>
              <p className="text-muted-foreground">
                Sou especializada em diversas ferramentas e metodologias para oferecer um serviço completo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Softwares e Ferramentas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Microsoft Office (Word, Excel, PowerPoint)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Google Workspace (Gmail, Drive, Calendar)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Ferramentas de gestão de projetos (Trello, Asana)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Plataformas de email marketing (Mailchimp)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>CRM (Pipedrive, HubSpot)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Competências Administrativas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Gestão de agenda e compromissos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Organização documental digital</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Atendimento a clientes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Gestão de emails e correspondência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Agendamento de reuniões e eventos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="rounded-lg bg-primary/10 p-8 md:p-12 flex flex-col items-center text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Vamos trabalhar juntos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Se procura mais organização e tempo para se focar no crescimento do seu negócio, 
              entre em contacto para uma consulta gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contato">
                  Agendar Consulta
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/servicos">
                  Ver Serviços
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 