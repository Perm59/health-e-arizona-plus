import { assert } from 'chai';
import sel from '../../selectors/header';
import dictionary from '../../dictionary/header';
import help from '../../helpers';
import exp from '../../expected/header';

describe('Links', () => {

  it('font color links 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-color').value, exp.fontColorLinks);

      $(sel.spanishLink).click();
      $(sel.spanishLink).waitForDisplayed(5000);
      assert.equal(li.getCSSProperty('font-color').value, exp.fontColorLinks);
    });
  });

  it('font color links 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      $(sel.englishLink).click();
      $(sel.englishLink).waitForDisplayed(5000);
      assert.equal(li.getCSSProperty('font-color').value, exp.fontColorLinks)
      $(sel.spanishLink).click();
      $(sel.spanishLink).waitForDisplayed(5000);
      assert.equal(li.getCSSProperty('font-color').value, exp.fontColorLinks)
    });
  });

  it('font color links 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-family').value, exp.fontFamilyLinks)
    });
  });

  it('font color links 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-family').value, exp.fontFamilyLinks)
    });
  });

  it('font size links 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-size').value, exp.fontSizeLinks)
    });
  });

  it('font size links 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-size').value, exp.fontSizeLinks)
    });
  });

  it('font weight links 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-size').value, exp.fontWeightLinks)
    });
  });

  it('font weight links 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      assert.equal(li.getCSSProperty('font-size').value, exp.fontWeightLinks)
    });
  });

  it('underlined hover state 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      li.moveTo();
      assert.equal(li.getCSSProperty('text-decoration-line').value, exp.textDecorationLine)
    });
  });

  it('underlined hover state 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      li.moveTo();
      assert.equal(li.getCSSProperty('text-decoration-line').value, exp.textDecorationLine)
    });
  });

  it('Focus outline color 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      li.click();
      assert.equal(li.getCSSProperty('outline-color').value, exp.outlineColorLinks);
    });
  });

  it('Focus outline color 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      li.click();
      assert.equal(li.getCSSProperty('outline-color').value, exp.outlineColorLinks);
    });
  });

  it('Focus outline width 1st row', function () {
    help.liElementsFirstRowArray.forEach(li => {
      li.click();
      assert.equal(li.getCSSProperty('outline-width').value, exp.outlineWidthLinks);
    });
  });

  it('Focus outline width 2nd row', function () {
    help.liElementsSecondRowArray.forEach(li => {
      li.click();
      assert.equal(li.getCSSProperty('outline-width').value, exp.outlineWidthLinks);
    });
  });



});