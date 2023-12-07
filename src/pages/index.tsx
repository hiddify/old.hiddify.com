import React, {HTMLProps, ReactElement, ReactNode} from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Translate from '@docusaurus/Translate'

import useBaseUrl from '@docusaurus/useBaseUrl'
import Container from '../components/container'

import AndroidSVG from '@site/static/icons/Android.svg'
import LinuxSVG from '@site/static/icons/linux.svg'
import MacosSVG from '@site/static/icons/MacOS-Finder.svg'
import WindowsSVG from '@site/static/icons/microsoft-windows.svg'
import AppleSVG from '@site/static/icons/Apple.svg'
import UbuntuSVG from '@site/static/icons/ubuntu.svg'
import {twMerge} from 'tailwind-merge'

const stats = [
  {id: 1, name: 'Panel download', value: '8,000+'},
  {id: 2, name: 'App Download', value: '3%'},
  {id: 3, name: 'Advantage', value: '99.9%'},
  {id: 3, name: 'Contributors', value: '199'},
]

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function Hero() {
  return (
    <header>
      <Container className="flex flex-col items-center my-36 ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-200">
          <Translate id="homepage.main_heading_title" />
        </h1>
        <h4 className="mx-auto mt-4 max-w-2xl text-xl text-center text-gray-700 dark:text-gray-300">
          <Translate id="homepage.main_heading_subtitle" />
        </h4>
      </Container>
    </header>
  )
}

type IconWrapperProps = {
  title: string
  children: ReactElement
}
const IconWrapper = ({title, children}: IconWrapperProps) => {
  return (
    <div className="flex flex-col items-center hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors">
      {children}
      <span className="font-normal mt-1.5 select-none">{title}</span>
    </div>
  )
}

type ButtonProps = HTMLProps<HTMLButtonElement>
const Button = ({className, ...props}: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={twMerge(
        'bg-indigo-600  hover:bg-indigo-500 active:bg-indigo-600/80 focus-visible:outline-indigo-600',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors',
        'rounded-md border-none px-8 py-3 text-base font-semibold text-white shadow-sm ',
        className,
      )}
    />
  )
}

function HiddifyClient() {
  return (
    <Sections
      title="Hiddify Client"
      subtitle="A Client for every environment"
      footer={
        <>
          <Link tabIndex={-1} to="https://app.hiddify.com">
            <Button>Download</Button>
          </Link>
          <Link tabIndex={-1} to="#">
            <Button>Read More</Button>
          </Link>
        </>
      }
    >
      <>
        <div className="flex gap-6 sm:gap-10 lg:gap-10 w-full sm:justify-center justify-between mt-6">
          <IconWrapper title="Android">
            <AndroidSVG className="w-12 h-12" />
          </IconWrapper>
          <IconWrapper title="IOS">
            <AppleSVG className="w-12 h-12" />
          </IconWrapper>
          <IconWrapper title="Windows">
            <WindowsSVG className="w-12 h-12" />
          </IconWrapper>
          <IconWrapper title="Linux">
            <LinuxSVG className="w-12 h-12" />
          </IconWrapper>
          <IconWrapper title="MacOS">
            <MacosSVG className="w-12 h-12" />
          </IconWrapper>
        </div>

        <h4 className="font-normal mt-10 text-xl text-center lg:text-start text-gray-800 dark:text-gray-300">
          Uses latest protocols:
          <br />
          <span className="inline-block mt-2">
            Hysteria2, TUICv5, SSH, Reality, VMess and more
          </span>
        </h4>
      </>
    </Sections>
  )
}

type SectionsProps = {
  title: string
  subtitle: string
  footer?: ReactElement
  children?: ReactElement
}
function Sections({title, subtitle, footer, children}: SectionsProps) {
  return (
    <section className="my-24 lg:my-40">
      <Container className="flex flex-col lg:flex-row lg:gap-2">
        <div className="flex-1 shrink-0 grow lg:rounded-md self-center">
          <div className="relative ">
            <img
              className=" object-contain relative max-h-96 lg:max-h-fit"
              src={useBaseUrl('/img/landing/hiddify-client.png')}
            />
          </div>
        </div>
        <div className="py-4 lg:ps-16 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl dark:text-gray-50">
            {title}
          </h2>
          <p className="text-2xl text-gray-800 dark:text-gray-300">
            {subtitle}
          </p>
          {children}

          {footer ? (
            <div className="mt-10 flex w-full sm:w-auto gap-10 sm:gap-32 lg:gap-12 justify-between">
              {footer}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}

function HiddifyServer() {
  return (
    <Sections
      title="Hiddify Manager"
      subtitle="Build your own VPN Server"
      footer={
        <>
          <Link className={'hover:no-underline'} tabIndex={-1} to="#">
            <Button className="flex items-center gap-2">
              Set UP <UbuntuSVG />
            </Button>
          </Link>
          <Link tabIndex={-1} to="#">
            <Button>Read More</Button>
          </Link>
        </>
      }
    >
      <>
        <p className="text-2xl text-gray-800 dark:text-gray-300">
          Provide VPN services for your group
        </p>

        <h4 className="font-normal mt-8 text-xl text-center lg:text-start text-gray-800 dark:text-gray-300">
          Support latest protocols:
          <br />
          <span className="inline-block mt-2">
            Hysteria2, TUICv5, SSH, Reality, VMess and more
          </span>
        </h4>
      </>
    </Sections>
  )
}

function WhatIsHiddify() {
  return (
    <div className="bg-indigo-700">
      <Container className="py-24 sm:py-32">
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What is Hiddify?
            </h2>
            <p className="mx-auto text-start mt-6 max-w-2xl text-lg leading-8 text-indigo-200">
              Hiddify-Manager is a powerful and professional anti-censorship
              toolbox, which is a multi-user panel with an effortless
              installation and supporting more than 20 protocols including
              Reality and Telegram proxy to circumvent filtering. It's optimized
              for censorship circumvention in China, Russia and Iran and
              Recommended by Xray. It's a great replacement of X-Ul panel.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Impact() {
  return (
    <section className="py-24 lg:py-32 border-0 border-t-2 border-solid border-t-indigo-50 dark:border-t-indigo-300/10 ">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Hiddify impact in numbers
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
              <div
                key={stat.id}
                className="flex flex-col gap-1 bg-gray-400/20 p-8"
              >
                <dt className="text-base font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 m-0">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map(faq => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 m-0">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className="dark:bg-gray-950">
        <Hero />
        <HiddifyClient />
        <HiddifyServer />
        <Impact />
        <WhatIsHiddify />
        <FAQ />
      </main>
    </Layout>
  )
}
