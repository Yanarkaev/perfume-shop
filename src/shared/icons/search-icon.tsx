import React from "react";

export const SearchIcon = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11" cy="11" r="7" stroke="current" stroke-width="2" />
      <path
        d="M20 20L16 16"
        stroke="current"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
