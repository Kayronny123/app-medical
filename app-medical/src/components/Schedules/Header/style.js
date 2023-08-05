import styled from 'styled-components';

export const ScheduleHeading = styled.h2`
display: flex;
  color: black;
  font-size: 23px;
  font-weight: bold;
  z-index: 0;
  position:fixed;
 right: 800px;
 top: -0px;

`;

export const ScheduleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  z-index: 0;
`;


export const ScheduleButton = styled.button`
 background-color: orange;
  border: 2px solid black ;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold; 
  font-size: 12px; 
  color: white;
  z-index: 0;
  position: fixed;
    top: 12px;
    right: 700px;
  &:hover {
    background-color: #bbb;
  }
`;
