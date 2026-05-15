import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Workspace Audit Tool — Find & Fix Security Issues",
  description: "Scan your Notion workspace for public pages, overprivileged users, and sensitive data exposure. Get actionable security recommendations.",
  keywords: "Notion security, workspace audit, Notion permissions, data exposure, Notion compliance",
  openGraph: {
    title: "Notion Workspace Audit Tool",
    description: "Find and fix Notion security and access issues",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="675a19eb-5449-4d1e-bb48-41bbe2db7e6c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
