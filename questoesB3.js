//Situação Problema: Simular um elevador subindo do 1º ao 5º andar, anunciando cada andar.
//Tarefa: Crie uma função simularElevador() que imprime no console "Subindo para o andar 1", "Subindo para o andar 2", ..., "Subindo para o andar 5".

function simularElevador() { // Função que simula um elevador subindo do 1º ao 5º andar
    for (let andar = 1; andar <= 5; andar++) { // Loop do andar 1 até o 5
        console.log(`Subindo para o andar ${andar}`); // Imprime a mensagem para cada andar
    }
}

// Chamando a função para testar
simularElevador();

//Situação Problema: Ajudar alguém a dormir contando ovelhas até 5.
//Tarefa: Crie uma função contarOvelhas() que imprime no console "1 ovelha...", "2 ovelhas...", ..., "5 ovelhas...".

function contarOvelhas() { // Função que conta ovelhas de 1 até 5
    for (let i = 1; i <= 5; i++) { // Loop de 1 até 5
        console.log(`${i} ovelha${i > 1 ? 's' : ''}...`); // Imprime "1 ovelha..." ou "2 ovelhas...", etc.
    }
}

// Chamando a função para testar
contarOvelhas();

//Situação Problema: Calcular a soma apenas dos números pares de 2 até um número N.
//Tarefa: Crie uma função somarParesAteN(n) que recebe um número n e retorna a soma de todos os números pares de 2 até n (inclusive, se n for par).

function somarParesAteN(n) { // Função que soma os números pares até N
    let soma = 0;
    for (let i = 2; i <= n; i += 2) { // Começa no 2 e vai pulando de 2 em 2 (só pares)
        soma += i;
    }
    return soma;
}

//Situação Problema: Listar todos os números ímpares menores que 10.
//Tarefa: Crie uma função listarImparesAte9() que imprime no console os números ímpares de 1 até 9.

function listarImparesAte9() { // Função que imprime os números ímpares até 9
    for (let i = 1; i < 10; i += 2) { // Começa no 1 e vai pulando de 2 em 2 (só ímpares)
        console.log(i);
    }
}

//Situação Problema: Desenhar uma linha simples usando um número específico de asteriscos.
//Tarefa: Crie uma função linhaDeAsteriscos(quantidade) que recebe um número e retorna uma string contendo essa quantidade de asteriscos (ex: quantidade = 3 retorna ***). Use um loop for.

function linhaDeAsteriscos(quantidade) { // Função que gera uma linha de asteriscos com a quantidade dada
    let linha = '';
    for (let i = 0; i < quantidade; i++) {
        linha += '*'; // Adiciona um asterisco à string a cada iteração
    }
    return linha;
}

