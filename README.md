<h1>SecondsPrinter</h1>
<br>
<br>
<br>
<br>
<h2>Este projeto foi concluído por mim em apenas 4 minutos e 37 segundos. Ele surgiu como um passatempo inspirado por um desafio da conta "Criascript" no Instagram. O desafio propunha criar uma função que recebesse um horário no formato xx:yy:zz e, a partir disso, exibisse o tempo total em segundos na tela.</h2>
<p>Com essas informações e um conhecimento básico de matemática, deduzi que, se um minuto equivale a 60 segundos, uma hora seria 60 minutos multiplicados por 60 segundos, resultando em 3600 segundos. Assim, dividi a string no formato xx:yy:zz utilizando o método .split, tendo ":" como delimitador. Após a divisão, armazenei os valores de cada segmento em variáveis distintas.

Com todos os elementos mapeados, faltava apenas realizar o cálculo matemático, que foi dado pela fórmula: +horas * 3600 + +minutos * 60 + +segundos. Esse cálculo produziu o resultado esperado.

Vale destacar o uso do operador unário + antes das variáveis, como em +horas. Isso ocorre porque, mesmo após a separação com o .split, os segmentos ainda são strings. O operador unário +, quando aplicado a uma string que contém um valor numérico, converte-a em um número.

Espero que a explicação tenha ficado clara. Foi um projeto divertido e rápido de realizar no geral.")</p>
  
