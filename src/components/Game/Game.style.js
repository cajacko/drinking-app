import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import Button from 'components/Button';

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Background = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-family: helvetica, sans-serif;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
  font-family: helvetica, sans-serif;
  max-width: 800px;
  width: 100%;
  text-align: center;
  display: block;
  line-height: 1.5;
`;

export const Stop = Button.extend`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
