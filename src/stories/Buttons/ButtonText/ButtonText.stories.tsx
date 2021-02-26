import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonProps } from "../Button";
import { ButtonText } from "./ButtonText";

export default {
  title: "Buttons/ButtonText",
  component: ButtonText
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
