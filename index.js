let carta1 = {
  nome: "Pkachu",
  imagem:
    "https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
  },
};

let carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://rollingstone.uol.com.br/media/uploads/darth_vader_div_lucasfilm.jpg",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 10,
  },
};

let carta3 = {
  nome: "Shiryu de drgão",
  imagem:
    "https://pm1.narvii.com/6399/964f7fc5d3b518bb492d98563359f6fc1fbecf1b_hq.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10,
  },
};

let cartas = [carta1, carta2, carta3];
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true; // desabilitar o botão
  document.getElementById("btnJogar").disabled = false; // habilitar  o botão

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  let radioAtributo = document.getElementsByName("atributo");

  for (let i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked == true) {
      // Se o atributo estiver marcado como checked ou pode ser também if(radioAtributo[i].checked == true)
      return radioAtributo[i].value; // atributo selecionado
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado(); // valor da função passado para uma variavel
  let elementoResultado = document.getElementById("resultado");
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.classList.add("resultado-final");
    elementoResultado.innerHTML = "Parabéns, você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.classList.add("resultado-final");
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina venceu!";
  } else {
    elementoResultado.classList.add("resultado-final");
    elementoResultado.innerHTML = "Você empatou!";
  }

  exibirCartaMaquina();
}


function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">'
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'/>" +
        atributo + " " + cartaJogador.atributos[atributo] + "<br/>";
    }

    let nome = `<p class="carta-subtitle">${cartaJogador.nome}`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}


function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">'
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p name='atributo' value='" +
        atributo +
        "'/>" +
        atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }

    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}