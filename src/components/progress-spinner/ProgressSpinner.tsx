import React from 'react';
import styled, { keyframes } from 'styled-components';

const BASE_SIZE = 44;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

interface StyledProgressSpinnerProps {
  size: number;
  color: string;
}

export const ProgressSpinnerRoot = styled.div<StyledProgressSpinnerProps>`
  display: inline-block;
  animation: ${rotateAnimation} 2s linear infinite;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  color: ${(props) => props.color};
`;

export const ProgressSpinnerSvg = styled.svg`
  display: block;
  color: currentColor;
`;

export const ProgressSpinnerSvgCircle = styled.circle<{ thickness: number }>`
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: currentColor;
  fill: none;
  transform-origin: 0px 0px;

  stroke-width: ${(props) => props.thickness};
  animation: ${dashAnimation} 2s ease-in-out infinite;
`;

export interface Props {
  color?: string;
  size?: number;
  thickness?: number;
}

export const ProgressSpinner: React.FC<Props> = (props: Props) => {
  const { size = 40, thickness = 3.6, color = '#f2f2f2', ...rest } = props;

  return (
    <ProgressSpinnerRoot role="progressbar" size={size} color={color} {...rest}>
      <ProgressSpinnerSvg viewBox={`${BASE_SIZE / 2} ${BASE_SIZE / 2} ${BASE_SIZE} ${BASE_SIZE}`}>
        <ProgressSpinnerSvgCircle
          thickness={thickness}
          cx={BASE_SIZE}
          cy={BASE_SIZE}
          r={(BASE_SIZE - thickness) / 2}
        />
      </ProgressSpinnerSvg>
    </ProgressSpinnerRoot>
  );
};

export default ProgressSpinner;
