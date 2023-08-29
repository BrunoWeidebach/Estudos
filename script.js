let lastPlayedAudioId = null
function playAudio (id){
    pauseCurrentlyPlayingAudio();
    let x = document.getElementById(id)
           if (lastPlayedAudioId !== id){
            pauseCurrentlyPlayingAudio(lastPlayedAudioId)
            x.currentTime = 0
            lastPlayedAudioId = id
        }
    x.play()
    x.setAttribute('data-playing', 'true')
    
}

function pauseCurrentlyPlayingAudio() {
    const currentlyPlayingAudio = document.querySelector('audio[data-playing="true"]');
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.setAttribute('data-playing', 'false')
    }
}





let testoTotal = 0
function injetar() {  
    
    //let elementoInjetar = document.getElementById('randomNumberDisplay')    
    var testo = numeroAleatorio(500, 1000)
    testoTotal += testo 
        if (testoTotal > 10000) {
            testoTotal = 10000
        }
    verificarTesto()
        
      
    //elementoInjetar.textContent = `${testoTotal}/10000`
    res.innerHTML = `A sua testo aumentou em <strong>${testo}</strong>`
    atualizaMedidor()
             
   }
   function tomarTpc() {
    var tpc = numeroAleatorio(500,1000)
    testoTotal -= tpc
    verificarTesto()
    res.innerHTML = `A sua testo diminuiu em <strong>${tpc}</strong>`
    atualizaMedidor()
   }
   


function numeroAleatorio (min, max) {
    return Number(Math.floor(Math.random() * (max - min + 1)) + min)
}


function atualizaMedidor() {
    //let elementoPorcentagem = document.getElementById('mostrarPorcentagem')   
    let medidorTesto = Math.floor(testoTotal / 100);
        if (medidorTesto < 0){
            let barraAtualizada = document.querySelector('.barra-preenchimento');
            barraAtualizada.style.width = `0%`;
        }
    
   // elementoPorcentagem.textContent = medidorTesto
    let barraAtualizada = document.querySelector('.barra-preenchimento');
    barraAtualizada.style.width = `${medidorTesto}%`;
    let progressoBarra = document.getElementById('textoBarra')
    progressoBarra.innerHTML = `<strong>${testoTotal}/10000</strong>`
    
}

function verificarTesto() {
    if (testoTotal >= 10000) {
        res2.innerHTML = "Allahu Akbhar!"
        playAudio('allahu')
    } else if (testoTotal < 0) {
        res2.innerHTML = "Você virou uma <strong>mocinha</strong><br> Is that a gay pride flag?"
        playAudio('wow')
    } else if (testoTotal < 2000) {
        res2.innerHTML = "Natural"
        playAudio('natural')
    } else if (testoTotal < 4000) {
        res2.innerHTML = "Wooooow, look at him! Você está fazendo amor com o suco?"
        playAudio('suco')
    } else if (testoTotal < 6000) {
        res2.innerHTML = "Eu te entendo cara, o suco vicia."
        playAudio('cap')
    } else if (testoTotal < 10000) {
        res2.innerHTML = "FAAAAAAAAAKE NATTY!"
        playAudio('fakenatty')
    }
}