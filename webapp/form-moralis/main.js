/** Connect to Moralis server */
const serverUrl = "https://ntwxee9tlurx.usemoralis.com:2053/server";
const appId = "9MlgMGkKCN9bMtrJzjT8FMAgSGxkBqn7kvBQWUEJ";
Moralis.start({ serverUrl, appId });
let user = Moralis.User.current();

/** Add from here down */
async function login() {
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      initApp();
   } catch(error) {
     console.log(error)
   }
  }
  else{
    Moralis.enableWeb3();
    initApp();
  }
}

function initApp(){
    document.querySelector("#app").style.display = "block";
    document.querySelector("#submit_button").onclick = submit;
}

defineNewRecord = async (PatientID,HospitalName,name,Address,ReasonForVisit,LevelOfPain) =>{
    const RecordHistory =  Moralis.Object.extend('Record');
    const record = new RecordHistory();
    record.set('PatientID', PatientID);
    record.set('HospitalName', HospitalName);
    record.set('name', name);
    record.set('Address', Address);
    record.set('ReasonForVisit', ReasonForVisit);
    record.set('LevelOfPain', LevelOfPain);

    const metadata = {
        PatientID: PatientID,
        HospitalName: HospitalName,
        name: name,
        Address: Address,
        ReasonForVisit: ReasonForVisit,
        LevelOfPain: LevelOfPain,

    }

    record.set('metadata', metadata);

    console.log(metadata);
    const excelFile = new Moralis.File("excel.csv", metadata);
    const jsonFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
    await excelFile.saveIPFS();
    console.log(excelFile.ipfs())
    await jsonFile.saveIPFS();

    excelFile.save()



    

    let metadataHash = jsonFile.hash();
    let ipfsLink = jsonFile.ipfs();
    console.log(jsonFile.ipfs())
    console.log(metadataHash)

    record.set('metadataHash', metadataHash);
    record.set('jsonFileIPFS', ipfsLink);

    await record.save();
    return record;


    
}

async function submit(){

    await defineNewRecord(
        document.querySelector('#input_PatientID').value,
    document.querySelector('#input_HospitalName').value,
    document.querySelector('#input_name').value,
     document.querySelector('#input_Address').value,
     document.querySelector('#input_ReasonForVisit').value,
     document.querySelector('#input_LevelOfPain').value,
    )

    

    // let metadata = {
    //     PatientID: document.querySelector('#input_PatientID').value,
    //     HospitalName: document.querySelector('#input_HospitalName').value,
    //     name: document.querySelector('#input_name').value,
    //     Address: document.querySelector('#input_Address').value,
    //     ReasonForVisit: document.querySelector('#input_ReasonForVisit').value,
    //     LevelOfPain: document.querySelector('#input_LevelOfPain').value,
    // }
   
    // let res = await Moralis.Plugins.rarible.lazyMint({
    //     chain: 'rinkeby',
    //     userAddress: user.get('ethAddress'),
    //     tokenType: 'ERC721',
    //     tokenUri: 'ipfs://' + metadataHash,
    //     royaltiesAmount: 5, // 0.05% royalty. Optional
    // })
    // console.log(res);
    // document.querySelector('#success_message').innerHTML = 
    //     `Record Sumbitted. <a href="https://rinkeby.rarible.com/token/${res.data.result.tokenAddress}:${res.data.result.tokenId}">View NFT`;
    // document.querySelector('#success_message').style.display = "block";
    document.querySelector('#success_message').innerHTML = 
        `Record Sumbitted. `;
    document.querySelector('#success_message').style.display = "block";
    setTimeout(() => {
        document.querySelector('#success_message').style.display = "none";
    }, 5000)
}

login();
/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/