import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Gem,
  Clock,
  ArrowDown,
  Laptop,
  Bot,
  CheckCircle,
  Rocket,
  ArrowRight,
  Handshake,
  Code,
  Instagram,
  CircleDot,
  Video,
} from "lucide-react";

const TOTAL_SLIDES = 8;

const Index = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].screenX - touchStart.current;
    if (diff < -50) next();
    else if (diff > 50) prev();
  };

  const slideClass = (i: number) =>
    `absolute inset-0 flex flex-col justify-start overflow-y-auto transition-all duration-400 ease-in-out py-4 scrollbar-hide ${
      i === current
        ? "opacity-100 translate-x-0 pointer-events-auto relative"
        : i < current
        ? "opacity-0 -translate-x-5 pointer-events-none"
        : "opacity-0 translate-x-5 pointer-events-none"
    }`;

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center font-sans antialiased overflow-hidden bg-background text-foreground"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-card/70 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          <span className="font-bold tracking-wider text-sm uppercase">AdNove</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted w-2"
              }`}
            />
          ))}
        </div>
      </header>

      {/* Slides */}
      <main className="w-full h-full max-w-md mx-auto pt-20 pb-24 px-6 relative flex flex-col justify-center overflow-hidden">
        {/* Slide 1 */}
        <section className={slideClass(0)}>
          <Gem className="w-10 h-10 text-primary mb-4" />
          <h1 className="text-3xl font-extrabold mb-4 leading-tight">
            Escale seu posicionamento e sua agenda sem perder a{" "}
            <span className="text-primary">essência.</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Uma proposta de parceria estratégica exclusiva entre a AdNove e você.
          </p>
          <div className="mt-auto bg-card p-4 rounded-xl border border-border">
            <p className="text-sm text-muted-foreground">
              <Clock className="inline w-4 h-4 mr-2 text-primary" /> Tempo estimado: 2 minutos
            </p>
          </div>
        </section>

        {/* Slide 2 */}
        <section className={slideClass(1)}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">O Cenário Atual</h2>
          <h3 className="text-2xl font-bold mb-6">Mãos ocupadas = Mensagens acumuladas.</h3>
          <div className="space-y-4">
            <div className="bg-card p-5 rounded-2xl border-l-4 border-destructive">
              <p>Você está realizando um procedimento de Lash impecável...</p>
            </div>
            <div className="flex justify-center text-muted-foreground">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div className="bg-card p-5 rounded-2xl border-l-4 border-destructive">
              <p>O celular toca no WhatsApp. Uma potencial cliente quer agendar.</p>
            </div>
            <div className="flex justify-center text-muted-foreground">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div className="bg-card p-5 rounded-2xl border-l-4 border-primary">
              <p className="font-semibold">
                Você não pode responder na hora. A cliente busca outra profissional e você perde dinheiro.
              </p>
            </div>
          </div>
        </section>

        {/* Slide 3 */}
        <section className={slideClass(2)}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">A Solução AdNove</h2>
          <h3 className="text-2xl font-bold mb-6">Tecnologia trabalhando por você.</h3>
          <p className="text-muted-foreground mb-8">
            Nós estruturamos a sua presença digital em dois pilares fundamentais de alta conversão:
          </p>
          <div className="grid gap-4">
            <div className="bg-card p-5 rounded-xl border border-border flex items-start gap-4">
              <div className="bg-background p-3 rounded-lg text-primary">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">1. Landing Page</h4>
                <p className="text-sm text-muted-foreground mt-1">Sua vitrine digital profissional 24h por dia.</p>
              </div>
            </div>
            <div className="bg-card p-5 rounded-xl border border-border flex items-start gap-4">
              <div className="bg-background p-3 rounded-lg text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">2. IA no WhatsApp</h4>
                <p className="text-sm text-muted-foreground mt-1">Atendimento imediato e inteligente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4 */}
        <section className={slideClass(3)}>
          <div className="mb-6 inline-block bg-card px-4 py-2 rounded-full border border-border text-primary">
            <Laptop className="inline w-4 h-4 mr-2" /> Serviço 01
          </div>
          <h3 className="text-2xl font-bold mb-4">A sua Landing Page de Alta Conversão</h3>
          <p className="text-muted-foreground mb-6">
            Não é apenas um site bonitinho. É uma página focada em transformar visitantes em agendamentos.
          </p>
          <ul className="space-y-4">
            {[
              "Design premium que reflete a qualidade do seu trabalho.",
              "Apresentação clara dos seus serviços de Lash.",
              "Botões diretos para agendamento rápido.",
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Slide 5 */}
        <section className={slideClass(4)}>
          <div className="mb-4 inline-block bg-card px-4 py-2 rounded-full border border-border text-primary">
            <Bot className="inline w-4 h-4 mr-2" /> Serviço 02
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Sua "Assistente" de IA no WhatsApp</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Enquanto você trabalha, a Inteligência Artificial atende suas clientes.
          </p>
          <div className="bg-background p-3 sm:p-4 rounded-xl border border-border mb-3">
            <div className="flex flex-col gap-2 sm:gap-3 text-sm">
              <div className="bg-card p-3 rounded-lg rounded-tl-none self-start max-w-[85%]">
                Oi! Tem horário pra manutenção de cílios hoje?
              </div>
              <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none self-end max-w-[85%]">
                Olá, linda! Tudo bem? Hoje estamos com a agenda cheia, mas tenho um encaixe perfeito amanhã às 14h.
                Vamos reservar? ✨
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Treinada 100% com as suas informações e jeito de falar.
          </p>
        </section>

        {/* Slide 6 */}
        <section className={slideClass(5)}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">A Parceria</h2>
          <h3 className="text-2xl font-bold mb-6">Permuta Estratégica (Ganha-Ganha)</h3>
          <p className="text-muted-foreground mb-6">
            Nós fornecemos toda a nossa expertise tecnológica para organizar e escalar seus agendamentos.
          </p>
          <p className="text-muted-foreground mb-8">
            <strong className="text-foreground">Em troca:</strong> Você utiliza a sua influência e audiência engajada para
            divulgar a AdNove. Sem troca financeira, apenas troca de alto valor.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center border border-primary mx-auto mb-2">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-bold">AdNove</span>
            </div>
            <Handshake className="w-7 h-7 text-muted-foreground" />
            <div className="text-center">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center border border-pink-500 mx-auto mb-2">
                <Instagram className="w-7 h-7 text-pink-500" />
              </div>
              <span className="text-sm font-bold">Você</span>
            </div>
          </div>
        </section>

        {/* Slide 7 */}
        <section className={slideClass(6)}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Sua Entrega</h2>
          <h3 className="text-2xl font-bold mb-6">O Cenário de Divulgação Ideal</h3>
          <p className="text-muted-foreground mb-6">
            Para garantir resultado para a agência, estruturamos um formato focado em credibilidade e vitrine permanente.
          </p>
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-pink-500/20 p-2 rounded text-pink-500">
                  <CircleDot className="w-5 h-5" />
                </div>
                <h4 className="font-bold">5 a 6 Stories (Sequência)</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Ação de venda imediata. Nós enviaremos um roteiro simples e natural para você gravar mostrando como a IA
                facilitou sua vida.
              </p>
            </div>
            <div className="bg-card p-4 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-500/20 p-2 rounded text-purple-500">
                  <Video className="w-5 h-5" />
                </div>
                <h4 className="font-bold">1 Reels (Fixado)</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Vitrine permanente no seu perfil atestando a qualidade do nosso serviço de LP e automação.
              </p>
            </div>
          </div>
        </section>

        {/* Slide 8 */}
        <section className={slideClass(7) + " text-center"}>
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-9 h-9 text-primary" />
          </div>
          <h3 className="text-3xl font-extrabold mb-4">Vamos modernizar seu atendimento?</h3>
          <p className="text-muted-foreground mb-8">
            Assim que você aprovar, já iniciamos o briefing para a criação da sua página e o treinamento da sua
            Inteligência Artificial.
          </p>
          <button
            onClick={() =>
              window.open("https://wa.me/554784641781?text=Eu%20topo%20fazer%20a%20parceria", "_blank")
            }
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/30 transition transform hover:scale-105 w-full flex items-center justify-center gap-2"
          >
            Topo a Parceria! <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-muted-foreground mt-6">Proposta confidencial elaborada por AdNove Marketing.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 p-4 bg-card/70 backdrop-blur-xl border-t border-border flex justify-between items-center">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-card text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition hover:bg-muted"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-semibold text-muted-foreground">
          {current + 1} / {TOTAL_SLIDES}
        </span>
        {current < TOTAL_SLIDES - 1 && (
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        {current === TOTAL_SLIDES - 1 && <div className="w-12" />}
      </footer>
    </div>
  );
};

export default Index;
