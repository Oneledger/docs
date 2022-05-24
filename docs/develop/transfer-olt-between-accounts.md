---
id: transfer-olt-between-accounts
title: Transfer OLT between Accounts
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This Document guides you on how to transfer OLT between **Onewallet, Metamask and Exchanges**.

### OneWallet to Metamask

:::info
No Onewallet, Configure it [here](/docs/develop/onewallet/hello)
:::

1. Login to your Onewallet -> Click on Send option on left panel.

2. Fill all your details and paste your "Metamask Address" in To section.<br/><br/>

<img src={useBaseUrl("img/transfer-olt/onewallet-metamask.png")} /><br/><br/>

3. click on Send to make the transaction.

### Metamask to Onewallet

:::info
No Metamask, Configure it [here](/docs/develop/metamask/hello)
:::

1. Login to Metamask and select Oneledger Mainnet account. (To configure Oneledger Mainnet on Metamask click [here](/docs/develop/metamask/config-oneledger-on-metamask))

2. Go to Onewallet and copy your **0x** address.<br/><br/>

<img src={useBaseUrl("img/transfer-olt/metamask-onewallet-2.png")} /><br/><br/>

3. Now click on Send in your metamask and paste your Onewallet 0x address.<br/><br/>

<img src={useBaseUrl("img/transfer-olt/metamask-onewallet-1.png")} /><br/><br/>

<img src={useBaseUrl("img/transfer-olt/metamask-onewallet-3.png")} /><br/><br/>

4. Follow the next steps to make the transaction.


### Exchanges to Metamask

:::info
Here we are going to see Kucoin as example.
:::

1. Copy "OLT" address from Metamask and change prefix **"0x" --> "0lt"**

   (For Example: 0xabc... to 0ltabc...)

2. Now click on Withdraw in your Kucoin and paste your Metamask **0lt** address.

3. Follow the next steps to make the transaction.

### Metamask to Exchanges

1. Copy "OLT" address from Kucoin and change prefix **"0lt" --> "0x"**

   (For Example: 0ltabc... to 0xabc...)

2. Now click on Send in your metamask and paste your Kucoin **0x** address.<br/><br/>

<img src={useBaseUrl("img/transfer-olt/metamask-onewallet-1.png")} /><br/><br/>

<img src={useBaseUrl("img/transfer-olt/metamask-onewallet-3.png")} /><br/><br/>

3. Follow the next steps to make the transaction.