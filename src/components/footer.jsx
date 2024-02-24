import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center'>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
        <small className='mt-2 text-xs'>
            &copy; 2024 Hamit Uyar. All rights reserved.
        </small>
    </footer>
  )
}
