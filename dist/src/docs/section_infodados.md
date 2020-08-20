---
name: Section Info-Data
category: Relatorios
---

Elementos que deve ser usado para esse tipo de componente: `<div>`.

Info-dados representa uma determinada informação, apresentando o título e o valor em número ou texto informativo referente à ela.

```sectioninfo-dados.html
   <div class='relatorio'>
<div class="container>

    <div class="section__infodata">
        <div class="section__infodata_title">População Total Estimada</div>
        <div class="section__infodata_value"> 4.683 </div>
    </div>

</div>
</div>
```

O valor em número pode ter um prefixo, para valores monetários, ou um sufixo para valores de área/volume (R$ e km2) por exemplo.

Para adicionar basta inserir um elemento `div` com a classe `section__infodata__value--mon`

```sectioninfodados-values.html
   <div class='relatorio'>
<div class="container>

    <div class="section__infodata">
        <div class="section__infodata_title">PIB per capita</div>

        <div class="section__infodata_content">
            <div class="section__infodata_value--mon">R$</div>
            <div class="section__infodata_value"> 8.513,89 </div>
        </div>
        
    </div>

</div>
</div>
```

 classe `section__infodata--little` para km2
 

```sectioninfodados-valuessecundary.html
   <div class='relatorio'>
<div class="container>

    <div class="section__infodata">
        <div class="section__infodata_title">Área territorial</div>  

        <div class="section__infodata_content">
            <div class="section__infodata_value"> 700 mil </div>
            <div class="section__infodata--little">km2</div>
        </div>
        
    </div>

</div>
</div>
```