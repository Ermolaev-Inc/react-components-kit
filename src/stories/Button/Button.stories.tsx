import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps, ButtonThemeConfig } from "./Button";

export default {
  title: "Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const buttonConfig: ButtonThemeConfig = {
  light: {
    backgroundColor: "red"
  },
  dark: {
    backgroundColor: "blue"
  }
};
export const WithConfig = Template.bind({});
WithConfig.args = {
  themeConfig: buttonConfig,
  currentTheme: "light"
};
