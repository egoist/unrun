# unrun

[![NPM version](https://img.shields.io/npm/v/unrun.svg?style=flat)](https://npmjs.com/package/unrun) [![NPM downloads](https://img.shields.io/npm/dm/unrun.svg?style=flat)](https://npmjs.com/package/unrun) [![Build Status](https://img.shields.io/circleci/project/egoist/unrun/master.svg?style=flat)](https://circleci.com/gh/egoist/unrun) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Features

- Show description for each npm script
- Use `yarn run` instead of `npm run` by default

## Install

```bash
$ yarn global add unrun
```

## Usage

With following contents in `package.json`:

```json
{
  "scripts": {
    "api": "node server.js",
    "stats": "webpack-bundle-analyzer stats.json",
    "size": "tree ./dist -L 1  -h"
  },
  "unrun": {
    "api": "Start the API server",
    "stats": "Represents bundle content as convenient interactive zoomable treemap",
    "size": "Show bundle size"
  }
}
```

```bash
$ unrun
```

<img src="https://ooo.0o0.ooo/2017/03/18/58cd3c92b6c31.png" width="600" />

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**unrun** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/unrun/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
