---
id: full-node-deployment
title: Full Node Deployment
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="oneledger"
  values={[
    { label: 'OneLedger-Mainnet', value: 'oneledger', },
    { label: 'Frankenstein-Testnet', value: 'frankenstein', },
  ]
}>
<TabItem value="frankenstein">

## Pre-requisites

### Minimum System Requirements

- Minimum system requirements are as follows:
    4 - 16 GiB of memory

    2 - 4 core CPU

    Minimum 100GB SSD (make sure it is extendable)

## Full Node Deployment (Frankenstein Testnet :smiling_imp:)

We have created simple docker-compose to setup a full node.

### Pre-requisite:
 - Install [docker](https://docs.docker.com/engine/install/)
 - Install [docker-compose](https://docs.docker.com/compose/install/#install-compose)

### Instructions:
 - Clone fullnode repo
 
 `git clone https://github.com/Oneledger/validator-deployment.git`
 - Go to testnet folder for build
 
 `cd validator-deployment/testnet`
 - Run docker-compose
 
 `docker-compose -f docker-compose.yml up -d` (sudo if required)
 - Validate node status (should update block height after ~15 seconds)
 
 `docker-compose exec olfullnode sh -c "olclient validatorset"`

</TabItem>
<TabItem value="oneledger">

## Pre-requisites

### Minimum System Requirements

- Minimum system requirements are as follows:
    8 - 16 GiB of memory

    8 - 32 core CPU

    Minimum 100GB SSD (make sure it is extendable)

## Full Node Deployment (OneLedger Mainnet :boom:)

We have created simple docker-compose to setup a full node.

### Pre-requisite:
 - Install [docker](https://docs.docker.com/engine/install/)
 - Install [docker-compose](https://docs.docker.com/compose/install/#install-compose)

### Instructions:
 - Clone fullnode repo
 
 `git clone https://github.com/Oneledger/validator-deployment.git`
 - Go to mainnet folder for build
 
 `cd validator-deployment/mainnet`
 - Run docker-compose
 
 `docker-compose -f docker-compose.yml up -d`
 - Validate node status (should update block height after ~15 seconds)
 
 `docker-compose exec olfullnode sh -c "olclient validatorset"`

</TabItem>
</Tabs>

:::info
In case of permission denied during docker commands use **sudo** at the begining
:::
