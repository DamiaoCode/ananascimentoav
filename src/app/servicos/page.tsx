import Link from "next/link";
import { ArrowRight, Calendar, Clock, Mail, BarChart3, Globe, Palette, MessageCircle, Database, ShoppingCart, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Serviços | Ana Nascimento - Assistente Virtual",
  description: "Conheça os serviços de assistente virtual oferecidos por Ana Nascimento para aumentar a produtividade do seu negócio",
};

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <Container className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2 text-accent">
            <Star className="h-5 w-5 fill-accent" />
            <span className="font-medium">Qualidade e Profissionalismo</span>
            <Star className="h-5 w-5 fill-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter max-w-3xl">
            Serviços <span className="text-primary">Personalizados</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ofereço soluções administrativas à medida para libertar o seu tempo 
            e ajudar o seu negócio a prosperar.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contato">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </section>

      {/* Lista de Serviços */}
      <section className="py-16 md:py-24 bg-background" id="lista-servicos">
        <Container className="space-y-16">
          {/* Serviço 1: Administrativo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" id="administrativo">
            <div className="space-y-6">
              <div className="p-2 rounded-md bg-primary/10 w-fit">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Administrativo</h2>
              <p className="text-muted-foreground">
                Maximize o seu tempo delegando tarefas administrativas essenciais. Este serviço abrangente 
                permite-lhe focar-se no crescimento do seu negócio enquanto eu cuido de toda a gestão diária.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Gestão de email</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <MessageCircle className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Agendamento e apoio ao cliente via chat ou WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Agendamento de compromissos e marcações</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Database className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Gestão de clientes e equipas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Database className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Criar e atualizar base de dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <ShoppingCart className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Gestão de Stock</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <BarChart3 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Dashboard/análise de dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Tratamento de correspondência</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-8 md:p-10 space-y-6 border border-accent/10 h-full">
              <div className="flex items-center gap-2 text-accent">
                <Star className="h-5 w-5 fill-accent" />
                <span className="font-medium">O que está incluído</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Organização eficiente</h4>
                    <p className="text-sm text-muted-foreground">
                      Otimização completa do seu fluxo de trabalho administrativo para garantir eficiência máxima.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Gestão proativa</h4>
                    <p className="text-sm text-muted-foreground">
                      Antecipação e resolução de problemas antes que eles afetem o seu negócio.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Relatórios regulares</h4>
                    <p className="text-sm text-muted-foreground">
                      Resumos detalhados das atividades realizadas para manter-se informado.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contato">
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Serviço 2: Financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" id="financeiro">
            <div className="space-y-6 order-1 md:order-2">
              <div className="p-2 rounded-md bg-primary/10 w-fit">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Financeiro</h2>
              <p className="text-muted-foreground">
                Mantenha as suas finanças organizadas e sob controlo. Com o meu serviço de gestão financeira,
                cuido de todas as tarefas financeiras essenciais para que possa ter uma visão clara
                da saúde financeira do seu negócio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Emissão de faturas e recibos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Controlo de contas a pagamento e respetivos pagamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Controlo de recebimentos de clientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Lançamento de documentos de fornecedores</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Conciliação bancária</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Gestão de contas bancárias</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Controlo de despesas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Criação de mapa de fluxo de caixa</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-8 md:p-10 space-y-6 order-2 md:order-1 border border-accent/10 h-full">
              <div className="flex items-center gap-2 text-accent">
                <Star className="h-5 w-5 fill-accent" />
                <span className="font-medium">O que está incluído</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Controlo financeiro</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistema completo de monitorização de entradas e saídas para evitar surpresas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Relatórios personalizados</h4>
                    <p className="text-sm text-muted-foreground">
                      Elaboração de relatórios financeiros adaptados às necessidades do seu negócio.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Análise de tendências</h4>
                    <p className="text-sm text-muted-foreground">
                      Identificação de padrões e oportunidades para otimizar as suas finanças.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contato">
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Serviço 3: Web e Redes Sociais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" id="web">
            <div className="space-y-6">
              <div className="p-2 rounded-md bg-primary/10 w-fit">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Web e Redes Sociais</h2>
              <p className="text-muted-foreground">
                Aumente a sua presença digital com soluções personalizadas para o seu negócio. Desde a 
                criação de websites e portfólios até à gestão completa das suas redes sociais.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Globe className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Construção de website com personalização adaptado ao negócio ou serviço</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <Palette className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Construção de portfólio criativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 mt-1">
                    <MessageCircle className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Conteúdos e publicações para redes sociais</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-8 md:p-10 space-y-6 border border-accent/10 h-full">
              <div className="flex items-center gap-2 text-accent">
                <Star className="h-5 w-5 fill-accent" />
                <span className="font-medium">O que está incluído</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Design personalizado</h4>
                    <p className="text-sm text-muted-foreground">
                      Criação de design único alinhado com a identidade da sua marca.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Otimização para motores de busca</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementação de técnicas de SEO para melhorar a visibilidade online.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Conteúdo estratégico</h4>
                    <p className="text-sm text-muted-foreground">
                      Planeamento e criação de conteúdo que gera engagement e converte visitantes em clientes.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4 mt-auto">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contato">
                    Solicitar Orçamento
                  </Link>
                </Button>
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
            <h2 className="text-2xl md:text-3xl font-bold">Precisa de um serviço personalizado?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Se não encontrou exatamente o que procura, podemos criar um pacote 
              à medida para atender às necessidades específicas do seu negócio.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato">
                Entrar em Contacto
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
} 