//Situação Problema: Decidir se a temperatura está agradável (entre 20 e 25 graus Celsius, inclusive).
//Tarefa: Crie uma função temperaturaAgradavel(temperatura) que retorna true se a temperatura estiver entre 20 e 25 (inclusive), e false caso contrário.

function temperaturaAgradavel(temperatura) { // Função que verifica se a temperatura está agradável
    return temperatura >= 20 && temperatura <= 25; // Checa se está entre 20 e 25 (inclusive)
}

//Situação Problema: Verificar se um aluno foi aprovado, considerando que a média para aprovação é 7.
//Tarefa: Crie uma função checarAprovacao(nota) que recebe a nota e retorna "Aprovado" se a nota for 7 ou maior, ou "Reprovado" caso contrário.

function checarAprovacao(nota) { // Função que verifica se o aluno foi aprovado ou reprovado
    if (nota >= 7) { // Se a nota for maior ou igual a 7
        return "Aprovado"; // Retorna "Aprovado"
    } else {

        return "Reprovado"; // Retorna "Reprovado"
    }
}

//Situação Problema: Um evento oferece entrada gratuita para pessoas com 65 anos ou mais.
//Tarefa: Crie uma função temEntradaGratuita(idade) que retorna true se a idade for 65 ou mais, e false caso contrário.

function temEntradaGratuita(idade) { // Função que verifica se a pessoa tem direito à entrada gratuita
    return idade >= 65; // Retorna true se idade for 65 ou mais, senão retorna false
}

//Situação Problema: Verificar rapidamente se um número fornecido é exatamente zero.
//Tarefa: Crie uma função ehZero(numero) que retorna true se o número for igual a 0, e false caso contrário.

function ehZero(numero) { // Função que verifica se o número é exatamente zero
    return numero === 0; // Retorna true se for exatamente igual a 0, senão retorna false
}

//Situação Problema: Identificar se um dia da semana (representado por uma string como "segunda", "terça", ..., "domingo") é dia útil ou fim de semana.
//Tarefa: Crie uma função tipoDeDia(diaSemana) que recebe a string do dia. Retorna "Fim de semana" se for "sábado" ou "domingo", e "Dia útil" para os outros dias.

function tipoDeDia(diaSemana) { // Função que identifica se o dia é útil ou fim de semana
    if (diaSemana === "sábado" || diaSemana === "domingo") {
        return "Fim de semana"; // Se for sábado ou domingo
    } else {
        return "Dia útil"; // Para qualquer outro dia
    }
}










