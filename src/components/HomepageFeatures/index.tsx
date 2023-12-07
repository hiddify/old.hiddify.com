import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  imageSRC: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.featureList_title_1",
      message: "مقاوم در برابر فیلترینگ",
    }),
    imageSRC: require("@site/static/img/feature_anti-censorship.png").default,
    description: (
      <Translate id="homepage.featureList_description_1">
        پشتیبانی از پروتکلهای Vmess, Vless, Trojan, Telegram, MTProto, Xray و با قابلیت کانفیگ آیپی
        خودکار برای کلادفلر
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.featureList_title_2",
      message: "پروکسی هوشمند",
    }),
    imageSRC: require("@site/static/img/feature_smart-proxy.png").default,
    description: (
      <Translate id="homepage.featureList_description_2">
        پنل گذر از فیلترینگ با امکان نصب سریع به همراه پروکسی هوشمند برای اتصال به اینترنت در سه
        حالت مختلف
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.featureList_title_3",
      message: "مدیریت یکپارچه‌ی کاربران",
    }),
    imageSRC: require("@site/static/img/feature_user-management.png").default,
    description: (
      <Translate id="homepage.featureList_description_3">
        قابلیت افزودن و مدیریت کاربران و اعمال محدودیت زمان و حجم استفاده شده در سرورهای مختلف
      </Translate>
    ),
  },
];

function Feature({ title, imageSRC, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imageSRC} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
