import { VStack, Text, Heading, Image } from "@chakra-ui/react";
import { IContent } from "../interfaces/IContent";

export function Card({ iconURL, content, imageAlt, title }: IContent) {
  return (
    <VStack
      gap={"8px"}
      maxW={320}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image w={65} h={55} src={iconURL} alt={imageAlt} />
      <Heading fontSize={24} textAlign={"center"}>
        {title}
      </Heading>
      <Text fontSize={16} textAlign={"center"}>
        {content}
      </Text>
    </VStack>
  );
}
