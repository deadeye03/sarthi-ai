import React from 'react'
// app/resume/layout.tsx
export const metadata = {
    title: "AI Resume Builder | SarthiAi",
    description:
      "Create a professional resume instantly with SarthiAi's AI-powered resume builder. Download in seconds.",
    keywords: [
      "AI Resume Builder",
      "Resume Creator",
      "Professional Resume",
      "SarthiAi",
    ],
    openGraph: {
      title: "AI Resume Builder | SarthiAi",
      description:
        "Build a professional resume with our AI tools and download it instantly for job applications.",
      url: "https://sarthi-ai.click/resume"
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
