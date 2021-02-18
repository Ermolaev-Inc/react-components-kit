import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextButton, TextButtonProps } from "./TextButton";

export default {
  title: "TextButton",
  component: TextButton
} as Meta;

const Template: Story<TextButtonProps> = (args) => <TextButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
