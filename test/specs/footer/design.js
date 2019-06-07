import { assert } from 'chai';
import sel from '../../selectors/footer';
import exp from '../../expected/footer';
import help from "../../helpers";

describe('Footer Design', () => {
  browser.url('/');

  it('all links font-family', () => {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-family').value, exp.linkFontFamily);
    })
  });

  it('all links font-size', () => {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);
    })
  });

  it('all links font-weight', () => {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
    })
  });

  it('all links font-color', () => {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
    })
  });

  it('all links text-transform', () => {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('text-transform').value, exp.linkTextTransform);
    })
  });

  it('all links underlined hover state', () => {
    sel.allLinksArray.forEach(el => {
      if (browser.capabilities.browserName === 'chrome') {
        $(el).scrollIntoView();
        $(el).moveTo();
        assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.textDecorationLine);
      }
    })
  });

  it('all texts font-family', () => {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-family').value, exp.textFontFamily);
    })
  });

  it('all texts font-size', () => {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);
    })
  });

  it('all texts font-weight', () => {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
    })
  });

  it('all text font-color', () => {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
    })
  });
});

//links, text