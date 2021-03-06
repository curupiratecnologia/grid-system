---
name: Utilitys
category: Utils
---


## Spacing ##

margim with 
- `.mt-1 (.mt-sm-1)` - margin top - 1 a 12
- `.ml-1` - margin left -  1 a 12
- `.mr-1` - margin right - 1 a 12
- `.mb-1` - margin bottom - 1 a 12
- `.mx-1` - margin left and right - 1 a 12
- `.my-1` - margin top and bottom - 1 a 12
- `.mx-auto` - margin top and bottom - 1 a 12

padding with 
- `.pt-1 (.pt-sm-1)` - margin top - 1 a 12
- `.pl-1` - margin left -  1 a 12
- `.pr-1` - margin right - 1 a 12
- `.pb-1` - margin bottom - 1 a 12
- `.px-1` - margin left and right - 1 a 12
- `.py-1` - margin top and bottom - 1 a 12

## Sizer ##
- `w-num (.w-sm-num)`  width in percent 0-100
- `h-num`  height in percent 0-100
- `wv-num`  width in viewport  0-100
- `hv-num`  height in viewport 0-100
- `wp-num`  width in scales pixels 0-24
- `hp-num`  height in scales pixels 0-24

## Fonts ##
- `.fs-xs (.fs-xs-xs)`
- `.fs-sm`
- `.fs-md`
- `.fs-lg`
- `.fs-xlg`
- `.fs-xxlg`
- `.fs-xxxlg`
- `.fs-xxxxlg`

- `.fs-1 (fs-sm-1)` fontsize 1 a 12 in scalar pixel
- `.fs--1 (fs-sm--1)` fontsize -1 a -12 scalar pixel
- `.fs-1rem` fontsize 1 a 12 in rem
- `.fs--1em` fontsize 1 a 12 in em

**line-height**
- `.lh-08 (lh-sm-08)` - line height of 06 - 14 ( significa 0.6 1.4)


**text align**
- `.tr (.tr-sm)` text-right
- `.tl` text-left
- `.tc` text-center

## Opacity ##
- `.o-10 (o-sm-50)`  opacity from 0 to 100 (step of 10)



## Display ##
- `.d-none (d-sm-block)`  
- `.d-block`
- `.d-inline-block`
- `.d-flex`
- `.d-inline-flex`
- `.d-grid`
- `.d-inline-grid`

## Hidden ##
- `.hidden`  
- `.hidden-xs` 
- `...`


``` hideexample.html
    <div class='container-fluid'>
       <div> small: <span class='hidden-xs'> showing </span> <span class='hidden-sm'> hidden </span> 
       </div>
        <div class='show hidden-md'> hidden-md </div>
        <div> 3 </div>
        <div> 4 </div>
        <div> 5 </div>
        <div > 6 </div>
        <div> 7 </div>
        <div > 8 </div>


    </div>
```
```hideexample.css
    h5{
        margin-top:5em;
    }
    .grid > div{
        background: gray;
        padding:20px;
    }
```


## show ##
- `.show`  
- `.show-xs`  

## Colors ##
- `.black` - font colors
- `.white`
- `.green`
- `.gray`
- `.yellow`
  
- `.bg-black` - background colors
- `.bg-white`
- `.bg-green`
- `.bg-gray`
- `.bg-yellow`


