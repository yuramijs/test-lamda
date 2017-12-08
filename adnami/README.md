## Getting started

### Requirements

  * [Yarn](https://yarnpkg.com/)

### 1. Get the latest version
Clone the latest version of on your local machine by running:

```shell
$ git clone https://github.com/adnami/adnami-publishers.git
$ cd adnami-publishers
```

### 2. Install dependencies

This will install project dependencies and developer tools listed
in `package.json` file.

```shell
$ yarn install
```

### 3. Start development server

Each publisher has it's own configuration and setup. The included `__template` can be started using the below commands.

Notice that the argument matches the name of the publisher's folder.

```shell
$ yarn start __template
```

Your browser should automatically open on `localhost:3000/__template`.

### 4. Get Runtime

Go to [http://www.adsembler.com/directive/runtime](http://www.adsembler.com/directive/runtime) and install Runtime.

## Create publisher

### 1. Create publisher folder

Locate and duplicate the `__template` folder inside `src/publishers`. Name it using `domain.com` convention.

### 2. Generate GUID

Generate a GUID online from [https://www.guidgenerator.com/online-guid-generator.aspx](https://www.guidgenerator.com/online-guid-generator.aspx).

### 3. Configure config.js

Insert the GUID and URL of the website into `config.js` located in the publisher folder.

```js
const config = {
  ...
  url: 'https://adnami.io/',
  uuid: 'GUID',
}
```
### 4. Configure macro.js

Insert the GUID into `macro.js` located in the publisher folder.

```js
var config = {
  uuid: 'GUID',
  ...
}
```

## Skin Certification

### 1. Start proxy server

Notice that the argument must match the name of the publisher's folder.

```shell
$ yarn run site __template
```

Your browser should automatically open on `localhost:3000/`.

### 2. Create the skin certifications

Modify `mnemonics/css/css.css` and `mnemonics/scripts/skin.js`.

Ensure that the needed modules are required and implemented in `macro.js`.

```js
var css = require('./mnemonics/css');
var scripts = require( './mnemonics/scripts');
```

```js
var config = {

  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      scripts.run();
      css.run();
    });
    ...
  }
}
```

The browser should automatically reload when changes are detected.

## Upload

Cache-Control: max-age=900

## Runtime

Runtime can most of the time be used to test skin campaigns using the below configurations.

#### Skin

* Emediate
* eas8.emediate.eu
* 213863
* 302878

#### Video Skin

* Emediate
* eas8.emediate.eu
* 213863
* 327844

## Paradux

#### Skin

```js
window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    skin: {
      background: {
        backgroundImage: 'url(\'https://adsmdtpd01.blob.core.windows.net/rmb/aller/femina_yoga_aug17_skin.jpg\')',
      },
      click: 'https://adnami.io/',
    }
  },
},'*');
```

```js
window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    skin: {
      background: {
        backgroundImage: [
          'url(\'https://assets.adnami.io/adnami/bt_skin.jpg\')',
          'url(\'https://assets.adnami.io/adnami/bt_skin_wide.jpg\')',
        ],
      },
      click: 'https://adnami.io/',
    }
  },
},'*');
```

#### Video Skin

```js
window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    skin: {
      background: {
        backgroundColor: 'transparent',
      },
      click: 'https://adnami.io/',
    }
  },
},'*');
window.top.postMessage({
  type: 'ADSM_RMB_VIDEOSKIN_INIT',
  payload: {
    skin: {
      video: [
        { url: 'https://adsmdtpd01.blob.core.windows.net/rmb/microsoft/surface_2017_mert_180_skin.mp4', type: 'video/mp4' },
        { url: 'https://adsmdtpd01.blob.core.windows.net/rmb/microsoft/surface_2017_mert_180_skin.webm', type: 'video/webm' },
      ],
      background: {
        backgroundColor: '#000000',
        opacity: '.3'
      }
    }
  },
},'*');
```

#### Interscroll

```js
window.top.postMessage({
  type: 'ADSM_RMB_INTERSCROLL_INIT',
  payload: {
    uuid: '',
    interscroll: {
      background: {
        backgroundImage: 'url(\'https://adsmdtpd01.blob.core.windows.net/rmb/ikea/efteraar_2017_uge_39_42_pre_interscroll.jpg\')',
      },
      click: 'https://adnami.io/',
    }
  },
},'*');
```
