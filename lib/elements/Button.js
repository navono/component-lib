import styled from 'styled-components';
import Colors from '../styles/colors';

const Button = styled.button`
  background: ${({ bgColor }) => Colors[bgColor]};
  border: none;
  border-radius: 2px;
  color: ${({ fontColor }) => Colors[fontColor]};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${({ hoverColor }) => Colors[hoverColor]};
  }
`;

Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  hoverColor: 'darkBlue',
};

export default Button;
