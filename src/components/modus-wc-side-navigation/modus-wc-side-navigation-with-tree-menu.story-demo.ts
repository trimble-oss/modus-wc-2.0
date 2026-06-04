import type {
  INavbarUserCard,
  INavbarVisibility,
} from '../modus-wc-navbar/modus-wc-navbar';
import { SIDE_NAV_COLLAPSED_MIN_WIDTH } from './modus-wc-side-navigation-tree-item-end-action.story-styles';

/** Shared WithTreeMenu / Show code navbar user card (matches Storybook canvas). */
export const WITH_TREE_MENU_NAVBAR_USER_CARD: INavbarUserCard = {
  avatarAlt: 'User Avatar',
  avatarSrc:
    'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
  email: 'user@trimble.com',
  name: 'Sonic the Hedgehog',
};

/** Shared WithTreeMenu / Show code navbar visibility (matches Storybook canvas). */
export const WITH_TREE_MENU_NAVBAR_VISIBILITY: INavbarVisibility = {
  ai: true,
  apps: true,
  help: true,
  mainMenu: true,
  notifications: true,
  search: true,
  searchInput: false,
  user: true,
};

/** Layout shell for copy-paste Show code (not Connect-theme-scoped). */
export const withTreeMenuLayoutStyles = `
  .layout-with-navbar {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content-row {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .panel-content {
    flex: 1;
    margin-left: ${SIDE_NAV_COLLAPSED_MIN_WIDTH};
    padding: 10px;
  }

  .side-navigation {
    align-self: flex-start;
    height: 500px;
    position: relative;
  }

  .navbar {
    z-index: 2;
  }
`;
