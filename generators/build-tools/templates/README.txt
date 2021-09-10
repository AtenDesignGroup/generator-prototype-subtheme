
# Tooling
This contains the front-end compiling tools needed for this theme.  It is recommended to run the development commands while working locally.

If your project utilizes CI, it is recommended all build artifacts get ignored from the git repository. These should be generated in as part of the artifact build process. There is no need to run a minified build command locally for any other reason than testing.

## Installation
Before proceeding with the installation, it is recommended that you use [nvm](https://github.com/creationix/nvm) to help ensure everyone on the project is using a consistent version of node.js.

*note: All of the following commands should be run from the theme directory*

1. If you don't have nvm installed, follow these [instructions](https://github.com/creationix/nvm#install-script). Windows users may need to use [nvm-windows](https://github.com/coreybutler/nvm-windows) instead.
1. `nvm install` This will install the version of Node that's defined in `.nvmrc`
1. `nvm use` This will set the correct version of node.js by checking this project's `.nvmrc` file.
1. `npm install` This installs all the correct packages for this project.

*note: nvm should be the only global dependencies needed for this project*


## Usage
At the beginning of each development session, it's recommended to run `nvm use` to ensure you are developing with the correct version of node.

```
nvm use
```


### Development
To compile CSS and JS run the following command.

```
npm run dev
```

This will automatically start a [Browsersync](https://browsersync.io/) proxy server which will watch the theme CSS and JS source files, build the corresponding artifacts and inject them into the browser so you don't need to manually refresh. See the Browsersync documentation for available options and `gulpfile.js/browsersync.js` for different methods of passing this configuration in.

If there is an option you might need to override, it's likely the domain for your local site that you would like to proxy. By default Browsersync is configured to proxy `local.test`. If you need to change it, you can create a `.env` file in the `prototype` theme directory. See the `.env-example` file.

Example `.env` file

```
BS_PROXY='drupalvm.test'
```

To cancel the Browsersync server, type `Ctrl+c`.

The `dev` command should cover everything you need and it's pretty fast. The following additional commands are provided only as a convenience and are unlikely needed.

### Build
The following command is what will be run when the theme assets are built for production. This will remove sourcemaps and execute webpack in production mode.

```
npm run build
```

### CSS
To compile CSS run the following command.

```
npm run css
```

To automatically compile CSS when files are changed, run:

```
npm run css:watch
```


### JS
To compile JS run the following command.

```
npm run js
```

To automatically compile JS when files are changed, run:

```
npm run js -- --watch
```

To cancel the watch process, type `Ctrl+c`


### Icons
SVG icons can be inlined and colored via the [postcss-svg-inline](https://github.com/TrySound/postcss-inline-svg) plugin.

Example usage:
```
a {
  background-image: svg-load("img/arrow.svg", fill=#000, stroke=#fff);
}
```

The above will search for `img/arrow.svg` within `prototype/images` and base64 encode it directly in the stylesheet.

## Configuration

### Browser Support
This theme uses PostCSS and Babel to provide cross-browser support for newer CSS and JS features. The level of support for both can be configured in `.browserlistrc`. See [https://www.npmjs.com/package/browserslist]

### Babel
Customizing Babel's plugins and presets can be done in `.babelrc`.

### Webpack
Customizing the Webpack build process can be done in `webpack.config.js`.

### Prettier
Prettier can be configured to automatically format your JS and CSS files when saved. This can be further controlled in `.prettierrc.yml`

## Media Queries
Both custom media declarations and media range queries are supported via PostCSS.

```
@custom-media --mobile (width < 768px);

@media (--mobile) {
  /* ... */
}
```

`@custom-media` declarations added to `libraries/global/settings.media-query.css` will be available across all stylesheets.
