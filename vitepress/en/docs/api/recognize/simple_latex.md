---
title: Saladict
titleTemplate: Simple LaTeX
---

# Simple LaTeX

:::info
The documentation content may be outdated. Please refer to [Simple LaTeX Documentation](https://simpletex.cn/api_doc) for the most up-to-date information.
:::

## Pricing

- Currently, 1000 free calls are initially given, and you can claim a 1000-call free resource package monthly in the console.

- There are currently two billing methods: the first is pay-as-you-go, and the other is using prepaid resource packages for call deduction.

- **API Pay-as-you-go (The following prices are for Simple LaTeX API testing period and may change. Please refer to the official documentation.)**

  | Monthly Calls | Price (CNY/call) | Upper Limit Call Price (CNY) |
  | -------------- | ---------------- | ---------------------------- |
  | <1000          | 0.15             | 150                          |
  | 1000-5000      | 0.12             | 150+480=630                  |
  | 5000-10000     | 0.10             | 630+500=1130                 |
  | 10000-50000    | 0.08             | 1130+3200=4330               |
  | 50000-100000   | 0.06             | 4330+3000=7330               |
  | >100000        | 0.04             | /                            |

  The record is cleared at 0:00 AM on the 1st of each month, and billing is done by tiers. For example, if you make 5000 calls, the first 1000 calls are charged at 0.15 CNY, calls 1001-2500 are charged at 0.12 CNY, and so on. Both pay-as-you-go and prepaid resource package call counts are recorded in the total monthly call volume.

- **Prepaid Resource Packages (The following prices are for Simple LaTeX API testing period and may change. Please refer to the official documentation.)**

  | Resource Package Calls | Resource Package Price (CNY) | Validity Period |
  | ---------------------- | ---------------------------- | --------------- |
  | 1000                   | 140                          | /               |
  | 2500                   | 300                          | /               |
  | 5000                   | 550                          | /               |
  | 10000                  | 1000                         | /               |
  | 100000                 | 6000                         | 1 year          |
  | 1000000                | 36000                        | 1 year          |

## Application Steps

### Step 1: Register and Login

Go to the [official website](https://simpletex.cn/user/register) to register and log in

### Step 2: Activate API Open Platform Account

After logging in, go to User Center, then click API Open Platform (Public Beta) - Basic Information on the left, and click "Activate Now".

Read and agree to the agreement.

### Step 3: Create Access Token

Click "User Authorization Token" on the left, then click "Create New Token".

Enter a token name.

Creation successful. Click the copy button indicated by the red arrow to copy the token information.

### Step 4: Fill Token into Saladict Settings

Fill the copied token into the Token parameter in Saladict's [Settings Page] - [Service Settings] - [Text Recognition] - [Add Built-in Service] - [Simple LaTeX].

### Step 5: Claim Monthly Resource Package

Simple LaTeX initially gives 1000 requests, and you can claim a 1000-call resource package monthly.

In the first month, you can claim both the initial gift resource package and the monthly free resource package.

Click "Prepaid Resource Packages" on the left, then click "Claim Monthly Free Usage" at the bottom of the page.

## Related Links

[Simple LaTeX](https://simpletex.cn/)

[Simple LaTeX Open Platform API Documentation](https://simpletex.cn/api_doc)
