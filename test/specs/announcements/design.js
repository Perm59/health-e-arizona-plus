import sel from "../../selectors/announcements";
import {assert} from "chai";
import exp from '../../expected/announcements';

describe('Announcements Section Design', function () {
  browser.url('/');

  it('all text/link font-size', function () {
    sel.allTextLinkArray.forEach(el => {
      $(el).scrollIntoView();
      assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);
    })
  });

  it('all text/link font-family', function () {
    sel.allTextLinkArray.forEach(el => {
      $(el).scrollIntoView();
      assert.equal($(el).getCSSProperty('font-family').value, exp.textFontFamily);
    })
  });

  it('all text/link font-weight', function () {
    sel.allTextLinkArray.forEach(el => {
      $(el).scrollIntoView();
      assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
    })
  });

  it('all text/link font-color', function () {
    sel.allTextLinkArray.forEach((el, index) => {
      $(el).scrollIntoView();
      if(index < 2){
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
      } else {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
      }
    })
  });

  it('title font-color', function () {
    $(sel.title).scrollIntoView();
    assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleFontColor);
  });

  it('title font-family', function () {
    $(sel.title).scrollIntoView();
    assert.equal($(sel.title).getCSSProperty('font-family').value, exp.titleFontFamily)
  });

  it('title font-weight', function () {
    $(sel.title).scrollIntoView();
    assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleFontWeight)
  });

  it('title font-size', function () {
    $(sel.title).scrollIntoView();
    assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleFontSize)
  });

  it('title text-transform', function () {
    $(sel.title).scrollIntoView();
    assert.equal($(sel.title).getCSSProperty('text-transform').value, exp.titleTextTransform);
  });
});

