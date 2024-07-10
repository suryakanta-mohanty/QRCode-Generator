let imgBox = document.getElementById('qr-code-box');
let qrImage = document.getElementById('qr-img');
let qrText = document.getElementById('text-url');

function generateQR(){
  if(qrText.value === ''){
    alert('Add text or url to generate Qr Code');

  }else{
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add('show-img');
  }
}

document.getElementById('btn').addEventListener('click', ()=>{
  generateQR();
});