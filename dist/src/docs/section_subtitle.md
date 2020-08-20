---
name: Section Subtitle
category: Relatorios
---

Elementos que deve ser usado para esse tipo de componente: `<div>`.

Tipos de titulo seção:
 - Default: subtitulo da seção apenas com o titulo.
 - Primario: titulo-secao com titulo e informativo.

```sectionsubtitle.html
   <div class='relatorio'>
<div class="container">
    <div class="section__subtitle">
        <h3> Características Gerais  </h3>
    </div>

</div>
</div>

```


O section subtitle aceita informação abaixo, para adicionar basta inserir uma div com a classe section__subtitle__info

```sectionsubtitleinfo.html
   <div class='relatorio'>
<div class="container">
    <div class="section__subtitle">
        <h3> Características Gerais  
          <div class='section__subtitle__info'> Info descritiva sobre o titulo </div>
        </h3>
       
    </div>

</div>
</div>
```