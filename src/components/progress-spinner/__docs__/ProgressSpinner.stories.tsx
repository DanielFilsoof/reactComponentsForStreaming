import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "ProgressSpinner",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const CommonWhite: Story = {
    args: {
        size: 60,
        thickness: 3,
        color: '#f2f2f2',
    },
};
export const Primary: Story = {
    args: {
        size: 60,
        thickness: 3,
        color: '#f8232d'
    },
};

export const Secondary: Story = {
    args: {
        size: 60,
        thickness: 3,
        color: '#efefef'
    },
};

export const Success: Story = {
    args: {
        size: 60,
        thickness: 3,
        color: '#25D287'
    },
};

export const Thick: Story = {
    args: {
        size: 60,
        thickness: 9,
        color: '#f2f2f2'
    },
};

export const Thin: Story = {
    args: {
        size: 60,
        thickness: 1,
        color: '#f2f2f2'
    },
};