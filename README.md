# \<ai-block>

A simple and super lightweight web component to create blocks with title and one slot to arbitrary HTML.

> This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @automacao.info/ai-block
```

## Usage

File `package.json`

```json
"dependencies": {
  "@automacao.info/ai-block": "^1.0.10"
}
```

File `test.html`

```html
<link href="./card.css" rel="stylesheet" />
<script type="module">
  import '@automacao.info/ai-block';
</script>
<!-- Example Two blocks, one inside other -->
<ai-block class="card" block-title="Hello Card">
  <section>
    <p class="date"><a href="#date"><time datetime="2020-01-01">Jan 1, 2020</time></a></p>
    <h4><a href="#title"><code>&ltai-block&gt</code> Demo</a></h4>
  </section>
  <ai-block class="author-name" block-title="Author Card" block-width="150px" show-border>
    <a href="#author">Author Name is Awesome</a>
  </ai-block>
  <footer class="tags">
    <a class="tag" href="#tag_one">Tag One</a>
    <a class="tag" href="#tag_two">Tag Two</a>
  </footer>
</ai-block>
```

Is it possible import using unpkg.com as you see bellow:

```html
<script type="module"
        src="https://unpkg.com/@automacao.info/ai-block?module">
</script>
```

The unpkg.com will expand our component like this: [https://unpkg.com/@automacao.info/ai-block@1.0.10/src/AiBlock.js?module](https://unpkg.com/@automacao.info/ai-block@1.0.10/src/AiBlock.js?module)

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
