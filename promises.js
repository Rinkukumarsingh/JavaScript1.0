// const getData = () => {
//      return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//           console.log("this is promise");
//          reject("failed to fetch data");
//        },5000);
// });
// }

// let storeData = getData();

// storeData.then((data) => {
//     console.log(data);
// });
// storeData.catch((error) => {
//     console.log(error);
// });


// promise chaining 

// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("data1");
//          resolve("success");
//        },2000);
//     });
// }


// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("data2");
//          resolve("success");
//        },2000);
//     });
// }

// function asyncFunc3(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("data3");
//          resolve("success");
//        },2000);
//     });
// }
// console.log("fetching data...");
// let result = asyncFunc1();
// result.then(()=>{
//     let result2 = asyncFunc2();
//     result2.then(()=>{
//         let result3 = asyncFunc3();
//         result3.then((res)=>{
//             console.log(res);
//         })
//     })
// })

// Async and await 

function getDataFromDB(dataId){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
     console.log("fetching data for id: ", dataId);
     resolve("success");
    },3000);
    });
}

async function fetchData(){
    console.log("fetching data...");
    await getDataFromDB("Id1");
    await getDataFromDB("Id2");
    await getDataFromDB("Id3");
    console.log("data fetched successfully");
}

fetchData();