---
id: architecture
title: Overview
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Syndicate Bridge

**URL**: https://syndicate-bridge.oneledger.network

Syndicate bridge is a blockchain application that provides a transition of tokens between EVM chains. Our team hardworking work on implementaion of Nexus bridge to obtain a transition between multiple chains at once.

Architecturally, the beauty of Syndicate bridge is its simple, straightforward design which features a fast, cheap transactions for the token transfering between EVM chains.

### Tutorial
* Bridge interaction :movie_camera: [Your first Syndicate OLT](https://www.youtube.com/watch?v=i8dzjRESejA&ab_channel=OneLedgerTechnologyInc.)

### Comparison chart between another bridge implementations (with Ethereum)

|                      | OneLedger (Syndicate)   | Polygon (Plasma)      | Polygon (PoS)         | Celo (Optics)          |
|----------------------|-------------------------|-----------------------|-----------------------|------------------------|
| Centralization       | Semi-centralized        | Decentralized         | Decentralized         | Semi-centralized       |
| Use proxy            | yes                     | no                    | no                    | yes                    |
| Supported chains     | Ethereum<br/> OneLedger | Ethereum<br/> Polygon | Ethereum<br/> Polygon | Ethereum<br/> Celo     |
| Max process duration | ~4-5 minutes            | ~7 days               | ~35-37 minutes        | ~6-8 hours             |
| Fees                 | ~140-220$               | ~400-500$             | ~400-500$             | ~140-180 + relayer fee |

### Description of workflow

Currently, developers can use **Syndicate Bridge** for specific needs to automate DEX cross chain usage behind our contracts with the help of cosigners handling. **Cosigner** shortly is who verify and sign a transactions for validity, so give it's proof. The group of cosigners called **syndicate** which regulates the token pegging, detect fraud and oracalize netowork info.

The native chain to make bridge used OneLedger network with the power of OLVM and called **orchestrator** bridge.

Syndicate bridge has a three-steps architecture, hovewer tokens logics differ in case of token **donorship**. Let's introduce a quick example.

The native currency on the OneLedger is OLT token. In case of Ethereum it's pegged representation will be sOLT (means **syndicated**). So sOLT token is **syndicated** token and native OLT is **donored**. In combination it represent the following schema for user when he cross-chain transfer from OneLedger to Ethereum:

1. Locking OLT amount on the OneLedger bridge;
2. Obtain syndicate signatures for proof;
3. Ethereum bridge mints syndicate token representation in the **same** equivalent as sOLT token;

So it is always 1-1 representation for the token.
The next scenario, when user wants to get a donored token back, next schema will be applied:

1. Ethereum bridge burns sOLT syndicate token representation;
2. Obtain syndicate signatures for proof;
3. Unlock OLT amount on the OneLedger in the **same** equivalent;

In terms of smart contract functionality, only 2 transactions will be used:
1. [enter](/docs/bridge/contracts/bridge-router#enter) function to lock (donor) / burn (syndicate);
2. [exit](/docs/bridge/contracts/bridge-router#exit) function to unlock (donor) / mint (syndicate);

Briefly:
1. All cross chain tokens have 1-to-1 equivalent;
2. Only two transactions used - enter (on source chain) and exit (on target chain);
3. Each exit requires syndicate proof;

### Token issuing flow

As example let's take OneLedger to Ethereum flow

`NOTE: same flow for all cross-chains EVM networks`

<img src={useBaseUrl("img/architecture/syndicate-bridge.svg")} />

1. User send his crypto to a bridge on OneLedger network ([enter](/docs/bridge/contracts/bridge-router#enter) / [enterETH](/docs/bridge/contracts/bridge-router#enterETH));
2. OneLedger network will store info about this operation, will lock if token is donored or burn if token is syndicated;
3. Syndicate orchestrator will see the commit result of **enter** operation and should ask SAO for validate a proof;
4. SAO roundrobinly will sign the transactions with 2/3 voting power and will make it available for user;
5. User obtain syndicate's signatures for next process;
6. User send transaction to a bridge on Ethereum network ([exit](/docs/bridge/contracts/bridge-router#exit)) with obtained signatures;
7. Ethereum network will store info about this operation, will unlock the 1-to-1 equivalent of tokens if token is donored or mint 1-to-1 equivalent if token is syndicated;
8. Syndicate orchestrator will verify exit to be on sync for both chains;

## Smart contracts stack

Syndicate bridge maintains a set of smart contracts on OneLedger, Ethereum, Binance, Matic, which handle the following:

- Bridge Token contract which is a syndicated token equivalent for donor token;
- Bridge Token Manager for verification 1-to-1 connection;
- Bridge Cosigner Manager verificator for syndicate;
- Bridge Router the main orchestrator for all 3 contracts above;
