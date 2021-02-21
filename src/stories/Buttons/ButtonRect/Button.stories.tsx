import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonRectProps } from "../Button";
import { ButtonRect } from "./ButtonRect";

export default {
  title: "ButtonRect",
  component: ButtonRect
} as Meta;

const Template: Story<ButtonRectProps> = (args) => <ButtonRect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
