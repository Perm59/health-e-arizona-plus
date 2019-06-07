import { assert } from 'chai';
import sel from '../../selectors/compare';
import data from '../../data/compare'
import mergeImg from 'merge-img';

describe('Screenshots to check elements exist', function () {

  it(data.getStartedButtonEng, function () {
    browser.url('/');
    $(sel.getStartedButtonEng).scrollIntoView();
    let res = browser.checkElement($(sel.getStartedButtonEng), data.getStartedButtonEng);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.getStartedButtonEng}.png`,
        `${data.screenPath}${data.actPath}${data.getStartedButtonEng}.png`,
        `${data.screenPath}${data.diffPath}${data.getStartedButtonEng}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.getStartedButtonEng}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.getStartedButtonEs, function () {
    $(sel.spanishLink).click();
    $(sel.getStartedButtonEs).scrollIntoView();
    let res = browser.checkElement($(sel.getStartedButtonEs), data.getStartedButtonEs);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.getStartedButtonEs}.png`,
        `${data.screenPath}${data.actPath}${data.getStartedButtonEs}.png`,
        `${data.screenPath}${data.diffPath}${data.getStartedButtonEs}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.getStartedButtonEs}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.home, function () {
    browser.url('/');
    $(sel.logo).waitForDisplayed();
      let res = browser.checkFullPageScreen(data.home, {
        hideElements: [
          $(sel.footerText),
          $(sel.footerServerID)
        ]
      });
      if (res > 0) {
        mergeImg([`${data.screenPath}${data.basePath}${data.home}.png`,
          `${data.screenPath}${data.actPath}${data.home}.png`,
          `${data.screenPath}${data.diffPath}${data.home}.png`])
          .then((img) => {
            img.write(`${data.mergePath}${data.home}.png`);
          });
      }
      assert.equal(res, 0);
  });
});
