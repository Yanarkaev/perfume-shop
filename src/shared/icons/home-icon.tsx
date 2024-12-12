import React from "react";

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 11.0855C4 10.4972 4.25903 9.93873 4.70815 9.55873L10.7082 4.48203C11.4538 3.8511 12.5462 3.8511 13.2919 4.48203L19.2919 9.55873C19.741 9.93873 20 10.4972 20 11.0855V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11.0855Z"
        stroke="current"
        stroke-width="2"
      />
      <rect
        x="9"
        y="14"
        width="6"
        height="6"
        rx="1"
        stroke="current"
        stroke-width="2"
      />
    </svg>
  );
};
