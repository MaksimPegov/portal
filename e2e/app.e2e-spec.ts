import { SchoolPortalPage } from './app.po';

describe('school-portal App', () => {
  let page: SchoolPortalPage;

  beforeEach(() => {
    page = new SchoolPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
