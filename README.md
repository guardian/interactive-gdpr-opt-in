# Interactive-gdpr-opt-in
Interactive template for the GDPR opt-in campaign

## Cli Usage

    npm run watch

Will compile all the files + watch changes + start the preview server at `http://127.0.0.1:8082/test.html`

    npm run make-html

Will rebuild the main.html template

    npm run release

Will send whatever you got to S3, live, in production (make sure you built a css file with watch first!) If you screw up just roll back the last version straight from S3. Version numbers are updated at about every hour

## Editing the interactive

### Html
Templates are written in [Mustache](https://github.com/janl/mustache.js) and will compile `html/main.mustache` with the data on `html/main.json` to `public/main.html`

### CSS
The css uses [postcss-sass](https://github.com/jonathantneal/postcss-sass) and will compile `css/main.scss` to `public/main.css`. Please note `postcss-sass` is _a tad_ glitchy and some things like interpolating strings don't quite work 😿

### JS
The js uses webpack and will compile `js/main.js` to `public/main.js`. There's some minor module-based scaffolding set up already.

## What's up with test.html?
`test.html` will inject the core guardian css & fonts as of February 2018 alongside the interactive files so you can get a somewhat accurate representation of how things will look like. **This is not a 100% reliable preview** so check up things on composer too before.
