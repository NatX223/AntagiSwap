// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ShardArt is ERC721 {
    mapping (uint256 => string) public uri;

    constructor() ERC721("ShardArt", "SHA") {
        uri[0] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardArt%2F0.jpg?alt=media&token=86d6889e-559c-4979-a348-2243cb352de7";
        uri[1] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardArt%2F1.jpg?alt=media&token=61ac9db9-a06d-4d20-ac44-d13d1a9b87e3";
        uri[2] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardArt%2F2.jpg?alt=media&token=69c76ceb-345f-416a-917c-66bd082768b6";
        uri[3] = "https://firebasestorage.googleapis.com/v0/b/antagi-688b2.appspot.com/o/ShardArt%2F3.jpg?alt=media&token=4bbd604a-df4f-4c09-96e0-05ec169929f3";
    }

    function mint(uint256 tokenId) public {
        _mint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return uri[tokenId];
    }
}