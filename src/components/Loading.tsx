import React, { FunctionComponent } from 'react';
import { ReactComponent as Icon } from './assets/loading.svg';
import './styles/loading.css';

export const Loading: FunctionComponent = () => {
  return (
    <div className="loading-icon">
      <Icon />
    </div>
  )
}