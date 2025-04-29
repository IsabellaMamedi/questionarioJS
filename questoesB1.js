//Situação Problema: Você está em uma viagem de 500km e já percorreu uma certa distância. Precisa saber quanto falta.
//Tarefa: Crie uma função distanciaRestante(distanciaTotal, distanciaPercorrida) que retorna a distância que falta percorrer.

function distanciaRestante(distanciaTotal, distanciaPercorrida) {
    return distanciaTotal - distanciaPercorrida;
}

//Situação Problema: Calcular a gorjeta de 10% sobre o valor de uma refeição.
//Tarefa: Crie uma função calcularGorjeta(valorRefeicao) que recebe o valor da refeição e retorna o valor da gorjeta (10% do valor).

function calcularGorjeta(valorRefeicao) {
    return valorRefeicao * 0.10;
}

//Situação Problema: Você tem uma medida em polegadas e precisa convertê-la para centímetros (1 polegada = 2.54 cm).
//Tarefa: Crie uma função polegadasParaCm(polegadas) que recebe um valor em polegadas e retorna o valor correspondente em centímetros.

function polegadasParaCm(polegadas) {
    return polegadas * 2.54;
}

//Situação Problema: Estimar quantos dias de vida uma pessoa tem, aproximadamente, com base na idade em anos (ignore anos bissextos).
//Tarefa: Crie uma função idadeEmDias(idadeAnos) que recebe a idade em anos e retorna a idade aproximada em dias (idade * 365).

function idadeEmDias(idadeAnos) {
    return idadeAnos * 365;
}

//Situação Problema: Você comprou um pacote com vários itens iguais e quer saber o preço de cada item individual.
//Tarefa: Crie uma função precoUnitario(precoTotalPacote, numeroItens) que retorna o preço de um único item.

function precoUnitario(precoTotalPacote, numeroItens) {
    return precoTotalPacote / numeroItens;
}

//Situação Problema: Converter um tempo dado em minutos para segundos.
//Tarefa: Crie uma função minutosParaSegundos(minutos) que recebe um valor em minutos e retorna o equivalente em segundos (minutos * 60).

function minutosParaSegundos(minutos) {
    return minutos * 60;
}

//Situação Problema: Antes de fazer um cálculo, garantir que o valor recebido é realmente um número.
//Tarefa: Crie uma função ehNumero(valor) que recebe um valor e retorna true se o tipo do valor for "number", e false caso contrário.

function ehNumero(valor) { // Função que verifica se o valor é do tipo número
    return valor === 'number';
}

//Situação Problema: Representar o estado de uma porta (aberta ou fechada).
//Tarefa: Declare uma variável portaAberta com o valor booleano false. Crie uma função verificarPorta() que retorna o valor desta variável.

let portaAberta = false; // Variável que representa o estado da porta

function verificarPorta() { // Função que retorna o estado atual da porta
    return portaAberta; // Retorna o valor da variável portaAberta
}

//Situação Problema: Gerar um endereço de email simples para um novo usuário, juntando o nome de usuário com o domínio "@exemplo.com".
//Tarefa: Crie uma função criarEmail(nomeUsuario) que recebe o nome de usuário (string) e retorna o email completo.

function criarEmail(nomeUsuario) { // Função que cria um email juntando o nome do usuário com o domínio
    return nomeUsuario + "@exemplo.com"; // Usa o operador + para juntar o nome e o domínio
  }
  
//Situação Problema: Você está lendo um livro e quer saber quantas páginas faltam para terminar.
//Tarefa: Crie uma função paginasRestantes(totalPaginas, paginasLidas) que retorna o número de páginas que ainda faltam ler.

function paginasRestantes(totalPaginas, paginasLidas) { // Função que calcula quantas páginas faltam para terminar o livro
    return totalPaginas - paginasLidas; // Subtrai as páginas lidas do total
  }
  
  

