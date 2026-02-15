interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "I believe that good photography is a combination of professionalism, inspiration, and human warmth. That's exactly how images are born that you want to look at again and again.",
      "My photographs don't just capture a moment — they convey emotions. Every smile, every glance, every touch becomes part of your story, preserved forever.",
      "I specialize in individual photo sessions, maternity shoots, Love Story, and family projects. Each session is a unique journey where we create images together that become family heirlooms.",
      "My approach is simple: I create a comfortable atmosphere where you can be yourself, and the camera captures the most sincere and beautiful moments of your life.",
    ],
  },
  de: {
    heading: "Über mich",
    paragraphs: [
      "Ich glaube, dass gute Fotografie eine Kombination aus Professionalität, Inspiration und menschlicher Wärme ist. Genau so entstehen Bilder, die man immer wieder anschauen möchte.",
      "Meine Fotos halten nicht nur einen Moment fest — sie vermitteln Emotionen. Jedes Lächeln, jeder Blick, jede Berührung wird Teil Ihrer Geschichte, für immer bewahrt.",
      "Ich spezialisiere mich auf individuelle Fotoshootings, Schwangerschaftsfotos, Love Story und Familienprojekte. Jede Session ist eine einzigartige Reise, auf der wir gemeinsam Bilder schaffen, die zu Familienerbstücken werden.",
      "Mein Ansatz ist einfach: Ich schaffe eine angenehme Atmosphäre, in der Sie ganz Sie selbst sein können, und die Kamera fängt die aufrichtigsten und schönsten Momente Ihres Lebens ein.",
    ],
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Я верю, что хорошая фотография — это сочетание профессионализма, вдохновения и человеческого тепла. Именно так рождаются кадры, которые хочется пересматривать снова и снова.",
      "Мои фотографии не просто фиксируют момент — они передают эмоции. Каждая улыбка, каждый взгляд, каждое прикосновение становятся частью вашей истории, сохранённой навсегда.",
      "Я специализируюсь на индивидуальных съёмках, фотосессиях для беременных, Love Story и семейных проектах. Каждая съёмка — это уникальное путешествие, где мы вместе создаём снимки, которые становятся семейными реликвиями.",
      "Мой подход прост: я создаю комфортную атмосферу, в которой вы можете быть собой, а камера запечатлеет самые искренние и красивые моменты вашей жизни.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
