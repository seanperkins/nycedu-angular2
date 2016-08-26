import { NyceduPage } from './app.po';

describe('nycedu App', function() {
  let page: NyceduPage;

  beforeEach(() => {
    page = new NyceduPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
