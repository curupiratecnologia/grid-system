---
name: Legends
category: Relatorios
---

Elementos que deve ser usado para esse tipo de componente: `<div>`.

Esse elemento corresponde as legendas dos gráficos e mapas do relatório.

Para adicionar uma nova linha de legenda, deve-se adicionar uma div com class="line" e dentro da mesma duas divs com classe "legend__bullets" e "legend__text".


```legends.html
   <div class='relatorio'>

<div class="container" style="display: flex">
    <div class="section__legends">

        <div class="line">
            <div class="legend__bullets" style="background: #314559">
            </div>
            <div class="legend__text">
                Exemplo de legenda 1
            </div>
        </div>

        <div class="line">
            <div class="legend__bullets" style="background: #5A9591">
            </div>
            <div class="legend__text">
                Exemplo de legenda 2
            </div>
        </div>

        <div class="line">
            <div class="legend__bullets" style="background: #E5A253">
            </div>
            <div class="legend__text">
                Exemplo de legenda 3
            </div>
        </div>

        <div class="line">
            <div class="legend__bullets" style="background: #F1A1A1">
            </div>
            <div class="legend__text">
                Exemplo de legenda 4
            </div>
        </div>

    </div>
</div>
</div>
```




