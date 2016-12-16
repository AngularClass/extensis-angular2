import { AppPage } from './app.po';

describe('Extensis App', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('welcome to Extensis', () => {
    let target = 'Hello Extensis. Glad it isn\'t snowing.';
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(target);
  });
});
