import React from 'react'

// app/cover-letters/layout.tsx
export const metadata = {
    title: "AI-Powered Cover Letters | SarthiAi",
    description:
      "Generate job-specific cover letters effortlessly with SarthiAi's AI-powered cover letter builder.",
    keywords: [
      "AI Cover Letters",
      "Job Applications",
      "Cover Letter Generator",
      "SarthiAi",
    ],
    openGraph: {
      title: "AI-Powered Cover Letters | SarthiAi",
      description:
        "Create tailored cover letters for job applications with SarthiAi's intelligent cover letter tool.",
      url: "https://sarthi-ai.click/cover-letters"
    },
  };
  

const layout = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout
