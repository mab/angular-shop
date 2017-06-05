import { AngularShopPage } from './app.po';

describe('angular-shop App', () => {
  let page: AngularShopPage;

  beforeEach(() => {
    page = new AngularShopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
