import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
  height: 50px;
  align-items: center;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
`;

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }

  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding: 11px 4px;
  color: black;
  transition: color 0.2s ease-in-out;

  &.active {
    color: #3a97e8;
    border-bottom: 3px solid #3a97e8;
    border-radius: 3px;
  }
  &:hover,
  &:focus {
    color: #3a97e8;
  }
`;

export const Container = styled.div`
  padding: 0 40px;
  width: 1440px;
`;

export const Header = styled.header`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1px;
  border-bottom: 1px solid #ececec;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
