import React from 'react';
import { Button } from '@chakra-ui/react';


function ResultButton(props) {

  return (
    <Button 
      onClick={() => {
        props.onClick(props.data);
      }}
      width={'60px'}
      height={'60px'}
      margin={'5px'}
      fontSize={'4xl'}
      color={'red.600'}
    >
        =
    </Button>
  );
}

export default ResultButton;
