import { assert } from 'chai';
import sel from '../selectors/other-opt-get-started';
import help from '../helpers';
import exp from '../expected/other-opt-get-started';
import dictionary from "../dictionary/other-opt-get-started";
import bannerTitleSelector from "../selectors/get-started-default-banner";

describe('Other Options Get Started', () => {

  describe('General', function () {
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

  describe('English-Spanish Translation', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`elements exist - ${lang}`, function () {
        const language = lang;

        beforeEach(() => {
          browser.url('/');
          let langToggle = help.getToggleElement(language);

          langToggle.waitForDisplayed(5000);
          langToggle.click();

          langToggle = help.getToggleElement(language);
          langToggle.waitForDisplayed(5000);
        });

        it('ind-fam title', function () {
          let indFamTitle = $(sel.indFamTitle);
          assert.isTrue(indFamTitle.isDisplayed());
          assert.equal(indFamTitle.getText(), dictionary.otherOptGetStarted.links.indFamTitle[language]);
        });

        it('ind-fam text', function () {
          let indFamText = $(sel.indFamText);
          assert.isTrue(indFamText.isDisplayed());
          assert.equal(indFamText.getText(), dictionary.otherOptGetStarted.links.indFamText[language]);
        });

        it('ind-fam get started link', function () {
          let indFamGetStartedLink = $(sel.indFamGetStartedLink);
          assert.isTrue(indFamGetStartedLink.isDisplayed());
          assert.equal(indFamGetStartedLink.getText(), dictionary.otherOptGetStarted.links.getStartedLink[language]);
        });

        it('state-worker title', function () {
          let stateWorkerTitle = $(sel.stateWorkerTitle);
          assert.isTrue(stateWorkerTitle.isDisplayed());
          assert.equal(stateWorkerTitle.getText(), dictionary.otherOptGetStarted.links.stateWorkerTitle[language]);
        });

        it('state-worker text', function () {
          let stateWorkerText = $(sel.stateWorkerText);
          assert.isTrue(stateWorkerText.isDisplayed());
          assert.equal(stateWorkerText.getText(), dictionary.otherOptGetStarted.links.stateWorkerText[language]);
        });

        it('state-worker get started link', function () {
          let stateWorkerGetStartedLink = $(sel.stateWorkerGetStartedLink);
          assert.isTrue(stateWorkerGetStartedLink.isDisplayed());
          assert.equal(stateWorkerGetStartedLink.getText(), dictionary.otherOptGetStarted.links.getStartedLink[language]);
        });

        it('community-assistor title', function () {
          let comAssistTitle = $(sel.comAssistTitle);
          assert.isTrue(comAssistTitle.isDisplayed());
          assert.equal(comAssistTitle.getText(), dictionary.otherOptGetStarted.links.comAssistTitle[language]);
        });

        it('community-assistor text', function () {
          let comAssistText = $(sel.comAssistText);
          assert.isTrue(comAssistText.isDisplayed());
          assert.equal(comAssistText.getText(), dictionary.otherOptGetStarted.links.comAssistText[language]);
        });

        it('community-assistor get started link', function () {
          let comAssistGetStartedLink = $(sel.comAssistGetStartedLink);
          assert.isTrue(comAssistGetStartedLink.isDisplayed());
          assert.equal(comAssistGetStartedLink.getText(), dictionary.otherOptGetStarted.links.getStartedLink[language]);
        });
      });
    });
  });

  describe('Design ', function () {

    it('subsections width', function () {
      sel.allSubSectionsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('width').value, exp.subSectionWidth);
      })
    });

    it('subsections padding-right', function () {
      sel.allSubSectionsArray.forEach((el, index) => {
        if (index < 2) {
          assert.equal($(el).getCSSProperty('padding-right').value, exp.subSectionPaddingRight)
        } else {
          assert.equal($(el).getCSSProperty('padding-right').value, '0px');
        }
      })
    });

    it('subsection titles font-size', function () {
      sel.allTitlesArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.titleFontSize);
      })
    });

    it('subsection titles font-weight', function () {
      sel.allTitlesArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.titleFontWeight);
      })
    });

    it('subsection titles font-color', function () {
      sel.allTitlesArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.titleFontColor);
      })
    });

    it('subsection titles text-transform', function () {
      sel.allTitlesArray.forEach(el => {
        assert.equal($(el).getCSSProperty('text-transform').value, exp.titleTextTransform);
      })
    });

    it('subsection text font-size', function () {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);

      })
    });

    it('subsection text font-weight', function () {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
      })
    });

    it('subsection titles font-color', function () {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
      })
    });

    it('subsection links font-size', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);

      })
    });

    it('subsection links font-weight', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
      })
    });

    it('subsection links font-color', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
      })
    });

    it('subsection links text-transform', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('text-transform').value, exp.linkTextTransform);
      })
    });

    it('subsection images size', function () {
      sel.allImagesArray.forEach(el => {
        let width = $(el).getCSSProperty('width').parsed.value;
        let height = $(el).getCSSProperty('height').parsed.value;
        let size = `${width}x${height}px`;
        assert.equal(size, exp.subsectionImgSize);
      })
    });

    // it('subsection links underlined hover state', function () {
    //   sel.allLinksArray.forEach(el => {
    //     if (browser.capabilities.browserName === 'chrome') {
    //       $(el).scrollIntoView();
    //       $(el).moveTo();
    //       browser.pause(1000);
    //       assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.linkTextDecorationLine)
    //     }
    //   });
    // });
    //
    // it('all links - focus outline width', function () {
    //   sel.allLinksArray.forEach(el => {
    //     $(el).scrollIntoView()
    //     browser.execute((selector) => {
    //       document.querySelector(selector).focus();
    //     }, el);
    //
    //     if (browser.options.capabilities.browserName === 'chrome') {
    //       assert.equal($(el).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
    //     } else if (browser.options.capabilities.browserName === 'firefox') {
    //       assert.equal($(el).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
    //     }
    //   })
    // });
  });

  describe('Functionality', function () {

    it('each subsection image click changes the banner title according to subsection - Eng', function () {
      sel.allImagesArray.forEach((el, index) => {
        $(el).click();
        $(bannerTitleSelector.title).waitForDisplayed(3000);
        let subSectionTitle = $(sel.allTitlesArray[index]).getText();
        assert.equal($(bannerTitleSelector.title).getText().toUpperCase(), subSectionTitle);
      })
    });

    it('each subsection image click changes the banner title according to subsection - Esp', function () {
      $(sel.spanishLink).click();

      sel.allImagesArray.forEach((el, index) => {
        $(el).waitForDisplayed(3000);
        $(el).click();
        $(bannerTitleSelector.title).waitForDisplayed(3000);
        let subSectionTitle = $(sel.allTitlesArray[index]).getText();
        assert.equal($(bannerTitleSelector.title).getText().toUpperCase(), subSectionTitle);
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

        it('ind-fam get-started -> Individual & Family', function () {
          $(sel.indFamGetStartedLink).scrollIntoView();
          $(sel.indFamGetStartedLink).click();
          let needCoverText = $(sel.needCoverText);
          needCoverText.waitForDisplayed(2000);
          assert.isTrue(needCoverText.isDisplayed());
          assert.equal(needCoverText.getText(), dictionary.otherOptGetStarted.links.needCoverText[language]);
        });

        it('state-worker get-started -> User Log In', function () {
          $(sel.stateWorkerGetStartedLink).scrollIntoView();
          $(sel.stateWorkerGetStartedLink).click();
          let userLogIn = $(sel.userLogIn);
          userLogIn.waitForDisplayed(2000);
          assert.isTrue(userLogIn.isDisplayed());
          assert.equal(userLogIn.getText(), dictionary.otherOptGetStarted.links.userLogIn[language]);
        });

        it('community-assistor get-started -> Explore Options', function () {
          $(sel.comAssistGetStartedLink).scrollIntoView();
          $(sel.comAssistGetStartedLink).click();
          let exploreOptions = $(sel.exploreOptions);
          exploreOptions.waitForDisplayed(2000);
          assert.isTrue(exploreOptions.isDisplayed());
          assert.equal(exploreOptions.getText(), dictionary.otherOptGetStarted.links.exploreOptions[language]);
        });
      });
    });
  });
});