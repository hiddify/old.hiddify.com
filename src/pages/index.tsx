import React, { ReactElement, useEffect, useState } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Disclosure from "../components/Disclosure";
import AndroidSVG from "@site/static/icons/Android.svg";
import LinuxSVG from "@site/static/icons/linux.svg";
import MacosSVG from "@site/static/icons/MacOS-Finder.svg";
import WindowsSVG from "@site/static/icons/microsoft-windows.svg";
import AppleSVG from "@site/static/icons/Apple.svg";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

import { FaRegStarHalfStroke } from "react-icons/fa6";

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

function detectOS(): string {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) os = "macos";
  else if (iosPlatforms.indexOf(platform) !== -1) os = "ios";
  else if (windowsPlatforms.indexOf(platform) !== -1) os = "windows";
  else if (/Android/.test(userAgent)) os = "android";
  else if (!os && /Linux/.test(platform)) os = "linux";

  return os;
}

export default function Home(): JSX.Element {
  const [platformText, setPlatformText] = useState("");

  useEffect(() => {
    setPlatformText(detectOS());
  }, []);
  return (
    <Layout
      noFooter={true}
      title={translate({ id: "hiddify" })}
      description={translate({ id: "home.main.title" })}
    >
      <div className="clearfix absolute -z-10 h-full max-h-[500px] w-full max-w-[500px] rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-3xl filter md:left-[10%] md:top-[15%] md:animate-blob "></div>
      <div className="animation-delay-2000 animat clearfix absolute -z-10 h-full max-h-[500px] w-full max-w-[500px] bg-pink-300 opacity-30 mix-blend-multiply blur-3xl filter md:left-[20%] md:top-24 md:animate-blob"></div>
      <div className="animation-delay-4000 clearfix absolute -z-10 h-full max-h-[500px]  w-full max-w-[500px] bg-blue-300 opacity-30 mix-blend-multiply blur-3xl filter md:left-[30%]  md:top-[20%] md:animate-blob"></div>
      <div className="clearfix absolute -z-10 h-full max-h-[500px] w-full max-w-[500px] rounded-full bg-purple-300 opacity-30 mix-blend-multiply blur-3xl filter md:left-[20%]  md:top-[15%] md:animate-blob "></div>

      <main className="relative px-4 py-28 text-gray-600 md:px-14 dark:text-gray-300">
        <h1 className="text-center text-6xl font-semibold text-black md:text-7xl lg:text-8xl dark:text-white">
          <Translate id="home.main.title">Hiddify, for a free internet</Translate>
        </h1>
        <p className="mx-auto mt-5 max-w-[604px] text-center text-2xl">
          <Translate id="home.main.description">
            It’s our mission to to ensure everyone can access free internet easily by Hiddify, A
            Powerful and Professional Anti-censorship Toolbox
          </Translate>
        </p>
      </main>

      <section className="my-52 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className=" w-full max-w-[600px]">
            <img
              className="h-full w-full rounded object-contain"
              alt="hiddify next"
              src={useBaseUrl(
                translate({
                  id: "home.hiddify_next.image",
                }),
              )}
            />
          </div>
          <div className="flex flex-col text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow  lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-50">
              <Translate id="hiddify">Hiddify</Translate>
            </h1>
            <p className="mb-4 text-xl leading-relaxed text-black dark:text-white">
              <Translate id="home.hiddify_next.description">
                Build your own VPN Server by only a few clicks to maximize security
              </Translate>
            </p>

            <div className=" mt-6 flex w-full items-center justify-between gap-6 sm:gap-10 md:max-w-[300px]  lg:gap-10">
              <IconWrapper
                title={translate({
                  id: "android",
                })}
              >
                <AndroidSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper
                title={translate({
                  id: "ios",
                })}
              >
                <AppleSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper
                title={translate({
                  id: "windows",
                })}
              >
                <WindowsSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper
                title={translate({
                  id: "linux",
                })}
              >
                <LinuxSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
              <IconWrapper
                title={translate({
                  id: "macos",
                })}
              >
                <MacosSVG className="h-12 w-12" aria-hidden="true" />
              </IconWrapper>
            </div>

            <p className="mt-4 text-lg">
              <Translate id="home.hiddify_next.description.2">Uses latest protocols:</Translate>
              <br></br>
              <Translate id="home.hiddify_next.description.3">
                Hysteria2, TUICv5, SSH, Reality, VMess and more
              </Translate>
            </p>
            <div className="mt-12 flex justify-center gap-5">
              <a
                href="https://app.hiddify.com/"
                target="_blank"
                tabIndex={-1}
                rel="noopener noreferrer"
                className="inline-flex rounded-md border-0 bg-[#B8C7F4] px-6 py-2 text-lg text-gray-700 hover:bg-indigo-500 hover:text-white focus:outline-none"
              >
                <Translate id="home.hiddify_next.button.download_for">Download for</Translate>{" "}
                {translate({ id: platformText })}
              </a>
              <button className="inline-flex rounded-md border-0 bg-[#B8C7F4] px-6 py-2 text-lg text-gray-700 hover:bg-indigo-500 hover:text-white focus:outline-none">
                <Translate id="theme.hiddify_next.button.read_more">Read more</Translate>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font text-gray-600 dark:text-gray-300">
        <div className="container  mx-auto flex flex-col items-center px-8 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h2 className="mb-4 text-xl font-semibold leading-relaxed text-black dark:text-white">
              <Translate id="home.hiddify_manager.title.1">Build your own VPN Server</Translate>
            </h2>
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-50">
              <Translate id="home.hiddify_manager.title.2">Hiddify Manager</Translate>
            </h1>
            <p className="mb-4 text-xl leading-relaxed text-black dark:text-white">
              <Translate id="home.hiddify_manager.description.1">
                Provide VPN services for your group
              </Translate>
            </p>

            <p className="text-md my-12 text-lg leading-relaxed">
              <Translate id="home.hiddify_manager.description.2">
                Downloaded more than X times Supports latest protocols:
              </Translate>
              <br></br>
              <Translate id="home.hiddify_manager.description.3">
                Hysteria2, TUICv5, SSH, Reality, VMess and more
              </Translate>
            </p>

            <div className="flex justify-center gap-5">
              <button className="inline-flex rounded-md border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                <Translate id="home.hiddify_manager.button.setup">Setup</Translate>
              </button>
              <button className="inline-flex rounded-md border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                <Translate id="theme.hiddify_manager.button.read_more">Read more</Translate>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[700px]">
            <img
              className="h-full w-full rounded object-fill"
              alt="Hiddify Manager"
              src={useBaseUrl(
                translate({
                  id: "home.hiddify_manager.image",
                }),
              )}
            />
          </div>
        </div>
      </section>

      <section className="body-font my-20 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto flex flex-col px-5 py-24 md:flex-row ">
          <h2 className="text-4xl font-bold text-black md:w-1/3 dark:text-white">
            <Translate id="home.whatis.title">What is Hiddify?</Translate>
          </h2>
          <p className="mt-4 text-xl md:w-1/2">
            <Translate id="home.whatis.description">
              Hiddify-Manager is a powerful and professional anti-censorship toolbox, which is a
              multi-user panel with an effortless installation and supporting more than 20 protocols
              including Reality and Telegram proxy to circumvent filtering. It's optimized for
              censorship circumvention in China, Russia and Iran and Recommended by Xray. It's a
              great replacement of X-UI panel.
            </Translate>
          </p>
        </div>
      </section>

      <section className="body-font text-gray-600 dark:text-gray-300">
        <div className="container mx-auto px-5 py-24">
          <h2 className="text-center text-4xl font-bold text-black dark:text-white">
            <Translate id="home.advantages.title">The Advantages of Hiddify</Translate>
          </h2>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <img
                alt="team"
                className="object-fit mb-4 h-56 w-full flex-shrink-0 rounded-lg object-center"
                src="https://dummyimage.com/300x200"
              />
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                <Translate id="home.advantages.1.title">Cross Platform</Translate>
              </h3>
              <p className="mt-2 text-center text-lg">
                <Translate id="home.advantages.1.description">
                  Built with Flutter, Hiddify supports multiple platforms.
                </Translate>
              </p>
            </div>
            <div>
              <img
                alt="team"
                className="object-fit mb-4 h-56 w-full flex-shrink-0 rounded-lg object-center"
                src="https://dummyimage.com/300x200"
              />
              <h3 className="mt-2 text-center text-2xl font-bold text-black dark:text-white">
                <Translate id="home.advantages.2.title">Decentralized</Translate>
              </h3>
              <p className="mt-2 text-center text-lg">
                <Translate id="home.advantages.2.description">
                  Anyone can run a Hiddify server.
                </Translate>
              </p>
            </div>
            <div>
              <img
                alt="team"
                className="object-fit mb-4 h-56 w-full flex-shrink-0 rounded-lg object-center"
                src="https://dummyimage.com/300x200"
              />
              <h3 className="mt-2 text-center  text-2xl font-bold text-black dark:text-white">
                <Translate id="home.advantages.3.title">Open-Source and Free</Translate>
              </h3>
              <p className="mt-2 text-center text-lg">
                <Translate id="home.advantages.3.description">free, and free forever</Translate>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font mb-20 mt-10 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap text-center">
            <div className="w-1/2 p-4 sm:w-1/3">
              <h2 className="title-font text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-100">
                200k
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/3">
              <h2 className="title-font  text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-100">
                <span>4.8</span>
                <FaRegStarHalfStroke size="25px" />
              </h2>
              <p className="leading-relaxed">Google Play</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/3">
              <h2 className="title-font text-3xl font-medium text-gray-900 sm:text-4xl dark:text-gray-100">
                soon
              </h2>
              <p className="leading-relaxed">App Store</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative my-10 px-4 py-20 text-gray-600 md:px-14 dark:text-gray-300">
        <div className="clearfix absolute -z-10 h-full max-h-[500px] w-full max-w-[500px] rounded-md bg-purple-300 opacity-30 mix-blend-multiply blur-3xl filter md:bottom-0 md:right-96 md:animate-blob"></div>
        <div className="animation-delay-2000 clearfix absolute -z-10 h-full max-h-[500px] w-full max-w-[500px] rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-3xl filter md:bottom-20  md:right-2 md:animate-blob"></div>
        <div className="animation-delay-4000 clearfix absolute  -z-10 h-full max-h-[500px]  w-full max-w-[500px] rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-3xl filter md:bottom-40  md:right-56 md:animate-blob"></div>

        <h2 className="text-center text-3xl font-bold text-black md:text-4xl dark:text-white">
          <Translate id="home.faq.title">Frequently asked questions</Translate>
        </h2>

        <ul className="relative mx-auto mt-20 w-full max-w-5xl list-none flex-col">
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

      <footer className="body-font bg-[#455FE9] text-gray-400 dark:bg-opacity-60">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start ">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
              <img
                src={useBaseUrl("/img/logo.png")}
                className="h-10 w-10 rounded-full bg-white p-2 text-white"
              />
              <span className="ml-3 text-xl">Hiddify</span>
            </a>
            <p className="mt-2 text-sm text-gray-100">
              freedom of speech and freedom of access to information are
            </p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
                <Translate id="home.footer.download_client">Download Client</Translate>
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-200 hover:text-white"
                  >
                    <Translate id="ios">IOS</Translate>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-200 hover:text-white"
                  >
                    <Translate id="android">Android</Translate>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-200 hover:text-white"
                  >
                    <Translate id="windows">Windows</Translate>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-200 hover:text-white"
                  >
                    <Translate id="macos">Mac OS</Translate>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-gray-200 hover:text-white"
                  >
                    <Translate id="linux">Linux</Translate>
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
                    className="text-gray-200 hover:text-white"
                  >
                    Ubuntu
                  </Link>
                </li>
                <li>
                  <Link
                    href="docs/installation/normal/docker-installation"
                    className="text-gray-200 hover:text-white"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-200 hover:text-white"
                    href="docs/installation/quick/quick-install-hetzner"
                  >
                    Hetzner
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-oracle-cloud"
                    className="text-gray-200 hover:text-white"
                  >
                    Oracle Cloud
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-vultr"
                    className="text-gray-200 hover:text-white"
                  >
                    Vultr
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-ovh"
                    className="text-gray-200 hover:text-white"
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
                  <a className="text-gray-200 hover:text-white" href="https://t.me/hiddify">
                    Telegram Support Group
                  </a>
                </li>
                <Link href="docs/intro">
                  <a className="text-gray-200 hover:text-white">Docs</a>
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
                    className="text-gray-200 hover:text-white"
                    href="https://twitter.com/hiddify_com"
                  >
                    Twitter (X)
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 hover:text-white"
                    href="https://www.youtube.com/@hiddify"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 hover:text-white">Instagram</a>
                </li>
                <li>
                  <a className="text-gray-200 hover:text-white" href="https://t.me/hiddify">
                    Telegram Channel
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hiddify/hiddify-config"
                    className="text-gray-200 hover:text-white"
                  >
                    Github
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <p className="text-center text-sm text-gray-200 sm:text-left">
              © 2024 Hiddify team. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
