import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/Tooltip/Tooltip";
import { Button } from "../components/Button";

//============================ Meta
const meta = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    children: <Button label="Test" />,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

//============================ Story
type Story = StoryObj<typeof meta>;

export const test1: Story = {
  args: {
    text: "test1",
  },
};
export const test2: Story = {
  args: {
    text: "test1",
  },
};
