import React from "react";
import { Button } from "@chakra-ui/react";

function CountButton(props) {

//   const expression = '/\|+-*/';
//   const lastNumber = props.data[props.data.length - 1];

//   const chekExppessionType = () => {
//     if (expression.test(lastNumber))
//       return props.onClick(props.data + props.expression);
//   };

  return (
    <Button
      onClick={() => {
        props.onClick(props.data + props.expression);
      }}
      width={"60px"}
      height={"60px"}
      margin={"5px"}
      fontSize={"4xl"}
      color={"gray.600"}
    >
      {props.expression}
    </Button>
  );
}

export default CountButton;
