import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[3px]" };
const variants = {
  fill: {
    green_900_01: "bg-green-900_01 shadow-bs1 text-white-A700",
    green_900: "bg-green-900 shadow-bs text-white-A700",
    white_A700: "bg-white-A700",
    green_A100: "bg-green-A100",
    green_A100_01: "bg-green-A100_01 text-green-900",
  },
  outline: {
    green_900: "border-2 border-green-900 border-solid text-green-900",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-4", md: "p-[22px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "outline",
  color = "green_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "green_900_01",
    "green_900",
    "white_A700",
    "green_A100",
    "green_A100_01",
  ]),
};

export { Button };
