import { createFileRoute } from "@tanstack/react-router";

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
  Eye,
  Zap,
  ShieldCheck,
  Hourglass,
  HeartCrack,
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

const ctaTargetId = "oferta";

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
  href,
  onClick,
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  href?: string;
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

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    sizeClasses,
    variantClasses,
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {variant === "primary" && <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />}
      </a>
    );
  }

  return (
    <button onClick={onClick || scrollToCta} className={classes}>
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold tracking-widest text-primary uppercase">
      {children}
    </span>
  );
}

/* ============================================================
   Q1 — O que faz isso ser diferente de tudo que já existe?
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 md:pt-28 md:pb-32">
      <GlowingOrb className="right-0 top-0 h-[500px] w-[500px] bg-primary/30 md:-right-40 md:-top-40" />
      <GlowingOrb className="bottom-0 left-0 h-[400px] w-[400px] bg-primary/20 md:-bottom-40 md:-left-40" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <Flame className="h-3.5 w-3.5 text-primary" />
            Não é motivação. É execução.
          </span>
        </div>

        <h1 className="font-heading mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-up">
          Enquanto você tenta adivinhar o que falar,
          <br />
          <span className="text-primary italic">outro cara já está falando com ela.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up">
          Esqueça vídeos de coach, frases prontas de internet e teoria sobre "valor de mercado".
          Aqui você recebe um plano de 15 dias com <span className="text-foreground font-semibold">as mensagens exatas, os stories certos e a postura que faz ela voltar a te procurar</span> — sem se humilhar, sem depender de sorte.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up">
          <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">Quero começar agora</CTAButton>
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
            <span>4 fases</span>
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

/* ============================================================
   Q2 — O que eu ganho com isso?
   ============================================================ */
