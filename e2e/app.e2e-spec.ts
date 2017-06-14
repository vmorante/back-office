import { BackOfficePage } from './app.po';

describe('back-office App', () => {
  let page: BackOfficePage;

  beforeEach(() => {
    page = new BackOfficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
