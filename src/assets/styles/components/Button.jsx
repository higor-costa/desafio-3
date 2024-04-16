import styled from 'styled-components';

const StyledButton = styled.button`
  background: var(--buttonColor);
  color: var(--white);
  padding: 14px 32px;
  border-radius: 4px;
  text-transform: uppercase;
  transition: .5s ease-in-out;

  &:hover {
    background: transparent;
    outline: 1px solid var(--buttonColor);
    color: var(--buttonColor);
  }
`;

export default StyledButton;