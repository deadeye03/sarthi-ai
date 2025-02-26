import React from 'react'

// app/ats-score-checker/layout.tsx
export const metadata = {
  title: "ATS Score Checker | SarthiAi",
  description:
    "Optimize your resume for ATS compatibility with SarthiAi. Get improvement tips for 100% ATS success.",
  keywords: [
    "ATS Score Checker",
    "Resume Optimization",
    "ATS Compatibility",
    "SarthiAi",
  ],
  openGraph: {
    title: "ATS Score Checker | SarthiAi",
    description:
      "Improve your resume’s ATS score with personalized feedback and optimization tips from SarthiAi.",
    url: "https://sarthi-ai.click/check-ats-score"
  },
};


const Layout = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout
