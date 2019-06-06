import { assert } from 'chai';
import sel from '../../selectors/languages';
import help from '../../helpers';
import exp from '../../expected/languages';

describe('Languages Section General', function () {
  browser.url('/');

  it('Location: questions -> languages -> warning', function () {
    assert.isTrue(help.vertLocationCheck3Elemets(sel.questionsSection, sel.languagesSection, sel.warningSection));
  });

  it('section width', function () {
    let width = $(sel.languagesSection).getCSSProperty('width').parsed.value;
    assert.equal(Math.floor(width), exp.languagesSectionWidth);
  });

  it('section background-color', function () {
      assert.equal($(sel.languagesSection).getCSSProperty('background-color').parsed.hex, exp.sectionBackGroundColor);
  });
});