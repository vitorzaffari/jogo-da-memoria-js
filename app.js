document.addEventListener('DOMContentLoaded', () => {

    const cartasArray = [
        {
            name: 'dragon-egg',
            img: 'assets/Dragon-Egg.png'
        },
        {
            name: 'dragon-egg',
            img: 'assets/Dragon-Egg.png'
        },
        {
            name: 'elf',
            img: 'assets/Elf.png'
        },
        {
            name: 'elf',
            img: 'assets/Elf.png'
        },
        {
            name: 'grim-reaper',
            img: 'assets/Grim-Reaper.png'
        },
        {
            name: 'grim-reaper',
            img: 'assets/Grim-Reaper.png'
        },
        {
            name: 'king',
            img: 'assets/King.png'
        },
        {
            name: 'king',
            img: 'assets/King.png'
        },
        {
            name: 'monster',
            img: 'assets/Monster.png'
        },
        {
            name: 'monster',
            img: 'assets/Monster.png'
        },
        {
            name: 'orc',
            img: 'assets/Orc.png'
        },
        {
            name: 'orc',
            img: 'assets/Orc.png'
        }
    ];

    cartasArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultadoDisplay = document.querySelector('#resultado');
    var cartasEscolhidas = [];
    var cartasEscolhidasId = [];
    var paresEncontrados = [];
    //criando o jogo

    function criarJogo() {
        for (let i = 0; i < cartasArray.length; i++) {
            var carta = document.createElement('img');
            carta.setAttribute('src', 'assets/Adventure-Map.png');
            carta.setAttribute('data-id', i);
            carta.addEventListener('click', virarCarta)
            grid.appendChild(carta);

        }
    }



    //checar se a carta é igual

    function checarIgual() {
        var cartas = document.querySelectorAll('img');
        const OpcaoUmId = cartasEscolhidasId[0];
        const OpcaoDoisId = cartasEscolhidasId[1];
        if (cartasEscolhidas[0] === cartasEscolhidas[1] && cartasEscolhidasId[0] !== cartasEscolhidasId[1]) {
            alert('Você encontrou um par');
            cartas[OpcaoUmId].setAttribute('src', 'assets/Spell-Scroll.png');
            cartas[OpcaoUmId].style.pointerEvents =  'none';
            cartas[OpcaoDoisId].setAttribute('src', 'assets/Spell-Scroll.png');
            cartas[OpcaoDoisId].style.pointerEvents =  'none';
            paresEncontrados.push(cartasEscolhidas);
        } else {
            cartas[OpcaoUmId].setAttribute('src', 'assets/Adventure-Map.png');
            cartas[OpcaoDoisId].setAttribute('src', 'assets/Adventure-Map.png');
            alert('Você errou D:');
        }
        cartasEscolhidas = [];
        cartasEscolhidasId = [];
        resultadoDisplay.textContent = paresEncontrados.length;
        if (paresEncontrados.length === (cartasArray.length / 2)) {
            resultadoDisplay.textContent = 'Parabéns, você encontrou todos os pares!';
        }
    }





    //virar a carta
    function virarCarta() {
        var cartaId = this.getAttribute('data-id');
        cartasEscolhidas.push(cartasArray[cartaId].name);
        cartasEscolhidasId.push(cartaId);
        this.setAttribute('src', cartasArray[cartaId].img);
        if (cartasEscolhidas.length === 2) {
            setTimeout(checarIgual, 200);
        }
    }


    criarJogo();

})