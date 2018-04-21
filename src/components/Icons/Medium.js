import React,  { Component } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  width: 5rem;
  height: 5rem;
  &:hover {
    fill: #00FD8D;
  }
`;

module.exports = () => {
  return <SVG viewBox="0 0 250 250">
    <path d="M214.3,203.7L156.6,176l-0.4-125.6c0-2.9,3.1-4.9,5.7-3.6l54.6,26.3c1.4,0.7,2.3,2.1,2.3,3.6v124.2
      C218.8,203.2,216.4,204.8,214.3,203.7z" />
    <path d="M156.6,176l-62.4-30l60.1-98.9c1.1-1.7,3.3-2.4,5.1-1.5l55.4,26.6c2.1,1,2.9,3.6,1.7,5.6L156.6,176z" />
    <path d="M156.6,176l-62.4-30L37.1,52.9c-1.6-2.6,1.2-5.7,3.9-4.3l53.3,25.6L156.6,176z" />
    <path d="M89.8,203.7l-56.3-27.1c-1.1-0.5-1.8-1.6-1.8-2.8V49c0-2.2,2.3-3.7,4.4-2.7l58.2,28v126.7
      C94.3,203.2,91.8,204.8,89.8,203.7z" />
  </SVG>
  ;
}