import { assert } from 'chai';
import sel from '../../selectors/questions';
import help from '../../helpers';
import exp from '../../expected/questions';

describe('Questions Section General', function () {
  browser.url('/');

  it('other options get started -> questions -> languages', function () {
    assert.isTrue(help.vertLocationCheck3Elemets(sel.otherOptionsSection, sel.questionsSection, sel.languagesSection));
  });

  it('section width', function () {
    let width = $(sel.questionsSection).getCSSProperty('width').parsed.value;
    assert.equal(width, exp.questionsSectionWidth);
  });
});