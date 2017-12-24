import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import {
  BLUE,
  BLUE_DARKEN,
  WHITE,
} from 'cj-pattern-library/lib/constants/colours';

export default styled.button`
  appearance: none;
  background: ${BLUE};
  cursor: pointer;
  padding: 5px 10px;
  width: 120px;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: none;
  display: block;
  color: ${WHITE};
  font-family: helvetica, sans-serif;

  :hover {
    background: ${BLUE_DARKEN};
  }
`;