function WhatYouGain() {
  const gains = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Voltar a ser respondido",
      text: "Mensagens que ela lê e responde — em vez de deixar no vácuo ou visualizar frio.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Ser enxergado com desejo de novo",
      text: "Stories e postura que reativam a curiosidade dela sem parecer forçado ou desesperado.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Parar de agir por impulso",
      text: "Um script pronto para os momentos em que você normalmente iria estragar tudo.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Reaproximação sem se humilhar",
      text: "Chegar nela pelo ângulo certo, no momento certo, com a mensagem certa.",
    },
  ];

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>O que você ganha</SectionEyebrow>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Em 15 dias, você deixa de ser o ex ignorado e volta a ser o cara que ela pensa antes de dormir.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {gains.map((item) => (
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

      <div className="mt-12 text-center">
        <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">Quero esses resultados</CTAButton>
      </div>
    </Section>
  );
}

/* ============================================================
   Q3 — Como eu sei que isso realmente funciona?
   ============================================================ */
function Proof() {
  const testimonials = [
    {
      text: "No dia 7 minha ex já estava mudando de ideia kkk. Se não fosse o método eu ia mandar mais uma mensagem de madrugada e queimar tudo.",
      name: "Carlos M.",
      result: "Reaproximação em 7 dias",
    },
    {
      text: "Achei que era papinho, mas segui o passo a passo direitinho e ela me chamou pra sair no dia 12. Coisa que não acontecia há 2 meses.",
      name: "André L.",
      result: "Ela chamou primeiro",
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
        <SectionEyebrow>Como você sabe que funciona</SectionEyebrow>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Centenas de homens já viraram o jogo em 15 dias.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Bloqueado, trocado, humilhado, ignorado — casos piores que o seu aplicaram o método e mudaram a dinâmica em dias. Não é sorte. É sequência certa.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="surface-raised rounded-2xl p-8">
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

/* ============================================================
   Q4 — O que está me impedindo de conseguir isso hoje?
   ============================================================ */
function WhatBlocks() {
  const errors = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Mensagem no impulso",
      text: "Cada texto no calor da emoção é um empurrão dela na direção de outro cara.",
    },
    {
      icon: <Frown className="h-5 w-5" />,
      title: "Se humilhar",
      text: "Pedir, implorar e justificar mostra pra ela que você não tem mais valor. E ela sente.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Stories forçados",
      text: "Postar de propósito pra ela ver é desespero disfarçado. Ela percebe e perde o respeito.",
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: "Correr atrás",
      text: "Quanto mais você persegue, mais ela corre. Quem corre atrás nunca é desejado.",
    },
    {
      icon: <Flame className="h-5 w-5" />,
      title: "Demonstrar desespero",
      text: "Desespero é repelente. Ela não volta para quem parece perdido sem ela.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Achar que 'só o tempo resolve'",
      text: "Tempo sem estratégia só serve pra ela se acostumar com outro. E aí não tem mais volta.",
    },
  ];

  return (
    <Section className="bg-surface/50">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>O que está te impedindo</SectionEyebrow>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          O problema não é ela ter terminado. É o que você fez depois.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Cada um desses erros é um degrau que você desce sozinho na cabeça dela. Reconheça pra parar hoje:
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
    </Section>
  );
}

/* ============================================================
   Q5 — De quem é a culpa por eu ainda não ter isso?
   ============================================================ */
function Blame() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-8 md:p-16">
        <GlowingOrb className="right-1/2 top-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 bg-primary/20" />

        <div className="relative mx-auto max-w-3xl text-center">
          <SectionEyebrow>De quem é a culpa</SectionEyebrow>
          <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
            A culpa <span className="italic text-primary">não é sua</span>. Mas a decisão de mudar isso, é.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ninguém te ensinou como se comportar depois de um término. Você aprendeu a correr atrás, insistir, explicar e provar que ainda ama. Exatamente o que faz ela perder o interesse.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Enquanto você depender do seu emocional pra decidir o que mandar, vai continuar afastando ela. Você precisa de um passo a passo pronto — e é isso que o método entrega.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   Q6 — Por que eu preciso agir agora?
   ============================================================ */
function ActNow() {
  const clocks = [
    {
      icon: <Hourglass className="h-6 w-6" />,
      title: "Cada dia parado é um dia dela se acostumando com sua ausência",
      text: "O que hoje ainda dói nela, em 2 semanas vira indiferença. E indiferença é o ponto sem retorno.",
    },
    {
      icon: <HeartCrack className="h-6 w-6" />,
      title: "Alguém está preenchendo o espaço que você deixou",
      text: "Amiga, colega, ex antigo, alguém do trabalho. Não precisa ser romance ainda — basta a atenção.",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Cada mensagem errada agora custa semanas de recuperação",
      text: "Você pode piorar tudo em 30 segundos. Ou pode seguir o script certo hoje mesmo.",
    },
  ];

  return (
    <Section className="bg-surface/40">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Por que agir agora</SectionEyebrow>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          A janela para reverter isso não fica aberta pra sempre.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {clocks.map((c) => (
          <div key={c.title} className="surface-card rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {c.icon}
            </div>
            <h3 className="font-heading mt-5 text-xl font-semibold text-foreground">
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">Não vou esperar mais</CTAButton>
      </div>
    </Section>
  );
}

/* ============================================================
   Q7 — Por que eu devo confiar nisso?
   ============================================================ */
function Trust() {
  const pillars = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "7 dias de garantia incondicional",
      text: "Aplicou e não sentiu diferença? Devolvemos 100% do valor. Sem pergunta, sem enrolação.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Método testado em casos reais",
      text: "Não é teoria de coach. Cada mensagem e cada story foi ajustado em cima de resultados de verdade.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Pagamento seguro pela Kiwify",
      text: "Compra protegida, acesso imediato no seu e-mail e nota fiscal automática.",
    },
  ];

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Por que confiar</SectionEyebrow>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          O risco é todo nosso. O resultado é todo seu.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="surface-raised rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {p.icon}
            </div>
            <h3 className="font-heading mt-5 text-xl font-semibold text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   Q8 — Como isso funciona?
   ============================================================ */
function HowItWorks() {
  const phases = [
    { days: "Dia 1–3", title: "Controle", text: "Pare de reagir no impulso e proteja o pouco de valor percebido que ainda restou." },
    { days: "Dia 4–7", title: "Estabilização", text: "Silêncio estratégico, rotina reconstruída e mentalidade firme pra ela sentir sua falta." },
    { days: "Dia 8–12", title: "Postura e presença", text: "Stories, mensagens e atitudes que reposicionam você na cabeça dela como opção desejável." },
    { days: "Dia 13–15", title: "Reaproximação", text: "Momento certo, tom certo, mensagem certa. Sem se humilhar, sem forçar." },
  ];

  const features = [
    { icon: <MessageSquare className="h-5 w-5" />, title: "5 mensagens secretas prontas" },
    { icon: <Smartphone className="h-5 w-5" />, title: "3 modelos de stories estratégicos" },
    { icon: <Calendar className="h-5 w-5" />, title: "Tarefa diária pelos 15 dias" },
    { icon: <Target className="h-5 w-5" />, title: "Regras de comportamento por fase" },
    { icon: <CheckCircle className="h-5 w-5" />, title: "Checklist de reaproximação segura" },
  ];

  return (
    <Section id="como-funciona" className="bg-surface/30">
      <div className="text-center">
        <SectionEyebrow>Como funciona</SectionEyebrow>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          15 dias, 4 fases, uma tarefa clara por dia.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Você não precisa pensar no que fazer. Abre, executa, avança. É isso.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, index) => (
          <div key={phase.days} className="relative surface-card rounded-2xl p-6">
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

      <div className="mt-14 rounded-2xl border border-border bg-surface p-6 md:p-8">
        <p className="text-sm font-bold tracking-widest text-primary uppercase">
          Dentro do método você recebe
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="flex items-center gap-3 text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {f.icon}
              </span>
              <span className="text-sm md:text-base">{f.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ============================================================
   Q9 — Como eu faço para começar? (Pricing)
   ============================================================ */
function Pricing() {
  const includes = [
    "Plano diário completo dos 15 dias",
    "5 mensagens prontas para os momentos-chave",
    "3 modelos de stories que fazem ela olhar duas vezes",
    "Guia de postura e reaproximação sem se humilhar",
    "Bônus: o que NUNCA fazer nos primeiros 7 dias",
  ];

  const steps = [
    "Clica no botão abaixo",
    "Paga R$ 17,90 com segurança pela Kiwify",
    "Recebe o acesso no seu e-mail em menos de 5 minutos",
    "Começa o Dia 1 hoje mesmo",
  ];

  return (
    <Section id="oferta" className="relative overflow-hidden bg-surface/40">
      <GlowingOrb className="left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-primary/25" />

      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <SectionEyebrow>Como começar agora</SectionEyebrow>
          <h2 className="font-heading mt-5 text-4xl font-semibold text-foreground md:text-5xl">
            4 passos entre você e o Dia 1.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Menos que uma pizza. Mais barato que a próxima mensagem errada que você vai mandar.
          </p>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="text-sm text-foreground">{s}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 relative rounded-3xl border border-primary/30 bg-gradient-to-b from-surface-raised to-surface p-8 md:p-12 shadow-[0_0_60px_-20px_var(--color-glow)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-widest text-primary-foreground uppercase">
              <Flame className="h-3.5 w-3.5" /> 63% OFF hoje
            </span>
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground line-through">
              De R$ 47,90
            </p>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="font-heading text-3xl font-bold text-primary">R$</span>
              <span className="font-heading text-7xl font-bold text-primary md:text-8xl">17</span>
              <span className="font-heading text-3xl font-bold text-primary">,90</span>
            </div>
            <p className="mt-3 text-base text-muted-foreground">
              à vista <span className="text-foreground font-semibold">ou 4x de R$ 4,97</span> no cartão
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CTAButton size="lg" className="w-full" href="https://pay.kiwify.com.br/Iqgobyg">
              QUERO ACESSO AGORA POR R$ 17,90
            </CTAButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-primary" /> Pagamento seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-primary" /> 7 dias de garantia
            </span>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Eye className="h-4 w-4 text-primary" />
          Enquanto você lê isso, outro cara já mandou mensagem pra ela.
        </p>
      </div>
    </Section>
  );
}

/* ============================================================
   Q10 — O que eu perco se não agir agora?
   ============================================================ */
function FinalCTA() {
  const losses = [
    "Perde ela para o próximo cara que aparecer na atenção dela.",
    "Perde o pouco de valor que ainda restou na sua imagem.",
    "Perde meses tentando consertar sozinho o que dá pra reverter em 15 dias.",
    "Perde a chance de olhar pra trás e saber que pelo menos você tentou do jeito certo.",
  ];

  return (
    <Section id="decisao" className="relative overflow-hidden">
      <GlowingOrb className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/25" />

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-8 text-center md:p-16">
        <SectionEyebrow>O que você perde se não agir</SectionEyebrow>
        <h2 className="font-heading mt-6 text-4xl font-semibold text-foreground md:text-6xl">
          Se você continuar não atendendo as expectativas dela, outro cara vai fazer isso.
        </h2>
        <p className="mt-6 text-xl font-medium text-muted-foreground md:text-2xl">
          Você vai mesmo deixar isso acontecer por R$ 17,90?
        </p>

        <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left">
          {losses.map((l) => (
            <li key={l} className="flex items-start gap-3 text-foreground">
              <HeartCrack className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-base md:text-lg">{l}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <CTAButton size="lg" className="w-full sm:w-auto" href="https://pay.kiwify.com.br/Iqgobyg">
            Não! QUERO RECONQUISTAR MINHA EX
          </CTAButton>
        </div>

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
      <WhatYouGain />
      <Proof />
      <WhatBlocks />
      <Blame />
      <ActNow />
      <Trust />
      <HowItWorks />
      <FinalCTA />
      <Pricing />
      <Footer />
    </main>
  );
}
