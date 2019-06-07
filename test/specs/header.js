import { assert } from 'chai';
import help from '../helpers';
import exp from '../expected/header';
import sel from "../selectors/header";
import dictionary from "../dictionary/header";

describe ('Header', () => {

  describe('General', function () {
    browser.url('/');

    it('Header is on Top of Home Page', function () {
      let headerVerticalLoc = $(sel.header).getLocation('y');
      assert.equal(headerVerticalLoc, exp.headerVerticalLoc);
    });

    it('Header width', function () {
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
      let location;

      help.getFirstRowElementsHeader().forEach(li => {
        if (location === undefined) {
          location = li.getLocation('y');
        } else {
          assert.isTrue(location === li.getLocation('y'))
        }
      });
    });

    it('First row links are separated by pipe-separator - each (except for last) link has a border on right side)', function () {

      help.getFirstRowElementsHeader().forEach((li, index) => {
        if (index < help.getFirstRowElementsHeader().length - 1) {
          assert.equal(li.getCSSProperty('border-right-width').value, exp.pipeSeparatorWidth)
        } else {
          assert.equal(li.getCSSProperty('border-right-width').value, '0px')
        }
      });
    });

    it('Second Row Links are aligned horizontally', function () {
      let location;

      help.getFirstRowElementsHeader().forEach(li => {
        if (location === undefined) {
          location = li.getLocation('y');
        } else {
          assert.isTrue(location === li.getLocation('y'))
        }
      });
    });

    it('Second row links are separated by pipe-separator(each (except for last) link has a border on right side)', function () {

      help.getSecondRowElementsHeader().forEach((li, index) => {
        if (index < help.getSecondRowElementsHeader().length - 1) {
          assert.equal(li.getCSSProperty('border-right-width').value, exp.pipeSeparatorWidth)
        } else {
          assert.equal(li.getCSSProperty('border-right-width').value, '0px')
        }
      });
    });
  });

  describe('English-Spanish Translation', function () {

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

  describe('Design', function () {

    it('font color - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('color').parsed.hex, exp.fontColorLinks);
      });
    });

    it('font color - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('color').parsed.hex, exp.fontColorLinks);
      });
    });

    it('font family - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-family').value, exp.fontFamilyLinks)
      });
    });

    it('font family - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-family').value, exp.fontFamilyLinks)
      });
    });

    it('font size - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-size').value, exp.fontSizeLinks)
      });
    });

    it('font size - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-size').value, exp.fontSizeLinks)
      });
    });

    it('font weight - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-weight').value, exp.fontWeightLinks)
      });
    });

    it('font weight - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-weight').value, exp.fontWeightLinks)
      });
    });

    // it('all links underlined hover state', function () {
    //   sel.allLinksArray.forEach(el => {
    //     if (browser.capabilities.browserName === 'chrome') {
    //       $(el).scrollIntoView();
    //       $(el).moveTo();
    //       browser.pause(3000);
    //       assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.linkTextDecorationLine)
    //     }
    //   });
    // });

    it('all links - focus outline width', function () {
      sel.allLinksArray.forEach(el => {
        browser.execute((selector) => {
          document.querySelector(selector).focus();
        }, el);

        if (browser.options.capabilities.browserName === 'firefox') {
          assert.equal($(el).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
        }
      })
    });
  });

  describe('Functionality', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`links redirect - ${lang}`, function () {
        const language = lang;


        beforeEach(() => {
          browser.url('/');
          let langToggle = help.getToggleElement(language);

          langToggle.waitForDisplayed(5000);
          langToggle.click();

          langToggle = help.getToggleElement(language);
          langToggle.waitForDisplayed(5000);
        });

        it('create account link -> user agreement', function () {
          $(sel.createAccountLink).click();
          let userAgreement = $(sel.userAgreement);
          userAgreement.waitForDisplayed(2000);
          assert.isTrue(userAgreement.isDisplayed());
          assert.equal(userAgreement.getText(), dictionary.header.links.userAgreement[language]);
        });


        it('returning user log in link -> my account sign in', function () {
          $(sel.returningUserLogInLink).click();
          let userID = $(sel.userID);
          userID.waitForDisplayed(2000);
          assert.isTrue(userID.isDisplayed());
          assert.equal(userID.getText(), dictionary.header.links.userID[language]);
        });

        it('help link -> help center', function () {
          $(sel.helpLink).click();
          let helpCenter = $(sel.helpCenter);
          helpCenter.waitForDisplayed(2000);
          assert.isTrue(helpCenter.isDisplayed());
          assert.equal(helpCenter.getText(), dictionary.header.links.helpCenter[language]);
        });

        it('FAQs link -> FAQs', function () {
          $(sel.faqsLink).click();
          let faqs = $(sel.helpCenter);
          faqs.waitForDisplayed(2000);
          assert.isTrue(faqs.isDisplayed());
          assert.equal(faqs.getText(), dictionary.header.links.faqs[language]);
        });
      });
    });
  });

  describe('Logo', function () {

    it('Size', function () {
      browser.url('/Default/images/health-e-arizona-plus-logo.png');
      let logoImage = $(sel.logoImage);
      let width = logoImage.getCSSProperty('width').parsed.value;
      let height = logoImage.getCSSProperty('height').parsed.value;
      let size = `${width}x${height}`;
      assert.equal(size, exp.logoSize);
    });

    it('source URL', function () {
      browser.url('/Default/images/health-e-arizona-plus-logo.png');
      assert.isTrue($(sel.logoImage).isDisplayed());
    });
  });
});




