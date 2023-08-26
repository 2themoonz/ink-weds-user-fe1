import * as React from "react";

interface IUserIconProps {
  width?: number;
  height?: number;
}

const UserIcon = (props: IUserIconProps) => {
  const { width = 32, height = 32 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#717171"
          d="M16 .7C7.563.7.7 7.563.7 16c0 8.437 6.863 15.3 15.3 15.3 8.437 0 15.3-6.863 15.3-15.3C31.3 7.563 24.437.7 16 .7Zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4A6.507 6.507 0 0 1 9.5 14c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.512 6.512 0 0 1-3.019 5.491 12.42 12.42 0 0 1 6.452 4.4C23.605 26.816 20.021 28.7 16 28.7Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserIcon;
