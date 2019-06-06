import sel from "../../selectors/languages";
import {assert} from "chai";
import exp from '../../expected/languages';

describe('Languages Section Design', function () {
  browser.url('/');

  it('all languages link font-size', function () {
    sel.languagesArray.forEach(el => {
      $(el).scrollIntoView();
      assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);
    })
  });

  it('all languages link font-weight', function () {
    sel.languagesArray.forEach(el => {
      $(el).scrollIntoView();
      assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
    })
  });

  it('all languages link font-color', function () {
    sel.languagesArray.forEach(el => {
      $(el).scrollIntoView();
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
    })
  });

  it('info message font-size', function () {
    $(sel.languagesArray[0]).scrollIntoView();
    $(sel.languagesArray[0]).click();
    $(sel.message).scrollIntoView();
    $(sel.message).waitForDisplayed(3000);
    assert.equal($(sel.message).getCSSProperty('font-size').value, exp.infMessageFontSize);
  });

  it('info message font-color', function () {
    $(sel.languagesArray[0]).scrollIntoView();
    $(sel.languagesArray[0]).click();
    $(sel.message).scrollIntoView();
    $(sel.message).waitForDisplayed(3000);
    assert.equal($(sel.message).getCSSProperty('color').parsed.hex, exp.infMessageFontColor);
  });

  it('info message font-family', function () {
    $(sel.languagesArray[0]).scrollIntoView();
    $(sel.languagesArray[0]).click();
    $(sel.message).scrollIntoView();
    $(sel.message).waitForDisplayed(3000);
    assert.equal($(sel.message).getCSSProperty('font-family').value, exp.infMessageFontFamily);
  });

  it('info message background-color ', function () {
    $(sel.languagesArray[0]).scrollIntoView();
    $(sel.languagesArray[0]).click();
    $(sel.message).scrollIntoView();
    $(sel.message).waitForDisplayed(3000);
    assert.equal($(sel.message).getCSSProperty('background-color').parsed.hex, exp.infMessageBackgroundColor);
  });

  it('title font-size', function () {
    assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleFontSize);
  });

  it('title font-weight', function () {
    assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleFontWeight);
  });

  it('title font-color', function () {
    assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleFontColor);
  });

  it('title text-align', function () {
    assert.equal($(sel.title).getCSSProperty('text-align').value, exp.titleTextAlign);
  });
});




