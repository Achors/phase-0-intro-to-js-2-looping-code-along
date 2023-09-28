

function writeCards(myNewArr, event ){
    const myArr = [];

    for (let i = 0; i < myNewArr.length; i++) { 

        let newArr = `Thank you, ${myNewArr[i]}, for the wonderful ${event} gift!`;
              
        myArr.push(newArr);
    };
    return (myArr);
};

 function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
 }