<template>
  <div>
    <h3>Modus Side Navigation</h3>
      <div class="layout-with-navbar">
        <modus-wc-navbar v-if="isLoaded" 
          app-title="Modus App" 
          class="navbar" 
          logo="/assets/logo.svg" 
          style="z-index: 2;"
          :text-overrides="textOverrides"
          :user-card="userCard"
          :visibility="visibility"
          @mainMenuOpenChange="handleMenuOpenChange"
        ></modus-wc-navbar>
        <div v-else class="navbar-loading">Loading navbar...</div>
        <div class="main-content-row">
          <modus-wc-side-navigation ref="sideNav" class="side-navigation"  collapse-on-click-outside="true" expanded="false" max-width="256px" mode="push" target-content=".panel-content">
            <modus-wc-menu size="lg">
              <modus-wc-menu-item 
                label="home" 
                :selected="selectedMenuItem === 'home'"
                @itemSelect="handleMenuItemSelect('home')"
              >
                <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item 
                label="profile"
                :selected="selectedMenuItem === 'profile'"
                @itemSelect="handleMenuItemSelect('profile')"
              >
                <modus-wc-icon slot="start-icon" name="person"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item 
                label="settings"
                :selected="selectedMenuItem === 'settings'"
                @itemSelect="handleMenuItemSelect('settings')"
              >
                <modus-wc-icon slot="start-icon" name="gears"></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <p>
                The side navigation of an application provides context through
                accessible menu options and positions a consistent component to
                connect to various pages in the application.
              </p>
              <p>
                The side navigation is a collapsible side content of the site's
                pages. It is located alongside the page's primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the "hamburger" menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
.layout-with-navbar {
  box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: hidden;
}
.main-content-row {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}
.modus-wc-menu-item-labels {
  padding: 0 16px;
}
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
.navbar-loading {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.panel-content {
  margin-left: 4rem;
  padding: 10px;
  overflow-y: auto;
  flex: 1;
}
.side-navigation {
  height: 100%;
  align-self: stretch;
  position: relative;
}
/* Override the component's 100vh height */
modus-wc-side-navigation {
  height: 100% !important;
}
modus-wc-side-navigation .modus-wc-side-navigation {
  height: 100% !important;
  max-height: 100% !important;
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface INavbarTextOverrides {
  apps?: string;
  help?: string;
  notifications?: string;
  search?: string;
}

interface INavbarUserCard {
  avatarAlt?: string;
  avatarSrc?: string;
  email: string;
  name: string;
}

interface INavbarVisibility {
  ai?: boolean;
  apps?: boolean;
  help?: boolean;
  mainMenu?: boolean;
  notifications?: boolean;
  search?: boolean;
  searchInput?: boolean;
  user?: boolean;
}

const isLoaded = ref(false);
const textOverrides = ref<INavbarTextOverrides>({});
const userCard = ref<INavbarUserCard>({ email: '', name: '' });
const visibility = ref<INavbarVisibility>({});
const sideNav = ref<any>(null);
const selectedMenuItem = ref('home');

const handleMenuOpenChange = (e: CustomEvent) => {
  if (sideNav.value) {
    // Access the actual web component element
    const sideNavElement = sideNav.value as HTMLElement & { expanded: boolean };
    sideNavElement.expanded = e.detail;
  }
};

const handleMenuItemSelect = (itemName: string) => {
  selectedMenuItem.value = itemName;
};

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  textOverrides.value = {
    apps: 'Apps',
    help: 'Help',
    notifications: 'Notifications',
    search: 'Search',
  };

  userCard.value = {
    avatarAlt: 'Sonic',
    avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
    email: 'sonic@trimble.com',
    name: 'Sonic the Hedgehog',
  };

  visibility.value = {
    ai: true,
    apps: true,
    help: true,
    mainMenu: true,
    notifications: true,
    search: true,
    searchInput: true,
    user: true,
  };
  
  isLoaded.value = true;
});
</script>