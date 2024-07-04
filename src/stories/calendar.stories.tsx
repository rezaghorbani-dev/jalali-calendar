import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "../components/calendar";
import Provider from "../context";

//============================ Meta
const meta: Meta<typeof Calendar> = {
  title: "Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: (Story) => {
    return (
      <Provider>
        <Story />
      </Provider>
    );
  },
};

export default meta;

//============================ Story
type Story = StoryObj<typeof meta>;

export const Test1: Story = {};
