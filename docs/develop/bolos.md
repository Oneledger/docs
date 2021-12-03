---
id: bolos
title: Ledger Nano setup (BOLOS)
description: Build your next blockchain app with OneLedger.
keywords:
  - docs
  - oneledger
  - olt
image: https://raw.githubusercontent.com/oneledger/syndicate-token-list/master/logo.svg
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is BOLOS?

The **Bitcoin Open Ledger Operating System (BOLOS)** is Ledger platform allowing developers to create pluggable applications on their Hardware Wallets. It is the way of turning Bitcoin Hardware Wallets into Personal Security Devices — users can review and install third party applications that will add new privacy features on top of their own shared set of cryptographic material, without exposing that material.

## How to Install Oneledger App?

The following contains instructions on how to install the OneLedger app onto a Ledger Nano S device.

:::warning
The ledger app you will be using is not released by the manufacturer. Please use at your own risk and keep your private key data or digital assets safe.
:::

If you are running Mac OS or Windows then you need to set up a virtual machine before installing the app. Please check the [Install with Virtualbox](/docs/develop/bolos/hello#install-with-virtualbox) section for instructions. If you are running a Linux OS then you can proceed to [Install From Linux](/docs/develop/bolos/hello#install-from-linux).

### Install with Virtualbox

1. Download and install Virtualbox along with the extension pack: https://www.virtualbox.org/wiki/Downloads<br/><br/>

2. Download Installer Image from here: [BOLOs-Installer](https://drive.google.com/file/d/1FUqztE9ntqYHifLgb1NZdNLB4l2FWR1p/view) md5 hash - 6f2a211e9636bfa255babbbc29c4eae9

:::important
Please verify the md5 hash of the downloaded file. This will ensure you've downloaded the correct file.
:::

```js
Windows: CertUtil -hashfile [path to file] MD5
macOS: md5 [path to file]
```

3. Import image through **Virtualbox - File -> Import appliance.**<br/><br/>

<img src={useBaseUrl("img/bolos/import-virtualbox.png")} /><br/><br/>

<img src={useBaseUrl("img/bolos/start-virtualbox.png")} /><br/><br/>

4. Once imported, start the machine and login:

    ```js
    user: bolos
    password: bolos
    ```

5. Enable USB connection from host machine to your Ubuntu guest

* Plug in your **Nano S device** and unlock it.

* Open BOLOs-Installer Virtual machine settings. Go to the USB section and on the right side you will see an icon to add new filter. Click on that and you should be able to see your Ledger Nano s device listed. Select that device to add the new filter.

* (Windows) Check the **"Devices"** menu at the top of the virtualbox window. Scroll down to USB and select your **Ledger Nano S** in order to mount the device to your virtual machine.<br/><br/>

<img src={useBaseUrl("img/bolos/device-usb.png")} /><br/><br/>

<img src={useBaseUrl("img/bolos/lsusb.png")} /><br/><br/>

6. Run the **lsusb** command in a terminal to see if your device is visible:

```js
$ lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 003: ID 2c97:1011 Ledger Nano S
Bus 002 Device 002: ID 80ee:0021 VirtualBox USB Tablet
Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
```

7. Run the command below (You may need to re-enter the password from above: **"bolos"**).

    `./load.sh`<br/><br/>

8. Follow instructions displayed on your device.

:::warning
Your device will display a message indicating that the app is not genuine. This is because the app is not officially released from the manufacturer
:::

<img src={useBaseUrl("img/bolos/installation-1.png")} width={1040} height={540} /><br/><br/>

<img src={useBaseUrl("img/bolos/installation-2.png")} width={1040} height={540} /><br/><br/>

<img src={useBaseUrl("img/bolos/installation-3.png")} width={1040} height={540} /><br/><br/>

9. Once you have completed the installation you will be able to connect to OneWallet.

* Open OneWallet chrome extension.

* Open the **"Hardware Wallet"** on the left pane under Administration.

* Make sure your Ledger Nano S is connected and unlocked then click on the **"connect"** button.

* You should be able to access Accounts from your device now.<br/><br/>

### Install from Linux

1. Download Oneledger package and verify: [olbolos.tar.gz](https://github.com/Oneledger/ledger-app-olt/blob/master/olbolos.tar.gz)

    ```js
    $ md5sum olbolos.tar.gz
    201c61076d83e6f94da8fa13ca67956f  olbolos.tar.gz
    ```

2. Create a folder to extract the archive to

    `$ mkdir ~/bolos`

3. Unzip package into the folder you created:

    ```js
    $ gzip -d olbolos.tar.gz
    $ tar -xvf olbolos.tar -C ~/bolos
    ```

4. Run load script to install dependencies and load app onto the ledger nano(s) device.

    `$ ./load.sh`

5. Follow instructions displayed on your device.<br/><br/>

**Congratulations!** You have successfully installed Oneledger App onto a Ledger Nano S device.