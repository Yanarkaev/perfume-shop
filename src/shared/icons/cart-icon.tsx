import React from "react";

export const CartIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10" cy="20" r="2" fill="current" stroke-width="2"/>
      <circle cx="18" cy="20" r="2" fill="current" stroke-width="2"/>
      <path
        d="M3 3H4.30575C5.28342 3 6.1178 3.70683 6.27853 4.6712L7.72147 13.3288C7.8822 14.2932 8.71658 15 9.69425 15H18.2099C19.229 15 20.0851 14.2337 20.1977 13.2209L20.7532 8.22086C20.8849 7.03613 19.9575 6 18.7655 6H7"
        stroke="current"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
