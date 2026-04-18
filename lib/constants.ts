export const DOCS = {
  resume: {
    key: "resume",
    label: "Edwin Socrates Lara — Resume 2026",
    description: "Product design resume",
    url: "https://dochub.com/edwinsocrateslara/orO7lgeVLk9z02JKjMP2p5/edwin-socrates-lara-2026-docx?dt=DxoBt5hCbfZDbPkqfswW",
  },
  "meridian-case-study": {
    key: "meridian-case-study",
    label: "Meridian Credit Union — Case Study",
    description: "Full case study PDF",
    url: "https://dochub.com/edwinsocrateslara/7vA0q9lw2bQJd6PwPDNOxd/meridian-case-study-pdf?dt=uBd1rLKtRUaN1xMmPq9F",
  },
} as const

export type DocKey = keyof typeof DOCS
