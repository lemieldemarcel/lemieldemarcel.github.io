import { LeMielDeMarcelPage } from './app.po';

describe('le-miel-de-marcel App', () => {
  let page: LeMielDeMarcelPage;

  beforeEach(() => {
    page = new LeMielDeMarcelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
