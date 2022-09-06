require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rival rifle clutch install bag army giant'; 
let testAccounts = [
"0xb0b7a87a9a5a07602c948577030bfaa2c302df68e997e6d283af5069a2e06233",
"0xc8ca6749497d0034bbe0e940208f46c1069a46b54502db255d3f30f6a918ee16",
"0x9a5301193c789859edbce1907cb5193f76e9ae948b77b805919d8accb43c8886",
"0xc573f9562e3e92167581a821b2a4b669b2656021a7e7eb6b092de18928b03917",
"0x46ac427e9e7f5aad3ed4535a6343931916250b5c9388f27315637f461801c17a",
"0x6cfdc505fd6dde586417133c9e930d609d974295e1baaf4ea83a73883bddad96",
"0x22f63edda5570311526f4a406df1e872b573a6d547b65cc554a0c8a92bfa6779",
"0xbd74c42c77fb9b6013a74695d3900c7672bbf7484f1b2975a5f9354d44d952b2",
"0x2e5b0994c4e57cd26dd86ad8a7253cb14c583b5350f2b5c65cc56e3963778b5d",
"0xccd371cd900d3476210844c61639c9d147f0a5ad7080ae35abb0a87933c0fd6d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

