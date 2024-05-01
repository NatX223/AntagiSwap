// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DigitalDreams is ERC721 {
    mapping (uint256 => string) public uri;

    constructor() ERC721("DigitalDreams", "DGD") {
        uri[0] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/DigitalDreams%2F0.jpg?alt=media&token=368be427-f6eb-4ce4-8508-3001cab7dcc4";
        uri[1] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/DigitalDreams%2F1.jpg?alt=media&token=d9e7959f-671c-4efd-84f0-3b3cb6b21253";
        uri[2] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/DigitalDreams%2F2.jpg?alt=media&token=ae571730-4fb1-4c5c-b8de-cfce8fc1f206";
        uri[3] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/DigitalDreams%2F3.jpg?alt=media&token=69c8a0e1-d5f1-47cc-a891-1e8011e97e6e";
    }

    function mint(uint256 tokenId) public {
        _mint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return uri[tokenId];
    }
}