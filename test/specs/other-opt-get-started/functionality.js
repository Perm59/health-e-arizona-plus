import { assert } from 'chai';
import sel from '../../selectors/other-opt-get-started';
import dictionary from '../../dictionary/other-opt-get-started';
import bannerTitleSelector from '../../selectors/get-started-default-banner';
import help from "../../helpers";

describe('Other Options Get Started Functionality', function () {
  browser.url('/');

  it('each subsection image click changes the banner title according to subsection - Eng', function () {
    sel.allImagesArray.forEach((el, index) => {
      $(el).click();
      $(bannerTitleSelector.title).waitForDisplayed(3000);
      let subSectionTitle = $(sel.allTitlesArray[index]).getText();
      assert.equal($(bannerTitleSelector.title).getText(), subSectionTitle);
    })
  });

  it('each subsection image click changes the banner title according to subsection - Esp', function () {
    $(sel.spanishLink).click();

    sel.allImagesArray.forEach((el, index) => {
      $(el).waitForDisplayed(3000);
      $(el).click();
      $(bannerTitleSelector.title).waitForDisplayed(3000);
      let subSectionTitle = $(sel.allTitlesArray[index]).getText();
      console.log(subSectionTitle);
      assert.equal($(bannerTitleSelector.title).getText().toUpperCase(), subSectionTitle);
    })
  });
});
describe('Link Redirects', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`get started links redirect - ${lang}`, function () {
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
