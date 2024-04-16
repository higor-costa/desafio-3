import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled.input`
  background: var(--buttonColor);
  color: var(--white);
  border-radius: 4px;
  padding: 10px 0;
  text-transform: uppercase;
  cursor: pointer;
`;

export { StyledForm, StyledButton };