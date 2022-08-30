# generator-putout [![NPM version](https://img.shields.io/npm/v/generator-putout.svg?style=flat)](https://npmjs.org/package/generator-putout)

![image](https://user-images.githubusercontent.com/1573141/187409656-fdd6a1f6-3ae2-4752-a30e-a8420011fcdd.png)


The 🐊Putout generator for [Yeoman](https://yeoman.io/). This generator is intended to aid development within the 🐊[Putout](https://github.com/coderaiser/putout) project. It is designed to work within the top-level `putout` directory.

## Installation

First and foremost, you must have [Node.js](https://nodejs.org/) and npm installed. If you don't have Node.js installed, please download and install the latest version.

You must also install Yeoman, if you don't have it installed already. To install Yeoman, you can run this command:

```sh
npm i -g yo
```

With Node.js and Yeoman installed, you can run this command:

```sh
npm i -g generator-putout
```

## Usage

If you want to create a new **🐊Putout** plugin, make sure you're in the top-level directory where you want the plugin to be created (for example `putout-plugin-remove-something`) and type:

```sh
yo putout
```

You'll be prompted for information about your plugin and it will generate a `package.json` file, README, and source code for a stub plugin.

## License

MIT
