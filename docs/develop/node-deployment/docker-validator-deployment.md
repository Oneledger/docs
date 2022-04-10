---
id: docker-validator-deployment
title: Docker Validator Deployment
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

:::warning
This is testnet validator setup please donnot use mainnet tokens. At least **0.5 Million test OLT** required for validator set up.
:::


## Pre-requisites

- Should be completed the testnet fullnode deployment [setup](/docs/develop/node-deployment/full-node-deployment)

### Instructions

- Create an account in the secure wallet

  `docker-compose exec olfullnode sh -c "olclient account add --name your_preferred_name_for_memorisation"`
  
  (Note: It will prompt for password please enter)

- Run this command to get your node secure wallet stake address

  `docker-compose exec olfullnode sh -c "olclient list"`

- Send at least **0.5 Million test OLT** to this account

  `docker-compose exec olfullnode sh -c "curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" https://fullnode-faucet.oneledger.network/jsonrpc -d '{"id": "test", "jsonrpc": "2.0", "method": "faucet.RequestOLT", "params": {"address":"REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX", "amount":500000}}'"`

- Apply staking command to become a validator

  `docker-compose exec olfullnode sh -c "olclient delegation stake --amount 500000 --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

- **Congratulations!** Now you became a validator, you could check the status by this command

  `docker-compose exec olfullnode sh -c "olclient delegation status --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

### Rewards management

- To Check reward information for a specific validator

  `docker-compose exec olfullnode sh -c 'olclient call query.GetTotalRewardsForValidator {\"validator\":\"REPLACE_YOUR_ADDRESS_HERE_WITHOUT_0lt_PREFIX\"}'`

  it will print the info about pending, mature and withdrawn amount
  ```
  {
    "address": "0lt0000000000000000000000000000000000000000",
    "matureBalance": "0",
    "pendingAmount": "2007145201754290708513",
    "totalAmount": "2007145201754290708513",
    "withdrawnAmount": "0"
  }
  ```

- Once you see no-zero "matureBalance" in above reward information, you are able to withdraw rewards

  `docker-compose exec olfullnode sh -c 'olclient rewards withdraw --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX'`

- After you withdraw rewards check the increased balance in validator stake address

  `docker-compose exec olfullnode sh -c 'olclient balance --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX'`

### Unstaking and validator purge

- To unstake your OLT (Note: If you unstake and validator is less than **0.5 Million** you will no longer be a validator)

  `docker-compose exec olfullnode sh -c "olclient delegation unstake --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

- After unstake check your status

  `docker-compose exec olfullnode sh -c "olclient delegation status --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

  When we unstake, there is a period of time referred to as “maturity time”. One can only withdraw the unstaked amount after this maturity time, since the unstake transaction. This maturity time is 80000 blocks, roughly ~two weeks.

### Withdraw

- As introduced in the unstake part, a Validator can only withdraw the unstaked amount after maturity time. To withdraw run below command

  `docker-compose exec olfullnode sh -c "olclient delegation withdraw --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

- After withdraw check your status

  `docker-compose exec olfullnode sh -c "olclient list"`

</TabItem>
<TabItem value="oneledger">

:::warning
At least **0.5 Million OLT** required for validator set up
:::

:::important
Remeber to store a **password** in secret place!!!
:::


## Pre-requisites

- Should be completed the fullnode deployment [setup](/docs/develop/node-deployment/full-node-deployment)

### Instructions

- Create an account in the secure wallet

  `docker-compose exec olfullnode sh -c "olclient account add --name your_preferred_name_for_memorisation"`
  
  (Note: It will prompt for password please enter)

- Run this command to get your node secure wallet stake address

  `docker-compose exec olfullnode sh -c "olclient list"`

- Send at least **0.5 Million OLT** to this account

  - You can use Chrome [OneWallet](https://chrome.google.com/webstore/detail/onewallet-kratos-mainnet/bbmdccojdbpcpmoadenplnoncfcijgkn?hl=en) extension to do this if the account you are sending from is in OneWallet;

  - You can use Chrome [MetaMask](https://metamask.io/) extension to do this if the account you are sending from is in MetaMask;

- Apply staking command to become a validator

  `docker-compose exec olfullnode sh -c "olclient delegation stake --amount 500000 --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

- **Congratulations!** Now you became a validator, you could check the status by this command

  `docker-compose exec olfullnode sh -c "olclient delegation status --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

### Rewards management

- To Check reward information for a specific validator

  `docker-compose exec olfullnode sh -c 'olclient call query.GetTotalRewardsForValidator {\"validator\":\"REPLACE_YOUR_ADDRESS_HERE_WITHOUT_0lt_PREFIX\"}'`

  it will print the info about pending, mature and withdrawn amount
  ```
  {
    "address": "0lt0000000000000000000000000000000000000000",
    "matureBalance": "0",
    "pendingAmount": "2007145201754290708513",
    "totalAmount": "2007145201754290708513",
    "withdrawnAmount": "0"
  }
  ```

- Once you see no-zero "matureBalance" in above reward information, you are able to withdraw rewards

  `docker-compose exec olfullnode sh -c 'olclient rewards withdraw --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX'`

- After you withdraw rewards check the increased balance in validator stake address

  `docker-compose exec olfullnode sh -c 'olclient balance --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX'`

### Unstaking and validator purge

- To unstake your OLT (Note: If you unstake and validator is less than **0.5 Million** you will no longer be a validator)

  `docker-compose exec olfullnode sh -c "olclient delegation unstake --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

- After unstake check your status

  `docker-compose exec olfullnode sh -c "olclient delegation status --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

  When we unstake, there is a period of time referred to as “maturity time”. One can only withdraw the unstaked amount after this maturity time, since the unstake transaction. This maturity time is 80000 blocks, roughly ~two weeks.

### Withdraw

- As introduced in the unstake part, a Validator can only withdraw the unstaked amount after maturity time. To withdraw run below command

  `docker-compose exec olfullnode sh -c "olclient delegation withdraw --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX"`

- After withdraw check your status

  `docker-compose exec olfullnode sh -c "olclient list"`

### Transfer

- To send your OLT back to your Onewallet/Metamask account

  `docker-compose exec olfullnode sh -c "olclient send --party "YOUR_ADDRESS_WITHOUT_PREFIX" --counterparty "ADDRESS_YOU_WANT_TO_SEND_TOKEN_TO_WITHOUT_PREFIX" --amount "100" --fee 0.00000001 --currency OLT"`

</TabItem>
</Tabs>

:::info
In case of permission denied during docker commands use **sudo** at the beginning
:::
