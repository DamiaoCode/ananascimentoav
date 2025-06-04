"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle, Star } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/ui/container";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  telefone: z.string().optional(),
  assunto: z.string().min(3, {
    message: "O assunto deve ter pelo menos 3 caracteres.",
  }),
  mensagem: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mldnelnq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Entrarei em contacto em breve.", {
          description: "Obrigada por entrar em contacto!",
          duration: 5000,
        });
        form.reset();
        setFormSubmitted(true);
      } else {
        toast.error("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.", {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <Container className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2 text-accent">
            <Star className="h-5 w-5 fill-accent" />
            <span className="font-medium">Estou aqui para ajudar</span>
            <Star className="h-5 w-5 fill-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
            Entre em <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Estou disponível para ajudar com as suas necessidades administrativas.
            Preencha o formulário abaixo ou utilize os dados de contacto direto.
          </p>
        </Container>
      </section>

      {/* Formulário e Informações de Contato */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:p-8 space-y-6 border-accent/10">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span>Envie uma mensagem</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                </h2>
                <p className="text-sm text-muted-foreground">
                  Preencha o formulário abaixo para entrar em contacto comigo.
                  Responderei o mais breve possível.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="O seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seu.email@exemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(+351) 912 345 678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="assunto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Assunto da mensagem" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva como posso ajudar-lhe..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        A enviar...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span>Informações de Contacto</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                </h2>
                <p className="text-muted-foreground">
                  Prefere entrar em contacto diretamente? Utilize um dos canais abaixo.
                </p>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-muted-foreground">+351 912 345 678</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Disponível de segunda a sexta, das 9h às 18h
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contacto@ananascimento.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respondo em até 24 horas úteis
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Localização</h3>
                      <p className="text-muted-foreground">Lisboa, Portugal</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Atendimento remoto para todo o país
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-muted space-y-4 border border-accent/10">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horário de atendimento</h3>
                    <p className="text-sm text-muted-foreground">
                      Segunda a sexta: 9h às 18h<br />
                      Sábados: 9h às 12h<br />
                      Domingos e feriados: fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Perguntas <span className="text-accent">Frequentes</span></h2>
              <p className="text-muted-foreground">
                Algumas dúvidas comuns sobre o processo de contratação.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                  <span>Como funciona o primeiro contacto?</span>
                </h3>
                <p className="text-muted-foreground">
                  Após o preenchimento do formulário, entro em contacto para agendarmos uma 
                  conversa inicial (por telefone ou videoconferência) para entender as suas 
                  necessidades e discutir como posso ajudar.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                  <span>Quais são as formas de pagamento?</span>
                </h3>
                <p className="text-muted-foreground">
                  Aceito transferências bancárias, MB Way e pagamentos via cartão de crédito. 
                  Os detalhes completos são fornecidos após a definição dos serviços a 
                  serem contratados.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                  <span>Como é definido o valor dos serviços?</span>
                </h3>
                <p className="text-muted-foreground">
                  O valor é calculado com base nas horas necessárias e na complexidade das 
                  tarefas. Após a conversa inicial, envio uma proposta detalhada com todas 
                  as informações.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                  <span>Trabalha com contratos de longo prazo?</span>
                </h3>
                <p className="text-muted-foreground">
                  Sim, ofereço tanto serviços pontuais quanto pacotes mensais para necessidades 
                  contínuas. Os pacotes mensais possuem descontos especiais.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 