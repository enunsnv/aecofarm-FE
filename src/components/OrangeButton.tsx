import styled from 'styled-components';
import { NextPage } from 'next';

const Button = styled.button`
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  border: 0px;
  color: white;
  background-color: #FF792E;
  font-size: 16px;
`;

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const OrangeButton: NextPage<ButtonProps> = ({ text, onClick, className }) => {
  return <Button onClick={onClick} className={className}>{text}</Button>;
};

export default OrangeButton;
