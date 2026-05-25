
let generatedOnce = false;

function randomEnrollment(){
    return 'CVB' + Math.floor(Math.random() * 900000 + 100000);
}

document.getElementById('enrollment').innerText = randomEnrollment();

function validateMobile(input){

    input.value = input.value.replace(/[^0-9]/g,'');

    if(input.value.length > 10){
        input.value = input.value.slice(0,10);
    }
}

function generateCard(){

    // LIMIT ONLY 1 CARD
    if(generatedOnce){
        alert("NOT AVAILABLE : Only 1 ID Card Can Be Generated");
        return;
    }

    const mobile = document.getElementById('mobile').value;
    const file = document.getElementById('photo').files[0];

    // EXACT 10 DIGIT CHECK
    if(mobile.length !== 10){
        alert("Mobile number must be exactly 10 digits");
        return;
    }

    // PHOTO REQUIRED
    if(!file){
        alert("Please upload photo");
        return;
    }

    document.getElementById('pname').innerText =
    document.getElementById('name').value;

    document.getElementById('pfather').innerText =
    document.getElementById('father').value;

    document.getElementById('pdepartment').innerText =
    document.getElementById('department').value;

    document.getElementById('pcourse').innerText =
    document.getElementById('course').value;

    document.getElementById('pdob').innerText =
    document.getElementById('dob').value;

    document.getElementById('paddress').innerText =
    document.getElementById('address').value;

    // STAR MOBILE NUMBER
    document.getElementById('pmobile').innerText =
    '******' + mobile.slice(-4);

    document.getElementById('pyear').innerText =
    document.getElementById('year').value;

    document.getElementById('pvalid').innerText =
    document.getElementById('valid').value;

    const reader = new FileReader();

    reader.onload = function(e){
        document.getElementById('previewPhoto').src = e.target.result;
    }

    reader.readAsDataURL(file);

    generatedOnce = true;

    alert("ID Card Generated Successfully");
}

function downloadCard(){

    const card = document.getElementById('card');

    html2canvas(card, { useCORS: true, scale: 2 }).then(canvas => {

        const link = document.createElement('a');

        link.download = 'id-card.png';

        link.href = canvas.toDataURL('image/png');

        link.click();
    });
}
