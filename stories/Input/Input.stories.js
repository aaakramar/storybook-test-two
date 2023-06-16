import { Input } from "./Input";
import React from "react";

export default {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    error: {
      table: {
        type: {
          summary: ["Set error status"],
        },
      },
    },
    disabled: {
      table: {
        type: {
          summary: ["Whether the input is disabled"],
        },
      },
    },
    placeholder: {
      table: {
        type: {
          summary: [],
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: ["Callback when user input"],
        },
      },
    },
    readOnly: {
      table: {
        type: {
          summary: [""],
        },
      },
    },
    style: {
      table: {
        type: {
          summary: [""],
        },
      },
    },
  },
};

export const Default = {
  args: {
    error: false,
    disabled: false,
    readOnly: false,
    placeholder: "",
    style: {},
  },
};
