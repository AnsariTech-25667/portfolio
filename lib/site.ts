// lib/site.ts
export const site = {
  resumeUrl: 'https://drive.google.com/file/d/1JraG_4jz4NqKQRySN9pGkLDz5-Ajl9XY/view?usp=sharing',
  contact: {
    to: process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL ?? "",
    from: process.env.NEXT_PUBLIC_CONTACT_FROM_EMAIL ?? "",
    enabled:
      !!process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL &&
      !!process.env.NEXT_PUBLIC_CONTACT_FROM_EMAIL,
  },
};