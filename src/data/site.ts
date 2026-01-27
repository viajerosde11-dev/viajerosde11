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
      label: 'Plan Aventura',
      labelColor: 'var(--color-sun)',
      title: 'Excursión de un día',
      description: 'Actividades al aire libre, retos en equipo y un cierre memorable.',
      features: ['Transporte ida y regreso', 'Refrigerio y almuerzo', 'Coordinador de grupo'],
      note: 'Cotización personalizada',
    },
    {
      label: 'Plan Playa',
      labelColor: 'var(--color-mint)',
      title: 'Escapada de fin de semana',
      description:
        'Sol, playa y diversión con actividades nocturnas y acompañamiento continuo.',
      features: ['Hospedaje seguro', 'Tour guiado', 'Seguro de asistencia'],
      note: 'Cotización personalizada',
    },
    {
      label: 'Plan Full Fest',
      labelColor: 'var(--color-coral)',
      title: 'Experiencia premium',
      description:
        'Todo incluido: múltiples destinos, eventos especiales y recuerdos para siempre.',
      features: ['Producción audiovisual', 'Kit de bienvenida', 'Logística 360°'],
      note: 'Cotización personalizada',
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
