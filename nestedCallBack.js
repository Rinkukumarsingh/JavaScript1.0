// Wanted to access some data from data base, and It should wait for few second on each fetch.

function getDataFromDB(dataId, callBackFunction){
    setTimeout(()=> {
           console.log("Fetching data for ID: ",dataId);
           if(callBackFunction){
               callBackFunction();
           }
    }, 2000);
}

getDataFromDB("Id1", () => {
    console.log("Data for Id1 fetched.");
    getDataFromDB("Id2", () => {
        console.log("Data for Id2 fetched.");
        getDataFromDB("iD3");
    });
});
