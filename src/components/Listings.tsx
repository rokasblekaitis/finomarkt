'use client'

import { useId } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import Image from 'next/image'

import screenshot from '@/images/screenshots/section.png'

interface Feature {
  name?: React.ReactNode
  summary: string
  description: string
  example: string
  textLeft: string
  textRight: string
  icon: React.ComponentType
}

const Table = () => {
  const data = [
    {
      id: '84675812',
      date: '2024-05-14 20:28',
      location: 'London, UK',
      industry: 'Real estate',
      turnover: '110,000 $',
      netProfit: '198,000 $',
      profitPercent: '15%',
      sharesToSell: '100 / 3000',
      sharePrice: '50 $',
      pe: '5',
    },
    {
      id: '84675812',
      date: '2024-05-14 20:28',
      location: 'Malaga, Spain',
      industry: 'Technology',
      turnover: '243,000 $',
      netProfit: '670,680 $',
      profitPercent: '23%',
      sharesToSell: '300 / 1300',
      sharePrice: '400 $',
      pe: '7',
    },
    {
      id: '84675812',
      date: '2024-05-14 20:28',
      location: 'Dallas, USA',
      industry: 'Pharmaceutical',
      turnover: '430,050 $',
      netProfit: '464,454 $',
      profitPercent: '9%',
      sharesToSell: '100 / 100',
      sharePrice: '500 $',
      pe: '10',
    },
    {
      id: '84675812',
      date: '2024-05-14 20:28',
      location: 'Warsaw, Poland',
      industry: 'Startup',
      turnover: '10,500 $',
      netProfit: '37,800 $',
      profitPercent: '30%',
      sharesToSell: '250 / 400',
      sharePrice: '300 $',
      pe: '8',
    },
    {
      id: '84675812',
      date: '2024-05-14 20:28',
      location: 'Berlin, Germany',
      industry: 'Manufacture',
      turnover: '350,000 $',
      netProfit: '588,000 $',
      profitPercent: '14%',
      sharesToSell: '300 / 650',
      sharePrice: '25 $',
      pe: '3',
    },
  ]

  return (
    <div className="container mx-auto max-w-screen-xl p-4">
      <div className="mb-4 flex space-x-4">
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          Stocks
        </button>
        <button className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
          Bonds
        </button>
        <button className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
          Debts
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="hidden px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell"
            >
              ID
              <svg
                className="ml-1 inline h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Location
            </th>
            <th
              scope="col"
              className="hidden px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell"
            >
              Industry
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Turnover
              <svg
                width="10"
                height="10"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM7 12.5C5.91221 12.5 4.84884 12.1774 3.94437 11.5731C3.0399 10.9687 2.33495 10.1098 1.91867 9.10476C1.50238 8.09977 1.39347 6.9939 1.60568 5.927C1.8179 4.86011 2.34173 3.8801 3.11092 3.11091C3.8801 2.34172 4.86011 1.8179 5.92701 1.60568C6.9939 1.39346 8.09977 1.50238 9.10476 1.91866C10.1098 2.33494 10.9687 3.03989 11.5731 3.94436C12.1774 4.84883 12.5 5.9122 12.5 7C12.4983 8.45818 11.9184 9.85617 10.8873 10.8873C9.85617 11.9184 8.45819 12.4983 7 12.5ZM8 10C8 10.1326 7.94732 10.2598 7.85356 10.3536C7.75979 10.4473 7.63261 10.5 7.5 10.5C7.23479 10.5 6.98043 10.3946 6.7929 10.2071C6.60536 10.0196 6.5 9.76522 6.5 9.5V7C6.36739 7 6.24022 6.94732 6.14645 6.85355C6.05268 6.75979 6 6.63261 6 6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24022 6.05268 6.36739 6 6.5 6C6.76522 6 7.01957 6.10536 7.20711 6.29289C7.39465 6.48043 7.5 6.73478 7.5 7V9.5C7.63261 9.5 7.75979 9.55268 7.85356 9.64645C7.94732 9.74021 8 9.86739 8 10ZM6 4.25C6 4.10166 6.04399 3.95666 6.1264 3.83332C6.20881 3.70999 6.32595 3.61386 6.46299 3.55709C6.60003 3.50032 6.75083 3.48547 6.89632 3.51441C7.04181 3.54335 7.17544 3.61478 7.28033 3.71967C7.38522 3.82456 7.45665 3.9582 7.48559 4.10368C7.51453 4.24917 7.49968 4.39997 7.44291 4.53701C7.38615 4.67406 7.29002 4.79119 7.16668 4.8736C7.04334 4.95601 6.89834 5 6.75 5C6.55109 5 6.36032 4.92098 6.21967 4.78033C6.07902 4.63968 6 4.44891 6 4.25Z"
                  fill="currentColor"
                />
              </svg>
            </th>
            <th
              scope="col"
              className="hidden px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell"
            >
              Net profit
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Profit %
            </th>
            <th
              scope="col"
              className="hidden px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell"
            >
              Shares to sell
            </th>
            <th
              scope="col"
              className="hidden px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell"
            >
              Share price
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              P/E
            </th>
            <th scope="col" className="relative px-4 py-2">
              <span className="sr-only">View information</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="hidden whitespace-nowrap px-4 py-2 text-sm text-gray-900 md:table-cell">
                {row.id}
                <br />
                <span className="text-xs text-gray-500">{row.date}</span>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900">
                {row.location}
              </td>
              <td className="hidden whitespace-nowrap px-4 py-2 text-sm text-gray-900 md:table-cell">
                {row.industry}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900">
                {row.turnover}
              </td>
              <td className="hidden whitespace-nowrap px-4 py-2 text-sm text-gray-900 md:table-cell">
                {row.netProfit}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900">
                {row.profitPercent}
              </td>
              <td className="hidden whitespace-nowrap px-4 py-2 text-sm text-gray-900 md:table-cell">
                {row.sharesToSell}
              </td>
              <td className="hidden whitespace-nowrap px-4 py-2 text-sm text-gray-900 md:table-cell">
                {row.sharePrice}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900">
                {row.pe}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-right text-sm font-medium">
                <button className="flex items-center rounded bg-blue-500 px-3 py-1 text-white">
                  View information
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Listings() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="relative mx-auto mb-8 max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Explore listings
          </h2>
        </div>

        <div className="mt-10 w-[45rem] w-auto overflow-auto rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 lg:mt-0">
          {/* <Image
            className="relative w-full rounded-xl"
            src={screenshot}
            alt=""
            priority
          /> */}
          <Table />
        </div>
      </Container>
    </section>
  )
}
