const { ethers } = require("ethers");
const fs = require('fs');

const factory_contract_muteio = "0xCc05E242b4A82f813a895111bCa072c8BBbA4a0e";
const factory_abi_muteio = require("./ABI/factory_abi_muteio.json");
const pool_abi_muteio = require("./ABI/pool_abi_muteio.json");
const factory_contract_syncswap = "0xf2FD2bc2fBC12842aAb6FbB8b1159a6a83E72006";
const factory_abi_syncswap = require("./ABI/factory_abi_syncswap.json");
const pool_abi_syncswap = require("./ABI/pool_abi_syncswap.json");

const ERC20_abi = require("./ABI/erc20_abi.json");

const WETH_MUTEIO = "0x294cB514815CAEd9557e6bAA2947d6Cf0733f014";
const WETH_SYNCSWAP = "0x20b28b1e4665fff290650586ad76e977eab90c5d";

const DAI_ADDRESS = "0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b";
const LINK_ADDRESS = "0x40609141Db628BeEE3BfAB8034Fc2D8278D0Cc78";
const USDC_ADDRESS = "0x0faF6df7054946141266420b43783387A78d82A9";
const WBTC_ADDRESS = "0x0BfcE1D53451B4a8175DD94e6e029F7d8a701e9c";
const liste = [USDC_ADDRESS,DAI_ADDRESS,LINK_ADDRESS,WBTC_ADDRESS];
const provider = new ethers.providers.JsonRpcProvider(`https://testnet.era.zksync.dev`);

const factory_contract_mute_interface = new ethers.Contract(factory_contract_muteio, factory_abi_muteio, provider);
const factory_contract_syncswap_interface = new ethers.Contract(factory_contract_syncswap, factory_abi_syncswap, provider);

