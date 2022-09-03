import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #000000;
  height: 110px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 3);
  margin-bottom: 50px;
`;
  
export const NavLink = styled(Link)`
  color: #20C20E;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2.5rem;
  font-size: 21px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #20C20E;
    font-weight: bold;
    // text-decoration: underline;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  