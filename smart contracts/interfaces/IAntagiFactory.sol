// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface IAntagiFactory {
    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPairs(address token) external view returns (address[] memory pairs);

    function createPair(address token, address _router, address _curve, uint256 _fee) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}