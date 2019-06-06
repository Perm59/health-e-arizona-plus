import sel from "../../selectors/warning";
import {assert} from "chai";
import exp from '../../expected/warning';

describe('Warning Section Design', function () {
  browser.url('/');

  it('text font-size', function () {
    $(sel.text).scrollIntoView();
    assert.equal($(sel.text).getCSSProperty('font-size').value, exp.textFontSize);
  });

  it('text font-color', function () {
    $(sel.text).scrollIntoView();
    assert.equal($(sel.text).getCSSProperty('color').parsed.hex, exp.textFontColor);
  });

  it('text font-family', function () {
    $(sel.text).scrollIntoView();
    assert.equal($(sel.text).getCSSProperty('font-family').value, exp.textFontFamily)
  });

  it('warning background color', function () {
    $(sel.warningSection).scrollIntoView();
    assert.equal($(sel.warningSection).getCSSProperty('background-color').parsed.hex, exp.warningBackgroundColor);
  });
});

