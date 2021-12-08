---
id: gcp-validator-deployment
title: GCP Validator Deployment
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning
At least **0.5 Million OLT** required for validator set up
:::

:::important
Remeber to store a **password** in secret place!!!
:::

## Pre-requisites

Create an account in Google Cloud Platform by clicking [here](https://console.cloud.google.com/)

## GCP Marketplace Image

1. Run a node on Google Cloud Marketplace now by clicking [here](https://console.cloud.google.com/marketplace/details/chronos-225820/oneledger-mainnet-kratos-node?q=oneledger&id=089656f4-5edb-4c56-8628-9b1839f5b1ba).

2. Click on Launch and deploy OneLedger Mainnet Fullnode.

```js
* Choose the name from your OneLedger instance 
* Choose a machine type with suggested configurations
* You can choose a zone which costs you less money and keep all other fields set to default values
* Click Deploy
```

<img src={useBaseUrl("img/gcp/deploy-page.png")} /><br/><br/>

3. Now you are up and running. Click on SSH to run your node.<br/><br/>

<img src={useBaseUrl("img/gcp/fullnode-deploy.png")} /><br/><br/>

4. You will be opened with a terminal, To Check Fullnode status run below commands.

  `cd $OLDATA`

  `sudo olfullnode status`

  the result should be similar to below:

  ```js
  2020/12/14 20:05:31 Profiling listen to: [::]:41721
  RPC Port: 26604 on 10.168.0.5  ✓
  P2P Port: 26605 on 10.168.0.5  ✓
  SDK Port: 26606 on 10.168.0.5  ✓
  ✓ Looks all good ✓
  ```

5. Validate node status

- Go to [Mainnet explorer](https://mainnet-explorer.oneledger.network/), check out the current block height.

- Use `sudo olclient validatorset` command to see the block height showing on this node.

The node will take some time to catch up to Mainnet current height, wait until two heights are same or with only 1~2 block difference

:::important
Make sure these two heights are same or with only 1~2 block difference before you send Mainnet OLT token to any account on this node!
:::

6. After node is completely sync up with Mainnet current height, please run below commands to setup logrotation. This logrotation prevents your consensus log file growing size and free up your disk space.

```js
cd $OLDATA && sudo wget https://raw.githubusercontent.com/Oneledger/mainnet-genesis/master/logrotate-setup/logrotate.sh && sudo chmod +x $OLDATA/logrotate.sh && sudo $OLDATA/logrotate.sh && sudo rm $OLDATA/logrotate.sh
```

```js
cd $OLDATA && sudo wget https://raw.githubusercontent.com/Oneledger/mainnet-genesis/master/logrotate-setup/clean_log_files.sh && sudo chmod +x $OLDATA/clean_log_files.sh && sudo $OLDATA/clean_log_files.sh
```

**Congratulations!** You have successfully deployed Fullnode, Now lets become Validator.

### Instructions

1. Create an account in the secure wallet

  `olclient account add --name your_preferred_name_for_memorisation`
  
  (Note: It will prompt for password please enter)

2. Run this command to get your node secure wallet stake address

  `olclient list`

3. Send at least **0.5 Million OLT** to this account

-  You can use Chrome [OneWallet](https://chrome.google.com/webstore/detail/onewallet-kratos-mainnet/bbmdccojdbpcpmoadenplnoncfcijgkn?hl=en) extension to do this if the account you are sending from is in OneWallet;

-  You can use Chrome [MetaMask](https://metamask.io/) extension to do this if the account you are sending from is in MetaMask;

4. Apply staking command to become a validator

  `olclient delegation stake --amount 500000 --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX`

5. **Congratulations!** Now you became a validator, you could check the status by this command

  `olclient delegation status --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX`

### Rewards management

- To Check reward information for a specific validator

  `olclient call query.GetTotalRewardsForValidator {\"validator\":\"REPLACE_YOUR_ADDRESS_HERE_WITHOUT_0lt_PREFIX\"}`

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

  `olclient rewards withdraw --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX`

- After you withdraw rewards check the increased balance in validator stake address

  `olclient balance --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX`

### Unstaking and validator purge

- To unstake your OLT (Note: If you unstake and validator is less than **0.5 Million** you will no longer be a validator)

  `olclient delegation unstake --amount XXX --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX`

- After unstake check your status

  `olclient delegation status --address REPLACE_YOUR_STAKEADDRESS_HERE_WITHOUT_0lt_PREFIX`

  When we unstake, there is a period of time referred to as “maturity time”. One can only withdraw the unstaked amount after this maturity time, since the unstake transaction. This maturity time is 80000 blocks, roughly ~two weeks.

:::info
In case of permission denied during docker commands use **sudo** at the begining
:::