import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'نصب سریع',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        پنل گذر از فیلترینگ چند کاربره‌ی هیدیفای، با امکان نصب خیلی راحت و نصب
        بیش از ۲۰ پروتوکل گذر از فیلترینگ و پروکسی تلگرام
      </>
    ),
  },
  {
    title: 'پروکسی هوشمند',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        با استفاده از کلاینت کلش و پنل هایدیفای می‌تونین در ۳ حالت به اینترنت
        وصل بشید{' '}
      </>
    ),
  },
  {
    title: 'مدیریت کاربران',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        تعریف چندین کاربر با امکان تعیین مدت زمان استفاده و تعریف میزان مصرف
        برای هر کاربر با امکان مشاهده زمان و حجم مصرف شده
      </>
    ),
  },
]

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
