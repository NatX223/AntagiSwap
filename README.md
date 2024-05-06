# Antagi

<!-- live link -  -->

> ## Table of Contents

-   [Problem Statement](#Problem-statement)
-   [Solution](#Solution)
-   [How it works](#How-it-works)
-   [Technologies Used](#technologies-used)
    -   [Smart Contract](#Solidity-smart-contracts)
    -   [Canto Testnet](#Canto-Testnet)
#

> ## Problem-statement

Problem Statement: NFTs have beecome very popular and the need to revolutionize the way it is traded is necessary. Users want to swap their NFTs very quickly withou the hassle of auctioning their NFTs then getting the money from the auction then going to buy another NFT that they want. A streamlined process needs to be put in place.

> ## Solution

Solution: The concept of trading card games was the inspiration of the project. Users who want to get a NFT or NFTs from a specific collection can decide to put up the NFTs they already own in exchange for the NFTs they want and users can check out the NFTs they want and complete a barter trade. An NFT AMM was also built to facilitate the buying and selling aof NFTs in a fast and easy way.

> ## How-it-works

For Barter: The first step in this process is going to the create tab of the app and selecting barter, then you will be asked to select the NFTs you want to put up for barter and then sign the prompted transaction, the barter will recorded in a smart contract and thus be public for everyone to see and interact with. To fulfil a barter trade, a user needs to enter the barter section of the app, where they will see all available barter trades yet to be fulfilled, they can then select any one that contains the NFTs they want and exchange their NFTs.

For AMM: User can create a pool just like in an ERC-20 decetralized exchange, then they will be required to put in liquidity into a pool, the amount of NFTs and native coins (SHM) put into a pool determines the price of the NFT (the constant product bonding curve - XYK was used). To swap SHM to NFTs, the user need to select a pool then select NFTs they want from the specified pool, the amount of SHM to be paid will then be calculated and the user can sign the prompted transaction and the NFTs will be transfered from the pool to the user and the SHM goes in the opposite direction - from the user to the pool. using the AMM a user can also make direct NFT to NFT swaps, using a pool route by swapping an NFT for SHM, then swapping the SHM for another NFT. 

> ## Technologies Used

| <b><u>Stack</u></b>      | <b><u>UsageSummary</u></b>                           |
| :----------------------- | :--------------------------------------------------- |
| **`Solidity`**           | Smart contract                                       |
| **`Canto Testnet`**   | Deploying smart contracts                            |
| **`Next.js`**            | Frontend                                             |

-   ### **Solidity smart contracts**

    The  smart contracts can be found [here](https://github.com/NatX223/AntagiSwap/tree/main/smart%20contracts)

    -   **Exchange Contract** The exchange contract serves as the central hub for managing all NFT listings, auctions and barter trades created on the platform. It 
    utilizes the OpenZeppelin Counters contract and defines various structs to monitor giveaway balances. Users can leverage the 
    contract's functionality to create barter trades by calling the createBarter function. This establishes a systematic and 
    secure approach to organizing and tracking trades within the platform. The exchange contract code can be found [here](https://github.com/NatX223/AntagiSwap/blob/main/smart%20contracts/contracts/Exchange.sol). The deployed address of the Exchange contract 
    on Canto testnet is 0x595CeE49356f6260D9D3290f7C052183260314ef
    -   **AMM ContractS** The AMM contracts consist of the Pair, Factory, Bonding Curve and Router contracts. All these contracts handle the creation of pools, addition and removal of Liquidity as well as swapping of NFTs (both buy and sell) [here](https://github.com/NatX223/AntagiSwap/tree/main/smart%20contracts). The deployed addresses of the AMM contracts on Canto testnet can be found [here] (https://github.com/NatX223/AntagiSwap/blob/main/deploymentAddresses.txt)

    -   **How to run** clone the repo, enter the smart contracts folder and download the npm packages by running:
    ```bash
    npm install
    # or
    yarn add
    ```
    configure the hardhat.config file(default set to mumbai) then deploy to any chain of choice of using the commands
    ```bash
    npx hardhat run --network Canto scripts/deployExchange.js
    ```

-   ### **Canto-Testnet**

    - The smart contracts were deployed on the Canto-Testnet and all deployed contract addresses can be found [here] (https://github.com/NatX223/AntagiSwap/blob/main/deploymentAddresses.txt)

-   ### **Frontend**

    -   **How to run** clone the repo, enter the frontend folder and download the npm packages by running:
    ```bash
    npm install
    # or
    yarn add
    ```
    use the command
    ```bash
    npm run dev
    ```
    to start a local development server to view the site