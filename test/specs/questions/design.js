import sel from "../../selectors/questions";
import {assert} from "chai";
import exp from '../../expected/questions';

describe('Questions Section Design', function () {
  browser.url('/');

  it('all texts font-size', function () {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);
    })
  });

  it('all text font-weight', function () {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
    })
  });

  it('all text font-color', function () {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
    })
  });

  it('all links font-size', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);

    })
  });

  it('all links font-weight', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
    })
  });

  it('all links font-color', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
    })
  });

  it('all links underlined hover state', function () {
    sel.allLinksArray.forEach(el => {
      if (browser.capabilities.browserName === 'chrome') {
        $(el).scrollIntoView();
        $(el).moveTo();
        browser.pause(300);
        assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.linkTextDecorationLine)
      }
    })
  });
});