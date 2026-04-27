export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: string[]; // Array of strings representing paragraphs
  author: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    id: "desk-stretches-posture",
    category: "Nutrition",
    title: "5 Desk Stretches for Better Posture (and Why They Matter)",
    excerpt: "Sitting for 8+ hours wreaks havoc on your spine. These 5 stretches take under 3 minutes and can transform your posture.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
    readTime: "4 min read",
    author: "Dr. Alexandra Mercer",
    date: "May 12, 2024",
    content: [
      "The corporate world often necessitates long hours at a desk, which can lead to significant postural issues, neck pain, and reduced energy. Modern research shows that 'sitting is the new smoking,' but the solution doesn't always require a standing desk or an hour at the gym.",
      "By incorporating brief 'movement snacks' throughout your day, you can reset your nervous system and realign your spine. The following five stretches are designed to be performed in a professional setting without requiring specialized equipment.",
      "1. The Seated Cat-Cow: This movement mobilizes the lumbar and thoracic spine. Place your hands on your knees. As you inhale, chest forward (Cow). As you exhale, round your back and tuck your chin (Cat).",
      "2. Doorway Pec Stretch: Tight chest muscles from typing pull the shoulders forward. Stand in a doorway, forearms on the frame, and gently step through until you feel a pull across your chest.",
      "3. The Chin Tuck: Simple but effective for 'tech neck.' Gently retract your head straight back, as if making a double chin, to strengthen deep neck flexors.",
      "Consistent application of these micro-movements will result in improved focus, reduced tension headaches, and better long-term spinal health."
    ]
  },
  {
    id: "executive-hiit-protocol",
    category: "Workouts",
    title: "The 30-Minute Executive HIIT Protocol",
    excerpt: "A science-backed high-intensity session designed for time-starved professionals. Maximum calorie burn, minimum time.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
    readTime: "6 min read",
    author: "Marcus Thorne",
    date: "June 05, 2024",
    content: [
      "For high-performing executives, time is the scarcest resource. Traditional hour-long gym sessions are often the first casualty of a demanding schedule. Enter High-Intensity Interval Training (HIIT)—specifically optimized for the physiological needs of the professional woman.",
      "Our 30-minute protocol focuses on compound movements that recruit multiple muscle groups, elevating the heart rate and inducing the 'Afterburn Effect' (EPOC), where your body continues to burn calories at a higher rate for hours post-workout.",
      "The Protocol: 5-minute dynamic warm-up, followed by 4 blocks of 4-minute intervals (45 seconds active, 15 seconds rest), and a 5-minute cooldown/mobility window.",
      "Focusing on strength-based HIIT rather than pure cardio ensures muscle retention while maximizing cardiovascular health. This isn't just about weight loss; it's about hormonal balance and mental resilience."
    ]
  }
];
