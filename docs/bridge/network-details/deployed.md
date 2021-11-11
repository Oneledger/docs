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

## Frankenstein Testnet

| Contract              	| ABI                                                                                                                                                                                                                                                                    	| Address                                                                                                                                                       	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/frankenstein/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0x142F83976f711539210991C6109570B99B894986](https://frankenstein-explorer.oneledger.network/address/0x142F83976f711539210991C6109570B99B894986/transactions) 	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/frankenstein/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>       	| [0x8f12d7a8E247f1289FC90CAE98898f4bBD300423](https://frankenstein-explorer.oneledger.network/address/0x8f12d7a8E247f1289FC90CAE98898f4bBD300423/transactions) 	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/frankenstein/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0x34FcED6b3cf251015DeB5a5497dC82Aa8Fb84604](https://frankenstein-explorer.oneledger.network/address/0x34FcED6b3cf251015DeB5a5497dC82Aa8Fb84604/transactions) 	|
</TabItem>

<TabItem value="ropsten">

## Ropsten Testnet

| Contract              	| ABI                                                                                                                                                                                                                                                               	| Address                                                                                                                            	|
|-----------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------	|
| BridgeTokenManager    	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/ropsten/BridgeTokenManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>          	| [0x9410456846bD47F3162D2913FeF06a2cAC9c8241](https://ropsten.etherscan.io/address/0x9410456846bD47F3162D2913FeF06a2cAC9c8241#code) 	|
| BridgeCosignerManager 	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/ropsten/BridgeCosignerManager.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a>       	| [0x9Eb4EDd278498e314AE1C5E07726C65E34D37045](https://ropsten.etherscan.io/address/0x9Eb4EDd278498e314AE1C5E07726C65E34D37045#code) 	|
| BridgeRouter          	| <a target="_blank" href="https://raw.githubusercontent.com/oneledger/syndicate-contracts/master/deployments/ropsten/BridgeRouter_Implementation.json"><img src="https://img.icons8.com/metro/26/000000/download.png" width="25px" style={{padding: '2px'}} /></a> 	| [0x34770e22d41597F174C253EF164169F781DCD814](https://ropsten.etherscan.io/address/0x34770e22d41597F174C253EF164169F781DCD814#code) 	|
</TabItem>
</Tabs>