
function randomEnrollment(){
return 'CVB'+Math.floor(Math.random()*900000+100000);
}

document.getElementById('enrollment').innerText = randomEnrollment();

function generateCard(){

document.getElementById('pname').innerText =
document.getElementById('name').value;

document.getElementById('pfather').innerText =
document.getElementById('father').value;

document.getElementById('pcourse').innerText =
document.getElementById('course').value;

document.getElementById('pdob').innerText =
document.getElementById('dob').value;

document.getElementById('paddress').innerText =
document.getElementById('address').value;

document.getElementById('pmobile').innerText =
document.getElementById('mobile').value;

document.getElementById('pyear').innerText =
document.getElementById('year').value;

document.getElementById('pvalid').innerText =
document.getElementById('valid').value;

const file = document.getElementById('photo').files[0];

if(file){
const reader = new FileReader();

reader.onload = function(e){
document.getElementById('previewPhoto').src = e.target.result;
}

reader.readAsDataURL(file);
}

}

function downloadCard(){
html2canvas(document.getElementById('card')).then(canvas => {
const link = document.createElement('a');
link.download = 'id-card.png';
link.href = canvas.toDataURL();
link.click();
});
}
