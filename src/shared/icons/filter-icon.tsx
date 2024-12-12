import React from "react";

export const FilterIcon = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 1H3C1.89543 1 1 1.89543 1 3V4.17157C1 4.70201 1.21071 5.21071 1.58579 5.58579L5.41421 9.41421C5.78929 9.78929 6 10.298 6 10.8284V15.0179C6 16.5615 7.67443 17.5233 9.00774 16.7455L11.0077 15.5788C11.6222 15.2204 12 14.5626 12 13.8513V10.8284C12 10.298 12.2107 9.78929 12.5858 9.41421L16.4142 5.58579C16.7893 5.21071 17 4.70201 17 4.17157V3C17 1.89543 16.1046 1 15 1Z"
        stroke="current"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
