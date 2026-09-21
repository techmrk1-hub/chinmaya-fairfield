export const site = {
  name: "Chinmaya Mission Fairfield–New Haven",
  shortName: "Chinmaya Saraswati",
  tagline: "Chinmaya Saraswati Ashram & Devi Temple",
  motto: "Maximum happiness to maximum people for maximum time",
  purpose:
    "The purpose of Chinmaya Mission is to provide to individuals, from any background, the wisdom of Vedanta and practical means for spiritual growth and happiness, enabling them to become positive contributors to society.",
  gurudevQuote:
    "What you have is His gift to you, and what you do with what you have is your gift to Him.",
  gurudev: "Swami Chinmayananda",
  shaktiQuote:
    "Chinmaya Saraswati Ashram is the most powerful Shakti Peetam across the land.",
  acharya: "Swami Shantananda",
  boardEmail: "board@chinmayafairfield.org",
  volunteerEmail: "chinmaya.saraswathi@gmail.com",
  websevakEmail: "websevak@chinmayafairfield.org",
  donationContact: "sriki07@gmail.com",
  taxId: "27-3362680",
  facebook: "https://www.facebook.com/chinmayasaraswati/",
  amritUrl: "https://chinmaya75.org/amrit",
  gitaPanchamrit:
    "https://drive.google.com/file/d/1HQwntCyhhNJWAWQjbylQf-_QMRomVQdT/view",
  gitaChantingWest: "https://chinmayamissionwest.com/gita-chanting/",
  gitaRegistration: "https://bit.ly/2026CTGitaChantingRegistration",
  gitaSeva: "https://bit.ly/2026GitaYajnaSeva",
  gitaPotluck: "https://bit.ly/2026GitaPotluck",
  kumbhaForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSde4vx2VMC7MtP4FKlZXguGuW0-byNWxweo5NgPRWSlTMFe6w/viewform",
  heroFlyer: "/images/chinmaya-photo1.jpg",
  paypalHostedButtonId: "6R5ZJ7ZC3998Q",
  visitingAcharyaUrl: "http://www.chinmayanewyork.org/our-masters/our-acharya/",
  cmtcNote:
    "Fairfield Bala Vihar is conducted under the aegis of the Chinmaya Mission Tri-state Center, which maintains two ashrams: Kedar at Langhorne, PA and Vrindavan at Cranbury, NJ.",
};

export const locations = [
  {
    name: "Chinmaya Saraswati Ashram & Devi Temple",
    line1: "393 Derby Avenue",
    city: "Orange, CT 06477",
    note: "Five acres of rolling hills — a place for Vedanta, worship, and community.",
    maps: "https://maps.google.com/?q=393+Derby+Avenue+Orange+CT+06477",
  },
  {
    name: "Stamford Bala Vihar",
    line1: "One University Place",
    city: "Stamford, CT 06901",
    note: "Sunday classes at the University of Connecticut Stamford campus.",
    maps: "https://maps.google.com/?q=One+University+Place+Stamford+CT+06901",
  },
];

export const contacts = {
  office: "203-701-9117",
  officeHref: "tel:2037019117",
  priestCell: "203-675-0874",
  priestCellHref: "tel:2036750874",
  priest: "Sri Ravikiran Sharma",
};

