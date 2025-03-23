function speedGovernor(speed){
    const speedLimit = 70;
    const kmPoint = 5;
    const maxPoints = 12;
    const excessSpeed = speed - speedLimit;
    const points = Math.floor(excessSpeed/kmPoint)
    let result;
    if(speed<=70){
        result = "Ok"
        return result
    }else if (points>maxPoints){
        result = "License suspended"
        return result
    }else{
        return points
    }

}
console.log(speedGovernor(100));
console.log(speedGovernor(50));
console.log(speedGovernor(70));
console.log(speedGovernor(200));