import { Text, ITagProps, FormControl, Input, Box } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { ReactNode } from "react";
import { STYLES } from "../styles/styles";

interface TituloProps extends ITagProps {
  children?: ReactNode;
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  width?: number | string;
  value?: string;
  name?: string;
  
  onChangeText?: (text: string) => void;
}

export function Form({
  children,
  value,
  name,
  onChangeText,
  width,
  label,
  placeholder,
  secureTextEntry = false,
}: TituloProps): JSX.Element {
  return (
     <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
        value={value}
        onChangeText={onChangeText}
  color={STYLES.colors.blue3[500]}
      />
    </FormControl>
  );
}
