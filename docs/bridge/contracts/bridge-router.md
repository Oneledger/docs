---
id: bridge-router
title: Bridge Router
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

Bridge Router is a core functionality which manage the token issuing (means transfer or mint/burn), double spend protection, re-entrancy guarded. It's functionality API simple in mature, in order to start a bridge process, smart contract function **enter** on local chain is used which is mean "Make enter to a bridge process for the next exit process". So after enter it is always expected to be **exit** smart contract process in terms of meaning "Have passed all checks in enter and finalize a process" on external chain.

Shortly:

`enter -> exit`

Depends on token type - donored or syndicated the following represented in chart during this processes:

|              | Donored                                             | Syndicated                                                |
|--------------|-----------------------------------------------------|-----------------------------------------------------------|
| Token prefix | OLT<br/> USDT<br/> DAI<br/> BNB<br/> ETH<br/> MATIC | sOLT<br/> sUSDT<br/> sDAI<br/> sBNB<br/> sETH<br/> sMATIC |
| Enter        | Lock                                                | Burn                                                      |
| Exit         | Unlock                                              | Mint                                                      |

For different token types like ERC-20/Native, the **enter** and **enterETH** used respectively. We are called **ETH** in terms to understand that Native currency with payable will be used, to make same API for all EVM chains. So in order to move OLT tokens from OneLedger or ETH tokens from Ethereum, enterETH function will be used.

### enter

```cpp
function enter(
    address token,
    uint256 amount,
    uint256 targetChainId
) external;
```

- Should not allow zero token to be used in this function (zero means native token);
- Target chain could not be equal to local chain, token manager is responsible for this;
- Should not accept zero amount;
- Should increase nonce after each successfull execution;
- Could not burn if amount does not exists on address;
- Could not withdraw from address if not enough balance;
- Token address should be address;

### enterETH

```cpp
function enterETH(uint256 targetChainId) external payable;
```

- Should allow only native currency;
- Target chain could not be equal to local chain, token manager is responsible for this;
- Should not accept zero amount;
- Native token should be enable in token manager;
- Not responsible for burn or mint;
- Should increase nonce after each successfull execution;

### exit

```cpp
function exit(bytes calldata data, bytes[] calldata signatures) external;
```

- Should mint/transfer tokens on sender address;
- Sender address should be the same as it was during enter process;
- Should be protected from re-entrancy;
- Should be protected from double spend;
- Should have enough syndicate signatures to complete this operation;
