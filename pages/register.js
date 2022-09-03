import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Sign Up - AiryToDo</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <body className="flex h-full flex-col">
        <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
          <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
            <Link href="/">
              <a aria-label="Home" className="flex  items-center text-center">
                <Image src="/logo.png" alt="AiryToDo" height="50" width="50" className="mx-auto rounded-xl" />
                <p className="ml-4 text-lg font-semibold">AiryToDo</p>
              </a>
            </Link>
            <div className="relative mt-12 sm:mt-16">
              <svg viewBox="0 0 1090 1090" aria-hidden="true" fill="none" preserveAspectRatio="none" width="1090" height="1090" className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto">
                <circle cx="545" cy="545" r="544.5"></circle>
                <circle cx="545" cy="545" r="480.5"></circle>
                <circle cx="545" cy="545" r="416.5"></circle>
                <circle cx="545" cy="545" r="352.5"></circle>
              </svg>
              <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
                Sign up for an account
              </h1>
              <p className="mt-3 text-center text-lg text-gray-600">
                Already registered?{" "}
                <Link href="/register">
                  <a className="text-blue-600">
                    Sign in
                  </a>
                </Link>
                {" "}to your account.
              </p>
            </div>
            <div className="-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
              <form>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label For="first_name" className="mb-2 block text-sm font-semibold text-gray-900">
                      First name
                    </label>
                    <input id="first_name" type="text" name="first_name" autoComplete="given-name" required className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"></input>
                  </div>
                  <div>
                    <label For="last_name" className="mb-2 block text-sm font-semibold text-gray-900">
                      Last name
                    </label>
                    <input id="last_name" type="text" name="last_name" autoComplete="family-name" required className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"></input>
                  </div>
                  <div className="col-span-full">
                    <label For="email" className="mb-2 block text-sm font-semibold text-gray-900">Email address</label>
                    <input id="email" type="email" name="email" autoComplete="email" required className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"></input>
                  </div>
                  <div className="col-span-full">
                    <label For="password" className="mb-2 block text-sm font-semibold text-gray-900">Password</label>
                    <input id="password" type="password" name="password" autoComplete="current-password" required className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"></input>
                  </div>
                </div>
                <button className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors mt-8 w-full">
                  Get started today
                </button>
              </form>
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}