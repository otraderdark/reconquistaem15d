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
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {variant === "primary" && <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />}
      </a>
    );
  }

  return (
    <button
      onClick={onClick || scrollToCta}
      className={classes}
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

        <h1 className="font-heading mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-up">
          Faça sua ex voltar e te enxergar com desejo em apenas
          <br />
          <span className="text-primary italic">15 Dias</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up">
          Não é motivação. Não é coach. É um passo a passo com mensagens prontas, stories e postura testada em centenas de casos reais para você virar o jogo em 15 dias, sem se humilhar e sem depender de sorte.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up">
          <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">Começar agora</CTAButton>
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

function Problem() {
  const errors = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Mensagem no impulso",
      text: "Cada texto que você manda no calor da emoção é um empurrão na direção de outro cara.",
    },
    {
      icon: <Frown className="h-5 w-5" />,
      title: "Se humilhar",
      text: "Pedir, implorar e justificar só mostra que você não tem mais valor. E ela sente.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Stories forçados",
      text: "Postar de propósito para ela ver é desespero disfarçado. Ela percebe e perde o respeito.",
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
      title: "Deixar outro ocupar seu lugar",
      text: "Erros repetidos destroem o valor que ela via em você. E recuperar isso tem uma ordem certa.",
    },
  ];

  return (
    <Section className="bg-surface/50">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          O erro que custa caro
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Cada atitude errada que você tem agora é um passo que você dá para outro cara
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Enquanto você reage no emocional, ela observa. E quem não vê valor em você, começa a enxergar em outro.
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
        <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">Quero parar de errar</CTAButton>
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
            15 dias para você recuperar o controle e fazer ela querer voltar
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Sem teorias. Sem coach motivacional. Um método direto com mensagens, stories e atitudes para você parar de afastar e começar a aproximar.
          </p>
          <div className="mt-10">
            <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">Acessar o método</CTAButton>
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
          O passo a passo
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          15 dias para ela voltar a te enxergar diferente
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

function Objections() {
  const items = [
    {
      q: "O que faz isso ser diferente de tudo que já existe?",
      a: "Não é vídeo motivacional nem coach de macho alfa. É um script diário com mensagens, stories e reações prontas para cada momento crítico dos 15 dias. Você não precisa pensar, só executar.",
    },
    {
      q: "O que eu ganho com isso?",
      a: "Você deixa de ser ignorado, para de agir no impulso e volta a ser visto como o cara que ela um dia escolheu — com desejo, curiosidade e vontade de voltar.",
    },
    {
      q: "Como eu sei que isso realmente funciona?",
      a: "O método já foi aplicado por centenas de homens em situações piores que a sua: bloqueado, trocado, humilhado. Quem seguiu o passo a passo mudou a dinâmica em dias, não meses.",
    },
    {
      q: "O que está me impedindo de conseguir isso hoje?",
      a: "Os seus próprios erros no impulso: mensagens de madrugada, stories forçados, discussões, insistência. Cada um deles empurra ela para outro. O método corta isso na raiz.",
    },
    {
      q: "De quem é a culpa por eu ainda não ter isso?",
      a: "Ninguém te ensinou postura depois do término. Você aprendeu a correr atrás, insistir e se explicar — exatamente o que faz ela perder o interesse. A culpa não é sua, mas a decisão de mudar é.",
    },
    {
      q: "Por que eu preciso agir agora?",
      a: "Cada dia parado é um dia a mais que ela se acostuma com a sua ausência — ou pior, com a presença de outro. A janela para reverter isso não fica aberta para sempre.",
    },
    {
      q: "Por que eu devo confiar nisso?",
      a: "Porque o método é direto, testado e vem com 7 dias de garantia incondicional. Se aplicar e não sentir diferença, devolvemos 100% do valor. O risco é todo nosso.",
    },
    {
      q: "Como isso funciona?",
      a: "15 dias divididos em 4 fases: Controle, Estabilização, Postura e Reaproximação. Cada dia tem uma tarefa clara, com mensagens e stories prontos para copiar e adaptar.",
    },
    {
      q: "Como eu faço para começar?",
      a: "Clica no botão, paga R$ 17,90 e recebe o acesso imediato no seu e-mail. Em menos de 5 minutos você já está executando o Dia 1.",
    },
    {
      q: "O que eu perco se não agir agora?",
      a: "Perde ela para outro cara, perde o pouco de valor que ainda restou aos olhos dela e perde meses tentando consertar sozinho o que dá para reverter em 15 dias.",
    },
  ];

  return (
    <Section id="perguntas" className="bg-surface/40">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          O que passa na sua cabeça agora
        </span>
        <h2 className="font-heading mt-4 text-4xl font-semibold text-foreground md:text-5xl">
          Todas as dúvidas que você tem antes de agir — respondidas
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Leia com calma. Depois disso, ou você age, ou aceita ver ela com outro.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={item.q}
            className="surface-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/30"
          >
            <div className="flex items-start gap-3">
              <span className="font-heading text-2xl font-bold text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton size="lg" href="https://pay.kiwify.com.br/Iqgobyg">
          Chega de dúvida, quero começar
        </CTAButton>
      </div>
    </Section>
  );
}


function FinalCTA() {
  return (
    <Section id="decisao" className="relative overflow-hidden">
      <GlowingOrb className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/25" />

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-8 text-center md:p-16">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          Decisão
        </span>
        <h2 className="font-heading mt-6 text-4xl font-semibold text-foreground md:text-6xl">
          Se você continuar não atendendo as expectativas dela, outro cara vai fazer isso.
        </h2>
        <p className="mt-6 text-xl font-medium text-muted-foreground md:text-2xl">
          Você vai mesmo deixar isso acontecer?
        </p>

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


function Pricing() {
  const includes = [
    "Plano diário completo dos 15 dias",
    "5 mensagens prontas para os momentos-chave",
    "3 modelos de stories que fazem ela olhar duas vezes",
    "Guia de postura e reaproximação sem se humilhar",
    "Bônus: o que NUNCA fazer nos primeiros 7 dias",
  ];

  return (
    <Section id="oferta" className="relative overflow-hidden bg-surface/40">
      <GlowingOrb className="left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-primary/25" />

      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
            <Zap className="h-3.5 w-3.5" /> Oferta por tempo limitado
          </span>
          <h2 className="font-heading mt-5 text-4xl font-semibold text-foreground md:text-5xl">
            Enquanto você hesita, outro cara já está ocupando seu lugar.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Menos que uma pizza para parar de perder ela e ter um plano real para fazê-la voltar. Você decide.
          </p>
        </div>

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
          Pessoas estão vendo essa página agora. A vaga dela ainda é sua.
        </p>
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
      <Objections />
      <FinalCTA />
      <Pricing />
      <Footer />
    </main>
  );
}
