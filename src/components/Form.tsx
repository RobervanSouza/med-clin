import { Text, ITagProps, FormControl, Input, Box } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { ReactNode } from "react";
import { STYLES } from "../styles/styles";

interface TituloProps extends ITagProps {
  children?: ReactNode;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  width?: number | string;
}

export function Form({
  children,
  width,
  label,
  placeholder,
  secureTextEntry = false,
}: TituloProps) {
  return (
    <Box>
      <FormControl.Label>
        <Text
          color={STYLES.colors.blue3[500]}
          fontWeight="bold"
          fontSize="16px">
          {label}
        </Text>
      </FormControl.Label>
      <Input
        size="lg"
        width={width|| "336px"} 
        borderRadius="lg"
        backgroundColor="gray.200"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        shadow={3}></Input>
      {children}
    </Box>
  );
}
