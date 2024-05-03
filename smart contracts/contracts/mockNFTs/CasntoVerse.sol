// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CantoVerse is ERC721 {
    mapping (uint256 => string) public uri;

    constructor() ERC721("CantoVerse", "CNV") {
        uri[0] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardVerse%2F0.jpg?alt=media&token=9af3108d-0c64-486c-a7be-4d10a7254b8b";
        uri[1] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardVerse%2F1.jpg?alt=media&token=8dc8b191-0cd9-4b70-96a0-f676d3bf6bf2";
        uri[2] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardVerse%2F2.jpg?alt=media&token=e1d7be4f-a144-435f-b70e-442c3d733011";
        uri[3] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardVerse%2F3.jpg?alt=media&token=69e590a9-3e9c-4ff9-b43e-cf2ac03489d8";
    }

    function mint(uint256 tokenId) public {
        _mint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return uri[tokenId];
    }
}