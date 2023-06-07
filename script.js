const { ethers } = require("ethers");

const factory_contract_muteio = "0xCc05E242b4A82f813a895111bCa072c8BBbA4a0e";
const factory_abi_muteio = [
    {
       "inputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"token0",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"token1",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"bool",
             "name":"stable",
             "type":"bool"
          },
          {
             "indexed":false,
             "internalType":"address",
             "name":"pair",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"fee",
             "type":"uint256"
          }
       ],
       "name":"PairCreated",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"_protocolFeeDynamic",
             "type":"uint256"
          }
       ],
       "name":"ProtocolFeeDynamicChange",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"_protocolFeeFixed",
             "type":"uint256"
          }
       ],
       "name":"ProtocolFeeFixedChange",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"address",
             "name":"_feeTo",
             "type":"address"
          }
       ],
       "name":"ProtocolFeeToChange",
       "type":"event"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"allPairs",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"allPairsLength",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"tokenA",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"tokenB",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"feeType",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"stable",
             "type":"bool"
          }
       ],
       "name":"createPair",
       "outputs":[
          {
             "internalType":"address",
             "name":"pair",
             "type":"address"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"feeTo",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "name":"getPair",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"protocolFeeDynamic",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"protocolFeeFixed",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_feeTo",
             "type":"address"
          }
       ],
       "name":"setFeeTo",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_protocolFeeDynamic",
             "type":"uint256"
          }
       ],
       "name":"setProtocolFeeDynamic",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_protocolFeeFixed",
             "type":"uint256"
          }
       ],
       "name":"setProtocolFeeFixed",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    }
];
const pool_abi_muteio = [
    {
       "inputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"owner",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"Approval",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount0",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount1",
             "type":"uint256"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          }
       ],
       "name":"Burn",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"pairFee",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"liqFee",
             "type":"uint256"
          }
       ],
       "name":"ChangeFee",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"recipient",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount0",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount1",
             "type":"uint256"
          }
       ],
       "name":"Claim",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"delegator",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"fromDelegate",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"toDelegate",
             "type":"address"
          }
       ],
       "name":"DelegateChanged",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"delegate",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"previousBalance",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"newBalance",
             "type":"uint256"
          }
       ],
       "name":"DelegateVotesChanged",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount0",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount1",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"pAmount0",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"pAmount1",
             "type":"uint256"
          }
       ],
       "name":"Fees",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount0",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount1",
             "type":"uint256"
          }
       ],
       "name":"Mint",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount0In",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount1In",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount0Out",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount1Out",
             "type":"uint256"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          }
       ],
       "name":"Swap",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"reserve0",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"reserve1",
             "type":"uint256"
          }
       ],
       "name":"Sync",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"Transfer",
       "type":"event"
    },
    {
       "stateMutability":"payable",
       "type":"fallback"
    },
    {
       "inputs":[
          
       ],
       "name":"DOMAIN_SEPARATOR",
       "outputs":[
          {
             "internalType":"bytes32",
             "name":"",
             "type":"bytes32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"MINIMUM_LIQUIDITY",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"allowance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"approve",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"balanceOf",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          }
       ],
       "name":"burn",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"amount0",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"amount1",
             "type":"uint256"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_fee",
             "type":"uint256"
          }
       ],
       "name":"changeFeeType",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"uint32",
             "name":"",
             "type":"uint32"
          }
       ],
       "name":"checkpoints",
       "outputs":[
          {
             "internalType":"uint32",
             "name":"fromBlock",
             "type":"uint32"
          },
          {
             "internalType":"uint256",
             "name":"votes",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"claimFees",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"claimed0",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"claimed1",
             "type":"uint256"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"claimable0",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"claimable1",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"tokenIn",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amountIn",
             "type":"uint256"
          }
       ],
       "name":"current",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"amountOut",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"currentCumulativePrices",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"reserve0Cumulative",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"reserve1Cumulative",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"blockTimestamp",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"decimals",
       "outputs":[
          {
             "internalType":"uint8",
             "name":"",
             "type":"uint8"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"delegatee",
             "type":"address"
          }
       ],
       "name":"delegate",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"delegator",
             "type":"address"
          }
       ],
       "name":"delegates",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"factory",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"fees",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"amountIn",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"tokenIn",
             "type":"address"
          }
       ],
       "name":"getAmountOut",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"getCurrentVotes",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"blockNumber",
             "type":"uint256"
          }
       ],
       "name":"getPriorVotes",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getReserves",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"_reserve0",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"_reserve1",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"_blockTimestampLast",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"index0",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"index1",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_token0",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"_token1",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"_fee",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"_stable",
             "type":"bool"
          }
       ],
       "name":"initialize",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"lastObservation",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"timestamp",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"reserve0Cumulative",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"reserve1Cumulative",
                   "type":"uint256"
                }
             ],
             "internalType":"struct MuteSwitchPairDynamic.Observation",
             "name":"",
             "type":"tuple"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"metadata",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"dec0",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"dec1",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"r0",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"r1",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"st",
             "type":"bool"
          },
          {
             "internalType":"address",
             "name":"t0",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"t1",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          }
       ],
       "name":"mint",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"liquidity",
             "type":"uint256"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"name",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"nonces",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"numCheckpoints",
       "outputs":[
          {
             "internalType":"uint32",
             "name":"",
             "type":"uint32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"observationLength",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"observations",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"timestamp",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"reserve0Cumulative",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"reserve1Cumulative",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"pairFee",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"owner",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"deadline",
             "type":"uint256"
          },
          {
             "internalType":"bytes",
             "name":"sig",
             "type":"bytes"
          }
       ],
       "name":"permit",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"tokenIn",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amountIn",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"points",
             "type":"uint256"
          }
       ],
       "name":"prices",
       "outputs":[
          {
             "internalType":"uint256[]",
             "name":"",
             "type":"uint256[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"tokenIn",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amountIn",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"granularity",
             "type":"uint256"
          }
       ],
       "name":"quote",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"amountOut",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"reserve0CumulativeLast",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"reserve1CumulativeLast",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"tokenIn",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amountIn",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"points",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"window",
             "type":"uint256"
          }
       ],
       "name":"sample",
       "outputs":[
          {
             "internalType":"uint256[]",
             "name":"",
             "type":"uint256[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          }
       ],
       "name":"skim",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"stable",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"supplyIndex0",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"supplyIndex1",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"amount0Out",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"amount1Out",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "internalType":"bytes",
             "name":"data",
             "type":"bytes"
          }
       ],
       "name":"swap",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"symbol",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"sync",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"token0",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"token1",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"tokens",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"totalSupply",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"transfer",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"transferFrom",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    }
] ;
const factory_contract_syncswap = "0xf2FD2bc2fBC12842aAb6FbB8b1159a6a83E72006";
const factory_abi_syncswap = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_master",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InvalidTokens",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token0",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "token1",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "pool",
          "type": "address"
        }
      ],
      "name": "PoolCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "createPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "pool",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDeployData",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "deployData",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "getPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "pool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenOut",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "getSwapFee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "swapFee",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "master",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];
