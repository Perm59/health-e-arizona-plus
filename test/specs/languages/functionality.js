import { assert } from 'chai';
import sel from '../../selectors/languages';
import exp from '../../expected/languages';

describe('Languages Click Message Pop-up', function () {
  browser.url('/');

  it('Info message in all languages', function () {
    sel.languagesArray.forEach((el, index) => {
      $(el).waitForDisplayed(3000);
      $(el).scrollIntoView();
      $(el).click();
      $(sel.message).scrollIntoView();
      $(sel.message).waitForDisplayed(3000);
      assert.equal($(sel.message).getText(), exp.messagesArray[index]);
    })
  });
});