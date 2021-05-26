function dirReduc(arr){
    const finalDir = [] //Final array which will contain the final directions
    const opp = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'}; //Object of opposite directions
    
    arr.forEach(direction => {
        if(finalDir.length) { //Check if the array is empty or not
            const prevDir = finalDir.pop() //Use the value in last position from the array
            if(prevDir !== opp[direction]) { //Check if the previous value is opposite to the current value
                finalDir.push(prevDir) //Add the previous value to the array
                finalDir.push(direction) //Add the current value to the array
            }
        } else {
            finalDir.push(direction) //If the array is empty, add the value to the array
        }
    })
    return finalDir
}