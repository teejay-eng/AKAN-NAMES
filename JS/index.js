function getAkanName(){
    console.log("Clicked the button");
    const dateInput = document.getElementById("birthdate");

    if(dateInput == null){
        alert("Date input does not exist")
        return;
    }

    const dateValue = dateInput.value;

    const year = dateValue.substring(0, 4);
    const month = dateValue.substring(5, 7);
    const day = dateValue.substring(8, 10);

      if(day >= 1 && day <= 31){
        console.log("day is okay")
    }else{
        alert("provide a valid day")
    }
    
    if(month>=1 && month<=12){
        console.log("month is correct")
    } else{
        alert("provide a valid month")
    }

   
    const genderInput = document.querySelector('input[name="gender"]:checked');

     if(genderInput == null){
        alert("Please select gender")
        return;
    }

    const gender = genderInput.value;

    const cc = year.substring(0,2);
    const yy = year.substring(2,4);

    const dayOfWeek = calcuateDay(cc, yy, month,day);


    //0-6

    console.log(" Day of wek is " + dayOfWeek);

    const maleNames = ["Kwasi","kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];

    let akanName;
    if(gender === "male"){
        akanName = maleNames[dayOfWeek];
    }else{
        akanName = femaleNames[dayOfWeek];
    }

    console.log("Akan name is "+ akanName);


}



function calcuateDay(cc, yy, mm, dd ){
    const block1 = (cc*4) - (2 * cc) - 1;
    const block2 = (45 * yy);
    const block3 = (1026 * (mm + 1));
    const block4 = block1 + block2 + block3 + dd;
    const block5 = block4 % 7;
    return block5;
}
