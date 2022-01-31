---
id: lost-transaction
title: Bridge txn Recovery
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---
import useBaseUrl from '@docusaurus/useBaseUrl';

### Video Tutorial

* Bridge txn Recovery walkthrough [video](https://youtu.be/39lLJwNCm80)

This tutorial guides you on how to **Recover Syndicate Bridge transaction** incase you lost it or due to some other issues. All transactions on bridge are decentralized so it could be used through the smart contract execution and also using API for cosigner. Let's see an step by step example of lost transaction and manual recovery for it.

:::warning
Bridge txn recovery is shown on Testnet
:::

:::important
To create Metamask wallet and Configure Oneledger on metamask please follow [this](/docs/develop/metamask/hello)
:::

1. Click this [Syndicate Bridge](https://syndicate-bridge.oneledger.network/#/bridge) URL and connect your wallet to metamask.

2. Now for example let's send 100 OLT from Frankenstein to Ropsten Testnet and click Transfer.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/send-olt.png")} /><br/><br/>

3. You can see the pending transaction on top right corner, Due to some reason you have lost your transaction or you can not see it but your transaction was mined and contract interaction was successful as shown below.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/lost-olt.png")} /><br/><br/>

<img src={useBaseUrl("img/bridge-recovery/txn-mined.png")} height={540} /><br/><br/>

4. Now click on **Contract Interaction** and **Copy Transaction ID**.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/copy-txnid.png")} height={540} /><br/><br/>

5. Go to online tool for example [REQBIN](https://reqbin.com/).

    API Endpoint : https://api-syndicate-bowl.oneledger.network/api/v1/cosign

    Content :

    ```js
    {"txn_hash":"PASTE_TRANSACTION_ID","source_chain_id":4216137055,"target_chain_id":3}
    ```
    (**Note:** Here "source_chain_id" is Frankenstein Testnet ID and "target_chain_id" is Ropsten Testnet ID. If it is on Mainnet you should choose the right chain ID's. Get the chain ID's list [here](https://chainlist.org/))

    Make an API request with POST message and JSON content, You will see the output with **data** and **signatures** section on right-hand side with **status 200(OK)**.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/reqbin.png")} /><br/><br/>

6. Now go to [Remix Solidity IDE](https://remix.ethereum.org/) console.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/remix-ide.png")} /><br/><br/>

7. We should copy the Interface to execute transaction on Ropsten network using Remix. Click [here](https://raw.githubusercontent.com/Oneledger/syndicate-contracts/master/contracts/interfaces/IBridgeRouter.sol) to copy the contract and add the smart contract in Remix IDE as shown below.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/contract.png")} /><br/><br/>

8. Click **SOLIDITY COMPILER** button on left Panel and Compile the code.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/compile.png")} /><br/><br/>

9. Now let's connect Remix IDE with Metamask, On Remix IDE console click on **ENVIRONMENT** and select Injected Web3.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/connect-metamask.png")} /><br/><br/>

This will connect to Metamask, Change the network to Ropsten.

<img src={useBaseUrl("img/bridge-recovery/connect-with-metamask.png")} height={540} /><br/><br/>

10. Now lets get the deployed bridge smartcontract address, In our case we need to get Ropsten contract address to receive amount on target chain. Click [here](https://raw.githubusercontent.com/Oneledger/syndicate-contracts/master/deployments/ropsten/BridgeRouter_Proxy.json) to get the Ropsten contract address and paste it in **AtAddress** section as shown below.

    (**Note :** To get the other chains deployed bridge smartcontract address click [here](https://github.com/Oneledger/syndicate-contracts/tree/master/deployments))<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/contract-address.png")} /><br/><br/>

11. Now click on **AtAddress** you will found the smartcontract with three main methods as shown below, In our situation we are receiving OLT on Ropsten so we expand **exit** method to enter details.<br/><br/>

    ```js
    enter : This function to send transaction without bridge UI
    enterETH: This function is the native token for example ETH,BNB,OLT
    exit: This function is to receive transaction
    ```

<img src={useBaseUrl("img/bridge-recovery/exit-method.png")} /><br/><br/>

<img src={useBaseUrl("img/bridge-recovery/exit-method-expand.png")} /><br/><br/>

12. Copy the **data** (without Quotes) and **Signatures** (with brackets) output fields from Step 5 above and paste it in **exit** method.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/output.png")} /><br/><br/>

<img src={useBaseUrl("img/bridge-recovery/exit-input.png")} /><br/><br/>

13. Click on **Transact** button and then **confirm**.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/transact.png")} /><br/><br/>

<img src={useBaseUrl("img/bridge-recovery/confirm.png")} height={540} /><br/><br/>

14. Go to Bridge UI and click on **Add to onewallet** button and then click on **Add Token** you will receive your 100 OLT to your Ropsten network.<br/><br/>

<img src={useBaseUrl("img/bridge-recovery/add-olt.png")} /><br/><br/>

<img src={useBaseUrl("img/bridge-recovery/add-token.png")} /><br/><br/>

<img src={useBaseUrl("img/bridge-recovery/received.png")} /><br/><br/>

**Congratulations!!!** You have succesfully recovered your bridge txn.