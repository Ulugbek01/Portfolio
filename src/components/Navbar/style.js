import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${flexBox};
  justify-content: space-between;
  max-width: var(--width);
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 10px 0;
  background-color: #090909;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 25px 20px -20px;
  position: sticky;
  top: 0;
  z-index: 100;
`;
export const SiteNav = styled.nav`
  ${flexBox};
`;

export const Logo = styled.div`
  cursor: pointer;
`;

Logo.Title = styled.h2`
  font-family: "Kaushan Script", sans-serif;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
`;

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#fff" : "#949494",
    margin: "0 20px",
    fontSize: "18px",
  };
};
