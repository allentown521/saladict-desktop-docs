---
title: Saladict
titleTemplate: Baidu Translation
---

# Baidu Translation

:::info
The documentation content may be outdated. Please refer to the official Baidu Translation website for the most up-to-date information.
:::

## Pricing

Baidu Translation official API has three versions: Standard, Advanced, and Premium.

The Premium version requires enterprise certification and is not suitable for individual users, so it is not covered in this documentation.

The Standard version only offers 50,000 free characters per month. After completing personal verification, you can switch to the Advanced version, which provides 1 million free characters per month. After using up the free quota, additional usage is charged at 49 yuan per million characters. The fees are charged by Baidu Translation on their own Baidu Translation Open Platform and are unrelated to Saladict.

It is recommended to enable "Free Quota Usage Alert" in My Services - General Text Translation on the Baidu Translation Platform. For example, if you have a free quota of 1 million characters, you can set the alert threshold to 900,000 characters. This way, when you consume 900,000 characters in the current month, Baidu Translation will notify you via SMS/email.

Baidu Translation bills on a daily basis. It is also recommended to top up 1 yuan on the Baidu Translation Open Platform and set up SMS alerts for when the balance falls below 1 yuan in the Financial Overview page. However, please note that daily billing means there won't be real-time notifications for usage within a day, and you'll only be notified during the daily settlement (usually around 1 AM).

## Application Steps

### Step 1: Log in to Baidu Translation Open Platform

Open the Baidu Translation Open Platform [https://fanyi-api.baidu.com/](https://fanyi-api.baidu.com/) and log in to your Baidu account. After successful login, click "Management Console".

### Step 2: Register as a Baidu Translation Developer

When entering the management console for the first time, you'll be asked to register as a Baidu Translation developer. Select "Individual Developer", fill out the form, and click "Next".
After successful registration, you'll be prompted for identity verification. If you don't want to use the Advanced version, you can click "Cancel"; otherwise, verification is required.

### Step 3: Activate "General Translation Service"

After registration, open the console [https://fanyi-api.baidu.com/api/trans/product/desktop](https://fanyi-api.baidu.com/api/trans/product/desktop), click the "Activate Now" button, then:

Select "General Translation (for text translation)" and click "Next"
Choose "Activate Standard Version"
Fill in the application name "Saladict" and click "Submit Application". You'll see an "Activation Successful" message.

### Optional Step: Switch to Advanced Version API

After completing the first three steps, you can use the Standard version API. If you want to use the Advanced version API, open the Baidu Translation Open Platform console [https://fanyi-api.baidu.com/api/trans/product/desktop](https://fanyi-api.baidu.com/api/trans/product/desktop), click the dropdown box labeled "Standard Version" to switch to Advanced version. The first time you switch to Advanced version, you'll need to complete identity verification.

### Step 4: Fill in Baidu Translation APPID and Key in Saladict

Open the Baidu Translation Open Platform console [https://fanyi-api.baidu.com/api/trans/product/desktop](https://fanyi-api.baidu.com/api/trans/product/desktop), and enter the "APP ID" and "Key" from the bottom of the page into Saladict's [Settings Page] - [Interface Settings] - [Baidu Translation Appid] and [Baidu Translation Key].

## Related Links

[Baidu Translation Open Platform](https://fanyi-api.baidu.com/)

[Baidu Translation General Translation API Pricing Documentation](https://fanyi-api.baidu.com/product/112)
