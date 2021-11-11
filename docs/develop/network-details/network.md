---
id: network
title: Network
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

# Frankenstein-Testnet
Frankenstein Testnet replicates the OneLedger Mainnet, which is to be used for testing. Testnet coins are separate and distinct from actual tokens/assets, and are never supposed to have any value. This allows application developers or validators/testers to experiment, without having to use real assets or worrying about breaking the main OneLedger chain.

The documentation corresponding contains details for the RPC - HTTP, WS endpoints. There is also a full node setup if you wish to setup your own full node.

|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **Frankenstein**                                 |
| chainId      | `4216137055`                                  |
| Gas Token    | `OLT Token` ([For more...](gas-token)) |
| RPC          | `https://frankenstein-rpc.oneledger.network` |
| Websocket    | `wss://frankenstein-rpc.oneledger.network` |
| Block Explorer |[`https://frankenstein-explorer.oneledger.network`](https://frankenstein-explorer.oneledger.network)|

:::important
OneLedger network native token is **OLT** which will be used as gas fee.
:::

</TabItem>
<TabItem value="oneledger">

# OneLedger-Mainnet

🎉Finally!!! OLVM is launched on OneLedger Mainnet and it is open for developers🎉

The documentation corresponding contains details for the RPC - HTTP, WS endpoints. There is also a full node setup if you wish to setup your own full node.

|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **OneLedger**                                 |
| chainId      | `311752642`                                  |
| Gas Token    | `OLT Token` ([For more...](gas-token)) |
| RPC          | `https://mainnet-rpc.oneledger.network` |
| Websocket    | `wss://mainnet-rpc.oneledger.network` |
| Block Explorer | [`https://mainnet-explorer.oneledger.network`](https://mainnet-explorer.oneledger.network)|

:::important
OneLedger network native token is **OLT** which will be used as gas fee.
:::

</TabItem>
</Tabs>