import styled from "@emotion/styled";

export const Title = styled.h2`
  color: #f5fbf2;
  position: relative;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.75rem;
  text-wrap: no-wrap;
  white-space: nowrap;
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Circle = styled.span`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -0.5rem;
    height: 50px;
    width: 50px;
    background-color: #8613a5;
    border-radius: 25px;
  }
`;
