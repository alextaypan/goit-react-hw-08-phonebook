import styled from '@emotion/styled';
import img from './image/phone3.jpg';

export const Thumb = styled.div`
   min-height: 'calc(100vh - 50px)';
   display: flex;
   justify-content: center;
   margin-left: auto;
   margin-right: auto;
   /* background-image: url(${img}); */

   max-width: 440px;
   height: 320px;
   background-size: cover;
   background-repeat: no-repeat;
`;

export const Title = styled.h3`
   margin-top: 10px;
`;