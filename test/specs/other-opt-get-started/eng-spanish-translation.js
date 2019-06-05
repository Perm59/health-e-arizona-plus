import { assert } from 'chai';
import sel from '../../selectors/other-opt-get-started';
import dictionary from '../../dictionary/other-opt-get-started';
import help from '../../helpers';

describe('Other-opt-get-started - Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`other-opt-get-started - elements exist - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
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


