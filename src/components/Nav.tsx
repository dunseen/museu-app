import { Flex, List, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

export const Nav: React.FC<NavProps & FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex
      as={"header"}
      w={"100%"}
      h="90px"
      bg={"transparent"}
      p={"0 72px"}
      justifyContent={"center"}
      alignItems={"center"}
      borderBottom={"1px solid #fff"}
      fontSize={30}
      fontWeight={500}
      {...rest}
    >
      <List
        display={"flex"}
        h={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        listStyleType={"none"}
        textTransform={"uppercase"}
        fontSize={18}
      >
        {children}
      </List>
    </Flex>
  );
};
