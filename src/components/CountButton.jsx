import React from "react";
import { Button } from "@chakra-ui/react";

function CountButton(props) {
console.log(props)

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
