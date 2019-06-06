import { assert } from 'chai';
import sel from '../../selectors/get-started-default-banner';
import help from '../../helpers';
import exp from '../../expected/get-started-default-banner';

describe('general', function (){
  browser.url('/');

  it('section is under header', function () {
    assert.isTrue(help.vertLocationCheck2Elemets(sel.header, sel.getStartedDefaultBanner));
  });

  it('left side width', function () {
    let leftSideImageWidth = $(sel.leftSide).getCSSProperty('width').parsed.value;
    assert.equal(Math.ceil(leftSideImageWidth), exp.leftSideImageWidth);
  });

  it('right side width', function () {
     let rightSideWidth = $(sel.rightSide).getCSSProperty('width').parsed.value;
      assert.equal(Math.floor(rightSideWidth), exp.rightSideWidth);
  });

  it('left side image source URL', function () {
    browser.url('/Default/images/First_a.jpg');
    assert.isTrue($(sel.leftSideImg).isDisplayed());
  });

  it('get started image source URL - English', function () {
    browser.url('/Default/images/get_started.png');
    assert.isTrue($(sel.getStartedImgEng).isDisplayed());
  });

  it('get started image source URL - Spanish', function () {
    browser.url('/Default/images/get_started_ES.png');
    assert.isTrue($(sel.getStartedImgEs).isDisplayed());
  });

  it('title-> text -> get started button - vertical location from top to bottom', function () {
    browser.url('/');
    assert.isTrue(help.vertLocationCheck3Elemets(sel.title, sel.text, sel.getStartedButtonEng));
  });
});



