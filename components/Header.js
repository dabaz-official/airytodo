import Link from "next/link"
import Image from "next/image"

export default function Header () {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
        <div className="relative z-10 flex items-center gap-16">
          <Link href="/">
            <a aria-label="Home" className="flex items-center gap-x-4">
              <Image src="/logo.png" alt="AiryToDo" height="40" width="40" className="rounded-lg" />
              <p className="text-lg font-semibold">AiryToDo</p>
            </a>
          </Link>
          <div className="hidden lg:flex lg:gap-10">
            <Link href="#features">
              <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-md text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
                <span className="relative z-10">
                  Features
                </span>
              </a>
            </Link>
            <Link href="#testimonials">
              <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-md text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
                <span className="relative z-10">
                  Testimonials
                </span>
              </a>
            </Link>
            <Link href="#pricing">
              <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-md text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
                <span className="relative z-10">
                  Pricing
                </span>
              </a>
            </Link>
            <Link href="#faqs">
              <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-md text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
                <span className="relative z-10">
                  FAQs
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/login">
            <a className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 lg:block">
              Log in
            </a>
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <a className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 lg:block">
              Download
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}