// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Multicall {
    function aggregate(
        bytes[] memory calls
    ) public returns (uint256[] memory results) {
        results = new uint256[](calls.length);
        for (uint256 i = 0; i < calls.length; i++) {
            (bool success, bytes memory result) = address(this).delegatecall(
                calls[i]
            );
            require(success, "Multicall: call failed");
            results[i] = abi.decode(result, (uint256));
        }
        return results;
    }
}
