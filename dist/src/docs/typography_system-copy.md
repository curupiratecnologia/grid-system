---
name: Grid
category: Design
---


#### Container
 o container somente determina a largura maxima `.container` conforme os breakspoints para cada tamanho de tela
 - `.container` - max de 1280 px
 - `.container-fluid` - 100%



### Grids

podemos ter grid de varias colunas, utilizando 
- `.grid .grid-num` - num = numero de colunas, de 2 a 24. exemplo `.grid-12`
- `.col-1` - num = o tamanho\/span das colunas

podemos definir gaps dos grids com:
- `.gap-1` - num = espaco entre as celuas da grid, de 0 a 12 (espaco final multiplos de 4)
- `.col-gap-1` - num = espaco entre as colunas, de 0 a 12 (espaco final multiplos de 4)
- `.row-gap-1` - num = espaco entre as rows, de 0 a 12 (espaco final multiplos de 4)

``` gridexample.html
    <div class='container'>
    <h6> grid de 4 colunas </h6>
    <div class='grid grid-4'>
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div class="col-2"> 5 </div>
        <div class="col-2"> 6 </div>
        <div> 7 </div>
        <div class="col-3"> 8 </div>

    </div>
       <h6> grid definindo gutter </h6>
    <div class='grid grid-4 gap-1'>
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
    </div>
```
```gridexample.css
    .grid-4 div{
        background: gray;
        padding:20px;
    }
```

**Justify/Align Grids or Grid itens**
- `.j-start` - justify
- `.j-center`
- `.j-end`
- `.j-stretch`
- `.a-start` - align
- `.a-center`
- `.a-end`
- `.a-stretch`


``` gridexamplea.html
    <div class='container'>
    <h6> jutify-align aplicado aos itens </h6>
    <div class='grid grid-4'>
        <div> 1 </div>
        <div class="col-3 j-center"> 2 </div>
        <div class="col-2 j-end"> 5 </div>
        <div class="col-2"> 6 </div>
        <div> 7 </div>
        <div class="j-end"> 8 </div>

    </div>

    <h6> justify align apllicado ao grid </h6>
    <div class='grid grid-4 gap-1 j-center a-center'>
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

  </div>
```
```gridexamplea.css
    .grid-4 div{
        background: gray;
        padding:20px;
    }
```





### Elements in Rows or Cols using Flex

podemos ter uma linha ou colunas usando o flex 
- `.in-cols` - todos os elementos vao aparecer como colunas, uma do lado da outra
- `.in-rows` - todos os elementos filhos vao aparecer de linha em linha
- `.gap-2` - o espacamento(margim) entre os elementos 
- `.inline` - o container se comporta como inline-flex
- `.wrap` - o container se comporta como inline-flex
- `.nowrap` - o container se comporta como inline-flex

**itens size**
- `grow-num` - num de 1 a 5
- `shrink-num` - num de 1 a 5
- `w-num` - determina a largura/flexbasis, num de 0 a 100, de 10 em 10
- `h-num` - mesma coisa que w, para quando usamos o .in-rows

**order**
- `.order-1` de 1 a 24
- `.order--1` de -1 a -24


**Justify/Align Flex container and itens with with**
- `.j-start` - justify
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



``` flexexample.html
    <div class='container'>
    <h6> itens in cols </h6>
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
       <h6> items in rows </h6>
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
    </div>
```
```flexexample.css
    .in-cols div, .in-rows div{
        background: gray;
        padding:20px;
    }
```