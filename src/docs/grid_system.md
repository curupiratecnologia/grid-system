---
name: Grid
category: Design
---
v 0.1


#### Responsividade
A responsividade tem os seguintes breakpoints

- ` xs  : only screen and (max-width: 576px)"`
- `sm  : "only screen and (min-width: 576.98px) and (max-width: 768px)`
- `md : only screen and (min-width: 768px.98px) and (max-width: 992px)`
- `lg : only screen and (min-width: 992px) and (max-width: 1440px)`
- `xlg : "only screen and (min-width: 1440.98px)`
- `print : "only print` - utiliado somente em impressao

*todas as classes que definen tamanho podem ter responsividade aplicada utilizando `-xs` `-sm` etc*


#### Container
 o container somente determina a largura maxima `.container` conforme os breakspoints para cada tamanho de tela
 - `.container` - max de 1280 px
 - `.container-fluid` - 100%



### Grids

**grid container** - podemos ter grid de uma ou varias colunas, utilizando 
- `.grid .grid-num` - num = numero de colunas, de 1 a 24. exemplo `.grid-12`
- `.grid .grid-num-expandable` - permite que items do grid maior que sua coluna aumente o tamanho da coluna
- `.grid .grid-auto-num` - cria automaticamente colunas, com num defininto o tamanho minimo da coluna, de 10 a 2400px exemplo `.grid-auto-200`

**grid items** - são os items dentro do grid, que podem ocupar uma ou mais coluna e ou linhas, utilizando as classes
- `.col-num` - num = o numero de colunas que o elemento ocupa (1-24)
- `.row-num` - num = o numero de linhas que o elemento ocupa (1-24)

**espacamento** - podemos definir os espacos/gaps entre os elementos do grid:
- `.gap-num` - num = espaco entre as celuas da grid, de 0 a 12 (espaco final multiplos de 4)
- `.col-gap-num` - num = espaco entre as colunas, de 0 a 12 (espaco final multiplos de 4)
- `.row-gap-num` - num = espaco entre as linhas, de 0 a 12 (espaco final multiplos de 4)


**responsividade** - grids containers, elementos e espacamentos podem ser utilizados para diferentes tamanho de tela, aplicando `-sm` ou `-md` etc antes dos num.
Exemplos:

- `.grid .grid-1 .grid-md-3 .grid-lg-4 ` - em mobile vai ter 1 coluna, em md (768px) vai ter 3, e adiante 4 colunas
- `.grid .grid-6 .grid-xs-3` - grid vai ter 6 colunas, em mobile vai ter 3
- `.col-1 col-sm-2` - um elemente do grid ocupa 1 coluna, e 2 colunas acima de sm(576)
- `.row-2 row-sm-2` - um elemente do grid ocupa 2 linhas, e 3 linhas acima de md(768px) 
- `.gap-10 .gap-xs-2` - os elementos vao ter uma espacamento normal 40px, em mobile vai ter de 8 pixel



``` gridexample.html
    <div class='container-fluid'>
    <h5> grid de 4 colunas md, 2 coluna small, 1 coluna mobile </h5>
    <div class='grid grid-1 grid-sm-2 grid-md-4 '>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div> 5 </div>
        <div > 6 </div>
        <div> 7 </div>
        <div > 8 </div>

    </div>

    <h5> grid com numero de colunas automatizados, se definindo o tamanho minimo sempre </h5>
    <div class='grid grid-auto-100 gap-2 gap-md-5'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div> 5 </div>
        <div > 6 </div>
        <div> 7 </div>
        <div > 8 </div>

    </div>

    <h5> grid com o item 5 ocupando 4 colunas normal, 2 em small, e 1 em mobile </h5>
    <div class='grid grid-4'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div class="col-1 col-sm-2 col-md-4" > 5 (span) </div>
        <div > 6  </div>
        <div> 7 </div> 
        <div > 8 </div>
    </div>


    <h5> grid responsiva, o um item `col-num` maior que o numero da grid vai ser ignorado 
    </h5>
    
    <div class='grid grid-2 grid-sm-2 grid-lg-6'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div class="col-lg-6" > 5 (span) </div>
        <div > 6  </div>
        <div> 7 </div> 
        <div > 8 </div>
    </div>
    <h5> grid definindo espacamento entre os itens responsivo </h5>
    <div class='grid grid-4 gap-1 gap-md-10'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div> 5 </div>
        <div> 6 </div>
        <div> 7 </div>
        <div> 8 </div>
        <div> 9 </div>
    </div>
    <h5> grid definindo tamanho de linhas que um elemento oculpa, responsivo (4 row grande, 2row small) </h5>
    <div class='grid grid-4 gap-1'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div class='row-2 row-md-4'> 4 (row 2) </div>
        <div> 5 </div>
        <div> 6 </div>
        <div> 7 </div>
        <div> 8 </div>
        <div> 9 </div>
    </div>
    </div>
```
```gridexample.css
    h5{
        margin-top:5em;
    }
    .grid > div{
        background: gray;
        padding:20px;
    }
```

