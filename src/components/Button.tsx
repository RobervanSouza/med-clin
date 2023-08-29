import { Text, ITagProps, FormControl, Input, Box, Button } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { ReactNode } from "react";
import { STYLES } from "../styles/styles";

interface TituloProps extends ITagProps {
  children?: ReactNode;
 
}

export function Botao({ children, }: TituloProps) {
  return (
    <Box>
      <Button
        width="330px"
        size="lg"
        bg={STYLES.colors.blue3[500]}
        mt={10}
        borderRadius="lg">
        {children}
      </Button>
    </Box>
  );
}
