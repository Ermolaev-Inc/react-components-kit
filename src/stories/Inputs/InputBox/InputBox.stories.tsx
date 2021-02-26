import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputProps } from "../Input";
import { InputBox } from "./InputBox";

export default {
  title: "Inputs/InputBox",
  component: InputBox
} as Meta;

const Template: Story<InputProps> = (args) => <InputBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
