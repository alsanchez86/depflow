import { DepflowPage } from './app.po';

describe('depflow App', () => {
  let page: DepflowPage;

  beforeEach(() => {
    page = new DepflowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
