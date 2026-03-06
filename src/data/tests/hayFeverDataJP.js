export const hayFeverDataJP = {
  id: "hayFever",
  title: "春の宿命！あなたの「花粉症サバイバル」診断",
  subTitle: "鼻水、目のかゆみ… 今年もやってきた強敵。あなたの現在の戦闘力（耐性）は？",
  relatedPostUrl: "https://zakkarank.com/spring-detox-cafe-recipes", // 일본 메인 사이트의 화분증 가이드 연결
  isReady: true,
  mainImg: "/images/hayFever-main.jpg",
  questions: [
    {
      q: "朝、目覚めた瞬間に一番に感じることは？",
      img: "/images/hayFever1.jpg",
      a: [
        { text: "「あぁ、今日も目が開かない…」目のかゆみで絶望する 😭", type: "EYE" },
        { text: "「クシュン！」朝一番の先制攻撃（くしゃみ）が出る 🤧", type: "NOSE" }
      ]
    },
    {
      q: "外出する時のあなたの装備はどっち？",
      img: "/images/hayFever2.jpg",
      a: [
        { text: "マスクにメガネ、帽子まで！もはや完全防備の重装兵 🛡️", type: "DEFENSE" },
        { text: "ティッシュさえあれば、素手で戦える（？） ✊", type: "SURVIVOR" }
      ]
    },
    {
      q: "満開の桜並木を見た時の正直な気持ちは？",
      img: "/images/hayFever3.jpg",
      a: [
        { text: "綺麗だなぁ…（でも鼻がムズムズして集中できない） 🌸", type: "NOSE" },
        { text: "ごめん、今はただの『花粉の爆탄』にしか見えない 💣", type: "EYE" }
      ]
    },
    {
      q: "一番の贅沢、どっちか選べるなら？",
      img: "/images/hayFever4.jpg",
      a: [
        { text: "目を取り出して丸洗いしたい！ 🚿", type: "EYE" },
        { text: "鼻の中にフィルターを埋め込みたい！ 👃", type: "NOSE" }
      ]
    },
    {
      q: "花粉症のない世界に行けるとしたら…？",
      img: "/images/hayFever5.jpg",
      a: [
        { text: "全財産をはたいてでも移住したい ✈️", type: "DEFENSE" },
        { text: "今の対策グッズでなんとか乗り切ってみせる 🥊", type: "SURVIVOR" }
      ]
    }
  ],
  results: {
    EYE: {
      name: "涙が止まらない「悲劇のヒロイン」級",
      img: "/images/hayFever01.jpg",
      desc: "目のかゆみが限界のあなた。今は無理せず、目を休めることが最優先です！冷たいアイマスクでリフレッシュして、自分をたっぷり甘やかしてあげてくださいね。大丈夫、春は必ず（花粉と共に）過ぎ去ります。",
      ctaText: "疲れた目を癒やす温冷アイマスクを見る",
      affiliateLink: "https://www.amazon.co.jp/s?k=アイマスク+冷やす"
    },
    NOSE: {
      name: "くしゃみ連発「人間噴水」級",
      img: "/images/hayFever02.jpg",
      desc: "鼻水が止まらず、ティッシュが手放せないあなた。鼻の下がヒリヒリしていませんか？高級ティッシュや鼻腔ケアアイテムは、この時期のあなたへの『投資』です。呼吸を楽にして、少しでも快適な夜を過ごしましょう！",
      ctaText: "鼻に優しいプレミアムティッシュを見る",
      affiliateLink: "https://www.amazon.co.jp/s?k=高級ティッシュ"
    },
    DEFENSE: {
      name: "防御力MAX「花粉シールド」級",
      img: "/images/hayFever03.jpg",
      desc: "徹底した対策で花粉を寄せ付けないプロフェッショナル！でも、その緊張感で心まで疲れていませんか？お家の中だけでも、空気清浄機とアロマでリラックスできる『聖域』を作ってみてください。",
      ctaText: "強力な花粉対策！空気清浄機ランキング",
      affiliateLink: "https://www.amazon.co.jp/s?k=空気清浄機+花粉"
    },
    SURVIVOR: {
      name: "奇跡の根性「花粉共存」級",
      img: "/images/hayFever04.jpg",
      desc: "辛いけれど、どこか達観しているあなた。でも、我慢しすぎは禁物です！最新のサプリや対策スプレーを取り入れるだけで、世界がもっと明るく見えるかもしれません。自分を労わることを忘れないでくださいね。",
      ctaText: "シュッとするだけ！最新花粉ガードスプレー",
      affiliateLink: "https://www.amazon.co.jp/s?k=花粉ガードスプレー"
    }
  }
};