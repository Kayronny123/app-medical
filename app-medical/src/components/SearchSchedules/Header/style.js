import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #f8f8f8;
    display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  /* z-index: 3; */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Title = styled.h2`
  margin-right: 20px;
  color: black;
`;

export const Button = styled.button`
  background-color: orange;
  border: 2px solid black ;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold; 
  font-size: 12px; 
  color: white;

  &:hover {
    background-color: #bbb;
  }
`;
