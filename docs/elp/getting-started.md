---
id: getting-started
title: External Liquidity Pool
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

**URL**: https://elp.oneledger.io

The External Liquidity Pool refers to the **sOLT-USDT** trading pair on **Uniswap**, the highest volume decentralized exchange platform **(DEX)** in crypto. To incentivize liquidity for sOLT, an ERC-20 based version of the OneLedger Token (OLT), the Pool offers **rewards** to **Liquidity Providers (LPs)** in the form of transaction fees and additional reward mechanics. To participate, LPs must provide tokens to both sides of the pool **(sOLT and ERC-20 based USDT)** and can then add or withdraw funds at any time.

The Liquidity Pool offers OLT holders a way to generate an ongoing yield on their holdings, while also creating long-term value for the OneLedger ecosystem by making OLT accessible to a larger user base.

## Getting started

### a. What do I need?

As an Ethereum-based DEX, Uniswap requires all tokens to conform to the ERC-20 standard. For that reason, OLT holders must either convert their tokens to sOLT using the **Syndicate Bridge**, or else purchase additional tokens from the Pool for the purposes of LPing. They must also purchase USDT tokens, which can be done on Uniswap by exchanging one of a wide range of assets including ETH, DAI or USDC. Uniswap is a non-custodial exchange, which means that users must first set up an Ethereum wallet (examples of popular wallets can be found [here](https://ethereum.org/en/wallets/find-wallet/)) and add sufficient ETH to cover transaction fees.

### b. How do I bridge to Uniswap?

Users that currently hold OLT tokens in their OneWallet or Ledger wallets can bridge their assets to the Ethereum network using the [Syndicate Bridge](https://syndicate-bridge.oneledger.network/). The bridge creates a two-way channel for the exchange of OLT and sOLT tokens. When users connect to the bridge, they lock their OLT and create an equivalent amount of sOLT tokens on the Ethereum network. The sOLT tokens will appear in the user’s Ethereum wallet, where they can then be used to interact with Uniswap. When users wish to return their assets to the OneLedger network, they can use the bridge to convert the tokens back into OLT.

### c. How do I add my tokens to the Liquidity Pool?

LPs on Uniswap are required to provide **two-sided liquidity**, meaning that they must deposit both **sOLT and USDT** to the pool. Users will typically provide a **50/50** split between the two tokens, meaning they add an equivalent value of USDT to match the value of their sOLT tokens. For example, based on prices at the time of writing, a user wishing to LP with **100,000 sOLT** tokens would aim to provide around **$3000 worth of USDT**, although this does not need to be exact.

You can access the Liquidity Pool through OneLedger’s ELP pager [here](https://elp.oneledger.io/liquidity) or directly on Uniswap [here](https://app.uniswap.org/#/add/v2/0xdAC17F958D2ee523a2206206994597C13D831ec7/0xBdE61AabC13B8419d4b72b74B254A1629858e026).

A detailed video tutorial on how to add funds to the pool can be found [here](https://www.youtube.com/watch?v=kNI7olz8Olw).

More information about providing liquidity on Uniswap can be found [here](https://help.uniswap.org/en/collections/3033939-provide-liquidity).

Once funds have been deposited to the pool, the user will receive an sOLT-USDT LP token. This token will be held in the user’s Ethereum wallet and can be used at any time to redeem tokens from the pool.


## Calculating and monitoring rewards

Once the funds have been added to the pool, **Uniswap’s Automated Market Making (AMM)** system will actively use the tokens to provide liquidity to buyers and sellers of sOLT tokens. Whenever a trade occurs, a **0.3% fee** is charged to the transaction sender. This fee is distributed pro-rata to all LPs in the pool upon completion of the trade. This activity will generate ongoing rewards for the pool’s LPs, incentivizing them to continue providing liquidity. The exact amount of rewards earned will depend on the Pool APR, which fluctuates based on the user’s share of the pool.

Users should track the **APR** intermittently to find out the current profitability of their LP activity. This can help the user to make informed decisions on whether to add further funds to capitalize on preferable rates, or to withdraw funds from the pool to allocate to alternative yield opportunities offering a better return.

A **real-time dashboard of current rewards** can be found on the ELP page [here](https://elp.oneledger.io/liquidity).

## Claiming rewards

Rewards for participating in the Liquidity Pool are paid in sOLT. LPs can claim their rewards at any time, either to compound their position in the pool, swap for another ERC-20 token or return generated funds to OLT via the Syndicate Bridge. Using the [ELP page](https://elp.oneledger.io/liquidity), users will be able to track the number of sOLT tokens they have available to claim. They can easily redeem these tokens using the ‘Claim’ feature.

## Risks and other considerations

While DeFi activity presents significant reward opportunities, there are several risks that can reduce an LP’s profitably or even result in lost funds. OLT holders should consider these carefully before deciding how much funds to allocate to LP activity. The list below is not exhaustive, but contains some common risks:

**Bridging risk** - The Syndicate Bridge is an experimental product. The bridge is used at the token holder’s own risk.

**Custody risk** - The user is responsible for the safety of the funds they hold in their Ethereum wallet while conducting LP activity. Users should follow best practices for securing their wallet, including maintaining the safety of their private key or seed phrase.

**Execution costs** - The popularity of the Ethereum network has led to significant scalability issues, resulting in periods of high transaction fees. In the process of completing LP activity, users may encounter several instances in which they must pay transaction fees in ETH. Tools such as [Eth Gas Station](https://ethgasstation.info/) can be used to anticipate fees and factor them into the profitability of LP activity.

**Impermanent Loss (IL)** - IL is the loss that LPs can encounter when the ratio of tokens in a liquidity pool becomes uneven. IL can be calculated and then subtracted from the pool APR to assess its impact on overall profitability. A more detailed explanation of IL can be found [here](https://medium.com/coinmonks/understanding-impermanent-loss-9ac6795e5baa).

## Redeeming tokens from the Liquidity Pool

Once the user has decided to reduce or discontinue LP activity, all tokens (sOLT and USDT) can easily be redeemed from the pool using the SLP tokens they received upon depositing funds. The user needs only to connect their wallet to the ELP page or Uniswap page, select the amount they wish to withdraw from the pool and execute the transaction. Details of how to withdraw can be found in the [tutorial video](https://www.youtube.com/watch?v=kNI7olz8Olw). The tokens will again appear in the user’s Ethereum wallet and, in the case of sOLT, can then be converted back to OLT using the Syndicate Bridge.