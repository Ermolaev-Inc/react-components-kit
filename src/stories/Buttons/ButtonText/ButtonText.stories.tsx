import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonText, TextButtonProps } from "./ButtonText";

export default {
  title: "Buttons/ButtonText",
  component: ButtonText
} as Meta;

const Template: Story<TextButtonProps> = (args) => <ButtonText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
