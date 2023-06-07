# zkSync Testnet DEX Data Fetcher

This repository contains a script that fetches data from two Decentralized Exchanges (DEXes) on the zkSync blockchain: Muteio and Syncswap. It specifically works on the zksync testnet. The script extracts token data and stores it in a JSON file.

## Features

- Fetches pool data from the Muteio and Syncswap DEXes.
- Stores the data in a JSON file for later analysis.
- Works on the zksync testnet.

## Requirements

- Node.js
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

```shell
git clone https://github.com/codeesura/zksync-testnet-get-pools.git
cd zksync-testnet-get-pools
```

2. Install the dependencies:

```bash
npm install
```

## Usage

1. Run the script:

```bash
node script.js
```

The script will fetch data from the Muteio and Syncswap DEXes, then store it in a `data.json` file.

## File Descriptions

- `script.js`: This is the main script that fetches the data from the DEXes.
- `ABI/`: This directory contains the ABI (Application Binary Interface) files required to interact with the smart contracts.
- `data.json`: This is where the fetched data will be stored.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](https://github.com/codeesura/zksync-testnet-get-pools/blob/main/LICENSE)
