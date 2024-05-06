// install openzeppelin
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

// write primary contract
contract Exchange {
    using Counters for Counters.Counter; // OpenZeppelin Counter
    Counters.Counter public _listingCount; // Counter for listings
    Counters.Counter public _auctionCount; // Counter for auctions
    Counters.Counter public _barterCount; // Counter for barter trades

    address public deployer;

    struct listing {
        address lister;
        uint256 price;
        uint256[] ids;
        address nftAddress;
        bool sold;
    }

    struct bid {
        address bidder;
        uint256 amount;
        bool accepted;
        bool canceled;
    }

    struct auction {
        address auctioner;
        uint256 startPrice;
        address nftAddress;
        uint256[] ids;
        bid[] bids;
        bool sold;
    }

    struct barter {
        address lister;
        address targetNFT;
        uint256 targetNumber; 
        address offeredNFT;
        bool sold;
    }

    mapping (uint256 => listing) public listings;
    mapping (uint256 => auction) public auctions;
    mapping (uint256 => barter) public barters;
    mapping (uint256 => uint256[]) public offeredIds;

    constructor() {
        deployer = msg.sender;
    }

    function createListing(uint256 price, uint256[] calldata tokenIds, address nftAddress) external isApproved(msg.sender, nftAddress){
        uint256 id = _listingCount.current();
        listings[id].lister = msg.sender;
        listings[id].price = price;
        listings[id].ids= tokenIds;
        listings[id].nftAddress = nftAddress;
        _listingCount.increment();
    }

    function buyListing(uint256 listingId) external payable {
        require(msg.value == listings[listingId].price, "Please pay the right amount");
        payable(listings[listingId].lister).transfer(msg.value);
        batchTransfer(listings[listingId].nftAddress, listings[listingId].lister, listings[listingId].ids, msg.sender);
        listings[listingId].sold = true;
    }

    function createAuction(uint256 startPrice, address nftAddress, uint256[] calldata tokenIds) external isApproved(msg.sender, nftAddress) {
        uint256 id = _auctionCount.current();
        auctions[id].auctioner = msg.sender;
        auctions[id].startPrice = startPrice;
        auctions[id].ids = tokenIds;
        auctions[id].nftAddress = nftAddress;
        _auctionCount.increment();
    }

    function placeBid(uint256 auctionId) external payable {
        require(msg.value >= auctions[auctionId].startPrice, "bid amount must be equal to or higher than the startprice");
        bid memory _bid;
        _bid.bidder = msg.sender;
        _bid.amount = msg.value;
        auctions[auctionId].bids.push(_bid);
    }

    function cancelBid(uint256 auctionId, uint256 bidId) external {
        require(auctions[auctionId].bids[bidId].canceled == false && auctions[auctionId].bids[bidId].accepted == false, "You do not have access to this function");
        auctions[auctionId].bids[bidId].canceled == true;
        payable(auctions[auctionId].bids[bidId].bidder).transfer(auctions[auctionId].bids[bidId].amount);
    }

    function acceptBid(uint256 auctionId, uint256 bidId) external {
        require(msg.sender == auctions[auctionId].auctioner, "You don't have access to this function");
        require(auctions[auctionId].bids[bidId].canceled == false && auctions[auctionId].bids[bidId].accepted == false, "This bid is unavailable"); 
        auctions[auctionId].bids[bidId].accepted = true;
        batchTransfer(auctions[auctionId].nftAddress, auctions[auctionId].auctioner, auctions[auctionId].ids, auctions[auctionId].bids[bidId].bidder);
        payable(auctions[auctionId].auctioner).transfer(auctions[auctionId].bids[bidId].amount);
    }

// isApproved(msg.sender, offeredIds, offeredNFT)
    function createBarter(address targetNFT, address offeredNFT, uint256[] calldata _offeredIds, uint256 targetNumber) external isApproved(msg.sender, offeredNFT) {
        uint256 id = _barterCount.current();
        barters[id].lister = msg.sender;
        barters[id].targetNFT = targetNFT;
        barters[id].targetNumber = targetNumber;
        offeredIds[id] = _offeredIds;
        barters[id].offeredNFT = offeredNFT;
        barters[id].lister = msg.sender;
        _barterCount.increment();
    }

    function fulfilBarter(uint256 barterId, uint256[] calldata tokenIds) external isApproved(msg.sender, barters[barterId].targetNFT) {
        require(tokenIds.length >= barters[barterId].targetNumber, "Invalid swap: offer more NFTs");
        batchTransfer(barters[barterId].targetNFT, msg.sender, tokenIds, barters[barterId].lister);
        batchTransfer(barters[barterId].offeredNFT, barters[barterId].lister, offeredIds[barterId], msg.sender);
        barters[barterId].sold = true;
    }

    function batchTransfer(address nftAddress, address from, uint256[] memory tokenIds, address to) internal {
        IERC721 NFT = IERC721(nftAddress);
        // run through a loop to trnasfer all the nfts to check if the contract owns the NFT with tokenId
        for (uint256 i = 0; i < tokenIds.length; i++) {
            NFT.transferFrom(from, to, tokenIds[i]);
        }
    }

    modifier isApproved(address owner, address offeredNFT) {
        IERC721 NFT = IERC721(offeredNFT);
        require(NFT.isApprovedForAll(owner, address(this)) == true, "Please approve the contract");
        _;
    }
}