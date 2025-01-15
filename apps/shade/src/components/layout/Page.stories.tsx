import type {Meta, StoryObj} from '@storybook/react';
import {Page} from './Page';

const meta = {
    title: 'Layout / Page',
    component: Page,
    tags: ['autodocs']
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
    args: {
        children: 'Page container with a max width of <code>max-w-content</code>'
    }
};
