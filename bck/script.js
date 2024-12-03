// Variáveis globais para o carrossel
let currentIndex = 0;
let images = document.querySelectorAll('.carousel-images figure'); // Inicializa a lista de imagens
let totalImages = images.length; // Total inicial de imagens

// Função para mostrar a imagem atual no carrossel
function showImage(index) {
  images.forEach((img, i) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
}

// Atualiza as referências do carrossel após adicionar imagens dinamicamente
function updateCarousel() {
  images = document.querySelectorAll('.carousel-images figure');
  totalImages = images.length;
  showImage(currentIndex);
}

// Botão para próxima imagem
document.querySelector('.next')?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages; // Volta ao início se for a última imagem
  showImage(currentIndex);
});

// Botão para imagem anterior
document.querySelector('.prev')?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Vai para a última se for a primeira
  showImage(currentIndex);
});

// Função para adicionar novas fotos ao carrossel
function addPhotos() {
  const fileInput = document.getElementById('file-input'); // Input de arquivos
  const files = fileInput.files;

  if (files.length > 0) {
    const carouselImagesContainer = document.querySelector('.carousel-images');

    // Para cada arquivo selecionado, adiciona uma nova imagem ao carrossel
    Array.from(files).forEach(file => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result; // Adiciona a URL da imagem carregada
        imgElement.alt = 'New Moment';

        // Cria a tag <figure> e adiciona a imagem
        const figureElement = document.createElement('figure');
        figureElement.classList.add('image', 'is-16by9'); // Classe para aspecto 16:9
        figureElement.appendChild(imgElement);

        // Adiciona a nova figura ao carrossel
        carouselImagesContainer.appendChild(figureElement);
      };

      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    });

    // Atualiza o carrossel após um breve intervalo
    setTimeout(() => {
      updateCarousel();
    }, 100);
  }
}

// Contador de dias e tempo
const startDate = new Date("2023-12-25"); // Data inicial do relacionamento

function updateTimeCounter() {
  const currentDate = new Date(); // Data atual
  const timeDifference = currentDate - startDate; // Diferença em milissegundos

  // Calcule dias, horas, minutos e segundos
  const days = Math.floor(timeDifference / (1000 * 3600 * 24));
  const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Atualiza os contadores de dias e tempo
  document.getElementById('days-counter').innerText = `${days} Dias juntos!`;
  document.getElementById('time-counter').innerText = `${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o contador de tempo a cada segundo
setInterval(updateTimeCounter, 1000);

// Inicializa o contador ao carregar a página
updateTimeCounter();

// Controle de áudio e play/pause
var audioPlayer = document.getElementById("background-audio");
var playPauseButton = document.getElementById("playPauseButton");
var progressBarFill = document.getElementById("progress-bar-fill");

// Atualiza a barra de progresso conforme a música toca
audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime; // Tempo atual da música
  const duration = audioPlayer.duration; // Duração total da música

  if (!isNaN(duration) && duration > 0) {
    // Calcula a porcentagem de progresso e atualiza a barra
    const progressPercentage = (currentTime / duration) * 100;
    progressBarFill.style.width = `${progressPercentage}%`;
  }
});

// Função para alternar entre play e pause
playPauseButton.addEventListener("click", function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Ícone de pause
  } else {
    audioPlayer.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Ícone de play
  }
}); 
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
});

