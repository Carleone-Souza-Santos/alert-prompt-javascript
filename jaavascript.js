
/********************** Trabalhamos com variaveis recolhendo dados com o prompt e aplicando na tela html com alguns alert ********************/

var Ano_Atua   = parseInt(Ano_Atua);     // estamos transformando a string em um numero inteiro.
var Nascimento = parseInt(Nascimento);   // estamos transformando a string em um numero inteiro.

var nom = prompt('Qual e o seu nome? '); // recolhe o seu nome e aplica em uma variavel nom.

var Nascimento = prompt('Em que Ano vc nasceu? ');     // declaração variavel Nascimento.
while(Nascimento >= 2020 ){                           // validação da variavel Nascimento. tem que ser igual ou menor a 2022.
  alert('Informe Corretamente por Favor!');           // se for maior vai ficar neste loop solicitando a correção.
       Nascimento=prompt('Em que Ano vc nasceu?');
}

var Ano_Atual = prompt('Qual o ano atual?');               // declaração variavel Ano_Atual.
while(Ano_Atual < 2022){                                   // validação do Ano_Atual. tem que ser maior que o ano 2022.
  alert('Informe Corretamente por Favor!');                // se for menor vai ficar neste loop solicitando a correção.
  Ano_Atual=prompt('Por favor digite qual o ano atual!!!');
}

var Idade =  Ano_Atual - Nascimento;                     // A subtração entre a data de nascimento e o ano atual.

 alert('Esta e a sua idade : ' + Idade + ' Anos');       //vai aparecer no alert a escrita da operação da sua idade. 


 if(Idade < 12 ){                                   // Se a Idade for menor que 12 ...
  document.write('Parabens Criança...');            // vai aparecer na tela ('Parabens Criança...').
} 
else if (Idade < 19){                               // Se a Idade for menor que 19  ...
    document.write('Parabens Adolescente...');      // vai aparecer na tela ('Parabens Adolescente...').
}
else if(Idade < 31 ){                               // Se a Idade for menor que  31 ...
  document.write('Parabens Jovem...');              // vai aparecer na tela ('Parabens Jovem...').
}
else if(Idade < 41  ){                              // Se a Idade for menor que 41  ..
  document.write('Parabens Adulto...');             // vai aparecer na tela ('Parabens Adulto...').
}
else if(Idade < 51  ){                              // Se a Idade for menor que 51  ..
  document.write('Parabens Coroa!!...');            // vai aparecer na tela ('Parabens Coroa!!...').
}                                                    
else if(Idade < 129 ){                              // Se Idade for menor que ate 129  ..
  document.write('Parabens Vovozinho...');          // vai aparecer na tela ('Parabens Vovozinho...')
}
else if(Idade > 130  ){                              // Se Idade for maior que 130 anos  .
  document.write('Parabens Mumia!!!..' + Idade + 'Anos vc Bebeu?' );     // possivel erro de digitação.
}

/**************************             Trabalhamos com o input ultilizando uma função            ****************************/

const formi = document.getElementById('formula');        /*Id formulario foi transformado em formi*/
formi.addEventListener('submit', function(e) {           /*formi recebe um escultador de eventos sobre o botão que ultilizar submit usando functi (e)*/
  e.preventDefault();

  const [sobre, nome, titulo] = ['sobre', 'nome', 'titulo'].map(   /* Array recebe o método map() invoca a função callback passada por argumento para cada elemento
                                                                     do Array e devolve um novo Array como resultado.*/ 

    name => formi.querySelector(`[name="${name}"]`).value         /*name fuction formi selecionando o valor name e gerando um alerta sobre 
                                                                   a const array passada 'sobre''name''titulo' e apresentando na tela */
  );
  alert('Esta Obra prima se chama: '+  `${nome} , ${sobre} - ${titulo}`);   //Vai dar um alert na tela 
  console.log('Esta Obra prima se chama: ' + nome  +  sobre  +  titulo + nom);   //Vai aparecer no backend apertando f12 e verificando no console.
  document.write( 'O sr ' + nom + ' Gosta do Autor: ' + nome + ' Sobrenome do seu Autor preferido: ' +  sobre + ' O seu titulo: ' +   titulo + ' A sua idade atualmente e : ' + Idade + ' Anos.' );
});   //Vai aparecer em uma nova tela do html os dados informados ao input.

alert('Seja bem vindo Sr ! ' + nom ); //Vai aparecer um alerta dando boas vindas.