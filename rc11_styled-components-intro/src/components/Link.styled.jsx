import styled, {css} from 'styled-components';

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.5;
  }
  ${(props) => props.secondary && css`
  background-color: yellow;
  border-radius: 7px;
  padding: 0.25rem;
  color: black;

  `}
`;

export default StyledLink;
