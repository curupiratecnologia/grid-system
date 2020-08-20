---
name: Section Table Residues
category: Relatorios
---

Elementos que deve ser usado para esse tipo de componente: `<div>` `<table>`.

#formtodo: produzir um texto;


```sectiontableresidues.html
   <div class='relatorio'>
<div class="container">
    <div class="section__table--title">
        <h6><strong> Tabela 2 </strong>- Metas para Redução, Reutilização, Coleta Seletiva e Reciclagem </h6>
    </div>

    <table>
        <thead>
            <tr class="table__category--header">
                <th class="table__blank_space"> </th>
                <th class="table__blank_space"> </th>
                <th class="category__header-res" colspan="2"> META </th>
            </tr>

            <tr class="table--header">
                <th> Nome </th>
                <th> Valor Atual (t) </th>
                <th> Valor (t) </th>
                <th> Prazo </th>
            </tr>
        </thead>

        <tbody class="table__highlights">
            <tr class="border--bottom">
                <td> Redução </td>
                <td>    10.000</td>
                <td>   5.000 </td>
                <td>  2022  </td>
            </tr>

            <tr class="border--bottom">
                <td > Reutilização </td>
                <td>    8.000</td>
                <td>   9.000 </td>
                <td>  Janeiro de 2023  </td>
            </tr>

            <tr class="border--bottom">
                <td>  Coleta Seletiva   </td>
                <td>    8.000</td>
                <td>   9.000 </td>
                <td>  2 anos </td>
            </tr>

            <tr class="border--bottom">
                <td> Reciclagem </td>
                <td>    20.000</td>
                <td>   9.000 </td>
                <td>  6 meses </td>
            </tr>
        </tbody>
    </table>

    <div class="section__table--font">
         <div class="section__source">
            Fonte: SINIR
        </div>
    </div>

</div>
</div>
```
