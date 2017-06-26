import styled from 'styled-components';
import Colors from '../styles/colors';
import { darken } from 'polished';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};

const setDispaly = ({ size }) => size === 'fullWidth' ? 'block' : 'inline-block';
const setWidth = ({ size }) => size === 'fullWidth' ? '100%' : 'initial';

const Button = styled.button`
  background: ${({ bgColor }) => Colors[bgColor]};
  border: none;
  border-radius: 2px;
  color: ${({ fontColor }) => Colors[fontColor]};
  cursor: pointer;
  display: ${setDispaly};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  width: ${setWidth};
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${({ bgColor }) => darken(0.1, Colors[bgColor])};
  }
`;

Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
};

export default Button;
