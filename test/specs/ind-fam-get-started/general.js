import { assert } from 'chai';
import sel from '../../selectors/ind-fam-get-started';
import dictionary from '../../dictionary/ind-fam-get-started';
import help from '../../helpers';
import exp from '../../expected/ind-fam-get-started';


describe('Ind-Fam-Get-Started - Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`ind-fam-get-started - elements exist - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });


      it('title', function () {
        let title = $(sel.title);
        assert.isTrue(title.isDisplayed());
        assert.equal(title.getText(), dictionary.indFamGetStarted.links.title[language]);
      });

      it('text', function () {
        let text = $(sel.text);
        assert.isTrue(text.isDisplayed());
        assert.equal(text.getText(), dictionary.indFamGetStarted.links.text[language]);
      });
    });
  });
});

describe('general', function (){

  it('section is under header', function () {
    assert.isTrue(help.vertLocationCheck2Elemets(sel.header, sel.indFamGetStarted));
  });

  it.only('left side width', function () {
    let leftSideImageWidth = $(sel.leftSide).getCSSProperty('width').parsed.value;
    assert.equal(Math.ceil(leftSideImageWidth), exp.leftSideImageWidth);
  });

  it.only('right side width', function () {
     let rightSideWidth = $(sel.rightSide).getCSSProperty('width').parsed.value;
      assert.equal(Math.floor(rightSideWidth), exp.rightSideWidth);
  });

  it.only('left side image source URL', function () {
    browser.url('/Default/images/First_a.jpg');
    assert.isTrue($(sel.leftSideImg).isDisplayed());
  });

  it.only('get started image source URL - English', function () {
    browser.url('/Default/images/get_started.png');
    assert.isTrue($(sel.getStartedImgEng).isDisplayed());
  });

  it.only('get started image source URL - Spanish', function () {
    browser.url('/Default/images/get_started_ES.png');
    assert.isTrue($(sel.getStartedImgEs).isDisplayed());
  });

  it.only('title-> text -> get started button - vertical location from top to bottom', function () {
    browser.url('/');
    assert.isTrue(help.vertLocationCheck3Elemets(sel.title, sel.text, sel.getStartedButton));
  });
});



