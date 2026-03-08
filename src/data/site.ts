export const meta = {
  defaultTitle: 'Viajer@s de 11 | Excursiones de grado 11',
  defaultDescription:
    'Excursiones, planes y experiencias inolvidables para estudiantes de grado 11.',
  homeTitle: 'Viajer@s de 11 | Excursiones y planes para grado 11',
  homeDescription:
    'Organizamos excursiones y planes de grado 11 con seguridad, acompañamiento y experiencias inolvidables.',
  aboutTitle: 'Quiénes somos | Viajer@s de 11',
  aboutDescription:
    'Conoce al equipo que organiza experiencias de grado 11 con acompañamiento, seguridad y logística completa.',
  plansTitle: 'Planes | Viajer@s de 11',
  plansDescription:
    'Descubre los planes de excursiones y experiencias diseñados para estudiantes de grado 11.',
  experiencesTitle: 'Experiencias | Viajer@s de 11',
  experiencesDescription:
    'Momentos y actividades que convierten el viaje de grado 11 en recuerdos inolvidables.',
  ogImage: '/assets/logo-viajerosde11.svg',
};

export const site = {
  name: 'Viajer@s de 11',
  tagline: 'Excursiones de grado 11',
  year: 2026,
  whatsapp: {
    number: '573113496199',
    numberDisplay: '+57 3113496199',
    messages: {
      info: 'Hola Viajer@s de 11, quiero información sobre las excursiones de grado 11.',
      meeting: 'Hola Viajer@s de 11, quiero agendar una reunión.',
      quote: 'Hola Viajer@s de 11, quiero cotizar un plan.',
    },
  },
};

const whatsappBase = `https://wa.me/${site.whatsapp.number}`;
const whatsappLink = (message?: string) =>
  message ? `${whatsappBase}?text=${encodeURIComponent(message)}` : whatsappBase;

export const links = {
  whatsapp: {
    base: whatsappBase,
    info: whatsappLink(site.whatsapp.messages.info),
    meeting: whatsappLink(site.whatsapp.messages.meeting),
    quote: whatsappLink(site.whatsapp.messages.quote),
  },
};

export const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/planes', label: 'Planes' },
  { href: '/experiencias', label: 'Experiencias' },
];

export const header = {
  menuLabel: 'Menú',
  ctaLabel: 'Escríbenos',
};

export const hero = {
  badge: site.tagline,
  title: 'Viajes que se viven una sola vez, diseñados para tu promoción.',
  description:
    'Somos una agencia especializada en experiencias para estudiantes de grado 11. Creamos momentos seguros, emocionantes y llenos de recuerdos inolvidables.',
  ctas: {
    primary: {
      label: 'Agenda tu reunión',
      href: links.whatsapp.meeting,
    },
    secondary: {
      label: 'Ver planes',
      href: '/planes',
    },
  },
  highlights: [
    { label: 'Acompañamiento completo', color: 'var(--color-mint)' },
    { label: 'Seguridad 24/7', color: 'var(--color-sun)' },
    { label: 'Planes personalizados', color: 'var(--color-ocean)' },
  ],
  card: {
    title: 'Agenda tu reunión',
    year: site.year,
    heroLabel: 'Foto principal',
    heroTitle: 'El plan que tu curso merece',
    features: [
      {
        title: 'Seguridad',
        text: 'Protocolos claros, aliados confiables y acompañamiento experto.',
      },
      {
        title: 'Acompañamiento',
        text: 'Coordinación constante con docentes y padres de familia.',
      },
    ],
    prompt: {
      title: '¿Listos para empezar?',
      text: 'Escríbenos y recibe una propuesta en menos de 24 horas.',
      ctaLabel: 'Ir a WhatsApp',
      ctaHref: links.whatsapp.base,
    },
  },
};

export const about = {
  video: {
    title: 'Conócenos en 45 segundos',
    badge: 'Video',
    description:
      'Te contamos cómo organizamos experiencias seguras, creativas y memorables para tu promoción.',
    playSymbol: '▶',
  },
  kicker: 'Quiénes somos',
  title: 'Un equipo que transforma la última etapa escolar en un viaje épico.',
  description:
    'En Viajer@s de 11 coordinamos experiencias a la medida: excursiones, campamentos, playas y celebraciones con logística, transporte, alimentación y acompañamiento en un solo paquete.',
  stats: [
    { value: '15+', label: 'Colegios aliados', color: 'var(--color-coral)' },
    { value: '100%', label: 'Acompañamiento total', color: 'var(--color-ocean)' },
    { value: '+350', label: 'Momentos inolvidables', color: 'var(--color-mint)' },
  ],
  highlight: {
    title: 'Viajes seguros y confiables',
    description:
      'Coordinamos protocolos de seguridad, seguros y acompañantes certificados para que todo el curso disfrute con tranquilidad.',
  },
};

