import { ReactNode } from "react";
import {
  Flame,
  Users,
  Gift,
  Music,
  Dumbbell,
  Activity,
  Droplets,
  Snowflake,
  Heart,
  Timer,
  Sparkles,
  Trophy,
  Target,
  Zap,
} from "lucide-react";
import { createElement } from "react";

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ScheduleItem {
  day: string;
  time: string;
}

export interface TrainerInfo {
  name: string;
  experience: string;
}

export interface AmenityDetail {
  title: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  heroImage: string;
  gallery: string[];
  icon: ReactNode;
  color: string;
  features: FeatureItem[];
  benefits: string[];
  schedule: ScheduleItem[];
  trainer?: TrainerInfo;
}

export const amenitiesData: Record<string, AmenityDetail> = {
  "steam-bath": {
    title: "Steam Bath",
    tagline: "Relax, recover, and rejuvenate after your workout",
    category: "Recovery & Wellness",
    description: "Our premium steam bath facility offers a rejuvenating experience that helps you relax after an intense workout.",
    longDescription: "The steam room is designed with modern amenities and maintained at optimal temperatures for maximum benefit. Experience deep relaxation as the warm steam opens your pores, promotes detoxification, and helps your muscles recover faster. Our facilities are kept impeccably clean with separate areas for men and women.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800",
    ],
    icon: createElement(Droplets, { className: "w-5 h-5" }),
    color: "from-orange-500 to-amber-500",
    features: [
      { icon: createElement(Target, { className: "w-5 h-5" }), title: "Optimal Temperature", description: "Maintained at perfect heat levels" },
      { icon: createElement(Sparkles, { className: "w-5 h-5" }), title: "Eucalyptus Steam", description: "Aromatic wellness option" },
      { icon: createElement(Users, { className: "w-5 h-5" }), title: "Separate Facilities", description: "Privacy for all genders" },
      { icon: createElement(Timer, { className: "w-5 h-5" }), title: "Flexible Timing", description: "Pre and post-workout sessions" },
    ],
    benefits: [
      "Improves blood circulation",
      "Opens pores and cleanses skin",
      "Relieves muscle tension and soreness",
      "Promotes relaxation and stress relief",
      "Helps with respiratory conditions",
      "Aids in post-workout recovery",
    ],
    schedule: [
      { day: "Mon - Sat", time: "6:00 AM - 10:00 PM" },
      { day: "Sunday", time: "8:00 AM - 8:00 PM" },
    ],
  },
  "personal-trainers": {
    title: "Personal Trainers",
    tagline: "Expert guidance to achieve your fitness goals faster",
    category: "Training Services",
    description: "Our team of certified personal trainers are dedicated to helping you achieve your fitness goals.",
    longDescription: "With personalized workout plans, nutritional guidance, and constant motivation, you'll see results faster than ever. Our trainers have extensive experience in weight loss, muscle building, sports conditioning, and rehabilitation. Each session is tailored to your specific needs and fitness level.",
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800",
    ],
    icon: createElement(Users, { className: "w-5 h-5" }),
    color: "from-amber-500 to-yellow-500",
    features: [
      { icon: createElement(Trophy, { className: "w-5 h-5" }), title: "Certified Experts", description: "Nationally certified trainers" },
      { icon: createElement(Target, { className: "w-5 h-5" }), title: "Custom Plans", description: "Tailored to your goals" },
      { icon: createElement(Activity, { className: "w-5 h-5" }), title: "Progress Tracking", description: "Regular assessments" },
      { icon: createElement(Heart, { className: "w-5 h-5" }), title: "Nutrition Guide", description: "Complete diet planning" },
    ],
    benefits: [
      "Faster and better results",
      "Proper form and technique",
      "Reduced risk of injury",
      "Accountability and motivation",
      "Personalized attention",
      "Expert nutritional advice",
    ],
    schedule: [
      { day: "Mon - Sat", time: "5:00 AM - 10:00 PM" },
      { day: "Sunday", time: "7:00 AM - 6:00 PM" },
    ],
    trainer: {
      name: "Rajesh Kumar",
      experience: "12+ years experience",
    },
  },
  "free-trial": {
    title: "Free Trial",
    tagline: "Experience our world-class gym before you commit",
    category: "Membership",
    description: "We're confident you'll love our gym! That's why we offer a complimentary 1-day trial pass.",
    longDescription: "Experience our world-class facilities, premium equipment, and welcoming atmosphere before making any commitment. During your trial, you'll have full access to all gym areas, group classes, and even a consultation with one of our trainers. No obligation, no pressure—just pure fitness.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800",
    ],
    icon: createElement(Gift, { className: "w-5 h-5" }),
    color: "from-green-500 to-emerald-500",
    features: [
      { icon: createElement(Zap, { className: "w-5 h-5" }), title: "Full Access", description: "All facilities included" },
      { icon: createElement(Dumbbell, { className: "w-5 h-5" }), title: "Equipment", description: "Use any machine" },
      { icon: createElement(Users, { className: "w-5 h-5" }), title: "Group Classes", description: "Join any session" },
      { icon: createElement(Target, { className: "w-5 h-5" }), title: "Consultation", description: "Free trainer meet" },
    ],
    benefits: [
      "Experience the gym firsthand",
      "Test all equipment and facilities",
      "Meet our trainers",
      "Feel the community vibe",
      "Make an informed decision",
      "Get a workout routine suggestion",
    ],
    schedule: [
      { day: "Mon - Sat", time: "5:00 AM - 11:00 PM" },
      { day: "Sunday", time: "6:00 AM - 9:00 PM" },
    ],
  },
  "zumba-classes": {
    title: "Zumba Classes",
    tagline: "Dance your way to fitness with high-energy moves",
    category: "Group Classes",
    description: "Get fit while having fun with our energetic Zumba classes!",
    longDescription: "Our certified Zumba instructors lead high-energy dance workouts that combine Latin and international music with dance moves. Whether you're a beginner or experienced dancer, our classes are designed to be fun, effective, and suitable for all fitness levels. Burn calories while grooving to amazing beats!",
    heroImage: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
    ],
    icon: createElement(Music, { className: "w-5 h-5" }),
    color: "from-pink-500 to-rose-500",
    features: [
      { icon: createElement(Trophy, { className: "w-5 h-5" }), title: "Certified Instructors", description: "Licensed Zumba trainers" },
      { icon: createElement(Music, { className: "w-5 h-5" }), title: "Great Music", description: "Latest dance tracks" },
      { icon: createElement(Users, { className: "w-5 h-5" }), title: "All Levels", description: "Beginners welcome" },
      { icon: createElement(Flame, { className: "w-5 h-5" }), title: "High Energy", description: "Fun cardio workout" },
    ],
    benefits: [
      "Burns 400-600 calories per session",
      "Improves cardiovascular health",
      "Full body workout",
      "Stress relief through dance",
      "Social and fun atmosphere",
      "Improves coordination and rhythm",
    ],
    schedule: [
      { day: "Mon, Wed, Fri", time: "7:00 AM & 6:00 PM" },
      { day: "Saturday", time: "8:00 AM" },
    ],
    trainer: {
      name: "Priya Sharma",
      experience: "8+ years in Zumba",
    },
  },
  "strength-training": {
    title: "Strength Training",
    tagline: "Build muscle and power with premium equipment",
    category: "Weight Training",
    description: "Our fully-equipped strength training area features premium weight machines, free weights, and power racks.",
    longDescription: "Whether you're a beginner or an advanced lifter, we have everything you need to build strength and muscle. Our weight room includes dumbbells ranging from 2.5kg to 50kg, multiple squat racks, cable machines, smith machines, and dedicated bench press stations. Olympic lifting platforms are available for serious lifters.",
    heroImage: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=800",
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?w=800",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800",
    ],
    icon: createElement(Dumbbell, { className: "w-5 h-5" }),
    color: "from-blue-500 to-cyan-500",
    features: [
      { icon: createElement(Dumbbell, { className: "w-5 h-5" }), title: "Free Weights", description: "2.5kg - 50kg range" },
      { icon: createElement(Target, { className: "w-5 h-5" }), title: "Power Racks", description: "Multiple stations" },
      { icon: createElement(Activity, { className: "w-5 h-5" }), title: "Machines", description: "Full cable system" },
      { icon: createElement(Trophy, { className: "w-5 h-5" }), title: "Olympic Platforms", description: "For serious lifters" },
    ],
    benefits: [
      "Build lean muscle mass",
      "Increase metabolic rate",
      "Improve bone density",
      "Boost strength and power",
      "Enhanced body composition",
      "Better functional fitness",
    ],
    schedule: [
      { day: "Mon - Sat", time: "5:00 AM - 11:00 PM" },
      { day: "Sunday", time: "6:00 AM - 9:00 PM" },
    ],
    trainer: {
      name: "Vikram Singh",
      experience: "10+ years in strength coaching",
    },
  },
  "functional-workouts": {
    title: "Functional Workouts",
    tagline: "Train for real life with dynamic movements",
    category: "Functional Training",
    description: "Train for real life with our functional training area.",
    longDescription: "These workouts focus on movements that help you perform everyday activities better while building overall strength and mobility. Our functional training zone includes TRX suspension trainers, battle ropes, kettlebells, plyometric boxes, and much more. Perfect for those who want practical fitness.",
    heroImage: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800",
    ],
    icon: createElement(Activity, { className: "w-5 h-5" }),
    color: "from-purple-500 to-violet-500",
    features: [
      { icon: createElement(Target, { className: "w-5 h-5" }), title: "TRX Training", description: "Suspension workouts" },
      { icon: createElement(Flame, { className: "w-5 h-5" }), title: "Battle Ropes", description: "High-intensity cardio" },
      { icon: createElement(Dumbbell, { className: "w-5 h-5" }), title: "Kettlebells", description: "Dynamic movements" },
      { icon: createElement(Zap, { className: "w-5 h-5" }), title: "Plyometrics", description: "Explosive power" },
    ],
    benefits: [
      "Improves daily life movements",
      "Enhances core stability",
      "Better balance and coordination",
      "Increases flexibility",
      "Reduces injury risk",
      "Full body conditioning",
    ],
    schedule: [
      { day: "Tue, Thu", time: "7:00 AM & 7:00 PM" },
      { day: "Saturday", time: "9:00 AM" },
    ],
    trainer: {
      name: "Amit Verma",
      experience: "7+ years in functional fitness",
    },
  },
};