const pool_abi_syncswap = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Expired",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientLiquidityMinted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Overflow",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0In",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1In",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0Out",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1Out",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reserve0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reserve1",
          "type": "uint256"
        }
      ],
      "name": "Sync",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_callback",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_callbackData",
          "type": "bytes"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IPool.TokenAmount[]",
          "name": "_amounts",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_callback",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_callbackData",
          "type": "bytes"
        }
      ],
      "name": "burnSingle",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IPool.TokenAmount",
          "name": "_tokenAmount",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        }
      ],
      "name": "getAmountIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        }
      ],
      "name": "getAmountOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAssets",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProtocolFee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "_protocolFee",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReserves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_reserve0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_reserve1",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "getSwapFee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "_swapFee",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "invariantLast",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "master",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_callback",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_callbackData",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "permit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_signature",
          "type": "bytes"
        }
      ],
      "name": "permit2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolType",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reserve0",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reserve1",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_callback",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_callbackData",
          "type": "bytes"
        }
      ],
      "name": "swap",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IPool.TokenAmount",
          "name": "_tokenAmount",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vault",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];

const WETH_MUTEIO = "0x294cB514815CAEd9557e6bAA2947d6Cf0733f014";
const WETH_SYNCSWAP = "0x20b28b1e4665fff290650586ad76e977eab90c5d";

const DAI_ADDRESS = "0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b";
const LINK_ADDRESS = "0x40609141Db628BeEE3BfAB8034Fc2D8278D0Cc78";
const USDC_ADDRESS = "0x0faF6df7054946141266420b43783387A78d82A9";
const WBTC_ADDRESS = "0x0BfcE1D53451B4a8175DD94e6e029F7d8a701e9c";
const liste = [DAI_ADDRESS,LINK_ADDRESS,USDC_ADDRESS,WBTC_ADDRESS];
const provider = new ethers.providers.JsonRpcProvider(`https://testnet.era.zksync.dev`);

const factory_contract_mute_interface = new ethers.Contract(factory_contract_muteio, factory_abi_muteio, provider);
const factory_contract_syncswap_interface = new ethers.Contract(factory_contract_syncswap, factory_abi_syncswap, provider);
async function main() {
    const blockNumber = 7085720;
    for (let i=0 ; i < liste.length ; i++) {
        const eleman = liste[i];
        const getir_mute = await factory_contract_mute_interface.getPair(WETH_MUTEIO,eleman,0,{ blockTag: blockNumber });
        const reserves_mute_contract = new ethers.Contract(getir_mute, pool_abi_muteio, provider);
        const reserves_mute = await reserves_mute_contract.getReserves({ blockTag: blockNumber });
        console.log('Mute, token0_reserves = '+reserves_mute[0]+" -- token1_reserves = "+reserves_mute[1]);

        const getir_syncswap = await factory_contract_syncswap_interface.getPool(WETH_SYNCSWAP,eleman,{ blockTag: blockNumber });
        const reserves_syncswap_contract = new ethers.Contract(getir_syncswap, pool_abi_syncswap, provider);
        const reserves_syncswap = await reserves_syncswap_contract.getReserves({ blockTag: blockNumber });
        console.log('Syncswap, token0_reserves = '+reserves_syncswap[0]+" -- token1_reserves = "+reserves_syncswap[1]);
    }
}
main();
