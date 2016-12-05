import { ProjectBreakfastTs2Page } from './app.po';

describe('project-breakfast-ts2 App', function() {
  let page: ProjectBreakfastTs2Page;

  beforeEach(() => {
    page = new ProjectBreakfastTs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
