import { UiMockupPage } from './app.po';

describe('ui-mockup App', () => {
  let page: UiMockupPage;

  beforeEach(() => {
    page = new UiMockupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
