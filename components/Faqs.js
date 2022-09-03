import Link from 'next/link'

export default function Faqs () {
  return (
    <section id="#faqs" aria-labelledby="faqs-title" className="border-t border-gray-200 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faqs-title" className="text-3xl font-medium tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link href="mailto:dabaz.official@skiff.com">
              <a className="text-gray-900 underline">
                reach out to us
              </a>
            </Link>
            .
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul role="list" className="space-y-10">
              <li>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">What is to-do?</h3>
                <p className="mt-4 text-sm text-gray-700">
                  You list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. By keeping such a list, you make sure that your tasks are written down all in one place so you don&apos;t forget anything important.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">Where is AiryToDo based?</h3>
                <p className="mt-4 text-sm text-gray-700">
                  Let&apos;s just say it&apos;s not somewhere where the SEC is going to find us.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">What makes AiryToDo stand out?</h3>
                <p className="mt-4 text-sm text-gray-700">
                  AiryToDo is not only a to-do app. With VIP membership, you can take down notes on every single to-do item. Just tap on the item and start to take notes. You can also set a timer for each to-do item with to-doer membership. Not a deadline in calendar, it&apos;s a timer. 
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="space-y-10">
              <li>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">Can I pay via PayPal?</h3>
                <p className="mt-4 text-sm text-gray-700">
                  Yes. PayPal, Apple Pay, credit cards, and a lot more are all available to purchase a membership.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}