async function main() {
    const blockNumber = 7095541;
    let poolData = [];

    for (let i=0 ; i < liste.length ; i++) {
        const eleman = liste[i];

        const getir_mute = await factory_contract_mute_interface.getPair(WETH_MUTEIO,eleman,0,{ blockTag: blockNumber });
        const reserves_mute_contract = new ethers.Contract(getir_mute, pool_abi_muteio, provider);
        const reserves_mute = await reserves_mute_contract.getReserves({ blockTag: blockNumber });

        const reserves_0_contract_mute = await reserves_mute_contract.token0({ blockTag: blockNumber });
        const reserves_0_contract_mute_instance = new ethers.Contract(reserves_0_contract_mute, ERC20_abi, provider);
        const reserve_0_decimal_calculate_mute = await reserves_0_contract_mute_instance.decimals({ blockTag: blockNumber });
        const reserves_0_info_mute = {
            name: await reserves_0_contract_mute_instance.name({ blockTag: blockNumber }),
            symbol: await reserves_0_contract_mute_instance.symbol({ blockTag: blockNumber }),
            decimal: reserve_0_decimal_calculate_mute,
            reserve: (reserves_mute[0] / (10**reserve_0_decimal_calculate_mute)).toString()
        };

        const reserves_1_contract_mute = await reserves_mute_contract.token1({ blockTag: blockNumber });
        const reserves_1_contract_mute_instance = new ethers.Contract(reserves_1_contract_mute, ERC20_abi, provider);
        const reserve_1_decimal_calculate_mute = await reserves_1_contract_mute_instance.decimals({ blockTag: blockNumber })
        const reserves_1_info_mute = {
            name: await reserves_1_contract_mute_instance.name({ blockTag: blockNumber }),
            symbol: await reserves_1_contract_mute_instance.symbol({ blockTag: blockNumber }),
            decimal: reserve_1_decimal_calculate_mute,
            reserve: (reserves_mute[1] / (10**reserve_1_decimal_calculate_mute)).toString()
        };

        let base_token_price_quote_token = reserves_1_info_mute.reserve / reserves_0_info_mute.reserve;
        let quote_token_price_base_token = 1 / base_token_price_quote_token;

        const mute_pool = {
            data: {
                id: `muteio-${getir_mute}`,
                type: "pool",
                attributes: {
                    address: getir_mute,
                    name: `${reserves_0_info_mute.symbol} / ${reserves_1_info_mute.symbol}`,
                    base_token_price_quote_token: base_token_price_quote_token,
                    quote_token_price_base_token: quote_token_price_base_token,
                    swap_fee: "0.3"
                },
                relationships: {
                    dex: {
                        data: {
                            id: "muteio",
                            type: "dex"
                        }
                    },
                    base_token: {
                        data: {
                            symbol: reserves_0_info_mute.symbol,
                            reserves: parseFloat(reserves_0_info_mute.reserve),
                            contract_address: reserves_0_contract_mute,
                            decimals: reserves_0_info_mute.decimal,
                            type: "token"
                        }
                    },
                    quote_token: {
                        data: {
                            symbol: reserves_1_info_mute.symbol,
                            reserves: parseFloat(reserves_1_info_mute.reserve),
                            contract_address: reserves_1_contract_mute,
                            decimals: reserves_1_info_mute.decimal,
                            type: "token"
                        }
                    }
                }
            }
        };
        poolData.push(mute_pool);

        const getir_syncswap = await factory_contract_syncswap_interface.getPool(WETH_SYNCSWAP,eleman,{ blockTag: blockNumber });
        const reserves_syncswap_contract = new ethers.Contract(getir_syncswap, pool_abi_syncswap, provider);
        const reserves_syncswap = await reserves_syncswap_contract.getReserves({ blockTag: blockNumber });

        const reserves_0_contract_sync = await reserves_syncswap_contract.token0({ blockTag: blockNumber });
        const reserves_0_contract_sync_instance = new ethers.Contract(reserves_0_contract_sync, ERC20_abi, provider);
        const reserve_0_decimal_calculate_syncswap = await reserves_0_contract_sync_instance.decimals({ blockTag: blockNumber });
        const reserves_0_info_sync = {
            name: await reserves_0_contract_sync_instance.name({ blockTag: blockNumber }),
            symbol: await reserves_0_contract_sync_instance.symbol({ blockTag: blockNumber }),
            decimal: reserve_0_decimal_calculate_syncswap,
            reserve: (reserves_syncswap[0] / (10**reserve_0_decimal_calculate_syncswap)).toString()
        };

        const reserves_1_contract_sync = await reserves_syncswap_contract.token1({ blockTag: blockNumber });
        const reserves_1_contract_sync_instance = new ethers.Contract(reserves_1_contract_sync, ERC20_abi, provider);
        const reserve_1_decimal_calculate_syncswap = await reserves_1_contract_sync_instance.decimals({ blockTag: blockNumber });
        const reserves_1_info_sync = {
            name: await reserves_1_contract_sync_instance.name({ blockTag: blockNumber }),
            symbol: await reserves_1_contract_sync_instance.symbol({ blockTag: blockNumber }),
            decimal: reserve_1_decimal_calculate_syncswap,
            reserve: (reserves_syncswap[1] / (10**reserve_1_decimal_calculate_syncswap)).toString()
        };

        let base_token_price_quote_token_sync = reserves_1_info_sync.reserve / reserves_0_info_sync.reserve;
        let quote_token_price_base_token_sync = 1 / base_token_price_quote_token_sync;

        const syncswap_pool = {
            data: {
                id: `syncswap-${getir_syncswap}`,
                type: "pool",
                attributes: {
                    address: getir_syncswap,
                    name: `${reserves_0_info_sync.symbol} / ${reserves_1_info_sync.symbol}`,
                    base_token_price_quote_token: base_token_price_quote_token_sync,
                    quote_token_price_base_token: quote_token_price_base_token_sync,
                    swap_fee: "0.3"
                },
                relationships: {
                    dex: {
                        data: {
                            id: "syncswap",
                            type: "dex"
                        }
                    },
                    base_token: {
                        data: {
                            symbol: reserves_0_info_sync.symbol,
                            reserves: parseFloat(reserves_0_info_sync.reserve),
                            contract_address: reserves_0_contract_sync,
                            decimals: reserves_0_info_sync.decimal,
                            type: "token"
                        }
                    },
                    quote_token: {
                        data: {
                            symbol: reserves_1_info_sync.symbol,
                            reserves: parseFloat(reserves_1_info_sync.reserve),
                            contract_address: reserves_1_contract_sync,
                            decimals: reserves_1_info_sync.decimal,
                            type: "token"
                        }
                    }
                }
            }
        };
        poolData.push(syncswap_pool);
    }

    const json = JSON.stringify(poolData, null, 2);
    fs.writeFileSync('data.json', json, 'utf8');
    console.log("Data has been written to data.json");
}

main().catch(console.error);
