import { Select as CUISelect, SelectProps } from "@chakra-ui/react";

type OptionListType = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  optionList: OptionListType[];
}

export const Select: React.FC<CustomSelectProps & SelectProps> = ({
  optionList,
  placeholder,
  ...rest
}) => {
  return (
    <CUISelect
      focusBorderColor={"green.200"}
      colorScheme={"green"}
      placeholder={placeholder}
      {...rest}
    >
      {optionList.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </CUISelect>
  );
};
