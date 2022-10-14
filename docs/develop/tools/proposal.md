---
id: proposal
title: Decentralized proposals
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is Decentralized Proposals?

Decentralized Proposals (DP) are using to create a proposal and vote for some OneLedger changes. After when required votes will be collected, user who proposed will receive some funds and rest will go to the blockchain in according to [Genesis disctribution](https://github.com/Oneledger/validator-deployment/blob/678e1dedd0c86c4a491eaf179cbe61e31b0195e6/mainnet/v0.18/genesis.json#L198)


## What kind of proposals could be

Proposals could be general and code change. Here is a table with compare between two of them. All amounts in OLT.

|             	| Initial funding (capital) 	| Funding goal 	| Pass (%) 	| Deadline (hours) 	|
|-------------	|---------------------------	|--------------	|----------	|------------------	|
| General     	| 5000                      	| 15000        	| 67       	| 24               	|
| Code change 	| 200000                    	| 1000000      	| 51       	| 48               	|

## TUTORIAL. How to create a proposal and vote

In this short tutorial we will show you how to create and vote for proposals. In order to create a proposal, you should have at least <b>5000 OLT</b> and installed [OneWallet](/docs/develop/onewallet/hello).

### Step 1. Creation of proposal

1. Go to Ecosystem -> Apps section in OneWallet and click on Governance Proposals icon<br/><br/>

<img src={useBaseUrl("img/proposal/apps.png")} /><br/><br/>

2. Click on plus sign to create a proposal<br/><br/>

<img src={useBaseUrl("img/proposal/create-proposal.png")} /><br/><br/>

3. Submit all required fields, provide your password for tx signature and submit<br/><br/>

<img src={useBaseUrl("img/proposal/create-proposal-detailed.png")} /><br/><br/>

4. After success, you will see notification mark, that transaction has been processed<br/><br/>

<img src={useBaseUrl("img/proposal/success-mark-on-list.png")} /><br/><br/>

5. Refresh a page and you will see your proposal<br/><br/>

<img src={useBaseUrl("img/proposal/post-create-proposal.png")} /><br/><br/>

### Step 2. Voting on existing proposal

1. Click on three dots under <b>Actions</b> column and click on <b>fund</b> button<br/><br/>

<img src={useBaseUrl("img/proposal/fund-proposal.png")} /><br/><br/>

2. On a Funding proposal form, submit an amount, which you wants for voting and click on yes<br/><br/>

<img src={useBaseUrl("img/proposal/fund-detailed-proposal.png")} /><br/><br/>

3. After success, you will see notification mark, that transaction has been processed<br/><br/>

<img src={useBaseUrl("img/proposal/success-mark-on-vote.png")} /><br/><br/>

4. Go back to the proposals app and you will see an updated amount for funding raise<br/><br/>

<img src={useBaseUrl("img/proposal/vote-proposal.png")} /><br/><br/>

**Congratulations!** 🎉🎉🎉 You have successfully proposed and voted for a new proposals!
