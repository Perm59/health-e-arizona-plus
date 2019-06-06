import { assert } from 'chai';
import sel from '../../selectors/announcements';
import exp from "../../expected/announcements"

describe('Annoucements Functionality', () => {
  browser.url('/');
    it('link redirect', () => {
      $(sel.link).scrollIntoView();
      $(sel.link).click();
      let actualUrl = browser.getUrl();
      assert(actualUrl, exp.redirectUrl)
   });
});