import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NavbarSimple } from "./NavbarSimple";
import { NavbarSimpleProps } from "../Navbar";

export default {
  title: "Navbars/NavbarSimple",
  component: NavbarSimple
} as Meta;

const Template: Story<NavbarSimpleProps> = (args) => <NavbarSimple {...args} />;

export const Primary = Template.bind({});
Primary.args = {};