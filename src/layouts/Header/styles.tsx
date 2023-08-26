import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`font-sans w-full`}
  border-bottom: 1px solid #e2e8f0;
`;

// screens: {
//   tablet: "640px",
//   laptop: "1024px",
//   desktop: "1280px",
//   "2xl": "1280px",
// },
// container should full screen
// but wrapper should be 2xl or desktop size (1280px) due to the design
export const Wrapper = styled.div`
  ${tw`container mx-auto px-4`}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0px;
`;

export const NavLink = styled.div`
  ${tw`font-sans text-xs font-semibold text-black`}
`;

export const Logo = styled.div`
  color: #18181b;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const WriteNow = styled.div`
  color: var(--black-800, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const UserIconWrapper = styled.div`
  cursor: pointer;
`;
