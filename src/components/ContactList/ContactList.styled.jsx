import styled from '@emotion/styled';

export const List = styled.ol`
  max-width: 300px;
  margin-top: 10px;
  padding-left: 40px;
  cursor: pointer;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;

  @media screen and (min-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } 
`;

export const Span = styled.span`
  display: inline-block;
`;