export const plans = {
  kicker: 'Planes',
  title: 'Planes flexibles para cada presupuesto y estilo de curso.',
  cta: {
    label: 'Cotizar plan',
    href: links.whatsapp.quote,
  },
  cards: [
    {
      label: 'Plan Playa',
      labelColor: 'var(--color-mint)',
      title: 'San Andrés',
      description: 'Plan aéreo con experiencia de playa para promociones de grado 11.',
      planDescription:
        'Incluye itinerario turístico, tiempos libres y acompañamiento durante toda la estadía.',
      features: ['Vuelos ida y regreso', 'Hospedaje', 'Coordinador de grupo'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/san-andres-4-dias-3-noches.pdf',
      },
    },
    {
      label: 'Plan Playa',
      labelColor: 'var(--color-mint)',
      title: 'Santa Marta en avión',
      description:
        'Plan corto para vivir playa, integración y actividades recreativas.',
      planDescription:
        'Ideal para grupos que buscan una salida con vuelo y una logística práctica.',
      features: ['Tiquetes aéreos', 'Hotel y alimentación', 'Acompañamiento constante'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/santa-marta-en-avion-4-dias-3-noches.pdf',
      },
    },
    {
      label: 'Plan Caribe',
      labelColor: 'var(--color-sun)',
      title: 'Cartagena en avión',
      description:
        'Experiencia en Cartagena con enfoque en diversión y actividades grupales.',
      planDescription:
        'Recomendado para promociones que quieren mar, ciudad y buena logística en pocos días.',
      features: ['Vuelos ida y regreso', 'Alojamiento', 'Itinerario organizado'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/cartagena-en-avion-4-dias-3-noches.pdf',
      },
    },
    {
      label: 'Plan Naturaleza',
      labelColor: 'var(--color-ocean)',
      title: 'Eje Cafetero',
      description:
        'Plan para cursos que buscan aventura, paisaje y actividades de integración.',
      planDescription:
        'Combina recorridos turísticos y espacios de convivencia para toda la promoción.',
      features: ['Transporte y traslados', 'Hospedaje', 'Actividades guiadas'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/eje-cafetero-4-dias-3-noches.pdf',
      },
    },
    {
      label: 'Plan Aventura',
      labelColor: 'var(--color-coral)',
      title: 'San Gil',
      description:
        'Plan de aventura para promociones que quieren adrenalina y trabajo en equipo.',
      planDescription:
        'Incluye experiencias al aire libre con acompañamiento y logística para estudiantes.',
      features: ['Transporte', 'Hospedaje', 'Actividades de aventura'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/san-gil-4-dias-3-noches.pdf',
      },
    },
    {
      label: 'Plan Full Fest',
      labelColor: 'var(--color-coral)',
      title: 'Santa Marta + Cartagena en avión',
      description:
        'Plan combinado para promociones que quieren más tiempo y dos destinos de playa.',
      planDescription:
        'Propuesta premium con experiencia extendida, actividades y acompañamiento completo.',
      features: ['Vuelos internos del plan', 'Hospedaje', 'Logística integral'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/santa-marta-cartagena-en-avion-5-dias-4-noches.pdf',
      },
    },
    {
      label: 'Plan Ruta Caribe',
      labelColor: 'var(--color-ocean)',
      title: 'Santa Marta + Cartagena en bus',
      description:
        'Plan terrestre para promociones que priorizan duración y recorrido completo.',
      planDescription:
        'Opción ideal para grupos grandes que desean vivir una experiencia amplia en el Caribe.',
      features: ['Transporte terrestre', 'Hospedaje', 'Acompañamiento de ruta'],
      note: 'Cotización personalizada',
      pdf: {
        label: 'Ver PDF del plan',
        href: '/planes/santa-marta-cartagena-7-dias-en-bus.pdf',
      },
    },
  ],
};

export const experiences = {
  kicker: 'Experiencias',
  title: 'Momentos diseñados para crear recuerdos inolvidables.',
  badge: 'Vive tu última aventura escolar',
  cards: [
    {
      title: 'Aventura',
      description: 'Rappel, caminatas y retos de confianza.',
      gradient: 'linear-gradient(130deg,#ffb020,#f46d4f)',
    },
    {
      title: 'Playa',
      description: 'Atardeceres, deportes acuáticos y descanso.',
      gradient: 'linear-gradient(130deg,#0b6ea8,#5cc6b0)',
    },
    {
      title: 'Fiestas',
      description: 'Eventos temáticos, DJs y shows especiales.',
      gradient: 'linear-gradient(130deg,#f46d4f,#ffb020)',
    },
    {
      title: 'Juegos',
      description: 'Dinámicas en equipo, retos y premios.',
      gradient: 'linear-gradient(130deg,#5cc6b0,#0b6ea8)',
    },
  ],
};

export const cta = {
  title: '¿Listos para el viaje de grado 11?',
  description: 'Agenda una reunión y recibe una propuesta personalizada para tu colegio.',
  primary: {
    label: 'Escríbenos por WhatsApp',
    href: links.whatsapp.base,
  },
  secondary: {
    label: 'Volver al inicio',
    href: '/',
  },
};

export const footer = {
  rights: 'Todos los derechos reservados.',
  tagline: 'Agencia de excursiones escolares',
  developer: {
    name: 'Miguel Ardila',
    url: 'https://github.com/miguel-ardila',
  },
  socials: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/viajeros_de11?igsh=cDEzZ294YXU5enE4&utm_source=qr',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@viajerosde11?_r=1&_t=ZS-93IcNFS0kyo',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/17NotUMRSv/?mibextid=wwXIfr',
    },
  ],
};
