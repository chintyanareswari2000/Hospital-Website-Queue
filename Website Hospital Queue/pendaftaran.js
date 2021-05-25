const form = document.getElementById('form');
const nama = document.getElementById('nama');
const umur = document.getElementById('umur');
const alamat = document.getElementById('alamat');
const telepon = document.getElementById('telepon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs(){
  const namaValue = nama.value.trim();
  const umurValue = umur.value.trim();
  const alamatValue = alamat.value.trim();
  const teleponValue = telepon.value.trim();
  
  if(namaValue === ''){
    setErrorFor(nama, 'Nama Pasien Harus Terisi ! Silahkan Refresh Web');
  }else{
    setSuccessFor(nama);
  }
  
  if(namaValue === ''){
    setErrorFor(umur, 'Umur Harus Terisi ! Silahkan Refresh Web');
  }else{
    setSuccessFor(umur);
  }
  
  
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  small.innerText = message;
  
  formControl.className = 'form-control-error';
}