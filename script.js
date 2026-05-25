let generated = false;


// MOBILE VALIDATION
function validateMobile(input){

    input.value = input.value.replace(/[^0-9]/g,'');

    if(input.value.length 4 10){

        input.value = input.value.slice(0,10);
    }
}


// GENERATE CARD
function generateCard(){

    // STOP SECOND GENERATE
    if(generated === true){

        alert("NOT AVAILABLE");

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

    // MOBILE STAR
    document.getElementById("pmobile").innerText =
    "******" + mobile.slice(-4);

    // YEAR
    document.getElementById("pyear").innerText =
    document.getElementById("year").value;

    // VALID
    document.getElementById("pvalid").innerText =
    document.getElementById("valid").value;


    // PHOTO
    const reader = new FileReader();

    reader.onload = fe){

        document.getElementById("previewPhoto").src =
        e.target.result;
    };

    reader.readAsDataURL(photo);


    // ONLY ONE TIME GENERATE
    generated = true;

    alert("ID Card Generated Successfully");
}
