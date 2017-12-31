import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import {
  BLUE,
  BLUE_DARKEN,
  WHITE,
  DARK_GREY,
  DARK_GREY_DARKEN,
} from 'cj-pattern-library/lib/constants/colours';

const background = ({ theme }) => {
  switch (theme) {
    case 'GREY':
      return DARK_GREY;

    default:
      return BLUE;
  }
};

const colour = ({ theme }) => {
  switch (theme) {
    default:
      return WHITE;
  }
};

const backgroundHover = ({ theme }) => {
  switch (theme) {
    case 'GREY':
      return DARK_GREY_DARKEN;

    default:
      return BLUE_DARKEN;
  }
};

export default styled.button`
  appearance: none;
  background: ${background};
  cursor: pointer;
  padding: 5px 10px;
  width: 120px;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: none;
  display: block;
  color: ${colour};
  font-family: helvetica, sans-serif;

  :hover {
    background: ${backgroundHover};
  }
`;
