import React, { ReactElement, ReactNode } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Disclosure from "../components/Disclosure";
import AndroidSVG from "@site/static/icons/Android.svg";
import LinuxSVG from "@site/static/icons/linux.svg";
import MacosSVG from "@site/static/icons/MacOS-Finder.svg";
import WindowsSVG from "@site/static/icons/microsoft-windows.svg";
import AppleSVG from "@site/static/icons/Apple.svg";
import Link from "@docusaurus/Link";

type IconWrapperProps = {
  title: string;
  children: ReactElement;
};
const IconWrapper = ({ title, children }: IconWrapperProps) => {
  return (
    <a
      href="https://app.hiddify.com/"
      target="_blank"
      className="flex flex-col items-center text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-500"
    >
      {children}
      <span className="mt-1.5 select-none font-normal">{title}</span>
    </a>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout noFooter={true} title="Hiddify" description="Hiddify, for a free internet">
      <main className="px-4 py-28 text-gray-600 md:px-14 dark:text-gray-300">
        <h1 className="text-center text-7xl font-bold text-black md:text-8xl lg:text-9xl dark:text-white ">
          Hiddify, for a free internet
        </h1>
        <p className="mx-auto mt-5 max-w-[604px] text-center text-2xl">
          It’s our mission to to ensure everyone can access free internet easily by Hiddify, A
          Powerful and Professional Anti-censorship Toolbox
        </p>
      </main>

      <section className="my-52 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="object-fit rounded object-center"
              alt="hero"
              src="/img/git-en-reedit.png"
            />
          </div>
          <div className="flex flex-col text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow  lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-50">
              Hiddify
            </h1>
            <p className="mb-4 text-xl leading-relaxed text-black dark:text-white">
              Build your own VPN Server by only a few clicks to maximize security
            </p>

            <div className=" mt-6 flex w-full items-center justify-between gap-6 sm:gap-10 md:max-w-[300px]  lg:gap-10">
              <IconWrapper title="Android">
                <AndroidSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper title="IOS">
                <AppleSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper title="Windows">
                <WindowsSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper title="Linux">
                <LinuxSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper title="MacOS">
                <MacosSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
            </div>

            <p className="mt-4 text-lg">
              Uses latest protocols:
              <br></br>
              Hysteria2, TUICv5, SSH, Reality, VMess and more
            </p>
            <div className="mt-12 flex justify-center">
              <a
                href="https://app.hiddify.com/"
                target="_blank"
                tabIndex={-1}
                rel="noopener noreferrer"
                className="inline-flex rounded border-0 bg-gray-200 px-6 py-2 text-lg text-gray-700 hover:bg-indigo-500 hover:text-white focus:outline-none"
              >
                Download
              </a>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-200 px-6 py-2 text-lg text-gray-700 hover:bg-gray-300 focus:outline-none">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font text-gray-600 dark:text-gray-300">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-50">
              Hiddify Manager
            </h1>
            <p className="mb-4 text-xl leading-relaxed text-black dark:text-white">
              Build your own VPN Server
              <br></br>
              Provide VPN services for your group
            </p>

            <p className="text-md my-12 text-lg leading-relaxed">
              Downloaded more than X times Supports latest protocols:
              <br></br>
              Hysteria2, TUICv5, SSH, Reality, VMess and more
            </p>

            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-gray-200 px-6 py-2 text-lg text-gray-700 hover:bg-indigo-500 hover:text-white focus:outline-none">
                Setup
              </button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-200 px-6 py-2 text-lg text-gray-700 hover:bg-gray-300 focus:outline-none">
                Read more
              </button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="/img/234265624-36ee0a18-d4e8-4803-a9ad-331a7c5998e3.png"
            />
          </div>
        </div>
      </section>

      <section className="body-font my-20 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto flex flex-col px-5 py-24 md:flex-row ">
          <h2 className="text-4xl font-bold text-black md:w-1/3 dark:text-white">
            What is Hiddify?
          </h2>
          <p className="mt-4 text-xl md:w-1/2">
            Hiddify-Manager is a powerful and professional anti-censorship toolbox, which is a
            multi-user panel with an effortless installation and supporting more than 20 protocols
            including Reality and Telegram proxy to circumvent filtering. It's optimized for
            censorship circumvention in China, Russia and Iran and Recommended by Xray. It's a great
            replacement of X-UI panel.
          </p>
        </div>
      </section>

      <section className="body-font text-gray-600 dark:text-gray-300">
        <div className="container mx-auto px-5 py-24">
          <h2 className="text-center text-4xl font-bold text-black dark:text-white">
            The Advantages of Hiddify
          </h2>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <img
                alt="team"
                className="object-fit mb-4 h-56 w-full flex-shrink-0 rounded-lg object-center"
                src="/img/undraw_progressive_app_m-9-ms.svg"
              />
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                Cross Platform
              </h3>
              <p className="mt-2 text-center text-lg">
                Built with Flutter, Hiddify supports multiple platforms.
              </p>
            </div>
            <div>
              <img
                alt="team"
                className="object-fit mb-4 h-56 w-full flex-shrink-0 rounded-lg object-center"
                src="/img/undraw_connected_world_wuay.svg"
              />
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                Decentralized
              </h3>
              <p className="mt-2 text-center text-lg">Anyone can run a Hiddify server.</p>
            </div>
            <div>
              <img
                alt="team"
                className="object-fit mb-4 h-56 w-full flex-shrink-0 rounded-lg object-center"
                src="/img/undraw_maintenance_re_59vn.svg"
              />
              <h3 className="mt-2 text-center  text-2xl font-bold text-black dark:text-white">
                Open-Source and Free
              </h3>
              <p className="mt-2 text-center text-lg">
                An essential aspect of Advantage 1, emphasizing its importance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font mb-20 mt-40 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto px-5 py-24">
          <h2 className="text-center text-4xl font-bold text-black dark:text-white">
            Hiddify Impact in numbers
          </h2>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-3">
            <div>
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                Panel Download
              </h3>
              <p className="mt-2 text-center text-lg">
                A short text about the advantage 1 and how it is vital.
              </p>
            </div>
            <div>
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                App download
              </h3>
              <p className="mt-2 text-center text-lg">
                A short text about the advantage 1 and how it is vital.
              </p>
            </div>
            <div>
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                Advantage 1
              </h3>
              <p className="mt-2 text-center text-lg">
                A short text about the advantage 1 and how it is vital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 px-4 py-20 text-gray-600 md:px-14 dark:bg-gray-700 dark:text-gray-300">
        <h2 className="text-center text-4xl font-bold text-black dark:text-white">
          Frequently asked questions
        </h2>

        <ul className="mx-auto mt-20 max-w-5xl list-none flex-col md:w-[600px]">
          {[
            {
              question: "What is Hiddify?",
              answer:
                "Hiddify is a robust and professional anti-censorship toolbox designed to provide users with secure and unrestricted access to online content. It acts as a free VPN service, offering privacy and anonymity while browsing the internet.",
            },
            {
              question: "Is Hiddify truly free?",
              answer:
                "Yes, Hiddify is completely free to use. We believe in providing a reliable and accessible solution for users seeking privacy and unrestricted internet access without any cost.",
            },
            {
              question: "How does Hiddify ensure my privacy?",
              answer:
                "Hiddify employs advanced encryption technologies to safeguard your online activities and data. By routing your internet traffic through secure servers, Hiddify helps protect your identity and ensures a private browsing experience.",
            },
            {
              question: "Can I use Hiddify on multiple devices?",
              answer:
                "Absolutely! Hiddify supports multiple devices, allowing you to enjoy a secure and private connection on your desktop, laptop, tablet, or smartphone. We offer user-friendly apps for various platforms.",
            },
            {
              question: "Does Hiddify have any bandwidth limitations?",
              answer:
                "No, Hiddify does not impose any bandwidth limitations on its users. Enjoy unlimited access to the internet without worrying about data restrictions.",
            },
            {
              question: "Is Hiddify compatible with streaming services?",
              answer:
                "Yes, Hiddify is designed to work seamlessly with popular streaming services, ensuring you can access region-restricted content without any hassle. Enjoy your favorite shows and movies from anywhere in the world.",
            },
          ].map((faq, index) => (
            <Disclosure key={index} title={faq.question}>
              {faq.answer}
            </Disclosure>
          ))}
        </ul>
      </section>

      <footer className="body-font bg-black text-gray-400">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start ">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
              <img src="/img/logo.png" className="h-10 w-10 rounded-full bg-white p-2 text-white" />
              <span className="ml-3 text-xl">Hiddify</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              freedom of speech and freedom of access to information are
            </p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
                Download Client
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    IOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Android
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Windows
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Mac
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Chrome OS
                  </a>
                </li>

                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Linux
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
                Setup Manager
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link
                    href="docs/installation/normal/ubuntu-installation"
                    className="text-gray-400 hover:text-white"
                  >
                    Ubuntu
                  </Link>
                </li>
                <li>
                  <Link
                    href="docs/installation/normal/docker-installation"
                    className="text-gray-400 hover:text-white"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="docs/installation/quick/quick-install-hetzner"
                  >
                    Hetzner
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-oracle-cloud"
                    className="text-gray-400 hover:text-white"
                  >
                    Oracle Cloud
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-vultr"
                    className="text-gray-400 hover:text-white"
                  >
                    Vultr
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-ovh"
                    className="text-gray-400 hover:text-white"
                  >
                    OVH
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
                Help
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-400 hover:text-white" href="https://t.me/hiddify">
                    Telegram Support Group
                  </a>
                </li>
                <Link href="docs/intro">
                  <a className="text-gray-400 hover:text-white">Docs</a>
                </Link>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
                Follow us
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="https://twitter.com/hiddify_com"
                  >
                    Twitter (X)
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="https://www.youtube.com/@hiddify"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Instagram</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="https://t.me/hiddify">
                    Telegram Channel
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hiddify/hiddify-config"
                    className="text-gray-400 hover:text-white"
                  >
                    Github
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 bg-opacity-75">
          <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
            <p className="text-center text-sm text-gray-400 sm:text-left">
              © 2024 Hiddify team. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
