import { ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  handleClick: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ children, handleClick }) => {
  return (
    <ListItem
      onClick={handleClick}
      display={"flex"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      p={10}
      position={"relative"}
      _after={{
        display: "none",
        content: "''",
        position: "absolute",
        bottom: 0,
        height: "2px",
        backgroundColor: "white",
        width: "100%",
      }}
      _hover={{
        cursor: "pointer",
        _after: {
          display: "block",
        },
      }}
    >
      {children}
    </ListItem>
  );
};
