import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps, ButtonThemes } from "./Button";

export default {
  title: "Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const buttonConfig: ButtonThemes = {
  light: {
    backgroundColor: "red"
  },
  dark: {
    backgroundColor: "blue"
  }
};
export const WithConfig = Template.bind({});
WithConfig.args = {
  themesConfig: buttonConfig,
  currentTheme: "light"
};
