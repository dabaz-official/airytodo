import Link from 'next/link'
import Image from 'next/image'

export default function Pricing () {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-title" className="text-3xl font-medium tracking-tight text-gray-900">
            Flat pricing, no extra cost.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you&apos;re one person trying to get ahead or a big firm trying to take over the world, we&apos;ve got a plan for you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
            <h3 className="flex items-center text-sm font-semibold text-gray-900">
              <Image src="/img/starter.png" alt="AiryToDo" height={30} width={30} />
              <span className="ml-4">Starter</span>
            </h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
              $0
            </p>
            <p className="mt-3 text-sm text-gray-700">
              You may want a trial. And here it is. Get started for free.
            </p>
            <div className="order-last mt-6">
              <ul role="list" className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-blue-500">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">
                    To-do listing
                  </span>
                </li>
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-blue-500">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">
                    Multi-layered encryption
                  </span>
                </li>
              </ul>  
            </div>
            <Link href="/register">
              <a className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6">
                Get started for free
              </a>
            </Link>
          </section>
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
            <h3 className="flex items-center text-sm font-semibold text-gray-900">
              <Image src="/img/to-doer.png" alt="AiryToDo" height={30} width={30} />
              <span className="ml-4">To-doer</span>
            </h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
              $3 / Month
            </p>
            <p className="mt-3 text-sm text-gray-700">
              Enjoy more features.
            </p>
            <div className="order-last mt-6">
              <ul role="list" className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-blue-500">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">
                    To-do listing
                  </span>
                </li>
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-blue-500">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">
                    Multi-layered encryption
                  </span>
                </li>
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-blue-500">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">
                    Timers of to-dos
                  </span>
                </li>
              </ul>  
            </div>
            <Link href="/register">
              <a className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6">
                Subscribe
              </a>
            </Link>
          </section>
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none">
            <h3 className="flex items-center text-sm font-semibold text-white">
              <Image src="/img/vip.png" alt="AiryToDo" height={30} width={30} />
              <span className="ml-4">VIP</span>
            </h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-white">
              $5 / Month
            </p>
            <p className="mt-3 text-sm text-gray-300">
              Unlock all the features of our app.
            </p>
            <div className="order-last mt-6">
              <ul role="list" className="-my-2 divide-y text-sm divide-gray-800 text-gray-300">
              <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-white">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">To-do listing</span>
                </li>
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-white">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">Multi-layered encryption</span>
                </li>
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-white">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">Timers of to-dos</span>
                </li>
                <li className="flex py-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none text-white">
                    <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" fill="currentColor"></path>
                    <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  </svg>
                  <span className="ml-4">Taking Markdown notes for every to-do</span>
                </li>
              </ul>
            </div>
            <Link href="/register">
              <a className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors mt-6">
                Subscribe
              </a>
            </Link>
          </section>
        </div>
      </div>
    </section>
  )
}