import React from "react";
import { VStack, Heading, SimpleGrid, BoxProps } from "@chakra-ui/react";

interface CardFilterProps {
  title: string;
}

const CardFilter: React.FC<CardFilterProps & BoxProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <VStack
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"fit-content"}
      position={"relative"}
      gap={2}
      minH={"100%"}
      p={"16px"}
      border={"1px solid #ccc"}
      {...rest}
    >
      <Heading
        w={"max"}
        position={"absolute"}
        top={-3}
        display={"block"}
        bg={"white"}
        p={"0 8px 0 8px"}
        fontSize={16}
        textAlign={"center"}
      >
        {title}
      </Heading>
      <SimpleGrid minW={"300px"} gap={"24px"}>
        {children}
      </SimpleGrid>
    </VStack>
  );
};

export default CardFilter;
