import React from 'react';
import { ReactComponent as Icon } from './assets/loading.svg';
import './styles/loading.css';

export const Loading = () => {
  return (
    <div className="loading-icon">
      <Icon />
    </div>
  )
}