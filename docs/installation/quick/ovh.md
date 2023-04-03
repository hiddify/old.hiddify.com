---
sidebar_position: 2
id: quick-install-ovh
title: نصب در OVH
tags:
  - نصب سریع
  - OVH
  - بدون SSH
---

import YouTube from "react-youtube";

# نصب سریع در OVH

### ویدئوی‌ آموزشی مراحل نصب

<YouTube videoId="06fMizOb-DE" opts={{ width: "100%" }} />

---

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

3. در آخر باید دامنه را تنظیم کنیم و نصب را **نهایی** کنیم. برای اینکار به صفحه [نهایی کردن نصب](/docs/installation/finalize) بروید.
