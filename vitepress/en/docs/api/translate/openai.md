---
title: Saladict
titleTemplate: OpenAI
---

# OpenAI

:::info
The documentation content may be outdated. Please refer to the official OpenAI website for the most up-to-date information.
:::

## Pricing

OpenAI API (gpt-3.5-turbo) provides a one-time free credit of $5, and its price is $0.002 per 1000 tokens, where 1000 tokens is approximately 750 English words. For detailed explanation of "tokens", see OpenAI documentation: [Managing tokens](https://platform.openai.com/docs/guides/chat/managing-tokens)

> Note: The free credits provided by OpenAI will expire and reset after three months. You can check the specific expiration date at [https://platform.openai.com/account/usage](https://platform.openai.com/account/usage).

## Application Steps

### Step 1: Prepare an OpenAI Account

Please prepare an OpenAI account on your own.

### Step 2: Create Secret Key

Open https://platform.openai.com/account/api-keys (you'll need to log in if not already)
Click the [Create new secret key] button, a popup will appear showing the Secret Key
Copy the Secret Key

### Step 3: Enter OpenAI Secret Key in Saladict

Enter the Secret Key into Saladict's [Settings Page] - [Interface Settings] - [Open AI ApiKey].

## Solutions for OpenAI API Connection Issues

### Method 1: Via Cloudflare Reverse Proxy

Refer to [chatgptProxyAPI](https://github.com/x-dr/chatgptProxyAPI)

Saladict already provides custom domain settings. Simply enter your own domain in the settings.

### Method 2: Enable Proxy

Saladict provides in-app proxy settings (in-app proxy is not effective for OpenAI streaming output; system proxy must be enabled for streaming output)

### Method 3: Use Third-party Services (Recommended)

Since this application supports setting custom request domains, you can directly use third-party services

#### AiHubMix

1. Open [AiHubMix](https://aihubmix.com/register?aff=trJY) official website, register and login
2. Click `Top Navigation Bar - Recharge`, purchase proxy APIkey and exchange for credits

3. After purchase, click `Top Navigation Bar - Token - Create Token`

4. In Saladict, set the custom domain to `orisound.cn` or `aihubmix.com`
5. Enter the created token key in settings and save

<!-- #### AI.LS

1. Open [AI.LS](https://ai.ls/) official website
2. Click `Get API Key/Tokens` on the right, enter email and purchase
3. In Saladict, set the custom domain to `api.caipacity.com`
4. Enter the `Api Key` received in your email in settings

   ![AI.LS](./asset/ai.ls.png)

:::info
For AI.LS billing, please refer to AI.LS [billing instructions](https://ai.ls/?show-token-pricing=true)
:::

#### API2D

1. Register at [API2D](https://api2d.com/r/186163)
2. Get ForwardKey
3. Set custom domain to `openai.api2d.net`
4. Enter `ForwardKey` in settings

   ![API2D](./asset/API2D.png)

:::info
For API2D billing, please refer to API2D [billing instructions](https://api2d.com/wiki/doc)
::: -->

## Related Links

[OpenAI Platform](https://platform.openai.com/)

[ChatGPT API (gpt-3.5-turbo) Pricing Documentation](https://openai.com/pricing)
