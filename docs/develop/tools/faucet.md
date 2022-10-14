---
id: faucet
title: Frankenstein Faucet
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

## What is Faucet?

The faucet is a service that provides **free testnet OLT tokens** to users/developers. These tokens enable users to experiment with Oneledger features without spending OLT cryptocurrency on the mainnet.<br/><br/>

## How to Mint OLT from Faucet?

There are two ways to mint testnet OLT:

<Tabs
  defaultValue="oneledger"
  values={[
    { label: 'CLI', value: 'oneledger', },
    { label: 'Faucet-URL', value: 'faucet', },
  ]
}>

<TabItem value="oneledger">

In order to mint OLT using CLI (Command Line Interface) first you have to setup [Frankenstein-Testnet](/docs/develop/node-deployment/full-node-deployment) fullnode and run below command. (Note: Please provide the address you want to mint tokens)

```js
docker-compose exec olfullnode sh -c "curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" https://fullnode-faucet.oneledger.network/jsonrpc -d '{"id": "test", "jsonrpc": "2.0", "method": "faucet.RequestOLT", "params": {"address":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeef", "amount":50}}'"
```

</TabItem>

<TabItem value="faucet">

To mint OLT using Faucet URL first you need to configure Oneledger on [MetaMask wallet](/docs/develop/metamask/config-oneledger-on-metamask) **(Frakenstein-Testnet)** and then hit this URL: https://frankenstein-faucet.oneledger.network/

</TabItem>

</Tabs>
