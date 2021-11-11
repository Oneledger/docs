---
id: config-oneledger-on-metamask
title: Configure OneLedger on MetaMask
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Configure OneLedger on Metamask

In order to view the flow of funds in your accounts, on the OneLedger Network, you will need to configure OneLedger `{testnet, mainnet}` URL on Metamask.

<Tabs
  defaultValue="oneledger"
  values={[
    { label: 'OneLedger-Mainnet', value: 'oneledger', },
    { label: 'Frankenstein-Testnet', value: 'frankenstein', },
  ]
}>

<TabItem value="frankenstein">
To add OneLedger's Frankenstein-Testnet, click on the Network selection dropdown and then click on Custom RPC.

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add the URL `https://frankenstein-rpc.oneledger.network`.

<img src={useBaseUrl("img/metamask/metamask-settings-frankenstein.png")} />

Once you’ve added the URL in the New Network field, click on Save. You will be directly switched to OneLedger's Frankenstein-Testnet now in the network dropdown list. You can now close the dialog.
</TabItem>

<TabItem value="oneledger">
To add OneLedger’s Mainnet, click on the Network selection dropdown and then click on Custom RPC. 

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add `OneLedger Mainnet` in the Network Name field, URL `https://mainnet-rpc.oneledger.network` in the New RPC URL field, `311752642` in Chain ID field, `OLT` in Currency Symbol field and `https://mainnet-explorer.oneledger.network` in Block Explorer URL field.

<img src={useBaseUrl("img/metamask/metamask-settings-mainnet.png")} />

Once you’ve added the information click on Save. You will be directly switched to OneLedger’s Mainnet now in the network dropdown list. You can now close the dialog.
</TabItem>
</Tabs>

