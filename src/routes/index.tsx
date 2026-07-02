import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Calendar,
  CheckCircle,
  AlertCircle,
  Target,
  Flame,
  Lock,
  Clock,
  Frown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reconquista em 15 Dias — Método prático para reconstruir postura" },
      { name: "description", content: "Plano de 15 dias com mensagens prontas, modelos de stories e postura estratégica para mudar a dinâmica após o término." },
    ],
  }),
  component: Index,
});

const ctaTargetId = "cta-final";

function scrollToCta() {
  const el = document.getElementById(ctaTargetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToHowItWorks() {
  const el = document.getElementById("como-funciona");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function CTAButton({
  children,
  size = "md",
  variant = "primary",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-base md:text-lg"
      : "px-6 py-3 text-sm md:text-base";

  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-12px_var(--color-glow)]"
      : "border border-border bg-background/50 text-foreground hover:bg-surface";

  return (
    <button
      onClick={onClick || scrollToCta}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
        sizeClasses,
        variantClasses,
        className,
      ].join(" ")}
    >
      {children}
      {variant === "primary" && <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />}
    </button>
  );
}

function GlowingOrb({ className }: { className: string }) {
  return (
    <div
      className={[
        "pointer-events-none absolute rounded-full blur-[120px] animate-pulse-glow",
        className,
      ].join(" ")}
      aria-hidden="true"
    />
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={["relative px-4 py-20 md:py-28", className].join(" ")}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 md:pt-28 md:pb-32">
      <GlowingOrb className="right-0 top-0 h-[500px] w-[500px] bg-primary/30 md:-right-40 md:-top-40" />
      <GlowingOrb className="bottom-0 left-0 h-[400px] w-[400px] bg-primary/20 md:-bottom-40 md:-left-40" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <Flame className="h-3.5 w-3.5 text-primary" />
            Método validado por centenas de casos
          </span>
        </div>

        <h1 className="font-heading mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl animate-fade-up">
          Reconquista em
          <br />
          <span className="text-primary italic">15 Dias</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up">
          Plano prático com mensagens, stories e postura para mudar o caos na
          mente da sua ex e fazer ela enxergar você diferente.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up">
          <CTAButton size="lg">Começar agora</CTAButton>
          <CTAButton variant="outline" size="lg" onClick={scrollToHowItWorks}>
            Ver como funciona
          </CTAButton>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground animate-fade-up">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>15 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span>5 fases</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            <span>Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const errors = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Mensagem por impulso",
      text: "Cada texto enviado no calor do momento afasta mais do que aproxima.",
    },
    {
      icon: <Frown className="h-5 w-5" />,
      title: "Se humilhar",
      text: "Pedir, implorar e justificar só confirma que você não tem mais valor.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Exagerar nos stories",
      text: "Postar de propósito para ela ver é sinal de desespero. Ela percebe.",
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: "Correr atrás",
      text: "Quanto mais você persegue, mais ela corre. Regra básica de atração.",
    },
    {
      icon: <Flame className="h-5 w-5" />,
      title: "Demonstrar desespero",
      text: "Desespero é repelente. Quem age assim, some da lista de desejos.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Perder valor percebido",
      text: "Erros repetidos destrói a forma como ela te enxerga. E recuperar isso tem método.",
    },
  ];

  return (
    <Section className="bg-surface/50">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          O problema
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Você está cometendo erros que a afastam sem perceber
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A maioria dos homens age no emocional e joga o jogo dela. Quem controla a postura é quem vence.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {errors.map((item) => (
          <div
            key={item.title}
            className="surface-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-surface-raised"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h3 className="font-heading mt-4 text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton size="lg">Quero parar de errar</CTAButton>
      </div>
    </Section>
  );
}

function Solution() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-8 md:p-16">
        <GlowingOrb className="right-1/2 top-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 bg-primary/20" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            A solução
          </span>
          <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Um plano de 15 dias para mudar sua postura e fazer ela mudar de ideia
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Sem teorias infinitas. Sem coach motivacional. Um passo a passo com mensagens, stories e atitudes para você recuperar o controle e reverter a situação.
          </p>
          <div className="mt-10">
            <CTAButton size="lg">Acessar o método</CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "5 mensagens secretas",
      text: "Textos prontos para os momentos certos. Nada de criar no improviso e correr risco.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "3 stories que ela olha duas vezes",
      text: "Modelos de stories estratégicos para reativar a curiosidade sem parecer forçado.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Plano diário de 15 dias",
      text: "Sabe exatamente o que fazer a cada dia. Nada de ficar perdido ou inventando desculpa.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Estratégias de comportamento",
      text: "Como se portar, o que falar, o que não falar e como reagir em cada fase.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Checklist de evolução",
      text: "Acompanhe sua postura e veja quando está pronto para uma reaproximação real.",
    },
  ];

  return (
    <Section className="bg-surface/30">
      <div className="text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          O que você vai ter
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Tudo pronto para você executar
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="surface-raised rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h3 className="font-heading mt-5 text-2xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Timeline() {
  const phases = [
    { days: "Dia 1–3", title: "Controle", text: "Pare de reagir no impulso e proteja seu valor percebido." },
    { days: "Dia 4–7", title: "Estabilização", text: "Reconstrua sua rotina, silêncio estratégico e mentalidade firme." },
    { days: "Dia 8–12", title: "Postura e presença", text: "Stories, mensagens e atitudes que reposicionam você na cabeça dela." },
    { days: "Dia 13–15", title: "Reaproximação", text: "Momento certo, tom certo, mensagem certa. Sem humilhação." },
  ];

  return (
    <Section id="como-funciona">
      <div className="text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          Como funciona
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          15 dias. 4 fases. Um objetivo.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, index) => (
          <div
            key={phase.days}
            className="relative surface-card rounded-2xl p-6"
          >
            <div className="font-heading text-5xl font-bold text-primary/20">
              {String(index + 1).padStart(2, "0")}
            </div>
            <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {phase.days}
            </span>
            <h3 className="font-heading mt-4 text-2xl font-semibold text-foreground">
              {phase.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {phase.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "No dia 7 minha ex já estava mudando de ideia kkk. Gratidão pelo método, sem ele eu ia mandar outra mensagem de madrugada.",
      name: "Carlos M.",
      result: "Reaproximação em 7 dias",
    },
    {
      text: "Foi difícil fazer ela voltar, mas segui o passo a passo e deu tudo certo. O que mais me ajudou foi entender os erros que eu estava cometendo.",
      name: "André L.",
      result: "Reconstruiu a postura",
    },
    {
      text: "Parei de agir por impulso em 3 dias. A diferença na forma como ela respondeu foi absurda. Parece mágica, mas é método.",
      name: "Rafael S.",
      result: "Controle emocional",
    },
  ];

  return (
    <Section className="bg-surface/50">
      <div className="text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          Resultados reais
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Quem aplica, sente a diferença
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="surface-raised rounded-2xl p-8"
          >
            <div className="text-primary text-4xl font-serif leading-none">“</div>
            <p className="mt-2 text-lg leading-relaxed text-foreground">
              {item.text}
            </p>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-semibold text-foreground">{item.name}</p>
              <p className="text-sm text-primary">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  const [clicked, setClicked] = useState(false);

  return (
    <Section id={ctaTargetId} className="relative overflow-hidden">
      <GlowingOrb className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/25" />

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-8 text-center md:p-16">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          Decisão
        </span>
        <h2 className="font-heading mt-6 text-4xl font-semibold text-foreground md:text-6xl">
          Se você continuar não atendendo as expectativas dela, outro cara vai fazer.
        </h2>
        <p className="mt-6 text-xl font-medium text-muted-foreground md:text-2xl">
          Você vai mesmo deixar isso acontecer?
        </p>

        <div className="mt-10">
          <CTAButton
            size="lg"
            onClick={() => setClicked(true)}
            className="w-full sm:w-auto"
          >
            Não! QUERO RECONQUISTAR MINHA EX
          </CTAButton>
        </div>

        {clicked && (
          <p className="mt-6 text-sm text-muted-foreground">
            Em breve: tela de pagamento. Por enquanto, reserve sua vaga.
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-primary" /> Pagamento seguro
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> Acesso imediato
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-primary" /> 7 dias de garantia
          </span>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Reconquista em 15 Dias</p>
        <p className="mt-2">
          Método prático de postura e comunicação. Resultados podem variar de acordo com a aplicação.
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()} Reconquista em 15 Dias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Timeline />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
