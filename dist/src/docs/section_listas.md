---
name: Section Listas
category: Relatorios
---

Elementos que devem ser usados para esse tipo de componente `<div>`

Section Lista de Unidades representa as unidades de destinação e as informações referentes a cada uma delas.
Para cada unidade há um ícone, que pode ser um elemento `<img>` inserido no conteúdo de um elemento `div` com a classe `section__list--icon`, e informações adicionais, que podem ser inseridas com formato título + conteúdo, utilizando um elemento `<div>` com a classe `section__list--item-title` e `section__list--item-content`.


```sectionlistaunidades.html
   <div class='relatorio'>
    <div class="grid grid-3">

        <div class="section__list">

            <div class="section__list--icon">
                <img src="src/assets/icons/icon-area-favoraveis-A.png">
            </div>

            <div class="section__list--item-title">
                Nome da Unidade
            </div>

            <div class="section__list--item-content">
                Aterro Santo Amorim
            </div>

            <div class="section__list--item-title">
                Tipo
            </div>

            <div class="section__list--item-content">
                Aterro Sanitário
            </div>

            <div class="section__list--item-title">
                Operador
            </div>

            <div class="section__list--item-content">
                Prefeitura Municipal
            </div>

            <div class="section__list--item-title">
                Início e fim da operação
            </div>

            <div class="section__list--item-content">
                2001-2010
            </div>

            <div class="section__list--item-title">
                Recebe de outros municípios
            </div>

            <div class="section__list--item-content">
                Sim
            </div>

            <div class="section__source">
                Fonte: SINIR
            </div>
           
        </div>


        <div class="section__list">

            <div class="section__list--icon">
                <img src="src/assets/icons/icon-aterro-construcao-civil-B.png">
            </div>

            <div class="section__list--item-title">
                Nome da Zona
            </div>

            <div class="section__list--item-content">
                Aérea 01 Vila Formosa
            </div>

            <div class="section__list--item-title">
                Tipo da unidade de disposição
            </div>

            <div class="section__list--item-content">
                Classe II-A (aterro sanitário)
            </div>

            <div class="section__list--item-title">
                Endereço
            </div>

            <div class="section__list--item-content">
                BR-050 km 177
            </div>
           
        </div>

        <div class="section__list">

            <div class="section__list--iconStriped">
                <img src="src/assets/icons/striped_c.png">
            </div>

            <div class="section__list--item-title">
                Nome do passivo
            </div>

            <div class="section__list--item-content">
                Lixão de Cana-Brava
            </div>

            <div class="section__list--item-title">
                Tipo da unidade de disposição
            </div>

            <div class="section__list--item-content">
                Classe III-A (lixão encerrado)
            </div>

            <div class="section__list--item-title">
                Área Estimada
            </div>

            <div class="section__list--item-content">
                20.000,00 km²
            </div>

            <div class="section__list--item-title">
                Endereço
            </div>

            <div class="section__list--item-content">
                41301-110, Salvador - BA
            </div>

            <div class="section__list--item-title">
                Localização
            </div>

            <div class="section__list--item-content">
                -12.921060, -38.423313
            </div>

        </div>

    </div>
</div>
```

Um elemento `<div>` com a classe `section__source` pode ser adicionado ao fim da lista para indicar fonte.

```sectionsource.html
   <div class='relatorio'>
    <div class="section__source">
        Fonte: SINIR
    </div>
</div>
```


```sectionlist.html

    
   <div class='relatorio'>
    <div class="section__list">

        <div class="list-general">

            <div class="section__list--iconStriped">
                <img src="src/assets/icons/striped_1.png">
            </div>

            <div class="section__list--title">
                Dolore aliqua Lorem
            </div>

            <div class="section__list--content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </div>

        </div>

    </div>
    

    <div class="section__list">

        <div class="section__list--iconStriped">
            <img src="src/assets/icons/striped_2.png">
        </div>

        <div class="section__list--title">
            Dolore aliqua Lorem
        </div>

        <div class="list-general">

            <div>
                <div class="section__list--item-title">
                    CNPJ:
                </div>

                <div class="section__list--item-content">
                    19.526.155/0001-94
                </div>
            </div>

            <div>
                <div class="section__list--item-title">
                    Natureza Jurídica:
                </div>

                <div class="section__list--item-content">
                    Público
                </div>
            </div>

            <div>
                <div class="section__list--item-title">
                    Telefone:
                </div>

                <div class="section__list--item-content">
                    ----
                </div>
            </div>

        </div>
    </div>
    </div>

```


    

