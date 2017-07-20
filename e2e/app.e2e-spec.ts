import { AngularCodebasePage } from './app.po';

describe('angular-codebase App', () => {
  let page: AngularCodebasePage;

  beforeEach(() => {
    page = new AngularCodebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
