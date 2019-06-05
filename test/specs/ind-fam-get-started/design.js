import { assert } from 'chai';
import sel from '../../selectors/ind-fam-get-started';
import exp from '../../expected/ind-fam-get-started';

describe('title', function () {
  browser.url('/');
  it('text-align', function () {
      assert.equal($(sel.title.getCSSProperty('text-align').parsed.hex, exp.titleTextAlign));
  });

  it('font-size', function () {
    assert.equal($(sel.title.getCSSProperty('font-size').parsed.hex, exp.titleFontSize));
  });

  it('font-weight', function () {
    assert.equal($(sel.title.getCSSProperty('font-weight').parsed.hex, exp.titleFontWeight));
  });

  it('font-family', function () {
    assert.equal($(sel.title.getCSSProperty('font-family').parsed.hex, exp.titleFontFamily));
  });

  it('font-color', function () {
    assert.equal($(sel.title.getCSSProperty('font-color').parsed.hex, exp.titleFontColor));
  });
});

describe('text', function () {
  it('text-align', function () {
    assert.equal($(sel.text.getCSSProperty('text-align').parsed.hex, exp.textTextAlign));
  });

  it('font-size', function () {
    assert.equal($(sel.text.getCSSProperty('font-size').parsed.hex, exp.textFontSize));
  });

  it('font-weight', function () {
    assert.equal($(sel.text.getCSSProperty('font-weight').parsed.hex, exp.textFontWeight));
  });

  it('font-family', function () {
    assert.equal($(sel.text.getCSSProperty('font-family').parsed.hex, exp.textFontFamily));
  });

  it('font-color', function () {
    assert.equal($(sel.text.getCSSProperty('font-color').parsed.hex, exp.textFontColor));
  });
});