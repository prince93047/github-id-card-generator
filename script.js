let generatedCount = 0;


// MOBILE VALIDATION
function validateMobile(input){

    // ONLY NUMBER
    input.value = input.value.replace(/[^0-9]/g,'');

    // MAX 10 DIGIT
    if(input.value.length > 10){

        input.value = input.value.slice(0,10);
    }
}


// GENERATE CARD
function generateCard(){

    // ONLY 5 CARD ALLOWED
    if(generatedCount >= 5){

        alert("LIMIT FINISHED");

        return;
    }

    const mobile =
    document.getElementById("mobile").value;

    const photo =
    document.getElementById("photo").files[0];


    // MOBILE CHECK
    if(mobile.length !== 10){

        alert("Mobile Number Must Be 10 Digit");

        return;
    }


    // PHOTO CHECK
    if(!photo){

        alert("Please Upload Photo");

        return;
    }


    // NAME
    document.getElementById("pname").innerText =
    document.getElementById("name").value;

    // FATHER
    document.getElementById("pfather").innerText =
    document.getElementById("father").value;

    // DEPARTMENT
    document.getElementById("pdepartment").innerText =
    document.getElementById("department").value;

    // COURSE
    document.getElementById("pcourse").innerText =
    document.getElementById("course").value;

    // DOB
    document.getElementById("pdob").innerText =
    document.getElementById("dob").value;

    // ADDRESS
    document.getElementById("paddress").innerText =
    document.getElementById("address").value;

    // STAR MOBILE
    document.getElementById("pmobile").innerText =
    "******" + mobile.slice(-4);

    // YEAR
    document.getElementById("pyear").innerText =
    document.getElementById("year").value;

    // VALID
    document.getElementById("pvalid").innerText =
    document.getElementById("valid").value;


    // PHOTO PREVIEW
    const reader = new FileReader();

    reader.onload = function(e){

        document.getElementById("previewPhoto").src =
        e.target.result;
    };

    reader.readAsDataURL(photo);


    // COUNT INCREASE
    generatedCount++;

    alert("ID Card Generated Successfully");
}
