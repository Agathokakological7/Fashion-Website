import React from "react";

const sizeClasses = {
  txtRufinaBold86: "font-bold font-rufina",
  txtPoppinsMedium22Gray800: "font-medium font-poppins",
  txtRobotoSlabMedium50: "font-medium font-robotoslab",
  txtRobotoSlabBold46: "font-bold font-robotoslab",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtElephantRegular50: "font-elephant font-normal",
  txtElephantRegular40: "font-elephant font-normal",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtRobotoSerifSemiBold22: "font-robotoserif font-semibold",
  txtArialRoundedMTBold60: "font-arialroundedmtbold font-normal",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtRobotoSlabMedium64: "font-medium font-robotoslab",
  txtPoppinsMedium22Bluegray900: "font-medium font-poppins",
  txtPoppinsMedium16Gray600: "font-medium font-poppins",
  txtRobotoSlabMedium22: "font-medium font-robotoslab",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
