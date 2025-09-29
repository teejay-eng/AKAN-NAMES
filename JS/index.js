function getAkanName(){
    console.log("Clicked the button");
    const dateInput = document.getElementById("birthdate");

    if(dateInput == null){
        alert("Date input does not exist")
        return;
    }

    const dateValue = dateInput.value;
    const validation = validateDate(dateValue);

   
    const genderInput = document.querySelector('input[name="gender"]:checked');

     if(genderInput == null){
        alert("Please select gender")
        return;
    }

    const gender = genderInput.value;


    console.log(gender);

}

function validateDate(date){
    // 2025-09-21

    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    console.log(year);
    console.log(month);
    console.log(day)

    if(day >= 1 && day <= 31){
        console.log("day is okay")
    }else{
        alert("provide a valid day")
    }
    
    if(month>=1 && month<=12){
        console.log("month is correct")
    } else{alert("provide a valid month")}

}