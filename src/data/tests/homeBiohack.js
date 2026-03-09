export const homeBiohack = {
  id: "home-biohack",
  title: "The Ultimate Home Biohack Assessment",
  subTitle: "Is your living environment draining your longevity? Identify your primary environmental stressor and optimize your biological potential.",
  relatedPostUrl: "https://homebyseasonhub.com/5-hidden-biohacks-to-turn-your-home-into-a-longevity-hub", 
  isReady: true,
  mainImg: "/images/homeBiohack-main.jpg",
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
      img: "/images/homeBiohack01.jpg",
      desc: "Your primary bio-stresser is 'Junk Light'. Artificial blue light is disrupting your mitochondria and cortisol levels. By optimizing your light-dark cycle, you'll unlock unprecedented cognitive clarity and deeper REM sleep.",
      ctaText: "Shop Bio-Hack Lighting Solutions",
      affiliateLink: "https://www.amazon.com/Happy-Light-Therapy-Sun-Lamp/dp/B01IU9MMPI/ref=sr_1_7_sspa?crid=2CGUZ7DAC209U&dib=eyJ2IjoiMSJ9.WwJ_8PkZ4ok-0pr0GDl3soDfkoyYOUHdEi46SUMeUrRsl9y-r9cxkvc01EPml8n69v3NhsruibRx1C3wFG1MoMpYxIN7cd0Mrb8Z6FzlKtw.Dn8hykqN02kWiP_QWJ9j35054uVXS-Dhpuctmi9Dvoo&dib_tag=se&keywords=Circadian%2BLighting%3A%2BBeyond%2Bthe%2BLight%2BBulb&qid=1773036328&sprefix=circadian%2Blighting%2Bbeyond%2Bthe%2Blight%2Bbulb%2Caps%2C401&sr=8-7-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1"
    },
    AIR: {
      name: "The Pristine Breather",
      img: "/images/homeBiohack02.jpg",
      desc: "Your biology is highly sensitive to VOCs and micro-particulates. 'Stale air' is the silent thief of your longevity. Implementing a multi-stage air purification strategy will revitalize your skin and immune system.",
      ctaText: "Explore Medical-Grade Air Purifiers",
      affiliateLink: "https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM/ref=sr_1_3?crid=2I81SHROALYH0&dib=eyJ2IjoiMSJ9.kbKQm37brB-wH_mgF34UHd8HFkshWkZH76hfpW1g11eRlDZb1TbTh7ARULkyS_S-YVkQx8R0j4FyEy-d0ylwltiDk_aJJWK3ebdScgvnfbuPC04YEU39J1vIXUJssvOu-SULoHHXNXfRrGTk1_xMRQAlESZgd7ehn8a2w9W5cBDdFGPhrFEw8hsQNwvMDhuivb7gDDY-NuMRjW5vYHRaDA0-xTulJExw72rQIZTPWyI.Yurn_VLOxH0n6dSsRmliRNdyxvadX112k5XcSyN2O4E&dib_tag=se&keywords=Air%2BPurity&qid=1773037696&sprefix=air%2Bpurity%2Caps%2C351&sr=8-3&th=1"
    },
    SENSORY: {
      name: "The Sensory Minimalist",
      img: "/images/homeBiohack03.jpg",
      desc: "Your nervous system is a high-precision instrument that is currently over-stimulated. Subtle noises and visual clutter are keeping your body in a 'fight or flight' state. You need sensory grounding to lower systemic inflammation.",
      ctaText: "Discover Sensory Grounding Tools",
      affiliateLink: "https://www.amazon.com/Pushpeel-Sensory-Activity-Board-Silicone/dp/B0CRXCSLTX/ref=sxin_17_pa_sp_search_thematic_sspa?content-id=amzn1.sym.157815aa-47d5-4a63-b37d-108738de1fd0%3Aamzn1.sym.157815aa-47d5-4a63-b37d-108738de1fd0&crid=33LVE3LZWNMJF&cv_ct_cx=Sensory%2BGrounding&keywords=Sensory%2BGrounding&pd_rd_i=B0CRXCSLTX&pd_rd_r=d7368e99-a562-49f1-ae94-649b7cc476af&pd_rd_w=nEIyy&pd_rd_wg=u6Arb&pf_rd_p=157815aa-47d5-4a63-b37d-108738de1fd0&pf_rd_r=A2KWJ3P73YCKTB0A0AQ1&qid=1773037819&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=sensory%2Bgrounding%2Caps%2C409&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&aref=d15Ydq8vpg&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1"
    },
    BIO_E: {
      name: "The Bio-Electric Explorer",
      img: "/images/homeBiohack04.jpg",
      desc: "You are highly sensitive to the invisible 'Electrosmog' and a lack of Earth connection. Your bio-electric field needs 'Grounding'. Reconnecting with the Earth's frequency will help reset your cellular energy production.",
      ctaText: "View Top-Rated Grounding Mats",
      affiliateLink: "https://www.amazon.com/AmazonBasics-Cooling-Gel-Infused-CertiPUR-US-Certified/dp/B07SLNF1F2/ref=sr_1_1_ffob_sspa?crid=1XIKZ10VI1YME&dib=eyJ2IjoiMSJ9.lacvXq1FdEBIGFEtJMDD8LIlQTWjh8QjzFwDHvHENwJmvaJ1TJuIF5ZJtv0iuQZgkBvDoxeAMv_nN403qITnFIzW8xHuXr22o3KUKWAJITlF9MoWeRvV5EDbd0ZDqQo4XfBfFwpdUErtI8IMV-H3SyGnUKBA9pnAcwMud3fjm6U68V25-FnzaH7HQHeYMnafuETnyostATcGV_Bl6HEfLogFZkZ3V7kOFf85HH3LpFeBAv5bdRYteR7o1XS-4V4EGQd336xZoqMGZgFp-gPPtr5LhnH083X1hlIKPBQUrSo.839fBR4dSqxkjtMadbtHHH9vUiP286bZmMag60f9CN0&dib_tag=se&keywords=cooling%2Bmattress%2Btoppers&qid=1773038268&sprefix=cooling%2Bmattress%2Btoppers%2Caps%2C334&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    }
  }
};