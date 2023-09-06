import { ITagProps, Box, Button, IButtonProps } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { ReactNode } from "react";
import { STYLES } from "../styles/styles";

interface BotaoProps extends IButtonProps {
  children?: ReactNode;
  autoSize?: boolean;
  color?: string;
  fontSize?: number;
}

export function Botao({ children, autoSize = false, color,  fontSize, ...rest }: BotaoProps) {
  return (
    <Button
      w={autoSize ? "auto" : "100%"}
      bg={STYLES.colors.blue3[500]}
      mt={6}
      borderRadius="lg"
      fontSize={ fontSize || "4x1"}
    
      {...rest}>
      {children}
    </Button>
  );
}
export function BotaoVoltar({
  children,
  autoSize = false,
  color,
  ...rest
}: BotaoProps) {
  return (
    
      <Button
        alignItems="center"
        w={autoSize ? "auto" : "100%"}
        bg={STYLES.colors.gray[500]}
        mt={6}
        borderRadius="lg"
        {...rest}>
        {children}
      </Button>
  
  );
}
