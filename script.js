// CARD GENERATE LIMIT
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

    // ONLY 1 CARD ALLOWED
    if(generatedCount >= 1){

        alert("NOT AVAILABLE");

        return;
    }

    // GET MOBILE
    const mobile =
    document.getElementById("mobile").value;

    // GET PHOTO
    const photo =
    document.getElementById("photo").files[0];


    // MOBILE CHECK
    if(mobile.length !== 10){

        alert("Mobile number must be exactly 10 digits");

        return;
    }


    // PHOTO CHECK
    if(!photo){

        alert("Please Upload Photo");

        return;
    }


    // SET DATA
    document.getElementById("pname").innerText =
    document.getElementById("name").value;

    document.getElementById("pfather").innerText =
    document.getElementById("father").value;

    document.getElementById("pdepartment").innerText =
    document.getElementById("department").value;

    document.getElementById("pcourse").innerText =
    document.getElementById("course").value;

    document.getElementById("pdob").innerText =
    document.getElementById("dob").value;

    document.getElementById("paddress").innerText =
    document.getElementById("address").value;

    // STAR MOBILE NUMBER
    document.getElementById("pmobile").innerText =
    "******" + mobile.slice(-4);

    document.getElementById("pyear").innerText =
    document.getElementById("year").value;

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
