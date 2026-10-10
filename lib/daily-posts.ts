// 30-day rotating Daily Post bank: 10 AI Tips, 10 Motivational, 10 Course Promo.
// Rotation: day-of-year % 30 — sabko roz same post dikhegi.
export type PostType = "tip" | "motivation" | "promo";

export interface DailyPost {
  type: PostType;
  textHi: string;
  textEn: string;
}

export const dailyPosts: DailyPost[] = [
  // ── AI TIPS (0–9) ──
  { type: "tip", textHi: "ChatGPT se YouTube title + description 2 minute me likhwao!", textEn: "Get YouTube titles + descriptions from ChatGPT in 2 minutes!" },
  { type: "tip", textHi: "Thumbnail text सिर्फ 3-4 शब्द रखो — click rate दोगुना होगा!", textEn: "Keep thumbnail text to 3-4 words — double your click rate!" },
  { type: "tip", textHi: "AI se apni awaz me voice-over banao — mic ki zaroorat nahi!", textEn: "Make voice-overs in your own voice with AI — no mic needed!" },
  { type: "tip", textHi: "Prompt me hamesha role + kaam + format likho — best result milega!", textEn: "Always add role + task + format in prompts for best results!" },
  { type: "tip", textHi: "AI photo banane se pehle privacy setting OFF karna na bhoolo!", textEn: "Don't forget to turn OFF privacy settings before AI photos!" },
  { type: "tip", textHi: "1 photo se poora festival poster banao — AI background remover use karo!", textEn: "Make a full festival poster from 1 photo with AI background remover!" },
  { type: "tip", textHi: "PPT ka content AI se likhwao, design tum khud chamkao!", textEn: "Get PPT content from AI, shine the design yourself!" },
  { type: "tip", textHi: "Video me auto-captions lagao — 80% log bina awaz dekhte hain!", textEn: "Add auto-captions — 80% people watch videos on mute!" },
  { type: "tip", textHi: "Roz 15 min AI tool practice = 30 din me nayi skill pakki!", textEn: "15 min daily AI practice = new skill in 30 days!" },
  { type: "tip", textHi: "Gemini se photo ka text nikalo — scanning ka jhanjhat khatm!", textEn: "Extract text from photos with Gemini — no more scanning hassle!" },
  // ── MOTIVATION (10–19) ──
  { type: "motivation", textHi: "AI se daro mat, AI seekho — future tumhara hai!", textEn: "Don't fear AI, learn AI — the future is yours!" },
  { type: "motivation", textHi: "Chhote gaon se bhi bada sapna dekho — mobile hi kaafi hai!", textEn: "Dream big from a small village — a mobile is enough!" },
  { type: "motivation", textHi: "Roz 1% behtar bano — 1 saal me 37 guna aage!", textEn: "Get 1% better daily — 37x ahead in a year!" },
  { type: "motivation", textHi: "Degree se zyada skill bolti hai — AI skill seekho!", textEn: "Skills speak louder than degrees — learn AI skills!" },
  { type: "motivation", textHi: "Asafalta teacher hai — har galti nayi seekh deti hai!", textEn: "Failure is a teacher — every mistake teaches something new!" },
  { type: "motivation", textHi: "Shuruaat chhoti karo, soch badi rakho!", textEn: "Start small, think big!" },
  { type: "motivation", textHi: "Jo aaj seekhega, wahi kal aage badhega!", textEn: "Who learns today, leads tomorrow!" },
  { type: "motivation", textHi: "Mobile timepass nahi, time-invest banao!", textEn: "Make mobile time-invest, not timepass!" },
  { type: "motivation", textHi: "Himmat walon ka saath AI bhi deta hai!", textEn: "AI supports the courageous too!" },
  { type: "motivation", textHi: "Sapne use poore hote hain jo roz mehnat karte hain!", textEn: "Dreams come true for those who work daily!" },
  // ── COURSE PROMO (20–29) ──
  { type: "promo", textHi: "AI Mastery Course 2.0 — First Batch 4 Nov 2026 se! Enroll karo!", textEn: "AI Mastery Course 2.0 — First Batch from 4 Nov 2026! Enroll now!" },
  { type: "promo", textHi: "Graphic Designing Course BILKUL FREE! Aaj hi join karo!", textEn: "Graphic Designing Course absolutely FREE! Join today!" },
  { type: "promo", textHi: "Saturday-Sunday LIVE classes + doubt sessions — Hindi me!", textEn: "Saturday-Sunday LIVE classes + doubt sessions — in Hindi!" },
  { type: "promo", textHi: "School Management App sirf ₹10,000 me — COD available!", textEn: "School Management App only ₹10,000 — COD available!" },
  { type: "promo", textHi: "AI se paise kamana seekho — prompting se video tak, sab kuch!", textEn: "Learn to earn with AI — from prompting to videos, everything!" },
  { type: "promo", textHi: "PPT Creation Agent — presentation ab minute me taiyaar!", textEn: "PPT Creation Agent — presentations ready in minutes!" },
  { type: "promo", textHi: "YouTube grow karna hai? AI Mechanism course join karo!", textEn: "Want YouTube growth? Join the AI Mechanism course!" },
  { type: "promo", textHi: "Enroll karna super easy — form bharo, WhatsApp par confirm pao!", textEn: "Enrolling is super easy — fill the form, confirm on WhatsApp!" },
  { type: "promo", textHi: "Students, Teachers, Creators, Business owners — sabke liye AI course!", textEn: "AI course for students, teachers, creators, business owners!" },
  { type: "promo", textHi: "Cash on Delivery — pehle course dekho, phir payment karo!", textEn: "Cash on Delivery — see the course first, then pay!" },
];

export function getTodayPost(date = new Date()): { post: DailyPost; dayIndex: number } {
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / 86400000);
  const dayIndex = dayOfYear % dailyPosts.length;
  return { post: dailyPosts[dayIndex], dayIndex };
}

export const typeBadge = (type: PostType, lang: "hi" | "en") => {
  if (type === "tip") return lang === "hi" ? "🤖 AI Tip of the Day" : "🤖 AI Tip of the Day";
  if (type === "motivation") return lang === "hi" ? "💪 Aaj ki Prerna" : "💪 Motivation";
  return lang === "hi" ? "📢 Admission Open" : "📢 Admission Open";
};
