import styled from 'styled-components';

const StyledCard = styled.article`
  border-radius: 8px;
  border: 2px solid #eeeeff;
`;

const StyledImg = styled.img`
  border-radius: 8px 8px 0 0;
  height: 100%;
  width: 100%;
`;

const StyledTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1rem;
  transition: .5s;
  cursor: pointer;

  &:hover {
    color: var(--buttonColor);
  }
`;

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: .9rem;
`;

export { StyledImg, StyledCard, StyledTitle, StyledDescription };
