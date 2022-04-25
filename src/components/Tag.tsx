import { Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface TagProps {
  icon: IconType;
  title: string;
  value: string;
}

export function Tag({ icon: Icon, title, value }: TagProps) {
  return (
    <VStack align={"center"}>
      <VStack>
        <Icon size={30} color="#319654" />
        <Text fontWeight={"bold"}>{title}:</Text>
      </VStack>
      <Text fontStyle={"italic"}>{value}</Text>
    </VStack>
  );
}
