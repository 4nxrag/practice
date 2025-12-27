// let numbers = [1, 2, 3, 4, 5, 6, 7]

// function countDracula(){
//     let count = 0;

//     for(let i=0; i<numbers.length; i++) {
//         if(numbers[i]>4){
//             count++
//         }
//     }
//     return count;
// }

// console.log(countDracula());



// function addArray(arr, value){
//     arr.push(value);

//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }

// let num = [5, 6, 7, 8, 9]
// let inputNum = Number(prompt("Enter A Number"));
// console.log(addArray(num, inputNum));

// let ticktimer = 0;

// function tickerx5() {
//     return new Promise((resolve, reject) =>{
//         ticktimer++
//         setTimeout(()=>{
//             console.log(`"Tick Tick" ${ticktimer}`);
//             resolve("Shits Working");
//             reject("You are pretending to be a dev you are a disgrace for real");
//         },1000)
//     }
// )
// }

// tickerx5()
// .then((message) =>{
//     console.log(message); // handles the resolve part
// })

// .catch((error)=>{
//     console.error(error); // handles the rejection part
// })

// .finally(()=>{
//     console.log("I am running so you dont feel useless!!") // runs either ways
// })

// for (i=0; i<=4; i++) {
//     tickerx5();
// }

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ticker(count) {
    for (let i = 1; i <= count; i++) {
        await wait(1000);
        console.log(`Tick Tick ${i}`);
    } return "Done ticking";
} (async () => {
    try {
        const message = await ticker(5);
        console.log(message);
    } finally {
        console.log("Ticker finished");
    }
})();