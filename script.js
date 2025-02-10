// Selecionar elementos
const video = document.getElementById('qr-video');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const outputText = document.getElementById('output-text');

// Inicializar o QR Scanner
const scanner = new QrScanner(video, result => {
  outputText.textContent = Resultado: ${result};
  scanner.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// Botão para iniciar o scanner
startBtn.addEventListener('click', () => {
  QrScanner.hasCamera().then(hasCamera => {
    if (hasCamera) {
      scanner.start();
      startBtn.disabled = true;
      stopBtn.disabled = false;
      outputText.textContent = 'Escaneando...';
    } else {
      outputText.textContent = 'Nenhuma câmera detectada.';
    }
  });
});

// Botão para parar o scanner
stopBtn.addEventListener('click', () => {
  scanner.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  outputText.textContent = 'Scanner parado.';
});