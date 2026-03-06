export const homeBiohackEn = {
  id: "home-biohack",
  title: "The Ultimate Home Biohack Assessment",
  subTitle: "Is your living environment draining your longevity? Identify your primary environmental stressor and optimize your biological potential.",
  isReady: true,
  mainImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
  questions: [
    {
      q: "How does your energy level typically shift around 3:00 PM?",
      a: [
        { text: "My eyes feel strained and I experience a mental 'fog'.", type: "LIGHT" },
        { text: "I feel physically tight and need a deep breath of fresh air.", type: "AIR" },
        { text: "I'm overwhelmed by background noise or visual clutter.", type: "SENSORY" },
        { text: "I feel unusually drained, as if my 'battery' is leaking.", type: "BIO_E" }
      ]
    },
    {
      q: "What is your primary concern when you wake up in the morning?",
      a: [
        { text: "My room feels too bright or my sleep cycle felt 'off'.", type: "LIGHT" },
        { text: "I have a stuffy nose, dry throat, or skin irritation.", type: "AIR" },
        { text: "I was startled awake by noise and feel 'on edge'.", type: "SENSORY" },
        { text: "My body feels heavy and ungrounded, despite sleeping.", type: "BIO_E" }
      ]
    },
    {
      q: "Which 'Environmental Upgrade' sounds most appealing to you right now?",
      a: [
        { text: "Customizable smart lighting that follows the sun's rhythm.", type: "LIGHT" },
        { text: "A medical-grade HEPA filtration system for pure air.", type: "AIR" },
        { text: "Noise-canceling tech or a total sensory deprivation setup.", type: "SENSORY" },
        { text: "A grounding mat or EMF-shielding for the whole house.", type: "BIO_E" }
      ]
    },
    {
      q: "How do you interact with digital devices before bedtime?",
      a: [
        { text: "I use them until sleep, but my eyes always feel burning.", type: "LIGHT" },
        { text: "I use them in bed, but I'm more worried about the heat/dust.", type: "AIR" },
        { text: "The notifications and pings make my heart rate spike.", type: "SENSORY" },
        { text: "I'm concerned about the invisible EMF radiation near me.", type: "BIO_E" }
      ]
    },
    {
      q: "What kind of 'Escape' do you crave the most during a stressful week?",
      a: [
        { text: "A walk in natural sunlight to reset my inner clock.", type: "LIGHT" },
        { text: "A trip to the mountains for that crisp, oxygen-rich air.", type: "AIR" },
        { text: "A dark, silent room where I can't be reached by anyone.", type: "SENSORY" },
        { text: "Walking barefoot on the grass to feel 'connected' again.", type: "BIO_E" }
      ]
    }
  ],
  results: {
    LIGHT: {
      name: "The Circadian Warrior",
      img: "https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?w=600",
      desc: "Your primary bio-stresser is 'Junk Light'. Artificial blue light is disrupting your mitochondria and cortisol levels. By optimizing your light-dark cycle, you'll unlock unprecedented cognitive clarity and deeper REM sleep.",
      ctaText: "Shop Bio-Hack Lighting Solutions",
      affiliateLink: "https://www.amazon.com/s?k=circadian+lighting+blue+light+blocking"
    },
    AIR: {
      name: "The Pristine Breather",
      img: "https://images.unsplash.com/photo-1516550130565-3e28c8959663?w=600",
      desc: "Your biology is highly sensitive to VOCs and micro-particulates. 'Stale air' is the silent thief of your longevity. Implementing a multi-stage air purification strategy will revitalize your skin and immune system.",
      ctaText: "Explore Medical-Grade Air Purifiers",
      affiliateLink: "https://www.amazon.com/s?k=HEPA+H13+air+purifier+longevity"
    },
    SENSORY: {
      name: "The Sensory Minimalist",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
      desc: "Your nervous system is a high-precision instrument that is currently over-stimulated. Subtle noises and visual clutter are keeping your body in a 'fight or flight' state. You need sensory grounding to lower systemic inflammation.",
      ctaText: "Discover Sensory Grounding Tools",
      affiliateLink: "https://www.amazon.com/s?k=white+noise+machine+weighted+blanket"
    },
    BIO_E: {
      name: "The Bio-Electric Explorer",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
      desc: "You are highly sensitive to the invisible 'Electrosmog' and a lack of Earth connection. Your bio-electric field needs 'Grounding'. Reconnecting with the Earth's frequency will help reset your cellular energy production.",
      ctaText: "View Top-Rated Grounding Mats",
      affiliateLink: "https://www.amazon.com/s?k=earthing+grounding+mat+for+bed"
    }
  }
};