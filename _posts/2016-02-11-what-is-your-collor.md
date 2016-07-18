---
layout: post
title:  "What is your collor?"
date:   2016-02-11 20:50:00 +0200
categories: svg browser support
---

Today was my first [Meteor](https://www.meteor.com/) deploy and I was able to
test svg support for this in more browsers.

As Chromium didn't work as expected, I made some tests to make bugreport.

Have a index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SVG test</title>
    <style>
      svg { fill: unset; }
      .rect{ fill:red; }
      .circle{ fill:blue; }
    </style>
  </head>
  <body>
    <svg> <use class="use" xlink:href="test.svg#symbol" /> </svg>
  </body>
</html>
```

and here is simple test.svg:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style type="text/css" >
<![CDATA[ .rect{ fill: black; } .circle{ fill:green; } ]]>
</style>
<defs>
  <symbol id="symbol">
    <rect x="0" y="0" width="40" height="40" class="rect" fill="yello" />
    <circle r="15" cx="30" cy="30" class="circle"/>
  </symbol>
</defs>
</svg>
```

Noow, here is this code used:
<style>svg { fill: unset; } .rect{ fill:red; } .circle{ fill:blue; }</style>
<svg><use class="use" xlink:href="{{ site.url }}/images/svg-use-class-test.svg#symbol" /></svg>

just path to svg is corrected.

p.s. for IE users, there midth be useful
[svg4everybody](https://jonathantneal.github.io/svg4everybody/)
