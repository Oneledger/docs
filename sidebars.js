/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  basics: [
    'develop/new-to-project',
    {
      type: 'category',
      label: 'Deploying on OneLedger',
      items: [
        'develop/hardhat',
        'develop/truffle',
      ],
    },
    {
      type: 'category',
      label: 'Network Details',
      items: [
        'develop/network-details/network',
        'develop/network-details/gas-token',
        'develop/network-details/full-node-deployment',
        'develop/network-details/validator-node-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Staking',
      items: [
        'develop/staking/delegation-app',
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        'develop/bolos',
        'develop/faucet',
      ],
    },
    {
      type: "category",
      label: "Configure OneLedger on Wallets",
      items: [
        {
          type: "category",
          label: "OneWallet",
          items: [
            "develop/Onewallet/hello",
            "develop/Onewallet/restore-onewallet",
          ],
        },
        {
          type: "category",
          label: "MetaMask",
          items: [
            "develop/metamask/hello",
            "develop/metamask/config-oneledger-on-metamask",
            "develop/metamask/multiple-accounts",
          ],
        },
      ],
    },
    'develop/faq',
  ],
  bridge: [
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'bridge/architecture',
        'bridge/glossary',
        {
          type: 'category',
          label: 'Contracts',
          items: [
            'bridge/contracts/bridge-token',
            'bridge/contracts/bridge-token-manager',
            'bridge/contracts/bridge-cosigner-manager',
            'bridge/contracts/bridge-router',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Network Details',
      items: [
        'bridge/network-details/deployed',
        'bridge/network-details/syndicate-tokens',
      ],
    },
  ],
  elp: [
    'elp/getting-started',
    'elp/tutorial',
    'elp/supported-pools',
  ],
  // dex: [
  //   'dex/getting-started',
  //   'dex/architecture',
  //   'dex/reward-token',
  //   'dex/token-economics',
  //   'dex/contract-addresses',
  //   'dex/plans'
  // ]
};

module.exports = sidebars;
