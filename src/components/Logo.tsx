import { Text, ITagProps, Image, Box } from "native-base";
import { ReactNode } from "react";
import Logo from '../assets/Logo.png';
import { STYLES } from "../styles/styles";



export function LogoMedClin() {
  return (
    <Box alignSelf="center" >

    <Image
        width={73}
        height={84}
        source={Logo}
        alt="logoMedClin"
        
        mt={4}
        />
      <Text color={STYLES.colors.blue3[500]} fontWeight="bold">
        Med-Clin
      </Text>
        </Box>
  );
}
