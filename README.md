Poisson Image Blending on browser
====
## Overview
implementation of this paper:
http://www.irisa.fr/vista/Publis/Publi/Perez03a.english.html

This program refers to https://takuti.me/note/poisson-image-blending .<br>
Thank the Author for the nice program and the article.

<img width="741" alt="204" src="https://user-images.githubusercontent.com/26299162/36550826-8f9d2bc6-1839-11e8-87bd-ceeed8c21ba8.png">

## Features
+ simple UI like drag ang drop selecting
+ auto image-size formatting
+ can save a blended image

## Usage
1. select images
    + left: a base image
    + middle: an image you want to blend with the base image
    + right: a mixed result image

2. On the middle image, select blended area and click. You can adjust a position.
3. blend
    + `import`: suited for images like faces etc.
    + `mix`: suited for non-edge images like sky, characters etc.
