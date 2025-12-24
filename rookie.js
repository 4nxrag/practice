let numbers = [1, 2, 3, 4, 5, 6, 7]

function countDracula(){
    let count = 0;

    for(let i=0; i<numbers.length; i++) {
        if(numbers[i]>4){
            count++
        }
    }
    return count;
}

console.log(countDracula());