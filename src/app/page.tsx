import { ArrowRight, Calendar, ClipboardCheck, Clock, FileCog, Mail, BarChart3, Globe, Palette, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <Container className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2 text-accent">
            <Star className="h-5 w-5 fill-accent" />
            <span className="font-medium">Serviços de Excelência</span>
            <Star className="h-5 w-5 fill-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter max-w-3xl">
            Eficiência e organização para o seu <span className="text-primary">negócio crescer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Assistente virtual especializada em otimizar os seus processos, organizar a sua agenda e 
            libertar o seu tempo para se focar no que realmente importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/contato">
                Agendar Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/servicos">
                Conhecer Serviços
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Serviços Principais */}
      <section className="py-16 md:py-24 bg-background">
        <Container className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Os Meus <span className="text-accent">Serviços</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofereço soluções personalizadas para aliviar a sua carga administrativa
              e melhorar a eficiência do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="group rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-all hover:border-accent/50">
              <div className="flex flex-col space-y-4">
                <div className="p-2 rounded-md bg-primary/10 w-fit">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Administrativo</h3>
                <p className="text-muted-foreground">
                  Gestão completa de tarefas administrativas, desde emails e agendamentos até gestão de clientes e bases de dados.
                </p>
                <Link 
                  href="/servicos#administrativo" 
                  className="text-primary font-medium inline-flex items-center group-hover:underline"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="group rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-all hover:border-accent/50">
              <div className="flex flex-col space-y-4">
                <div className="p-2 rounded-md bg-primary/10 w-fit">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Financeiro</h3>
                <p className="text-muted-foreground">
                  Gestão financeira completa, incluindo faturação, controlo de contas, conciliação bancária e análise de fluxo de caixa.
                </p>
                <Link 
                  href="/servicos#financeiro" 
                  className="text-primary font-medium inline-flex items-center group-hover:underline"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="group rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-all hover:border-accent/50">
              <div className="flex flex-col space-y-4">
                <div className="p-2 rounded-md bg-primary/10 w-fit">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Web e Redes Sociais</h3>
                <p className="text-muted-foreground">
                  Criação de websites, portfólios e gestão de redes sociais para aumentar a presença digital do seu negócio.
                </p>
                <Link 
                  href="/servicos#web" 
                  className="text-primary font-medium inline-flex items-center group-hover:underline"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button asChild variant="outline">
              <Link href="/servicos">
                Ver todos os serviços
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-muted">
        <Container className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Por que <span className="text-accent">contratar</span> uma assistente virtual?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ao trabalhar comigo, ganha mais do que apenas suporte administrativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <div className="flex space-x-4">
              <div className="p-2 rounded-md bg-primary/10 h-fit">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Poupe Tempo</h3>
                <p className="text-muted-foreground">
                  Delegue tarefas administrativas e foque-se no crescimento do seu negócio.
                </p>
              </div>
            </div>

            {/* Benefício 2 */}
            <div className="flex space-x-4">
              <div className="p-2 rounded-md bg-primary/10 h-fit">
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Aumente a Produtividade</h3>
                <p className="text-muted-foreground">
                  Processos otimizados e sistemas organizados para maior eficiência.
                </p>
              </div>
            </div>

            {/* Benefício 3 */}
            <div className="flex space-x-4">
              <div className="p-2 rounded-md bg-primary/10 h-fit">
                <FileCog className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Flexibilidade</h3>
                <p className="text-muted-foreground">
                  Contrate apenas pelo tempo que precisar, sem custos fixos com funcionários.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="rounded-lg bg-primary/10 p-8 md:p-12 flex flex-col items-center text-center space-y-6 border border-accent/20">
            <div className="p-3 rounded-full bg-accent/10">
              <Star className="h-6 w-6 text-accent fill-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Pronta para ter mais tempo e organização no seu negócio?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Agende uma consulta gratuita para discutirmos como posso ajudar a 
              otimizar os seus processos e aumentar a sua produtividade.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato">
                Agendar Consulta Gratuita
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
