import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.featureList_title_1",
      message: "نصب سریع",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <Translate id="homepage.featureList_description_1">
        پنل گذر از فیلترینگ چند کاربره‌ی هیدیفای، با امکان نصب خیلی راحت و نصب
        بیش از ۲۰ پروتوکل گذر از فیلترینگ و پروکسی تلگرام
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.featureList_title_2",
      message: "پروکسی هوشمند",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <Translate id="homepage.featureList_description_2">
        با استفاده از کلاینت کلش و پنل هیدیفای می‌تونین در ۳ حالت به اینترنت وصل
        بشید
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.featureList_title_3",
      message: "مدیریت کاربران",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <Translate id="homepage.featureList_description_3">
        تعریف چندین کاربر با امکان تعیین مدت زمان استفاده و تعریف میزان مصرف
        برای هر کاربر با امکان مشاهده زمان و حجم مصرف شده
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
