function counterReducer(actionType, counter){
    if(actionType === "INC"){
        return counter + 1;
    }
    else if(actionType === "DEC"){
        return counter - 1;
    }
}

console.log(counterReducer("INC", 10)); // returns 11
console.log(counterReducer("DEC", 10)); // returns 9