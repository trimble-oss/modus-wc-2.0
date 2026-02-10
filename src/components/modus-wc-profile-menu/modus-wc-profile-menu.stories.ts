import { Meta, StoryObj } from '@storybook/web-components';
import { IProfileMenuProps, ISubMenu } from './modus-wc-profile-menu';

interface ProfileMenuArgs {
  profileImageUrl: string;
  headerName: string;
  userName: string;
  userEmail: string;
  subMenuOne?: ISubMenu;
  subMenuTwo?: ISubMenu;
}

const meta: Meta<ProfileMenuArgs> = {
  title: 'Components/Profile Menu',
  component: 'modus-wc-profile-menu',
  args: {
    profileImageUrl:
      'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg',
    headerName: 'Enterprise ABC',
    userName: 'Jane Doe',
    userEmail: 'jane.doe@example.com',
  },
};

export default meta;

type Story = StoryObj<ProfileMenuArgs>;

const Template = (args: ProfileMenuArgs) => {
  const element = document.createElement('modus-wc-profile-menu') as any;

  const profileProps: IProfileMenuProps = {
    profileImageUrl: args.profileImageUrl,
    headerName: args.headerName,
    userName: args.userName,
    userEmail: args.userEmail,
  };

  element.profileProps = profileProps;

  if (args.subMenuOne) {
    element.subMenuOne = args.subMenuOne;
  }

  if (args.subMenuTwo) {
    element.subMenuTwo = args.subMenuTwo;
  }

  return element;
};

export const Default: Story = {
  render: (args) => Template(args),
};

export const WithOneSubmenu: Story = {
  args: {
    subMenuOne: {
      title: 'Recent Projects',
      items: [
        { label: 'Project Alpha', icon: 'bug', iconVariant: 'solid' },
        { label: 'Project Beta', icon: 'triangle_down', iconVariant: 'solid' },
        { label: 'Project Gamma', icon: 'service_rep', iconVariant: 'solid' },
      ],
    },
  },
  render: (args) => Template(args),
};

export const WithTwoSubmenus: Story = {
  args: {
    subMenuOne: {
      title: 'Recent Projects',
      items: [
        { label: 'Project Alpha', icon: 'bug', iconVariant: 'solid' },
        { label: 'Project Beta', icon: 'triangle_down', iconVariant: 'solid' },
        { label: 'Project Gamma', icon: 'service_rep', iconVariant: 'solid' },
      ],
    },
    subMenuTwo: {
      title: 'Quick Actions',
      items: [
        { label: 'Settings', icon: 'settings', iconVariant: 'solid' },
        { label: 'Help Center', icon: 'help', iconVariant: 'solid' },
        { label: 'Sign Out', icon: 'lock', iconVariant: 'solid' },
      ],
    },
  },
  render: (args) => Template(args),
};
