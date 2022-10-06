const promise = new Promise(funtion(resolve, reject){
    resolve ('hey')
});

const cows = 9;
const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject("There is no cows  on the farm");
    }
});

countCows.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
}).finally(function(){console.log('Finally')});

const cows1 = 15;
const countCows1 = new Promise((resolve, reject)=>{
    if (cows1 > 10){
        resolve(`We have ${cows1} cows on the farm`);
    }else{
        reject("There is no cows  on the farm");
    }
});

countCows1.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('Finally'));