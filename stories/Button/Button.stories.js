import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    type: "primary",
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: 'Button',
  },
};

export const Danger = {
  args: {
    type: "Danger",
    label: 'Button',
  }
}

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
