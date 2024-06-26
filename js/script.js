// Obtém a data atual
const dataHoje = new Date();

// Obtém o dia, mês e ano atual
const diaHoje = dataHoje.getDate();
const mesAtual = dataHoje.getMonth();
const anoAtual = dataHoje.getFullYear();

// Variáveis para armazenar o nome do mês e a data formatada
let stringMes;
let diaHojeExtenso;

// Seletor para o elemento HTML onde a data será exibida
let localEscritaData = window.document.querySelector("#diaHoje");

// Converte o número do mês em uma string com o nome do mês correspondente
switch (mesAtual) {
    case 0:
        stringMes = "janeiro";
        break;
    case 1:
        stringMes = "fevereiro";
        break;
    case 2:
        stringMes = "março";
        break;
    case 3:
        stringMes = "abril";
        break;
    case 4:
        stringMes = "maio";
        break;
    case 5:
        stringMes = "junho";
        break;
    case 6:
        stringMes = "julho";
        break;
    case 7:
        stringMes = "agosto";
        break;
    case 8:
        stringMes = "setembro";
        break;
    case 9:
        stringMes = "outubro";
        break;
    case 10:
        stringMes = "novembro";
        break;
    case 11:
        stringMes = "dezembro";
        break;
    default:
        break;
}

// Formata a data para exibir o dia, mês e ano
if (diaHoje < 10) {
    diaHojeExtenso = "0" + diaHoje + " de " + stringMes + " de " + anoAtual + ".";
} else {
    diaHojeExtenso = diaHoje + " de " + stringMes + " de " + anoAtual + ".";
}

// Insere a data formatada no elemento HTML
localEscritaData.innerText = diaHojeExtenso;

// Selecione o elemento <p> dentro de <div class="categoria-materia">
const categoriaMateria = document.querySelector('.categoria-materia p');

// Obtenha a largura total do conteúdo textual dentro do elemento <p>
const larguraConteudo = categoriaMateria.offsetWidth;

// Adicione uma margem de 10 pixels ao redor do conteúdo textual
const larguraComMargem = larguraConteudo + 20; // 20 = 10px para a margem esquerda + 10px para a margem direita

// Defina a largura do elemento pai .categoria-materia com base na largura do conteúdo textual com margem
const elementoPai = document.querySelector('.categoria-materia');
elementoPai.style.width = larguraComMargem + 'px';
