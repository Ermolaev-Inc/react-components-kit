import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonRoundProps } from "../Button";
import { ButtonRound } from "./ButtonRound";

export default {
  title: "Buttons/ButtonRound",
  component: ButtonRound
} as Meta;

const Template: Story<ButtonRoundProps> = (args) => <ButtonRound {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
