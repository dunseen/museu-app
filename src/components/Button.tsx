import { ButtonProps, Button as CUIButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomButtonPros {
  children: ReactNode;
}

const Button: React.FC<CustomButtonPros & ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <CUIButton w={"100%"} colorScheme={"green"} variant={"solid"} {...rest}>
      {children}
    </CUIButton>
  );
};

export { Button };
