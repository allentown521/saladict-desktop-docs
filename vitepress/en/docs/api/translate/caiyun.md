---
title: Saladict
titleTemplate: Caiyun Translation
---

# Caiyun Translation

:::info
The documentation content may be outdated. Please refer to the official Caiyun Translation website for the most up-to-date information.
:::

## Pricing

Caiyun Translation offers the first 1 million characters free each month. Beyond that, charges are 20 yuan per million characters. The fees are charged by Caiyun Translation on their own Caiyun Technology Open Platform and are unrelated to Saladict.

Although not mentioned in the official documentation, Caiyun Translation appears to bill on a daily basis. If you use up your free quota, Caiyun Translation will stop working and return an error "Server returned error code 402". However, please note that daily billing means there won't be real-time notifications for usage within a day, and you'll only be notified during the daily settlement (usually around 1 AM).

## Application Steps

### Step 1: Complete Developer Verification

Log in to the [Caiyun Technology Open Platform](https://dashboard.caiyunapp.com/), go to My Account - Developer Information and fill in the developer information:

[Account Type] select [Personal Name/Non-profit Organization Name]
Fill in your name for both [Personal Name/Organization Name] and [Contact Name]
[Contact Phone] fill in your real phone number
After proceeding to the next step:

[Application Category] select [Caiyun Translation API]
[Application Name] fill in [Saladict]
[Application Link] fill in [https://app.saladict.net/]
[Application Development Status] fill in [Desktop application, development completed]
After completing the form, click the [Submit] button. Caiyun Translation will review your submitted information, typically approving it within two business days.

### Step 2: Obtain Caiyun Translation API Token

After approval, go to My Tokens - Token List, and you'll see the interface shown below:

![1](./asset/caiyun1.png)

Click the link in the [Token] column of the table, and you'll enter the following page. The area marked in red is your Caiyun Translation API Token:

![2](./asset/caiyun2.png)

### Step 3: Enter Caiyun Translation API Token in Saladict

Enter the Caiyun Translation API Token obtained in the previous step into Saladict's [Settings Page] - [Interface Settings] - [Caiyun Translation Token].

## Related Links

[Caiyun Translation API Documentation](https://docs.caiyunapp.com/blog/2018/09/03/lingocloud-api/)

[Caiyun Technology Open Platform](https://dashboard.caiyunapp.com/)
