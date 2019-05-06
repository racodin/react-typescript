import * as React from 'react';
import './Hello.scss';
import * as exmaple from '../assets/images/example.png';
import * as svg from '../assets/svg/logo.svg';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
    <img src={exmaple} alt='' />
    <img src={svg} alt='' />
    {/* {svg} */}
  </>
);
