Poisson Image Blending on browser
====
## Overview
Application of this paper:
http://www.irisa.fr/vista/Publis/Publi/Perez03a.english.html

The demo is [here](https://ugredium.github.io/Poisson_Editing/){:target="_blank"}.

<img width="953" alt="screenshot" src="https://user-images.githubusercontent.com/26299162/31848351-b220a77a-b66b-11e7-98da-06f2cff05009.png">

## Description
Seamless image blending based on Poisson Equation(https://en.wikipedia.org/wiki/Poisson%27s_equation)<br>

This code was written in reference to https://takuti.me/note/poisson-image-blending .<br>
Thank the Author for the nice program and the article.

## Features
+ simple UI like drag ang drop selecting
+ auto image-size formatting
+ can save a blended image

## Usage
1. select images
    + left: base image
    + middle: an image you want to blend with the base image
    + right: mixed result image

2. On the middle image, select blended area and click. You can adjust a position.
3. blend
    + `import`: suited for images like faces etc.
    + `mix`: suited for non-edge images like sky, characters etc.