export const hours = {
  weekdays: [
    { label: "Morning", time: "9:00 AM – 11:30 AM" },
    { label: "Evening", time: "5:30 PM – 8:00 PM" },
  ],
  weekends: [
    { label: "Morning", time: "9:30 AM – 12:30 PM" },
    { label: "Evening", time: "5:30 PM – 8:00 PM" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/bala-vihar",
    label: "Programs",
    children: [
      { href: "/bala-vihar", label: "Bala Vihar" },
      { href: "/bala-vihar/curriculum", label: "Curriculum" },
      { href: "/bala-vihar/schedule", label: "Class Schedule" },
      { href: "/bala-vihar/registration", label: "Registration" },
      { href: "/geeta-chanting", label: "Geeta Chanting Yajna" },
      { href: "/satsang", label: "Satsang" },
    ],
  },
  {
    href: "/temple",
    label: "Temple",
    children: [
      { href: "/temple", label: "Temple & Ashram" },
      { href: "/temple/deities", label: "Our Deities" },
      { href: "/temple/priest", label: "Our Priest" },
      { href: "/temple/directions", label: "Address & Directions" },
    ],
  },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const curriculum = [
  {
    grade: "KG",
    title: "Alphabet Safari",
    body: "Simple values such as aspiration, brotherhood, and cleanliness are taught through animal stories and coloring. Through hands-on activities, children learn that just because something is unseen does not mean it is not there — and so the mind must be trained with care.",
  },
  {
    grade: "1",
    title: "Bala Ramayana",
    body: "Children learn the story of the Ramayana and the values Sri Rama lived by. Coloring, drawing, and following Sri Rama’s journey inspire imagination and character.",
  },
  {
    grade: "2",
    title: "Sri Hanuman, The Super Superman",
    body: "“Have a backbone like a ruler and rule the world.” Children learn courage, strength, fearlessness, alertness, and eloquence from Hanumanji, study Hanuman Chalisa, and complete a project on Sri Hanuman’s backbone of values.",
  },
  {
    grade: "3",
    title: "Bala Bhagavatam",
    body: "Through stories of the avataras of Lord Vishnu, children learn to own their actions and to ask for what they need, not merely what they desire.",
  },
  {
    grade: "4",
    title: "Krishna Krishna Everywhere & My Twenty-four Teachers",
    body: "Canto ten and eleven of the Bhagavatam. Krishna lila stories teach sharing, self-discipline, and daily introspection. My Twenty-four Teachers shows how nature itself becomes a coach — patience from Mother Earth, steadfastness from mountains, concentration from the arrow-maker.",
  },
  {
    grade: "5",
    title: "Symbolism in Hinduism",
    body: "Why symbols matter, how many deities point to the one Lord who pervades all, and how these symbols teach a life of harmony, fulfillment, and happiness.",
  },
  {
    grade: "6",
    title: "India, The Sacred Land",
    body: "Why India is sacred: heritage, saints, and sages as treasure. What we learn from them, and how that wisdom supports a life of success.",
  },
  {
    grade: "7",
    title: "P.O. Box Mr. God & Key to Success",
    body: "Drawn from Tulasidasa’s Ramacaritamanasa. Where is the Omnipresent found? Each of us is His address. Key to Success teaches how a disciplined mind achieves happiness and peace.",
  },
  {
    grade: "8",
    title: "Yato Dharmah Tato Jayah",
    body: "Where there is Dharma, there is victory. Through the Mahabharata, character study, and the Law of Karma, students learn that we are the architects of our future. Year-long practices include a speech-vigilance chart and a Dharma thermostat of values.",
  },
  {
    grade: "9",
    title: "Hindu Culture",
    body: "How living by Hindu Sanskriti reduces stress. Hindu samskaras, their roots in the Vedas and Upanishads, and how they help accomplish the goal of life.",
  },
  {
    grade: "10–11",
    title: "Bhagavad Gita",
    body: "Chapters 1–9 in Grade 10 and 10–18 in Grade 11. Flowcharts and a logical sequence of the Gita’s message, using Holy Gita by Swami Chinmayananda.",
  },
  {
    grade: "12",
    title: "A Manual of Self-Unfoldment",
    body: "Swami Chinmayananda’s text on the Upanishads and the Gita. Across every grade the emphasis is the mind — these teachings tone the intellect the way a gym tones the body, integrating the personality for a journey to the Self.",
  },
];

export const orangeSchedule = [
  { time: "9:30 – 9:55 AM", item: "Assembly" },
  {
    time: "10:00 – 11:00 AM",
    item: "Bala Vihar class and Bhagavad Gita study group",
  },
  { time: "11:00 – 11:30 AM", item: "Gita chanting" },
  {
    time: "11:00 AM – 12:00 PM",
    item: "Waking Up to Your Potential (Bhaja Govindam) with Vivekji",
  },
];

export const stamfordSchedule = [
  {
    time: "9:25 – 9:55 AM",
    item: "Opening prayers, bhajan, aarti, announcements",
  },
  { time: "10:00 – 11:00 AM", item: "Bala Vihar / Satsang" },
  { time: "11:00 – 11:30 AM", item: "Gita chanting (all)" },
];

export const membershipBenefits = {
  children: [
    "Spiritual, educational, and cultural growth",
    "Bala Vihar classes for Pre-K through Grade 12",
    "Bhajans for Pre-K through Grade 12",
    "Geeta Chanting class and competition",
    "Celebration of Hindu festivals",
    "Holi Mela, Annual Day, and other gatherings",
  ],
  adults: [
    "Satsang and bhajan on the same Sunday schedule",
    "Vedanta study groups",
    "Geeta Chanting class, competition, and Geeta Jnana Yajna",
    "Free or reduced admission to celebrations",
  ],
};

export const matchingCompanies = [
  "Alexion",
  "BNY Mellon",
  "Microsoft",
  "NASDAQ",
  "Salesforce",
  "Sikorsky / Lockheed Martin",
  "Synchrony",
  "UBS",
  "Unilever",
];

export const deities = [
  {
    name: "Saraswati Mata",
    role: "Pradhana murti · Tri-mata",
    body: "Saraswati Mata is the main deity, consecrated in July 2014 by Swami Tejomayananda, worldwide head of Chinmaya Mission. Swamiji also inaugurated Chinmaya Saraswati Ashram on five acres of serene land in Orange, Connecticut. She is accompanied by Lakshmi Devi and Durga Mata — the presence of tri-mata.",
  },
  {
    name: "Lakshmi Devi & Durga Mata",
    role: "Tri-mata",
    body: "Together with Saraswati Mata, Lakshmi Devi and Durga Mata complete the shrine’s tri-mata. In the words of Acharya Swami Shantananda, this is a great place for Sanatana Dharma, spiritual growth, and devotional prayer.",
  },
  {
    name: "Shiva Linga",
    role: "Swayambhu Narmada linga",
    body: "The ever-compassionate Lord, though formless, takes a name and form for devotees. Swayambhu Shiva lingas formed on the bed of the sacred Narmada are among the most revered. Chinmaya Saraswati Temple is blessed with one such linga.",
  },
  {
    name: "Hanuman Ji",
    role: "Pratishthapana July 2016",
    body: "Hanuman murti pratishthapana was celebrated in July 2016 under the auspices of Swami Swaroopananda, with a pravachan on Sankat Mochan. The consecration was offered in the full glory of Hanumanji.",
  },
];

export const resources = [
  {
    title: "Geeta Chanting Chapter 17 — English",
    href: "https://chinmayamissionwest.com/gita-chanting/",
    group: "Geeta Chanting",
  },
  {
    title: "Geeta Chanting Chapter 17 — Sanskrit",
    href: "https://chinmayamissionwest.com/gita-chanting/",
    group: "Geeta Chanting",
  },
  {
    title: "Online learning tool — shlokas 01–10",
    href: "https://chinmayamissionwest.com/gita-chanting/",
    group: "Geeta Chanting",
  },
  {
    title: "Online learning tool — shlokas 11–20",
    href: "https://chinmayamissionwest.com/gita-chanting/",
    group: "Geeta Chanting",
  },
  {
    title: "Online learning tool — shlokas 21–28",
    href: "https://chinmayamissionwest.com/gita-chanting/",
    group: "Geeta Chanting",
  },
  {
    title: "Chinmaya Mission West — Gita Chanting",
    href: "https://chinmayamissionwest.com/gita-chanting/",
    group: "Geeta Chanting",
  },
  {
    title: "Gita Panchamrit — five verses selected by Pujya Guruji",
    href: "https://drive.google.com/file/d/1HQwntCyhhNJWAWQjbylQf-_QMRomVQdT/view",
    group: "Study",
  },
  {
    title: "Chinmaya Amrit Mahotsav — 75 years",
    href: "https://chinmaya75.org/amrit",
    group: "Study",
  },
];

export const gallery = [
  {
    src: "/images/temple-full.jpg",
    alt: "Chinmaya Saraswati Ashram on rolling hills in Orange, Connecticut",
    caption: "Ashram grounds",
  },
  {
    src: "/images/temple.jpg",
    alt: "Chinmaya Saraswati Ashram landscape",
    caption: "Five acres in Orange",
  },
  {
    src: "/images/priest.jpg",
    alt: "Priest Mahankali Ravikiran Sharma",
    caption: "Sri Ravikiran Sharma",
  },
  {
    src: "/images/gurudev-full.jpg",
    alt: "Pujya Gurudev Swami Chinmayananda",
    caption: "Pujya Gurudev",
  },
  {
    src: "/images/kumbhabhishekam.jpg",
    alt: "Kumbhabhishekam 2026 anniversary flyer",
    caption: "Kumbhabhishekam 2026",
  },
  {
    src: "/images/bala-vihar-flyer.jpg",
    alt: "Bala Vihar 2026-27 session flyer",
    caption: "Bala Vihar 2026–27",
  },
  {
    src: "/images/gita-flyer.jpg",
    alt: "2026 Geeta Chanting Yajna flyer",
    caption: "Geeta Chanting Yajna",
  },
  {
    src: "/images/amrit-75.jpg",
    alt: "Chinmaya Amrit Mahotsav 75 years",
    caption: "Amrit Mahotsav",
  },
];
