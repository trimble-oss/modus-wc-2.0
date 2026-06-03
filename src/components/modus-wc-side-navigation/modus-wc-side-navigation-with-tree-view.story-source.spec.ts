import { getWithTreeViewSourceCode } from './modus-wc-side-navigation-with-tree-view.story-source';
import { SIDE_NAV_DATA_FLYOUT_MENU_GAP } from './modus-wc-side-navigation-tree-item-end-action.story-styles';

describe('getWithTreeViewSourceCode', () => {
  const source = getWithTreeViewSourceCode();

  it('should include flyout offset sync and expandedChangeReady behavior', () => {
    expect(source).toContain('syncDataFlyoutMenuOffset');
    expect(source).toContain('openDataFlyout');
    expect(source).toContain('expandedChangeReady');
    expect(source).toContain(`SIDE_NAV_DATA_FLYOUT_MENU_GAP = ${SIDE_NAV_DATA_FLYOUT_MENU_GAP}`);
  });

  it('should match WithTreeView markup anchors', () => {
    expect(source).toContain('menu-offset="0"');
    expect(source).toContain('collapse-on-click-outside="true"');
    expect(source).toContain('target-content=".panel-content"');
    expect(source).toContain('id="data-tree-item"');
  });

  it('should wire Data row itemSelect for collapsed Connect flyout', () => {
    expect(source).toContain('dataTreeItem?.addEventListener(\'itemSelect\'');
    expect(source).toContain('if (e.target !== dataTreeItem) return');
  });
});
