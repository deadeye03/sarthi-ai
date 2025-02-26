import { Suspense } from "react";
import { BarLoader } from "react-spinners";
// app/interview/layout.tsx
export const metadata = {
  title: "Interview Preparation | SarthiAi",
  description:
    "Prepare for your interviews with frequently asked questions, PiCharts, and progress tracking tools from SarthiAi.",
  keywords: [
    "Interview Preparation",
    "Job Interviews",
    "Interview Questions",
    "SarthiAi",
  ],
  openGraph: {
    title: "Interview Preparation | SarthiAi",
    description:
      "Ace your interviews with SarthiAi's expert preparation tools, including FAQs and progress tracking.",
    url: "https://sarthi-ai.click/interview",
  },
};

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
