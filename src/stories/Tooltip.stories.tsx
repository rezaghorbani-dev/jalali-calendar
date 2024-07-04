import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/Tooltip/Tooltip";
import { Button } from "../components/Button";

//============================ Meta
const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    children: <Button label="Test" />,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

//============================ Story
type Story = StoryObj<typeof meta>;

export const Test1: Story = {
  args: {
    text: "test1",
  },
};
export const Test2: Story = {
  args: {
    text: "test1",
  },
};
