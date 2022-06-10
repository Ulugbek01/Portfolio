import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
`;

const leftToRight = (position) => {
  if (position === "left") {
    return {
      left: "10px",
    };
  } else {
    return {
      right: "10px",
    };
  }
};

export const HeroSection = styled.section`
  background-color: #090909;
  padding: 96px 0;
`;

export const Container = styled.div`
  max-width: var(--width);
  margin: 0 auto;
  position: relative;
`;

HeroSection.Title = styled.h1`
  font-family: "Kaushan Script", sans-serif;
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  letter-spacing: 0.03em;
  color: #fff;
`;

HeroSection.Discr = styled.p`
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: #aaa;
  margin: 28px 0 52px;
`;

HeroSection.Img = styled.img`
  width: 100%;
`;

HeroSection.IconWrapper = styled.div`
  ${flexBox};
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 50%;
  ${({ position }) => leftToRight(position)}
  z-index: 99;
  cursor: pointer;

  :hover {
    opacity: 0.97;
  }
`;
