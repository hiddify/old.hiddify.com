import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
// import useBaseUrl from "@docusaurus/useBaseUrl";
import Disclosure from "../components/Disclosure";
// import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import GlobeImage from "@site/static/assets/globe.png";
import HiddifyNext from "@site/static/assets/hiddify-next.png";
import HiddifyManagerImage from "@site/static/assets/hiddify-manager.png";
import CrossPLatformImage from "@site/static/assets/cross-platform.png";
import SecureImage from "@site/static/assets/secure.png";
import ProcessorImage from "@site/static/assets/processor.png";

import HiddifyManagerLogo from "@site/static/assets/hiddify-manager-logo.png";
import HiddifyLogoWhiteBg from "@site/static/assets/hiddify-logo-white-bg.png";
import HiddifyLogo from "@site/static/assets/hiddify-logo.png";

import AndroidLogo from "@site/static/assets/platforms/android.png";
import AppleLogo from "@site/static/assets/platforms/apple.png";
import WindowsLogo from "@site/static/assets/platforms/windows.png";
import MacLogo from "@site/static/assets/platforms/mac.png";
import LinuxLogo from "@site/static/assets/platforms/linux.png";

function detectOS(): string {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) os = "MacOS";
  else if (iosPlatforms.indexOf(platform) !== -1) os = "IOS";
  else if (windowsPlatforms.indexOf(platform) !== -1) os = "Windows";
  else if (/Android/.test(userAgent)) os = "Android";
  else if (!os && /Linux/.test(platform)) os = "Linux";

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
      <div className="animation-delay-4000  absolute -z-40 h-full max-h-[800px]  w-full max-w-[700px] bg-blue-400 opacity-30 mix-blend-multiply blur-3xl filter md:left-[20%] md:animate-blob"></div>
      <div className=" absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:left-0  md:animate-blob"></div>
      <div className="animation-delay-2000 animat  absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-pink-300 opacity-30 mix-blend-multiply blur-3xl filter md:left-[10%] md:animate-blob"></div>
      <div className="absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:left-[30%] md:animate-blob"></div>
      <div className="absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:left-[40%] md:animate-blob"></div>
      <main className="container relative mx-auto p-4 py-52 text-[#212529]">
        <h1 className="z-10 text-3xl font-semibold md:text-6xl lg:text-8xl">
          Hiddify,
          <br /> Internet freedom Solution
        </h1>
        <p className="text-secondary z-10 text-lg md:text-2xl">
          All you need for an unrestricted internet
        </p>

        <img
          src={GlobeImage}
          alt="hero"
          className="absolute -bottom-[120px] -right-20 z-20 w-1/4"
        ></img>
      </main>
      <section className="container relative mx-auto  py-20">
        <h2 className="text-secondary z-10 text-center text-lg md:text-2xl">
          Two Products That Work Together
        </h2>

        <div className="mt-4 flex gap-16 rounded-xl border border-white bg-[rgba(255,255,255,0.5)] p-8 py-16 backdrop-blur-xl backdrop-filter">
          <div className="w-1/2 flex-col justify-center px-16">
            <h3 className="text-secondary z-10 text-center text-lg md:text-2xl">
              VPN client app – to access the internet
            </h3>

            <img src={HiddifyLogo} alt="hero" className="mx-auto my-12 w-[178px]"></img>
            <p className="text-secondary mx-20 mt-4 text-center">
              Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
              your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
              an uncensored internet.
            </p>
          </div>
          <div className="w-1/2 flex-col justify-center px-16">
            <h3 className="text-md text-secondary z-10 text-center md:text-2xl">
              VPN client app – to access the internet
            </h3>

            <img
              src={HiddifyManagerLogo}
              alt="hero"
              className="mx-auto my-4 h-[109px] w-[399px]"
            ></img>
            <p className="text-secondary mx-20 mt-4 text-center">
              Hiddify Manager makes it easy to create your own VPN which you can manage on either
              desktop or mobile. Share it with your groups, even hundreds of people.
            </p>
          </div>
        </div>

        <div className="animation-delay-4000  absolute -z-40 h-full max-h-[800px]  w-full max-w-[700px] bg-blue-400 opacity-30 mix-blend-multiply blur-3xl filter md:left-[20%]  md:top-[20%] md:animate-blob"></div>
        <div className=" absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:left-0 md:top-[15%] md:animate-blob "></div>
        <div className="animation-delay-2000 animat  absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-pink-300 opacity-30 mix-blend-multiply blur-3xl filter md:left-[10%] md:top-24 md:animate-blob"></div>
        <div className=" absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:left-[30%]   md:animate-blob "></div>
        <div className=" absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:left-[40%]   md:animate-blob "></div>
      </section>
      <section className="text-secondary container mx-auto my-20 flex items-center px-20">
        <img src={HiddifyNext} alt="hiddify next" className="w-[391px]" />
        <div className="w-1/2">
          <p>Connect to the internet easier than ever with</p>
          <img src={HiddifyLogo} alt="hiddify logo" className="my-4 w-1/4" />

          <ul className="list-disc">
            <li>Easy to use</li>
            <li>
              Supports Hysteria2, TUIC, SSH, Reality, VMess, VLESS, and{" "}
              <span className="underline underline-offset-4">20 more protocols.</span>
            </li>
          </ul>

          <ul className="my-6 flex gap-5">
            <li className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white bg-[#6c757d17]">
              <img src={AndroidLogo} alt="android" />
            </li>
            <li className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white bg-[#6c757d17]">
              <img src={AppleLogo} alt="ios" />
            </li>
            <li className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white bg-[#6c757d17]">
              <img src={WindowsLogo} alt="windows" />
            </li>
            <li className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white bg-[#6c757d17]">
              <img src={MacLogo} alt="mac" />
            </li>
            <li className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white bg-[#6c757d17]">
              <img src={LinuxLogo} alt="linux" />
            </li>
          </ul>

          <div>
            <button className="border-primary text-primary rounded-md border-2 px-4 py-2 text-lg">
              Read more
            </button>

            <button className="bg-primary ml-4 rounded-md px-4 py-2 text-lg text-white">
              Download for {platformText}
            </button>
          </div>
        </div>
      </section>
      <section className="text-secondary container mx-auto my-20 flex items-center gap-7 px-20">
        <img src={HiddifyManagerImage} alt="hiddify manager" className="w-[741px]" />
        <div className="w-1/2">
          <p>Set up your own VPN for your group with</p>

          <div className="flex items-center gap-2">
            <img src={HiddifyLogoWhiteBg} alt="hiddify logo" className="my-4 w-[50px]" />
            <h2 className="text-2xl font-semibold">Hiddify Manager</h2>
          </div>

          <ul className="my-4  list-disc">
            <li>Effortless installation</li>
            <li>One of the best VPNs for Iran, China, Russia, Brazil and the whole world</li>
            <li>
              Supports Hysteria2, TUIC, SSH, Reality, VMess, VLESS, and{" "}
              <span className="underline underline-offset-4">20 more protocols.</span>
            </li>
          </ul>

          <div>
            <button className="border-primary text-primary rounded-md border-2 px-4 py-2 text-lg">
              Read more
            </button>

            <button className="bg-primary ml-4 rounded-md px-4 py-2 text-lg text-white">
              Install on server
            </button>
          </div>
        </div>
      </section>
      <section className="text-secondary container mx-auto my-20  flex items-center justify-center gap-16 text-center">
        <div className="w-[250px]">
          <img src={CrossPLatformImage} alt="cross platform" className="w-[250px]" />
          <h2 className="my-2 text-2xl font-semibold">Cross-platform</h2>
          <p>Available on Android, iOS, Window, Linux and macOS</p>
        </div>
        <div className="w-[250px]">
          <img src={SecureImage} alt="cross platform" className="w-[250px]" />
          <h2 className="my-2 text-2xl font-semibold">Secure and Ad-free</h2>
          <p>Open-source, non-commercial, and security audited</p>
        </div>

        <div className="w-[250px]">
          <img src={ProcessorImage} alt="cross platform" className="w-[250px]" />
          <h2 className="text-2xl font-semibold">Powerful Features</h2>
          <p>Auto-proxy client based on sing-box, supporting various protocols</p>
        </div>
      </section>
      <section className="ga-5 text-secondary container mx-auto  my-20 items-center justify-center border-t border-white py-20 text-center">
        <h2 className="text-center text-2xl font-semibold">Measuring Impact</h2>
        <p className="mt-2">One of the most trusted VPNs</p>

        <div className="mt-8 flex w-full items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">1,000,000+</h3>
            <p>Hiddify Manager downloads</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">400,000+</h3>
            <p>Hiddify app downloads</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              4.8 <span className="text-sm">/5</span>
            </h3>
            <p>Rating for Hiddify app on Google Play</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">3000 +</h3>
            <p>GitHub stars</p>
          </div>
        </div>
      </section>

      <section className="16 text-secondary container relative mx-auto my-20 flex flex-col items-center justify-center  gap-5 text-center ">
        <div className="clearfix absolute bottom-0 -z-10 h-full max-h-[500px] w-full max-w-[500px] rounded-md bg-purple-300 opacity-30 mix-blend-multiply blur-3xl filter  md:right-96 md:animate-blob"></div>
        <div className="animation-delay-2000 clearfix absolute -z-10 h-full max-h-[500px] w-full max-w-[500px] rounded-full bg-pink-400 opacity-30 mix-blend-multiply blur-3xl filter   md:right-2 md:animate-blob"></div>
        <div className="animation-delay-4000 clearfix absolute  -z-10 h-full max-h-[500px]  w-full max-w-[500px] rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-3xl filter   md:right-56 md:animate-blob"></div>
        <h2 className="text-center text-3xl font-semibold">Frequently Asked Questions</h2>
        <ul className="relative mx-auto mt-1 w-full max-w-5xl list-none flex-col">
          <Disclosure title="How can I make sure that Hiddify is safe?">
            Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
            your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
            an uncensored internet.
          </Disclosure>

          <Disclosure title="Why should I pay for a VPN service?">
            Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
            your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
            an uncensored internet.
          </Disclosure>
          <Disclosure title="How can I make sure that Hiddify is safe? ">
            Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
            your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
            an uncensored internet.
          </Disclosure>
          <Disclosure title="Can I use Hiddify while traveling abroad?">
            Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
            your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
            an uncensored internet.
          </Disclosure>
          <Disclosure title="Which devices does Hiddify support?">
            Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
            your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
            an uncensored internet.
          </Disclosure>
          <Disclosure title="How do I contact Hiddify’s customer support?">
            Hiddify is a user-friendly VPN (virtual private network) app that lets you connect to
            your Hiddify (or non-Hiddify) servers. Download the app on mobile or desktop and enjoy
            an uncensored internet.
          </Disclosure>
        </ul>
      </section>
      <footer className="body-font text-secondary relative border-white bg-[rgba(255,255,255,0.5)] p-4 backdrop-blur-xl backdrop-filter">
        <div className=" absolute -z-40 h-full max-h-[800px] w-full max-w-[700px] bg-purple-200  opacity-30 mix-blend-multiply blur-3xl filter md:right-[20%]   md:animate-blob "></div>

        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start ">
          <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
              <img src={HiddifyLogo} className="h-11 text-black" />
            </a>
            <p className="mt-4 text-sm">
              To ensure everyone can access the unrestricted internet easily with a powerful and
              professional anti-censorship tool
            </p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <h2 className="title-font mb-3 text-lg">Download Client</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Android
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-secondary text-sm hover:text-white"
                  >
                    IOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Windows
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-secondary text-sm hover:text-white"
                  >
                    MacOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.hiddify.com/"
                    target="_blank"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Linux
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <h2 className="title-font mb-3 text-lg">Setup Hiddify Manager</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="docs/installation/normal/ubuntu-installation"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Ubuntu
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/normal/docker-installation"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Docker
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary text-sm hover:text-white"
                    href="docs/installation/quick/quick-install-hetzner"
                  >
                    Hetzner
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-oracle-cloud"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Oracle Cloud
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-vultr"
                    className="text-secondary text-sm hover:text-white"
                  >
                    Vultr
                  </a>
                </li>
                <li>
                  <a
                    href="docs/installation/quick/quick-install-ovh"
                    className="text-secondary text-sm hover:text-white"
                  >
                    OVH
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <h2 className="title-font mb-3 text-lg">Support</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    className="text-secondary text-sm hover:text-white"
                    href="https://t.me/hiddify"
                  >
                    Visit GitHub Wiki
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary text-sm hover:text-white"
                    href="https://t.me/hiddify"
                  >
                    Join Telegram Group
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <p className="text-center text-sm  sm:text-left">
              Powered by 2024 Hiddify team. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
