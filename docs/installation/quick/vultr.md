---
sidebar_position: 1
id: quick-install-vultr
title: نصب در Vultr
tags:
  - نصب سریع
  - vultr
  - بدون SSH
---

import YouTube from "react-youtube";

### ویدئوی‌ آموزشی مراحل نصب

<YouTube videoId="hRRg10BURJI" opts={{ width: "100%" }} />

---

## مراحل نصب

1. در مرحله انتخاب سیستم عامل، حتما گزینه Ubuntu 22.04 را انتخاب کنید.
2. کد زیر را کپی کنید.

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
 # uncomment it for using a special secret other wise it will be createed automatically
 # - echo "USER_SECRET=0123456789abcdef0123456789abcdef" >config.env
 # - echo "MAIN_DOMAIN=" >>config.env
  - echo "TELEGRAM_AD_TAG=" >>config.env
  - bash install.sh

final_message: "The system is finally up, after $UPTIME seconds"
output: { all: "| tee -a /root/cloud-init-output.log" }

# you can see the generated link from the website by using http://yourip/ or https://yourip.sslip.io in one hour, after that, it will be disapear.
```

3. در قسمت سرور تیک گزینه Enable Cloud-Init User-Data را بزنید و کد کپی شده را
   در آن قرار دهید. پس از حداکثر ۱۰ تا ۱۵ دقیقه پروکسی شما فعال خواهد بود.

![Group 1](https://user-images.githubusercontent.com/79760104/221190008-239cd200-4184-4c05-82ea-ff00a47e920e.jpg)

4. در آخر باید دامنه را تنظیم کنیم و نصب را **نهایی** کنیم. برای اینکار به صفحه [نهایی کردن نصب](/docs/installation/finalize) بروید.
