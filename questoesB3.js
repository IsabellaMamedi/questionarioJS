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
  
