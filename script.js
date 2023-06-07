const { ethers } = require("ethers");

const factory_contract_muteio = "0xCc05E242b4A82f813a895111bCa072c8BBbA4a0e";
const factory_abi_muteio = require("./ABI/factory_abi_muteio.json");
const pool_abi_muteio = require("./ABI/pool_abi_muteio.json");
const factory_contract_syncswap = "0xf2FD2bc2fBC12842aAb6FbB8b1159a6a83E72006";
const factory_abi_syncswap = require("./ABI/factory_abi_syncswap.json");
const pool_abi_syncswap = require("./ABI/pool_abi_syncswap.json");

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
