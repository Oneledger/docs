---
id: faq
title: FAQ
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

## What is OneLedger?

OneLedger is a Delegated Proof of Stake (DPoS) blockchain Layer-1 solution based on Tendermint with Ethereum Virtual Machine (EVM) but with a different mechanics for re-play, double-spent protection and other security optimisation. So on the OneLedger side it is called **OLVM**. Also OneLedger could scale to Layer-2 solution to give a more TPS and use in custom needs.

:page_facing_up: [Read more about OLVM](https://github.com/Oneledger/protocol/wiki/OLVM-description)

## What is Syndicate bridge?

Syndicate bridge is a scaling solution for connection between EVM chains with own DEX. Regarding to an existing solution for the bridge side, where the speed is slow and extremly higher gas costs for it executions, we are did another approach, based on SAO and witnesses for process and verify for fraud the bridge transactions on in according to safe confirmation time. Thats why we are called a **Syndicate** bridge and the name for the protocol.

## How is Syndicate bridge different from other bridge implementations?

See [here](/docs/bridge/architecture#comparison-chart-between-another-bridge-implementations-with-ethereum)

## Your project provides scalability for Ethereum using syndicate bridge, is it a protocol or a native blockchain in itself?

Syndicate Bridge is a "smart contracts" solution with backend end where EVM mainchain assets, i.e. all Dapps/Tokens/Protocols of the main chain can be moved/migrated to another EVM chains and when needed, one can withdraw assets back to mainchain.

## What are the competitive advantages of Syndicate bridge over its competitors?

- Speed

While our competitors focusing on decentralization, relayers, zkSNARKS, in practice for simple user costs additional gas price for using this bridges and wait too much time for finalizing so called **exit process** from bridge. OneLedger focusing on the speed for the trading as it is an important part for arbitraging. This give an opportunity for trades to move funds between different networks and make a profit on it, and still keep the minimal required security in order to achive that. In future we will add an additional layer for the bridge to make a fully-decentralized but only, if it will not impact on the performance of this process.

- No commision fees

Bridge contracts functionality do not take extra fee for relay or other permit process, users only pays for two transactions - enter and exit transactions in according to gas price for transaction execution.

- Security

Syndicate protocol security achived with the group of witnesses from OneLedger. So each witness has same vote right, but in order to apply some desions in the code workability and changes, SAO was formed to achive that. So all updates on the Syndicate protocol require SAO agreement with >66% to achive that. In order to validate a bridge transaction and protect it from the fraud, each syndicate signer apply his approve. This process is calling **cosigning** and signer become a **cosigner**. To protect the signatures not to be discredited, different allocated cosigners are using for that. So all signatures could be used once and all cosigners sign them in roundrobin way.

## Why is OneLedger choosen as a main chain for bridge?

Interoperability with tendermint PoS consensus and EVM, it give an opportunity to process faster transactions and no re-orgs for the blocks, so it is always enough to check only 1 block. The native currency to pay a gas - OLT (OneLedger Token).

## Why is OneLedger Token (OLT) required?

The following reasons reinforce the need of having OLT token
