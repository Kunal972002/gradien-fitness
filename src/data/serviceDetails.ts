import { Dumbbell, Leaf, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  label: string;
  title: string;
  titleAccent: string;
  heroDescription: string;
  features: { title: string; description: string }[];
  whatToExpect: { question: string; answer: string }[];
  pullQuote: { text: string; author: string; role: string };
  ctaHeadline: string;
  ctaDescription: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "executive-physical-conditioning",
    icon: Dumbbell,
    iconBg: "bg-emerald-light",
    iconColor: "text-emerald",
    accentColor: "emerald",
    label: "The Workout Pillar",
    title: "Executive Physical",
    titleAccent: "Conditioning",
    heroDescription:
      "Your body is the engine behind every decision you make. We build personalized, 1-on-1 exercise protocols around your corporate schedule and physical baseline — so you walk into every meeting, pitch, and negotiation firing on all cylinders.",
    features: [
      {
        title: "Schedule-First Programming",
        description:
          "Your training plan adapts to your calendar, not the other way around. Early morning flights? Late board meetings? We design micro-sessions and full sessions that slot into the gaps without adding stress.",
      },
      {
        title: "Strength & Mobility Focus",
        description:
          "Forget aesthetic-only routines. We prioritize functional strength, posture correction from desk work, and joint mobility — the trifecta that prevents burnout and keeps you performing at your peak.",
      },
      {
        title: "Energy Optimization Protocols",
        description:
          "Every session is structured to boost your metabolic output for the hours that follow. You'll notice sharper focus in your afternoon meetings and more stamina for after-work commitments.",
      },
      {
        title: "Progress Tracking & Accountability",
        description:
          "Weekly check-ins with your coach, biometric tracking, and progressive overload ensure you're never plateauing. We treat your fitness like a quarterly business goal — with milestones and measurable results.",
      },
    ],
    whatToExpect: [
      {
        question: "How long are the sessions?",
        answer:
          "Each session is 45-55 minutes — precisely calibrated to deliver maximum physiological benefit without eating into your workday. We respect your time like we respect our methodology.",
      },
      {
        question: "I haven't trained in months. Can I still start?",
        answer:
          "Absolutely. Most of our members hadn't touched a gym in over a year when they joined. Your program starts at your actual baseline — not where you think you should be. We build from there, progressively and safely.",
      },
      {
        question: "What equipment or space do I need?",
        answer:
          "In-studio sessions use our premium Eleiko and Keiser equipment. For remote sessions, we design bodyweight and minimal-equipment protocols that work in a hotel room, home office, or even a conference room.",
      },
    ],
    pullQuote: {
      text: "After 8 weeks, I stopped dreading Monday mornings. I had the energy to lead a 3-hour strategy session and still make my daughter's recital. That's what this program gave me.",
      author: "Sarah Chen",
      role: "VP of Operations, Meridian Capital",
    },
    ctaHeadline: "Ready to train like the executive you are?",
    ctaDescription:
      "Book a complimentary assessment call. We'll discuss your schedule, your goals, and build a roadmap that fits your life — not the other way around.",
  },
  {
    slug: "strategic-nutrition",
    icon: Leaf,
    iconBg: "bg-citrus/15",
    iconColor: "text-citrus-hover",
    accentColor: "citrus",
    label: "The Nutrition Pillar",
    title: "Strategic Nutrition",
    titleAccent: "& Fuel",
    heroDescription:
      "Generic diet plans were designed for generic lives. You don't have one. Our nutrition consultancy is tailored to your hormonal cycle, stress load, travel schedule, and cognitive demands — because what fuels a CEO is different from what fuels a calorie counter.",
    features: [
      {
        title: "Cycle-Synced Nutrition",
        description:
          "Your energy needs shift throughout the month. We map your macros to your hormonal cycle — adjusting carb timing, protein targets, and micronutrient focus so you feel consistent, not constantly fighting cravings.",
      },
      {
        title: "Stress-Adaptive Meal Engineering",
        description:
          "High-cortisol weeks get a different fuel strategy than recovery weeks. We engineer meals that buffer stress hormones, protect your gut health, and sustain cognitive performance when the pressure is on.",
      },
      {
        title: "Anti-Crash Afternoon Protocols",
        description:
          "That 2pm energy crash isn't inevitable — it's a nutrition design flaw. We restructure your mid-day intake with blood-sugar-stabilizing meals and strategic caffeine timing to keep you sharp until close of business.",
      },
      {
        title: "Travel & Dining Playbooks",
        description:
          "Client dinners, business lunches, airport terminals — we build practical playbooks for every scenario so you never have to choose between your nutrition goals and your professional obligations.",
      },
    ],
    whatToExpect: [
      {
        question: "Do I have to meal prep every Sunday?",
        answer:
          "No. We design strategies that work with your real life — whether that's a personal chef, meal delivery, or 5 minutes of assembly in the morning. The best nutrition plan is the one you'll actually follow.",
      },
      {
        question: "Will I have to give up wine and coffee?",
        answer:
          "We don't believe in deprivation. We believe in strategy. You'll learn when and how to enjoy both without undermining your goals. Most members are surprised by how little they need to change.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Most members report noticeably better energy and sleep quality within the first 10-14 days. Body composition changes typically become visible by week 4-6, depending on your starting point.",
      },
    ],
    pullQuote: {
      text: "I was skipping meals and running on espresso. Now I eat more than ever and I've dropped two dress sizes. The difference is what I eat and when — not how much I restrict.",
      author: "Rebecca Okonkwo",
      role: "CFO, Halo Health",
    },
    ctaHeadline: "Stop dieting. Start fueling.",
    ctaDescription:
      "Book a free nutrition strategy call. We'll analyze your current habits, identify the quick wins, and show you exactly how to eat for sustained executive performance.",
  },
  {
    slug: "inner-circle-network",
    icon: Shield,
    iconBg: "bg-foreground",
    iconColor: "text-white",
    accentColor: "emerald",
    label: "The Holistic Pillar",
    title: "The Inner Circle",
    titleAccent: "Network",
    heroDescription:
      "Fitness doesn't happen in a vacuum. Your complimentary access to a secure, private community of high-achieving women who understand the intersection of ambition, health, and leadership — because the boardroom can be lonely, but your wellness journey doesn't have to be.",
    features: [
      {
        title: "Expert-Led Hormonal Health Sessions",
        description:
          "Monthly masterclasses from endocrinologists, functional medicine practitioners, and women's health specialists covering perimenopause, thyroid optimization, and hormonal balance — topics your GP doesn't have time for.",
      },
      {
        title: "Corporate Burnout Navigation",
        description:
          "Facilitated roundtables with executive coaches and clinical psychologists. Learn evidence-based frameworks for managing stress, setting boundaries, and maintaining performance without sacrificing your wellbeing.",
      },
      {
        title: "Female Empowerment Circles",
        description:
          "Peer-led sessions where members share strategies, challenges, and wins in a strictly confidential environment. From negotiating raises to managing teams — this is your executive sounding board.",
      },
      {
        title: "Exclusive Member Events",
        description:
          "Quarterly retreats, wellness weekends, and networking dinners with guest speakers. These aren't just events — they're the relationships that elevate your career and your health simultaneously.",
      },
    ],
    whatToExpect: [
      {
        question: "Is this like a Facebook group?",
        answer:
          "Not remotely. This is a curated, private network hosted on a secure platform. Every member is vetted. Conversations are confidential. Think of it as a private members' club for executive wellness, not a social media feed.",
      },
      {
        question: "How much time does it require?",
        answer:
          "Zero mandatory commitments. Live sessions are recorded. Discussion threads are asynchronous. Most members engage 15-20 minutes per week — but the insights they gain save them hours of trial and error.",
      },
      {
        question: "Is this included with membership?",
        answer:
          "Yes. Inner Circle access is complimentary with all membership tiers. It's not an upsell — it's a core part of our holistic approach to executive wellness.",
      },
    ],
    pullQuote: {
      text: "I joined for the training. I stayed for the community. These women understand what it's like to carry the weight of a company on your shoulders. For the first time, I didn't feel like I had to explain myself.",
      author: "Diana Marchetti",
      role: "Managing Director, Vantage Partners",
    },
    ctaHeadline: "Join a community that gets it.",
    ctaDescription:
      "Your Inner Circle access begins the moment you become a member. Book a call to learn how the network can support your professional and personal goals.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
