/**
 * A simple and super lightweight web component to create blocks.
 * @attr {string} block-title - A title for block
 * @attr {string} block-width - A width for block
 * @attr {string} block-height - A height for block
 * @attr {boolean} show-border - if present, border is displayed
 * @slot - The default slot for this component's content
 */
export class AiBlock extends HTMLElement {

  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes () {
    return ['block-title', 'block-width', 'block-height', 'show-border']
  }

  constructor() {
    // Always call super first in constructor
    // this build HTMLElement object
    super();
    /**
     * String will be a title
     * @type {string}
     * @attr title
     */
    this.blockTitle = '';
    this.blockWidth = '200px';
    this.blockHeight = '100%';
    const shadow = this.attachShadow({mode: 'open'});
    const div = document.createElement('div');
    div.className += 'ai-block-div';
    const style = document.createElement('style');
    /*
    style.textContent = `:host {
      display: block;
    }
    div.ai-block-div{
      font-family: arial,sans-serif;
      width: ${this.blockWidth};
    }`;
    */
    shadow.appendChild(style);
    div.innerHTML = `
      <h3 style="color: coral; font-family: Roboto,Arial,sans-serif;">${this.blockTitle}</h3>
      <slot></slot>
    `;
    shadow.appendChild(div);
  }

  connectedCallback() {
    // console.log('Custom AiBlock element added to page.');
    AiBlock.updateStyle(this);
  }

  get blockTitle () { return this.getAttribute('block-title') }
  set blockTitle (value) { this._blockTitle = value; }
  get blockWidth () { return this.getAttribute('block-width') }
  set blockWidth (value) { this._blockWidth = value; }
  get blockHeight () { return this.getAttribute('block-height') }
  set blockHeight (value) { this._blockHeight = value; }
  get showBorder () { return this.getAttribute('show-border') }
  set showBorder (value) { this._showBorder = value; }

  attributeChangedCallback (name, oldValue, newValue) {
    // console.log(`name = ${name}, oldValue = ${oldValue}, newValue = ${newValue}`);
    if (name === 'block-title') {
      this.blockTitle = newValue;
    } else if (name === 'block-width') {
      this.blockWidth = newValue;
    } else if (name === 'block-height') {
      this.blockHeight = newValue;
    } else if (name === 'show-border') {
      this.showBorder = true;
    } else {
      alert("Erro unexpected name = " + name);
    }
    AiBlock.updateStyle(this);
  }

  disconnectedCallback() {
    // console.log('Custom AiBlock element removed from page.');
  }

  adoptedCallback() {
    // console.log('Custom AiBlock element moved to new page.');
  }

  /* ------------  static methods ------------ */

  static updateStyle(elem) {
    // console.log(elem);
    // console.log('ai-block class = "'+ elem.className + '"');
    const shadow = elem.shadowRoot;
    const styleStr = `
      div.ai-block-div {
        ${AiBlock.getBorderStyleStr(elem)} ${AiBlock.getBlockWidthStyleStr(elem)} ${AiBlock.getBlockHeightStyleStr(elem)}
      }
    `;
    // console.log('updateStyle method returns:');
    // console.log(styleStr);
    shadow.querySelector('style').textContent = styleStr;
  };

  static getBlockWidthStyleStr(elem) {
    if (elem.getAttribute('block-width') == null) {
      return '';
    } else {
      const width = elem.getAttribute('block-width');
      return `width: ${width};`;
    }
  }

  static getBlockHeightStyleStr(elem) {
    if (elem.getAttribute('block-height') == null) {
      return '';
    } else {
      const height = elem.getAttribute('block-height');
      return `height: ${height};`;
    }
  }
  static getBorderStyleStr(elem) {
    const showBorder = elem.hasAttribute("show-border");
    // console.log('showBorder = ' + showBorder);
    if (showBorder) {
      const border = 'solid 1px grey';
      return `border: ${border};`;
    } else {
      return '';
    }
  }

}
