// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.11;

import "@openzeppelin/contracts/utils/Pausable.sol";

contract Tape is Pausable {
    receive() external payable {}

    fallback() external payable {}
}
