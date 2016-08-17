---
published: false
layout: post
date: '2016-08-17 19:36:00 +0200'
categories: idn punycode
---
# IDN podpora

- **IDN** je kratica za **i**nternationalized **d**omain **n**ame
- **Punycode** je način zapisa [Unicode](https://sl.wikipedia.org/wiki/Unicode) znakov z nizom ASCII znakov, ki jih razume DNS

Kot lastnik IDN domene jež.si se večkrat srečujem z nedelovanjem vpisane domene v UTF-8 obliki. Seveda nimam pričakovanj, da bi se angleško govoreči del sveta ukvarjal s tem, pač pa bi lahko kaj več storili naši domači, ker vrhnja domena .si je ena tistih, ki ponuja registracijo IDN obliko.

Tako bom skušal v tem zapisu zbrati tehnologijo in dobre prakse, da bi naše IDN domene postale kar najbolj domače. Realizacija je lahko kar splošna predpostavka, da je vnešena domena IDN in jo v bazi shranimo oz. uporabimo za nadaljno obdelavo kot ascii, razen če domeno prikazujemo.

## Php

Začenjam s php-jem, ker sem se s tem srečal najprej, preden sem aktivno presedlal na Meteor.
Php ima [IDN podporo](http://php.net/manual/en/ref.intl.idn.php) preko
- idn_to_ascii — Convert domain name to IDNA ASCII form.
- idn_to_utf8 — Convert domain name from IDNA ASCII to Unicode.

Namestiš ga z
```bash
apt-get install php5-intl
```
in uporaba:
```php
idn_to_ascii('jež.si');
idn_to_utf8('xn--je-3va.si');
```

## JavaScript & node.js

Za IDN podporo v JavaScriptu skrbi [knjižnjica punycode.js](https://github.com/bestiejs/punycode.js/).

Namestiš z
```bash
npm install punycode --save
```
oz.

```javascript
const punycode = require('punycode');
```

uporaba:
```javascript
punycode.toUnicode('xn--je-3va.si');
punycode.toASCII('jež.si');
```

## Ruby

S tem sem se srečal le pri tej moji spletni strani, ki jo generira jekyll.

Namestitev:
```bash
sudo gem install simpleidn
```

uporaba:
```ruby
require 'rubygems'
require 'simpleidn'
SimpleIDN.to_unicode "xn--je-3va.si"
SimpleIDN.to_ascii "jež.si"
```

## Povezave

- [PunyCoder](https://www.punycoder.com)
- [GNU libidn](http://www.gnu.org/software/libidn/)
- [Wiki o IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name)
- [Wiki o Punycode](https://en.wikipedia.org/wiki/Punycode)


## Državne ustanove in vabilo k sodelovanju

Upam, da naši državni upravniki prepoznajo tehnični problem slovenščine, sploh ob 25 letnici države in naročijo posodobitve svojih spletnih strani.
