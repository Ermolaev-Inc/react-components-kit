import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputProps } from "../Input";
import { InputOpen } from "./InputOpen";

export default {
  title: "Inputs/InputOpen",
  component: InputOpen
} as Meta;

const Template: Story<InputProps> = (args) => <InputOpen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
