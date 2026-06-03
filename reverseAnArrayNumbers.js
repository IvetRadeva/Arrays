function solve (number,arr) {
    let newArray = [];

    for (let i = 0; i < number; i++) {
        let oldArrValue = arr[i];

        newArray[i] = oldArrValue;
    }
    newArray.reverse();
    console.log(newArray.join(' '));



}
solve (3, [10, 20, 30, 40, 50]);