// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "../interfaces/IAntagiFactory.sol";
import "../interfaces/IAntagiPair.sol";
import "./AntagiPair.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @title Antagi Pool Factory
/// @author NatX
/// @notice This contract is used to create new Antagi NFT trading pools
/// @dev Create2 is used to deploy the AntagiPair contract
contract AntagiFactory is IAntagiFactory {
    using Counters for Counters.Counter; // OpenZeppelin Counter
    Counters.Counter public _pairsCount; // Counter for pairs created
    address public feeTo; // the protocol fee collector
    address public feeToSetter; // the setter of fee collector

    struct pairPool {
        address tokenAddress;
        address pairAddress;
    }

    mapping(address => address[]) public getPair; // maps an NFT address to all its pools
    address[] public allPairs;
    mapping(uint256 => pairPool) public pairPools; // all pool pair addresses and their token addresses
    mapping(address => address[]) userPools; // all pools created by address

    /// @notice event when emitted when a pair is created
    /// @param token the NFT token address
    /// @param pair the address of the pair created 
    event PairCreated(address token, address pair);

    /// Constructor function
    /// the feeToSetter is initialized
    constructor(address _feeToSetter) {
        feeToSetter = _feeToSetter;
    }

    function getPoolCount() external view returns(uint256) {
        return _pairsCount.current();
    }

    /// @notice creates a Antagi pair pool
    /// @dev creates a new pool contract using create2 and updates the getPair mapping and allPairs array
    /// @param token the NFT token address
    /// @param _router the Antagi router contract address
    /// @param _curve the Antagi bonding curve contract address
    /// @param _fee the fee percentage the pool creator wants to impose on each trade on the pool
    /// @return pair the address of the newly created pair pool
    function createPair(address token, address _router, address _curve, uint256 _fee) external returns (address pair) {
        // require fee 1 - 5 %
        require(token != address(0), 'Antagi: Address can not be blank');
        // bytes memory bytecode = type(AntagiPair).creationCode;
        // assembly {
        //     pair := create2(0, add(bytecode, 32), mload(bytecode), 0)
        // }
        pair = address(new AntagiPair());
        IAntagiPair(pair).initialize(_router, _curve, token, _fee);
        getPair[token].push(pair);
        allPairs.push(pair);
        userPools[msg.sender].push(pair);
        pairPool memory _pairPool = pairPool(token, pair);
        pairPools[_pairsCount.current()] = _pairPool;
        _pairsCount.increment();
        emit PairCreated(token, pair);
    }

    /// @notice sets the receiver of the protocol fees
    /// @dev only the feeToSetter can call this function
    /// @param _feeTo the address that will receive protocol fees
    function setFeeTo(address _feeTo) external {
        require(msg.sender == feeToSetter, 'Antagi: You are not permitted');
        feeTo = _feeTo;
    }

    /// @notice sets the feeToSetter of the protocol fees
    /// @dev only the feeToSetter can call this function
    /// @param _feeToSetter the address that will receive protocol fees
    function setFeeToSetter(address _feeToSetter) external {
        require(msg.sender == feeToSetter, 'Antagi: You are not permitted');
        feeToSetter = _feeToSetter;
    }

    /// @notice returns all pool addresses of an NFT token
    /// @dev the getPair mapping is used to retrieve all token pairs
    /// @param token the token address
    /// @return pairs an array of all token pairs
    function getPairs(address token) external view returns (address[] memory pairs) {
        pairs = getPair[token];
    }

    function getUserPairs(address user) public view returns(address[] memory userPairs) {
        userPairs = userPools[user];
    }
}