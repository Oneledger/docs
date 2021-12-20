---
id: deployed
title: Deployed contracts
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
{ label: 'OneLedger', value: 'oneledger', },
{ label: 'Ethereum', value: 'ethereum', },
{ label: 'Frankenstein', value: 'frankenstein', },
{ label: 'Ropsten', value: 'ropsten', },
]
}>
<TabItem value="oneledger">

## OneLedger Mainnet

| Contract              	| ABI                                                                                                                                                                                                                                                                 	| Address                                                                                                                                                  	|
|-----------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/oneledger/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0xBe429dEdC1E15c546458caDbCE67A6fb24569ad1](https://mainnet-explorer.oneledger.network/address/0xBe429dEdC1E15c546458caDbCE67A6fb24569ad1/transactions) 	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/oneledger/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>       	| [0xF767Acbb553F3Bb854dC8F016e2308d1b1F1dB4C](https://mainnet-explorer.oneledger.network/address/0xF767Acbb553F3Bb854dC8F016e2308d1b1F1dB4C/transactions) 	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/oneledger/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0xE9cB771A919ABe70612af5639E6b9c441688C600](https://mainnet-explorer.oneledger.network/address/0xE9cB771A919ABe70612af5639E6b9c441688C600/transactions) 	|
</TabItem>

<TabItem value="ethereum">

## Ethereum Mainnet

| Contract              	| ABI                                                                                                                                                                                                                                                          	| Address                                                                                                                                 	|
|-----------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/ethereum/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>    	| [0x8f192009edc2bA41633C84c86520D230Dfb224fb](https://etherscan.io/address/0x8f192009edc2bA41633C84c86520D230Dfb224fb#code)              	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/ethereum/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0x076D0CfB8b62A60016A4a57b8509d0989322A808](https://etherscan.io/address/0x076D0CfB8b62A60016A4a57b8509d0989322A808#code)              	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/ethereum/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0x337882C0f263D457704Bd52c5741d43F71F316c0](https://etherscan.io/address/0x337882C0f263D457704Bd52c5741d43F71F316c0#readProxyContract) 	|
</TabItem>

<TabItem value="frankenstein">

## BSC

| Contract              	| ABI                                                                                                                                                                                                                                                                    	| Address                                                                                                                                                       	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/frankenstein/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0x9D0a172D0F0859a45E109b79088AF0574e03C334](https://bscscan.com/address/0x9D0a172D0F0859a45E109b79088AF0574e03C334#code) 	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/frankenstein/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>       	| [0x27c18609D2325a2BF7912861b8b7Cff0e102bE3F](https://bscscan.com/address/0x27c18609D2325a2BF7912861b8b7Cff0e102bE3F#code) 	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/frankenstein/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0x309bdec69FB76861192bFD56dbEC1212a4D3B191](https://bscscan.com/address/0x309bdec69FB76861192bFD56dbEC1212a4D3B191#readProxyContract) 	|
</TabItem>

</Tabs>