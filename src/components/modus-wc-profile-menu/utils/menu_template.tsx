import { h } from '@stencil/core';
import { ISubMenu } from '../modus-wc-profile-menu';

/**
 * Renders a submenu section with optional title, divider, and menu items
 * @param subMenu - The submenu configuration containing title and items
 * @returns JSX element for the submenu section or null if no items
 */
export const renderSubMenu = (subMenu?: ISubMenu) => {
  if (!subMenu || !subMenu.items || subMenu.items.length === 0) {
    return null;
  }

  return (
    <div class="submenu-section">
      {subMenu.title && (
        <modus-wc-typography
          hierarchy="h6"
          size="md"
          label={subMenu.title}
        ></modus-wc-typography>
      )}
      <modus-wc-menu size="md">
        {subMenu.items.map((item) => (
          <modus-wc-menu-item label={item.label}>
            {item.icon && (
              <modus-wc-icon
                slot="start-icon"
                name={item.icon}
                variant={item.iconVariant || 'solid'}
              ></modus-wc-icon>
            )}
          </modus-wc-menu-item>
        ))}
      </modus-wc-menu>
    </div>
  );
};
