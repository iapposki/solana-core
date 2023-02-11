const web3 = require('@solana/web3.js')

const addressSubmittedHandler = async (address) => {
    try{
        const key = new web3.PublicKey(address)
        const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
        let account_info = await connection.getAccountInfo(key)
        // console.log('balance : ', account_info.lamports/web3.LAMPORTS_PER_SOL, ' key : ', key._bn, 'account_info : ', account_info.lamports)
        return {'sol_balance':account_info.lamports/web3.LAMPORTS_PER_SOL, 'key' : key, 'executable': account_info.executable, 'error': '' }
    } catch(error){
        console.error(error)
        return {'error' : error}
    }
}

const generateKeyPair = async () => {
    try {
        const ownerKeyPair = web3.Keypair.generate()
        const publicKey = ownerKeyPair.publicKey
        const secretKey = ownerKeyPair.secretKey
        console.log(publicKey,secretKey)
    } catch(error){
        console.log(error)
    }
}

// addressSubmittedHandler('B1aLAAe4vW8nSQCetXnYqJfRxzTjnbooczwkUJAr7yMS')
generateKeyPair()

module.exports = {
    addressSubmittedHandler,
    generateKeyPair,
}