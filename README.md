# Benchmarks de Iteração em JavaScript

Este repositório contém testes de desempenho que comparam diferentes métodos de iteração em JavaScript

> O objetivo deste teste é avaliar a eficiência de diversos métodos de iteração — forEach, for, for...of, for...in e map — na manipulação de grandes conjuntos de dados em JavaScript. 

<details>
  <summary><strong>Teste 1: Iteração Simples com 10.000 Elementos</strong></summary>

> Objetivo: processar uma lista de 10.000 números e criar objetos correspondentes.​

> Como executar:
```shell
node main.js
```

> Métodos Avaliados

| Método    | Descrição                                                                 |
|-----------|---------------------------------------------------------------------------|
| `forEach` | Itera sobre cada elemento da lista utilizando o método `forEach`.         |
| `for`     | Utiliza um loop `for` tradicional para percorrer a lista.                 |
| `for...of`| Itera sobre os elementos da lista utilizando a estrutura `for...of`.      |
| `for...in`| Percorre os índices da lista utilizando `for...in`.                       |
| `map`     | Utiliza o método `map` para transformar cada elemento da lista em um novo objeto. |

Resultados Obtidos

Os testes foram executados três vezes, e os tempos médios registrados para cada método foram:​

| Método      | Tempo de Execução                  |
|-------------|------------------------------------|
| `forEach`   | Entre 5,793ms e 6,971ms            |
| `for`       | Entre 3,353ms e 3,988ms            |
| `for...of`  | Entre 2,791ms e 3,690ms            |
| `for...in`  | Entre 1,994ms e 3,130ms            |
| `map`       | Entre 3,488ms e 6,376ms            |

Observa-se que o loop for...in apresentou o melhor desempenho na maioria dos testes, seguido pelo for...of. É importante notar que os tempos podem variar dependendo do ambiente de execução e que diferenças sutis podem não ser significativas em aplicações reais.
</details>


<details>
  <summary><strong>Teste 2: Iteração com Lista de Objetos Aninhados</strong></summary>

> Objetivo: Medir o desempenho de diferentes métodos de iteração em um cenário com dados aninhados. Cada elemento da lista principal (concessionárias) contém uma lista interna de 400 carros. Neste teste, há apenas **1** elemento na lista principal, o que nos permite isolar o custo da iteração interna sobre os carros.  
>
> ❗ O foco aqui é **apenas desempenho** — não legibilidade ou boas práticas de código.

> Como executar:
```shell
node index.js
```

> Métodos Avaliados

| Método     | Descrição                                                                 |
|------------|---------------------------------------------------------------------------|
| `forEach`  | Itera sobre as concessionárias e, internamente, sobre os carros com `forEach`. |
| `for`      | Usa dois loops `for` tradicionais (externo e interno).                    |
| `for...of` | Itera sobre a lista de concessionárias e seus carros com `for...of`.      |
| `for...in` | Itera sobre os índices com `for...in` na lista de concessionárias e na de carros. |
| `map`      | Utiliza `map` para transformar a lista e sua sublista de carros.          |


> Resultados Obtidos

Cada método foi executado quatro vezes. Os tempos registrados foram:

| Método     | Tempo de Execução (ms)         |
|------------|--------------------------------|
| `forEach`  | Entre 0,301ms e 0,514ms       |
| `for`      | Entre 0,438ms e 0,833ms       |
| `for...of` | Entre 0,109ms e 0,146ms       |
| `for...in` | Entre 0,393ms e 0,482ms       |
| `map`      | Entre 0,192ms e 0,326ms       |


> 📝 Observações:

O for...of apresentou o melhor desempenho nesse teste específico.

O baixo número de elementos na lista externa ajuda a focar apenas no custo da iteração interna.

Diferenças pequenas como essas são comuns em microbenchmarks e podem variar conforme o ambiente.
</details>


---


Após a realização dos testes comparativos entre os diferentes métodos de iteração em JavaScript, podemos concluir o seguinte:​

### Desempenho:

- Os loops tradicionais (for) e o loop for...of geralmente apresentam um desempenho superior em comparação com métodos como forEach e map. Isso ocorre porque loops tradicionais permitem acesso direto às variáveis, evitando a sobrecarga de chamadas de função adicionais. ​
    Software Development Company | LeanyLabs

- O loop for...of oferece uma sintaxe mais moderna e é otimizado para performance, sendo uma escolha eficiente para muitas situações. ​
    MeasureThat

- Métodos como forEach e map são mais concisos e legíveis, mas podem ter um desempenho ligeiramente inferior devido à sobrecarga de chamadas de função e, no caso do map, à criação de um novo array. ​

### Legibilidade e Manutenção:

- Métodos de array como forEach e map proporcionam uma sintaxe mais declarativa e funcional, facilitando a leitura e manutenção do código.​

- Loops tradicionais oferecem maior controle sobre o fluxo de iteração, permitindo o uso de instruções como break e continue, que não estão disponíveis no forEach. ​
    Medium

> Considerações Finais:

A escolha do método de iteração deve ser baseada nas necessidades específicas do projeto:

Para operações que exigem alta performance em grandes conjuntos de dados, loops tradicionais (for) ou for...of podem ser mais adequados.​

Para código mais legível e funcional, especialmente quando se trabalha com arrays e transformações de dados, métodos como forEach e map são preferíveis.​

É essencial balancear desempenho e legibilidade, considerando o contexto e os requisitos do projeto, para escolher a abordagem mais adequada.
