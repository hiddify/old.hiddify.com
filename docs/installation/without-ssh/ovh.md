---
sidebar_position: 2
id: quick-install-ovh
title: نصب در OVH
tags:
  - نصب سریع
  - OVH
  - بدون SSH
---

#### ویدئوی‌های آموزشی

- [آموزش کامل مراحل نصب](https://www.youtube.com/watch?v=06fMizOb-DE) ( در
  ویدئوی زیر تمامی مراحل شامل نصب پروکسی و تنظیم دامنه و زیردامنه با جزییات کامل
  شرح داده شده است.)

## مراحل نصب

1. کد زیر را کپی کنید

```
#cloud-config
package_upgrade: true
packages:
  - apt-transport-https
  - ca-certificates
  - curl
  - wget
  - gnupg-agent
  - software-properties-common
  - git

runcmd:
  - cd /opt
  - git clone https://github.com/hiddify/hiddify-config/
  - cd hiddify-config
  - bash install.sh

final_message: "The system is finally up, after $UPTIME seconds"
output: { all: "| tee -a /root/cloud-init-output.log" }

# you can see the generated link from the website by using http://yourip/ or https://yourip.sslip.io in one hour, after that, it will be disapear.
```

2. یادتون نره حداقل 10 دقیقه صبر کنیدا

3. حالا باید دامنه را تنظیم کنیم. بر روی
   [این لینک](https://github.com/hiddify/hiddify-config/wiki/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C-%D8%AA%D9%86%D8%B8%DB%8C%D9%85-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D9%88-%D9%86%D9%87%D8%A7%DB%8C%DB%8C-%DA%A9%D8%B1%D8%AF%D9%86-%D9%86%D8%B5%D8%A8)
   کلیک کنید تا نصب را نهایی کنید.
