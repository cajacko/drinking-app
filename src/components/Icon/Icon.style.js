import styled from 'cj-pattern-library/lib/helpers/styledComponents';

export default styled.span`
  color: ${({ colour }) => colour};
  font-size: ${({ fontSize }) => fontSize}px;
`;
