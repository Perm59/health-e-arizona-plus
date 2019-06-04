import { assert } from 'chai';
import sel from '../../selectors/header';
import dictionary from '../../dictionary/header';
import help from '../../helpers';
import exp from '../../expected/header';


describe('Header Eng-Esp Elements Exist', () => {

  ['english', 'spanish'].forEach(lang => {

    describe(`header links - elements exist - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });


      it('create account link', function () {
        let createAccountLink = $(sel.createAccountLink);
        assert.isTrue(createAccountLink.isDisplayed());
        assert.equal(createAccountLink.getText(), dictionary.header.links.createAccountLink[language]);
      });

      it('returning user link', function () {
        let returningUserLogInLink = $(sel.returningUserLogInLink);
        assert.isTrue(returningUserLogInLink.isDisplayed());
        assert.equal(returningUserLogInLink.getText(), dictionary.header.links.returningUserLogInLink[language]);
      });

      it('help link', function () {
        let helpLink = $(sel.helpLink);
        assert.isTrue(helpLink.isDisplayed());
        assert.equal(helpLink.getText(), dictionary.header.links.helpLink[language]);
      });

      it('FAQs link', function () {
        let faqsLink = $(sel.faqsLink);
        assert.isTrue(faqsLink.isDisplayed());
        assert.equal(faqsLink.getText(), dictionary.header.links.faqsLink[language]);
      });

      it('English link', function () {
        let englishLink = $(sel.englishLink);
        assert.isTrue(englishLink.isDisplayed());
        assert.equal(englishLink.getText(), dictionary.header.links.englishLink[language]);
      });

      it('Spanish link', function () {
        let spanishLink = $(sel.spanishLink);
        assert.isTrue(spanishLink.isDisplayed());
        assert.equal(spanishLink.getText(), dictionary.header.links.spanishLink[language]);
      });
    });
  });
});

describe('Header General', function () {
  it('Header is on Top of Home Page', function () {
    let headerVerticalLoc = $(sel.header).getLocation('y');
    assert.equal(headerVerticalLoc, exp.headerVerticalLoc);
  });

  it('Header is 100% page width', function () {
    let headerWidth = $(sel.header).getCSSProperty('width').value;
    assert.equal(headerWidth, exp.headerWidth);
  });

  it('Logo->first row links->second row links - horizontal location from left to right', function () {
    let logoLoc = $(sel.logo).getLocation('x');
    let firstRowLoc = $$(sel.firstRowAllLinksTag)[0].getLocation('x');
    let secondRowLoc = $$(sel.secondRowAllLinksTag)[1].getLocation('x');
    assert.isTrue(logoLoc < firstRowLoc && firstRowLoc < secondRowLoc);
  });

  it('First Row Links are aligned horizontally', function () {

    const liElements = $$(sel.firstRowAllLinksTag)[0].$$(sel.firstRowLinkTag);
    let location;

    liElements.forEach(li => {
      if (location === undefined) {
        location = li.getLocation('y');
      } else {
        assert.isTrue(location === li.getLocation('y'))
      }
    });
  });

  it.only('First row links are separated by pipe-separator(each (except for last) link has a border on right side)', function () {
    const liElements = $$(sel.firstRowAllLinksTag)[0].$$(sel.firstRowLinkTag);

    liElements.forEach((li, index) => {
      if (index < liElements.length - 1) {
        // console.log(li.getCSSProperty('border-right-width'));
        assert.equal(li.getCSSProperty('border-right-width').value, '1px')
      } else {
        // console.log(li.getCSSProperty('border-right-width'));
        assert.equal(li.getCSSProperty('border-right-width').value, '0px')
      }
    });

  });


});
