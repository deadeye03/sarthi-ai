import { BarLoader } from "react-spinners";
import { Suspense } from "react";

// app/dashboard/layout.tsx
export const metadata = {
  title: "Weekly Industry Insights | SarthiAi",
  description:
    "Stay updated with the latest industry trends, salaries, and skill demands with SarthiAi's AI-powered insights.",
  keywords: [
    "Industry Insights",
    "Job Trends",
    "Salary Insights",
    "Skill Demands",
    "SarthiAi",
  ],
  openGraph: {
    title: "Weekly Industry Insights | SarthiAi",
    description:
      "Get weekly insights on industry trends, salaries, and skill demands. Stay ahead in your career with SarthiAi.",
    url: "https://sarthi-ai.click/dashboard"
  },
};


export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
