function createSignature() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    // Kullanıcıdan alınan verileri al
    const imzaMetni = document.getElementById('imza').value;
    const renk = document.getElementById('color').value;
  
    // Canvas'ı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Metni çiz
    ctx.font = '30px Arial'; // Font boyutunu ve tipini ayarlayın
    ctx.fillStyle = renk;
    ctx.fillText(imzaMetni, 20, 50);
  }
  
  function clearCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  function saveImage() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'imzam.png'; // İndirilecek dosyanın adı
    link.click();
  }