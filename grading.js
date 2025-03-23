function studentGrade(marks){
    let result;
    if(marks<100,marks<0){
        result = "incorrect marks input"
        return result
    }else if(marks<=100,marks>=79){
        result = "A"
        return result
    }else if(marks<=79,marks>=60){
        result = "B"
        return result
    }else if(marks<=59,marks>49){
        result = "C"
        return result
    }else if(marks<=49,marks>=40){
        result = "D"
        return result
    }else {
        result = "E"
        return result
    }
}
console.log(studentGrade(20));
