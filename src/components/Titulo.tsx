import {
  Text,
  ITagProps,
} from "native-base";
import { ReactNode } from "react";
import { STYLES } from "../styles/styles";

interface TituloProps extends ITagProps {
  children: ReactNode;
  cor?: string;
  mt?: number | string | number;
  fontSize?: number | string;
  marginLeft?: number | string;
} 

export function Titulo({children, color, mt, fontSize, marginLeft}:TituloProps ) {
  return (
    <Text
      fontSize={ fontSize || "2xl"}
      fontWeight="bold"
      color={color || STYLES.colors.gray[500]}
      textAlign="center"
      mt={mt || 3}
      marginLeft={ marginLeft || "center" }
      >
      {children}
    </Text>
  );
}
