// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ArcAngel is ERC721 {
    mapping (uint256 => string) public uri;

    constructor() ERC721("ArcAngel", "ACA") {
        uri[0] = "https://th.bing.com/th/id/OIG3.rhAda4KFsO1LwuVILtfu?pid=ImgGn";
        uri[1] = "https://th.bing.com/th/id/OIG3.suBRQgyBQGRlFAKcpJgl?pid=ImgGn";
        uri[2] = "https://th.bing.com/th/id/OIG3.Gzxwt_XFoNuc6eJ4maOp?pid=ImgGn";
        uri[3] = "https://th.bing.com/th/id/OIG3.y3YxGqScdq1AasoqnGwe?pid=ImgGn";
    }

    function mint(uint256 tokenId) public {
        _mint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return uri[tokenId];
    }
}