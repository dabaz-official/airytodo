export default function Features () {
  return (
    <section id="features" aria-label="Features for using our app" className="py-24 sm:py-36 lg:py-60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Every features you need in our app.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            AiryToDo is built for people who have the passion to live a high-efficiency life.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
        <li className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
              <circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2"></circle>
              <path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z" fill="#737373"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z" fill="#171717"></path>
            </svg>
            <h3 className="mt-6 font-semibold text-gray-900">
              Encrypted and anoymized
            </h3>
            <p className="mt-2 text-gray-700">
              Cutting-edge security technology that even the NSA doesn&apos;t know about keeps you hidden.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373"></path>
              <circle cx="11" cy="14" r="2" fill="#171717"></circle>
              <circle cx="11" cy="20" r="2" fill="#171717"></circle>
              <circle cx="11" cy="26" r="2" fill="#171717"></circle>
              <path d="M16 14h6M16 20h6M16 26h6" stroke="#737373" strokeWidth="2" strokeLinecap="square"></path>
              <circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2"></circle>
            </svg>
            <h3 className="mt-6 font-semibold text-gray-900">
              Simple listing of to-dos
            </h3>
            <p className="mt-2 text-gray-700">
              Tired of these complicated to-do apps? Try AiryToDo now and enjoy the simplicity.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
              <circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2"></circle>
              <path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z" fill="#737373"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z" fill="#171717"></path>
            </svg>
            <h3 className="mt-6 font-semibold text-gray-900">
              Put a timer on every to-do
            </h3>
            <p className="mt-2 text-gray-700">
              If you are afraid of being late for something, just set a timer for it. AiryToDo will always be there for you.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}