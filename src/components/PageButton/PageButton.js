import React from 'react';
import { Button } from '@material-ui/core';

const PageButton = props => {
  const { text, func } = props
  return (
    <Button 
      onClick={() => func()} 
      variant='outlined' 
      style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', fontSize: '12px' }}
    >
      {text}
    </Button>
  );

}

export default PageButton;