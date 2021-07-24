require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe story dash remain comfort install kangaroo army ghost'; 
let testAccounts = [
"0x9ffba6a041960c3ccc69b864c7f266f1ab277e0cf7c01e7f7010d0a8a1b74366",
"0x740b08e5a352a68e3f4a003380e39518917676dc261ce857fa469ab62e7f1b90",
"0xde6a2470bad43695ec7682d7f657db072046f805cc45229945d0ef4e7aafe599",
"0x9ab1a040cfcae76557e66ebc9da0b392c0ee1514225814959007067d3677c347",
"0xea42473f1c06404745d677c10f9da91e081aefd7cd761fc37984bc832f7779af",
"0xdf87705d4b50232ccd931a2a6749ae5b6bc988d0953138cc9e20c208e5159ba4",
"0x4aa48b94bf838450b64dd8af136c533ec6ba471eac0b58d38412facb65cb8e9f",
"0xd0ff91bf1c9e4e7703181022d4bd7465c75c477ae1a4ec44a60db9288395d187",
"0xddab0b9d3f6551b969fb70fce6bfac438b8dc01e0cd7d488f1adb18110da0c17",
"0x9aeae6565430a900ef01fc7a7d31fdcefedfaea92194cc2d9b57680d30fe7faa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


