import { TesteDeFrontPage } from './app.po';

describe('teste-de-front App', function() {
  let page: TesteDeFrontPage;

  beforeEach(() => {
    page = new TesteDeFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
