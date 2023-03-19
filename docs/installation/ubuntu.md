---
sidebar_position: 4
id: ubuntu
title: نصب در Ubuntu
tags:
  - نصب
  - هیدیفای
  - ubuntu
---

#### قبل از نصب

> اگر اطلاعات مهم یا سرویس مهمی دارید توجه داشته باشید که با نصب این کانفیگ ممکن است با سرویس های دیگر شما تداخل ایجاد شود. لذا خواهشمند است هیچ سرویس خاصی بر روی سرور شما نصب نباشد.

## مراحل نصب در اوبونتو

1. برای نصب دستور زیر را در ترمینال کپی کنید و اجرا کنید
   - این کد فقط بر روی ** (َUbuntu)اوبونتو** قابل اجرا هست و بر روی ورژن ** 20.04 و 22.04 ** تست شده است.

```bash
sudo apt update && sudo apt install curl
sudo bash -c "$(curl -Lfo- https://raw.githubusercontent.com/hiddify/hiddify-config/main/common/download_install.sh)"
```

2. در پایان نصب لینکی ایجاد می‌شود که لینک تنظیم پروکسی شما است.
3. روی لینک کلیک کنید تا وارد پنل خود شوید

### به روز رسانی

برای آپدیت دستی دستور زیر را در ترمینال کپی کنید و اجرا کنید.

```bash
cd /opt/hiddify-config
sudo bash update.sh
```

---

#### پشتیبانی از CDN (اختیاری)

برای سرعت بالاتر و گذر از اینترانت کافی است که یک دامنه خریداری کنید (برای مثال از
[اینجا به قیمت ۱ دلار](https://www.namecheap.com/promos/99-cent-domain-names/)
یا
[اینجا رایگان](https://www.freenom.com/)

- قبل از خرید دامنه ابتدا دامنه را چک کنید که در ابرآروان مورد پذیرش قرار دهد
- سپس یک اکانت در ابرآروان ایجاد کنید میتوانید با یک شماره خارجی اینکار را انجام دهید
- سپس nameserver بر روی دامنه ای که خریداری کرده اید را مطابق اعلامی ابرآروان پر کنید
- سپس روی زیر دامنه دلخواه، آی پی سرور را تنظیم کنید و تیک کلود سرویس را تنظیم کنید و سپس به جای `myservice.hiddify.com` زیردامنه جدید خود را تنظیم کنید. لازم است این زیر دامنه با دامنه ای که در بالا انتخاب کرده اید متفاوت باشد.
- سپس لینک زیر را با تغییر در نامه دامنه در مرورگر جهت مشاهده تنظیمات باز کنید.

در زیر توضیحات با تصویر نشان داده شده است.

---

#### Arvancloud setup

4. Log in to the Arvancloud account and add your domain.

```
Domain List > Add new domains
```

![Arvancloud dashboard > Add new domain](https://raw.githubusercontent.com/WeAreMahsaAmini/FreeInternet/main/protocols/media/arvanclound_adddomain.jpg "Click on Add new domain")

Then:

- Enter your domain name
- Select Free plan
- Skip DNS Records
- Note the nameservers presented on the last step

![Add new domain > Nameservers](https://raw.githubusercontent.com/WeAreMahsaAmini/FreeInternet/main/protocols/media/arvanclound_nameservers.jpg "Copy these nameservers")

- Go to your domain registrar (the website where you bought your domain, e.g. Godaddy, Namecheap, ...)
- Update the nameservers to the one you got in Arvancloud (after adding the domain).

After your domain nameservers changed successfully (depending on the registrar, it can take a few hours, but it's usually quite fast), your domain is now using Arvancloud DNS.

5. Connect your domain to your server's IP address using `A` records. Make sure the `Cloud Service` option is enabled for each record.
   ![Add new domain > Nameservers](https://raw.githubusercontent.com/WeAreMahsaAmini/FreeInternet/main/protocols/media/arvanclound_add_dns.jpg "Enable cloud services")

6. Go to `HTTPS settings` on the navbar, select `Issue certificate`. It will take around 30 minutes for the certificate to be ready.

7. After the certificate is issued, enable the `Activate HTTPS` option.
   ![HTTPS Settings > Activate HTTPS](https://raw.githubusercontent.com/WeAreMahsaAmini/FreeInternet/main/protocols/media/arvanclound_https.jpg "Enable cloud services")

توضیحات بخش CDN برگرفته از دوستان  
[FreeInternet](https://github.com/WeAreMahsaAmini/FreeInternet/tree/main/protocols/shadowsocks-v2ray-tls)
