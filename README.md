Poisson Image Blending on browser
====
## Overview
implementation of this paper:
http://www.irisa.fr/vista/Publis/Publi/Perez03a.english.html

<img width="953" alt="screenshot" src="https://user-images.githubusercontent.com/26299162/31848351-b220a77a-b66b-11e7-98da-06f2cff05009.png">

## Description
Seamless image blending based on Poisson Equation(https://en.wikipedia.org/wiki/Poisson%27s_equation)<br>

My program refers to https://takuti.me/note/poisson-image-blending .<br>
Thank the Author for the nice program and the article.

## Features
+ simple UI like drag ang drop selecting
+ auto size-formatting
+ save a blended image

## Requirement
+ python3.6~

## Usage
0. Activate
    + Windows : click a `start.bat` and access to `http://localhost:8000/index.html`.
    + Others : do `python server.py`. Then access to `http://localhost:8000/index.html`.

1. `Drag and Drop` two images, "destination image" and "source image".

2. `Drag` on a middle image. You can choose a place to be blended. `Double
Click` determines the place.

3. On Left image, you can choose blend position by `Drag`.

4. Click the `import` or `mix` !

+ Note1 : The difference between `import` and `mix` is that `mix` is better at blending a non-edge image (e.g. sky, characters etc.) than `import`.

+ Note2 : Sometimes Image isn't selected appropriately. If so, please change a image size(width, height, resolution).



Please Enjoy!

## Author
[ugredium](https://github.com/ugredium)