#### Alinhamento do Grid
**Justify/Align tanto definido no grid container como em algum elemento do grid**
- `.j-start` - justify
- `.j-center`
- `.j-end`
- `.j-stretch`
- `.a-start` - align
- `.a-center`
- `.a-end`
- `.a-stretch`

**responsividade** pode ser utilizado aplicando `-md` etc antes da centralizacao
- `.j-start .j-md-center` - ate 760px justifica no inicio, depois justifica no centro no centro


``` gridexamplea.html
    <div class='container-fluid'>
    <h5> jutify-align aplicado aos itens, com o item 2 mudando conforme o tamanho da tela </h5>
    <div class='grid grid-4'>
        <div> 1 </div>
        <div class="col-3 j-center j-md-end"> 2 </div>
        <div class="col-2 j-end"> 5 </div>
        <div class="col-2"> 6 </div>
        <div> 7 </div>
        <div class="j-end"> 8 </div>

    </div>

    <h5> alinhamentos aplicado ao grid container, com o elemento 4 utilizando alinhamento responsivo </h5>
    <div class='grid grid-4 gap-1 j-center a-center'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div class='row-3 a-lg-end'> 4 </div>
        <div> 5 </div>
        <div> 6 </div>
        <div> 7 </div>
        <div> 8 </div>
        <div> 9 </div>
    </div>

  </div>
```
```gridexamplea.css
   h5{
        margin-top:5em;
    }
    .grid div{
        background: gray;
        padding:20px;
    }
```





### Elements in Rows or Cols using Flex

podemos ter uma linha ou colunas usando o flex, com responsividade podendo ser determinada
- `.in-cols (.in-cols-sm)` - todos os elementos vao aparecer como colunas, uma do lado da outra
- `.in-rows (.in-rows-sm)` - todos os elementos filhos vao aparecer de linha em linha
- `.gap-2` - o espacamento(margim) entre os elementos 
- `.inline (.inline-sm)` - o container se comporta como inline-flex
- `.wrap (.wrap-sm)` - o container se comporta como inline-flex
- `.nowrap, .(nowrap-sm)` - o container se comporta como inline-flex

**itens size**
- `.grow-num (.grow-sm-num)` - num de 1 a 5
- `.shrink-num (.shrink-sm-num)` - num de 1 a 5
- `.w-num (.w-sm-num)` - determina a largura/flexbasis, num de 0 a 100, de 10 em 10
- `.h-num (.h-sm-num)` - mesma coisa que w, para quando usamos o .in-rows

**order**
- `.order-1, (.order-sm-1)` ordem, de 1 a 24
- `.order--1 (.order-sm--1)` de -1 a -24


**Justify/Align Flex container and itens with with**
- `.j-start (.j-sm-start)` - justify-content
- `.j-center`
- `.j-end`
- `.j-stretch`
- `.j-space-between`
- `.j-space-around`
- `.j-space-evenly`
- `.j-stretch`
- `.a-start` - align-itens
- `.a-center`
- `.a-end`
- `.a-stretch`
- `.a-baseline`
- `.ac-start` - align-content
- `.ac-center`
- `.ac-end`
- `.ac-stretch`
- `.ac-baseline`

exemplos: 
``` flexexample.html
    <div class='container-fluid'>
    <h5> itens em colunas </h5>

    <div class='in-cols gap-2'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div class="grow-1"> 5 </div>
        <div class="grow-1"> 6 </div>
        <div> 7 </div>
        <div class="col-3"> 8 </div>

    </div>
    
    <h5> items em linhas </h5>
    <div class='in-rows gap-4'>
        <div> 1 </div>
        <div> 2 </div>
        <div class="a-center"> no centro </div>
        <div> 4 </div>
        <div> 5 </div>
        <div> 6 </div>
        <div> 7 </div>
        <div class="a-end"> 8 no final </div>
        <div  class="order--1"> 9 que vira 1 </div>
    </div>


    <h5> items in colunas e em linha no mobile </h5>
    <div class='in-rows-xs in-cols-sm gap-4'>
        <div> 1 </div>
        <div> 2 </div>       
        <div> 3 </div>       
        <div> 4 </div>
        <div> 5 </div>
    </div>

    </div>
```
```flexexample.css
    div > div > div{
        background: gray;
        padding:20px;
    }
```