import { ReactNode } from "react";
import styled from "styled-components";

type HeaderProp = {
  children: ReactNode;
  extraStyle?: string;
};

const baseHeading = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const baseStyles = "uppercase";
export const HeaderOne = styled(baseHeading)`
  font-size: 56px;
  text-transform: uppercase;
  line-height: 58px;
  letter-spacing: 2px;
`;

export const HeaderTwo = ({ children, extraStyle }: HeaderProp) => (
  <p className={`header  ${extraStyle} ${baseStyles}`}>
    {children}
    <style jsx>{`
      .header {
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.5px;
      }
    `}</style>
  </p>
);

export const HeaderThree = ({ children, extraStyle }: HeaderProp) => (
  <p className={`header  ${extraStyle} ${baseStyles}`}>
    {children}
    <style jsx>{`
      .header {
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.15px;
      }
    `}</style>
  </p>
);

export const HeaderFour = ({ children, extraStyle }: HeaderProp) => (
  <p className={`header  ${extraStyle} ${baseStyles}`}>
    {children}
    <style jsx>{`
      .header {
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
      }
    `}</style>
  </p>
);

export const HeaderFive = ({ children, extraStyle }: HeaderProp) => (
  <p className={`header  ${extraStyle} ${baseStyles}`}>
    {children}
    <style jsx>{`
      .header {
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 1.7px;
      }
    `}</style>
  </p>
);

export const HeaderSix = ({ children, extraStyle }: HeaderProp) => (
  <p className={`header ${baseStyles} ${extraStyle}`}>
    {children}
    <style jsx>{`
      .header {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 1.3px;
      }
    `}</style>
  </p>
);
