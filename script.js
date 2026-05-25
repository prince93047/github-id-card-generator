function randomEnrollment(){
    return 'CVB' + Math.floor(Math.random() * 900000 + 100000);
}

// Generate the enrollment number right away when page loads
document.getElementById('enrollment').innerText = randomEnrollment();

function generateCard(){
    document.getElementById('pname').innerText = document.getElementById('name').value;
    document.getElementById('pfather').innerText = document.getElementById('father').value;
    
    // New dynamic department element mapping
    document.getElementById('pdepartment').innerText = document.getElementById('department').value;
    
    document.getElementById('pcourse').innerText = document.getElementById('course').value;
    document.getElementById('pdob').innerText = document.getElementById('dob').value;
    document.getElementById('paddress').innerText = document.getElementById('address').value;
    document.getElementById('pmobile').innerText = document.getElementById('mobile').value;
    document.getElementById('pyear').innerText = document.getElementById('year').value;
    document.getElementById('pvalid').innerText = document.getElementById('valid').value;

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
    const card = document.getElementById('card');
    html2canvas(card, { useCORS: true, scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'id-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
