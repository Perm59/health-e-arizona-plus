import { assert } from 'chai';
import sel from '../../selectors/get-started-default-banner';
import exp from '../../expected/get-started-default-banner';

describe('title', function () {
  browser.url('/');
  it('text-align', function () {
    assert.equal($(sel.title).getCSSProperty('text-align').value, exp.titleTextAlign);
  });

  it('font-size', function () {
    assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleFontSize);
  });

  it('font-weight', function () {
    assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleFontWeight);
  });

  it('font-family', function () {
    assert.equal($(sel.title).getCSSProperty('font-family').value, exp.titleFontFamily);
  });

  it('font-color', function () {
    assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleFontColor);
  });
});

describe('text', function () {
  it('text-align', function () {
    assert.equal($(sel.text).getCSSProperty('text-align').value, exp.textTextAlign);
  });

  it('font-size', function () {
    assert.equal($(sel.text).getCSSProperty('font-size').value, exp.textFontSize);
  });

  it('font-weight', function () {
    assert.equal($(sel.text).getCSSProperty('font-weight').value, exp.textFontWeight);
  });

  it('font-family', function () {
    assert.equal($(sel.text).getCSSProperty('font-family').value, exp.textFontFamily);
  });

  it('font-color', function () {
    assert.equal($(sel.text).getCSSProperty('color').parsed.hex, exp.textFontColor);
  });
});