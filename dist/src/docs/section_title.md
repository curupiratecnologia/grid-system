---
name: Section Title
category: Relatorios
---

Elementos que deve ser usado para esse tipo de componente: `<div>`.

Tipos de titulo seção:
 - Default: section__title apenas o titulo.
 - Primario: section__title__info com titulo e informativo.



```sectiontitle.html
   <div class='relatorio'>
    <div class='container'>
      <div class='section__title'>
              <h2 class='section__title__text'> Section Title </h2>
      </div>
    </div>
    </div>

```

O section title aceita subtitulos tb, para isso basta adicionar uma div com a classe section__title__info


```sectiontitleinfo.html
   <div class='relatorio'>
    <div class='container'>
      <div class='section__title'>
              <h2 class='section__title__text'> Section Title 
                <div class='section__title__info'> INFO SOBRE TITULO </div>
              </h2>
            
      </div>
    </div>
    </div>

```






