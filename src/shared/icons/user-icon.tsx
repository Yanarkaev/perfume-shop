import React from "react";

export const UserIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="8" r="4" stroke="current" stroke-width="2" />
      <path
        d="M4 19.619C4 15.4112 7.41116 12 11.619 12H12.381C16.5888 12 20 15.4112 20 19.619V19.619C20 19.8294 19.8294 20 19.619 20H4.38095C4.17056 20 4 19.8294 4 19.619V19.619Z"
        stroke="current"
        stroke-width="2"
      />
    </svg>
  );
};
