interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Services",
    learnMore: "Book a Session",
  },
  de: {
    heading: "Leistungen",
    learnMore: "Session buchen",
  },
  ru: {
    heading: "Направления",
    learnMore: "Записаться",
  },
}

const services = {
  en: [
    {
      icon: "✨",
      title: "Individual Sessions",
      description: "Personal photo sessions that reveal your unique character and style",
      details: "Studio or outdoor, 1-2 hours",
    },
    {
      icon: "🤰",
      title: "Maternity Photography",
      description: "Tender and elegant photos capturing the most beautiful period of your life",
      details: "Studio or home setting, gentle posing",
    },
    {
      icon: "💕",
      title: "Love Story",
      description: "Romantic sessions for couples — your love story told through images",
      details: "Outdoor locations, natural emotions",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family & Kids",
      description: "Lively, warm photos that capture the joy of being together",
      details: "Family sessions full of laughter and love",
    },
  ],
  de: [
    {
      icon: "✨",
      title: "Individuelle Sessions",
      description: "Persönliche Fotoshootings, die Ihren einzigartigen Charakter und Stil enthüllen",
      details: "Studio oder Outdoor, 1-2 Stunden",
    },
    {
      icon: "🤰",
      title: "Schwangerschaftsfotografie",
      description: "Zarte und elegante Fotos, die die schönste Zeit Ihres Lebens festhalten",
      details: "Studio oder Zuhause, sanftes Posing",
    },
    {
      icon: "💕",
      title: "Love Story",
      description: "Romantische Sessions für Paare — Ihre Liebesgeschichte in Bildern",
      details: "Outdoor-Locations, natürliche Emotionen",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Familie & Kinder",
      description: "Lebendige, warme Fotos, die die Freude des Zusammenseins einfangen",
      details: "Familiensessions voller Lachen und Liebe",
    },
  ],
  ru: [
    {
      icon: "✨",
      title: "Индивидуальные съёмки",
      description: "Персональные фотосессии, раскрывающие ваш уникальный характер и стиль",
      details: "Студия или улица, 1-2 часа",
    },
    {
      icon: "🤰",
      title: "Фотосессии для беременных",
      description: "Нежные и элегантные фотографии, запечатлевающие самый прекрасный период жизни",
      details: "Студия или домашняя обстановка",
    },
    {
      icon: "💕",
      title: "Love Story",
      description: "Романтические съёмки для пар — ваша история любви в фотографиях",
      details: "Живые локации, естественные эмоции",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Детские и семейные проекты",
      description: "Живые, тёплые фотографии, передающие радость быть вместе",
      details: "Семейные съёмки, полные смеха и любви",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const serviceList = services[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <span className="text-4xl mb-2 block">{service.icon}</span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{service.title}</h3>
                  <p className="text-charcoal/70 mb-1">{service.description}</p>
                  <small className="text-taupe">{service.details}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <a
                    href="#contact"
                    className="text-gold hover:text-gold/80 transition-colors text-sm font-medium"
                  >
                    {t.learnMore} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
