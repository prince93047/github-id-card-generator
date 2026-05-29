let generatedCount = 0;


// MOBILE VALIDATION
function validateMobile(input){

    input.value = input.value.replace(/[^0-9]/g,'');

    if(input.value.length > 10){

        input.value = input.value.slice(0,10);
    }
}


// GENERATE CARD
function generateCard(){

    // LIMIT 5 CARD
    if(generatedCount >= 5){

        alert("LIMIT FINISHED");

        return;
    }

    // GET VALUES
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

    document.getElementById("pmobile").innerText =
     mobile.slice(-10);

    document.getElementById("pyear").innerText =
    document.getElementById("year").value;

    document.getElementById("pvalid").innerText =
    document.getElementById("valid").value;
    
    document.getElementById("enrollment").innerText =
    "CVRU" + Math.floor(Math.random() * 100000);


    // PHOTO SHOW
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
