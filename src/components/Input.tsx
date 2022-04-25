import {
  HStack,
  IconButton,
  Input as CUIInput,
  InputProps,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <HStack w={"100%"}>
      <CUIInput
        focusBorderColor={"green.200"}
        colorScheme={"green"}
        {...rest}
      />

      <IconButton
        colorScheme="green"
        aria-label="busca livre"
        icon={<BiSearch size={20} />}
      />
    </HStack>
  );
};

export { Input };
