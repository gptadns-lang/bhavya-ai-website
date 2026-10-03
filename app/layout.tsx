import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://bhavya-ai-research-centre.web.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bhavya AI Research Centre | Hindi Me AI Seekho — Courses & AI Agents",
    template: "%s | Bhavya AI Research Centre",
  },
  description:
    "Dinesh Kumar Gupta dwara Hindi me AI education: AI Mastery Course 2.0 (₹2000, First Batch 4 Nov 2026), Free Graphic Designing course, School Management App aur PPT Creation Agent (₹10,000, COD).",
  keywords: [
    "AI course in Hindi",
    "Hindi me AI seekho",
    "AI Mastery Course",
    "prompt engineering course Hindi",
    "graphic designing course free",
    "AI video creation course",
    "YouTube growth course Hindi",
    "AI agent",
    "school management app",
    "PPT creation AI",
    "Bhavya AI Research Centre",
    "Dinesh Kumar Gupta",
    "ChatGPT course Hindi",
    "AI se paise kamana",
  ],
  authors: [{ name: "Dinesh Kumar Gupta" }],
  creator: "Bhavya AI Research Centre",
  publisher: "Bhavya AI Research Centre",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bhavya AI Research Centre",
    title: "Bhavya AI Research Centre | Hindi Me AI Seekho",
    description:
      "AI Mastery Course 2.0 (₹2000) • Free Graphic Designing • AI Agents (₹10,000) — Dinesh Kumar Gupta dwara practical AI education.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Bhavya AI Research Centre" }],
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavya AI Research Centre | Hindi Me AI Seekho",
    description:
      "AI Mastery Course 2.0 (₹2000) • Free Graphic Designing • AI Agents (₹10,000) — Practical AI education in Hindi.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Bhavya AI Research Centre",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      slogan: "Learn AI | Build Skills | Create Opportunities",
      founder: { "@type": "Person", name: "Dinesh Kumar Gupta" },
      sameAs: [
        "https://www.youtube.com/@dineshsir-86",
        "https://chat.whatsapp.com/JMKuTfd4cwm0vSMDmHrZRj",
        "https://www.facebook.com/dineshgupta1988",
      ],
    },
    {
      "@type": "Course",
      name: "AI Mastery Course 2.0",
      description:
        "Prompt Engineering, Graphic Designing, AI Video Creation, Voice Generation, YouTube Mechanism, AI Operator, AI se paise kamana. Video + weekend live classes.",
      provider: { "@type": "Organization", name: "Bhavya AI Research Centre" },
      offers: { "@type": "Offer", price: "2000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "Product",
      name: "School Management App (AI Agent)",
      offers: { "@type": "Offer", price: "10000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "Product",
      name: "PPT Creation Agent",
      offers: { "@type": "Offer", price: "10000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-navy text-white antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
