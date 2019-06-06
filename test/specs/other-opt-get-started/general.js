import { assert } from 'chai';
import sel from '../../selectors/other-opt-get-started';
import help from '../../helpers';
import exp from '../../expected/other-opt-get-started';

describe('Other Options Get Started General', function () {
  browser.url('/');

  it('get started banner -> other options get started -> questions section ', function () {
    assert.isTrue(help.vertLocationCheck3Elemets(sel.getStartedDefaultBanner, sel.otherOptionsSection, sel.questionsSection));
  });

  it('section width', function () {
    let width = $(sel.otherOptionsSection).getCSSProperty('width').parsed.value;
    let paddingLeft = $(sel.otherOptionsSection).getCSSProperty('padding-left').parsed.value;
    let paddingRight = $(sel.otherOptionsSection).getCSSProperty('padding-right').parsed.value;
    assert.equal(width + paddingRight + paddingLeft, exp.otherOptWidth);
  });

  it('section background-color', function () {
    assert.equal($(sel.otherOptionsSection).getCSSProperty('background-color').parsed.hex, exp.otherOptBackgroundColor);
  });

  it('subsection 1 image source url', function () {
    browser.url('/Default/images/Individual_and_family_a.jpg');
    assert.isTrue($(sel.indFamImg).isDisplayed());
  });

  it('subsection 2 image source url', function () {
    browser.url('/Default/images/State_Worker_a.jpg');
    assert.isTrue($(sel.stateWorkerImg).isDisplayed());
  });

  it('subsection 3 image source url', function () {
    browser.url('/Default/images/Community_Assistor_a.jpg');
    assert.isTrue($(sel.comAssistImg).isDisplayed());
  });
});