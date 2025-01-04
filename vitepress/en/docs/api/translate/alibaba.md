---
title: Saladict
titleTemplate: Alibaba Translation
---

# Alibaba Translation

:::info
The documentation content may be outdated. Please refer to the official Alibaba Translation website for the most up-to-date information.
:::

## Pricing

Alibaba Translation offers the first 1 million characters free each month. Beyond that, charges are 50 yuan per million characters. The fees are charged by Alibaba Translation on their official Alibaba Cloud website and are unrelated to pot.

Alibaba Translation bills on a daily basis. It is recommended to top up 1 yuan in Alibaba Cloud's billing center and set an available balance alert for 1 yuan, so you'll receive SMS notifications when daily charges occur. However, please note that daily billing means that even if you use up your balance within a day, charges will continue to accumulate and you'll only be notified during the daily settlement (usually around 1 AM).

## Application Steps

### Step 1: Activate General Translation Engine

Open the Alibaba Cloud General Translation Engine homepage and click the [Activate Now] button. After logging in, you'll enter the Machine Translation Management Console and see the following interface. Then click the [Activate Now] button under [General Translation Engine].

![](./asset/alibaba1.png)

After clicking, you'll be asked to check the [Machine Translation Service Agreement]. Check it and click [Activate Now] to complete the activation.

### Step 2: Create AccessKey

After activation, return to the Alibaba Cloud Machine Translation Management Console, hover your mouse over the avatar in the upper right corner, and click [AccessKey Management]. This will take you to the AccessKey Management page.

You'll see a security prompt:

![](./asset/alibaba2.png)

In short, the AccessKey created here can access all resources under your account, which is too broad in scope. If leaked, the impact would be significant. Therefore, Alibaba Cloud recommends creating a sub-user and only assigning machine translation permissions to this sub-user. This way, even if leaked, only machine translation would be affected.

<details><summary>Using Cloud Account AccessKey (More convenient but less secure)</summary>
<p>

If you want to create an AccessKey using your cloud account, select [Continue to use AccessKey].

![](./asset/alibaba3.png)

Then click the [Create AccessKey] button:

![](./asset/alibaba4.png)

You'll be asked to enter an SMS verification code. After entering it, you'll see a success message for AccessKey creation, as shown below:

![](./asset/alibaba5.png)

</p>
</details>

<details><summary>Using Sub-user AccessKey (More secure but more steps)</summary>
<p>

If you want to use a sub-user AccessKey, select [Start using sub-user AccessKey].

![](./asset/alibaba6.png)

Step 1: Create and Fill User Information
Click the [Create User] button:

![](./asset/alibaba7.png)

After clicking, you need to fill in user information:

Set Login Name: pot
Fill Display Name: pot
Access Method: Check [Open API Call Access].
Then click [OK].

![](./asset/alibaba8.png)

You'll be asked to enter an SMS verification code. After entering it, you'll see the created [AccessKey ID] and [AccessKey Secret], as shown below:

![](./asset/alibaba9.png)

Step 2: Set User Permissions
Check the user you just created and click [Add Permissions]:

![](./asset/alibaba10.png)

Search for "machine translation", select both [AliyunMTFullAccess] and [AliyunMTReadOnlyAccess], then click [OK]:

![](./asset/alibaba11.png)

Step 3: Review Information
For this step, just click the [Complete] button, and you'll see the sub-account's [AccessKey ID] and [AccessKey Secret], as shown below:

![](./asset/alibaba12.png)

</p>
</details>

### Step 3: Fill in AccessKey in pot

Enter the [AccessKey ID] and [AccessKey Secret] from above into pot's [Settings Page] - [Interface Settings] - [Alibaba Translation].

## Related Links

[Alibaba Cloud General Translation Engine Introduction](https://www.aliyun.com/product/ai/base_alimt)

[Alibaba Cloud Machine Translation General Version Pricing Documentation](https://help.aliyun.com/document_detail/158294.html)
