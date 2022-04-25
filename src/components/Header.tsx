import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/paths";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";

import { FlexProps } from "@chakra-ui/react";

export function Header({ ...rest }: FlexProps) {
  const navigate = useNavigate();

  return (
    <Nav {...rest}>
      <NavItem handleClick={() => navigate(ROUTES.HOME)}>Início</NavItem>

      <NavItem handleClick={() => navigate(ROUTES.SEARCH)}>Busca</NavItem>

      <NavItem handleClick={() => navigate("/")}>Contato</NavItem>
    </Nav>
  );
}
