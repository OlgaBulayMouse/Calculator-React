import React from "react";
import { Box, Button } from "@chakra-ui/react";

function Numbers(props) {
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const nums = numbersArray.map((number) => {
    return (
      <Button
        onClick={(event) => {
          if (props.data !== "0")
            props.onClick(props.data + event.target.innerHTML);
          else props.onClick(event.target.innerHTML);
        }}
        key={number}
        width={"60px"}
        height={"60px"}
        margin={"5px"}
        fontSize={"4xl"}
        color={"gray.600"}
      >
        {number}
      </Button>
    );
  });
  return (
    <Box display={"flex"} flexWrap={"wrap"} width={"35%"}>
      {nums}
    </Box>
  );
}

export default Numbers;
