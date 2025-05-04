import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentAI – Build AI Agents Fast with Next.js",
  description: "AgentAI is a modern AI agent framework to build, deploy, and scale your AI-powered applications easily with Next.js.",
  keywords: [
    "AgentAI",
    "AI Agent Framework",
    "Next.js AI",
    "Build AI Agents",
    "AI Automation",
    "Agentic apps",
    "Generative AI",
    "Next.js SEO",
    "React AI Framework"
  ],
  authors: [
    { name: "Imran", url: "https://your-portfolio-link.com" }
  ],
  creator: "Imran",
  metadataBase: new URL("https://your-agentai-site.com"),
  openGraph: {
    title: "AgentAI – Build AI Agents Fast",
    description: "A full-featured framework to launch AI-powered apps with ease.",
    url: "https://your-agentai-site.com",
    siteName: "AgentAI",
    images: [
      {
        url: "https://your-agentai-site.com/og-image.png", // Add a relevant Open Graph image
        width: 1200,
        height: 630,
        alt: "AgentAI OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentAI – Build AI Agents Fast",
    description: "The fastest way to create, deploy, and scale AI agents using Next.js.",
    images: ["https://your-agentai-site.com/og-image.png"], // Same as above or specific Twitter image
    creator: "@your_twitter_handle", // Optional
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
