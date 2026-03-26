import { h } from '@stencil/core';
import { ISubMenu } from '../modus-wc-profile-menu';

/**
 * Renders a submenu section with optional title and menu items
 * @param subMenu - The submenu configuration containing title and items
 * @param onMenuItemClick - Callback function when a menu item is clicked
 * @returns JSX element for the submenu section or null if no items
 */
export const renderSubMenu = (
  subMenu?: ISubMenu,
  onMenuItemClick?: (value: string) => void,
  isMainMenu?: boolean
) => {
  if (!subMenu || !subMenu.items || subMenu.items.length === 0) {
    return null;
  }

  return (
    <div class={isMainMenu ? 'main-menu-section' : 'submenu-section'}>
      {!isMainMenu && (
        <div class="submenu-title-container">
          {subMenu.title && (
            <modus-wc-typography
              customClass="submenu-title"
              hierarchy="p"
              size="sm"
              weight="bold"
              label={subMenu.title}
            ></modus-wc-typography>
          )}
        </div>
      )}
      <modus-wc-menu size="md">
        {subMenu.items.map((item) => (
          <modus-wc-menu-item
            label={item.label}
            value={item.value ?? item.label}
            onItemSelect={() => onMenuItemClick?.(item.value ?? item.label)}
          >
            {item.icon && (
              <modus-wc-icon
                slot="start-icon"
                name={item.icon}
                size={item.iconSize ?? 'sm'} // Fallback to 'sm' to provide a default icon size for both primary and secondary menus
                variant={item.iconVariant || 'solid'} // Fallback to 'solid' to provide a default icon variant for both primary and secondary menus
              ></modus-wc-icon>
            )}
          </modus-wc-menu-item>
        ))}
      </modus-wc-menu>
    </div>
  );
};
