const fetch = require('node-fetch');
const fs = require('fs');
const { error } = require('console');

async function getBitcoin(){
    try{
        const response= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.data.bpi();
        let bitcoinList= "";
        data.USD(Bitcoin =>{
            bitcoinList+=`${Bitcoin["code: ","symbol: ", " rate: ","description: "]}\n`
        });
        fs.writeFile('bitcoin.txt', bitcoinList, (error)=>{
            if(error){
                console.log(error);
                return;
            }
            console.log("archivo bitcoin.txt creado")
        })
    }catch(error){
        console.log(error);
    }
}
getBitcoin();