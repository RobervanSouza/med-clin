import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";
import Logo from "./assets/Logo.png";
import { STYLES } from "./styles/styles";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./components/Titulo";
import { Form } from "./components/form";
import { Botao } from "./components/Button";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image
        width={73}
        height={84}
        source={Logo}
        alt="logoMedClin"
        fontSize="2xl"
      />
      <Text color={STYLES.colors.blue3[500]} fontWeight="bold">
        Med-Clin
      </Text>
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <FormControl mt={3}>
          <Form label="Email" placeholder="Digite seu Email" />
          <Form label="Senha" placeholder="Digite sua senha" />
        </FormControl>
      </Box>
          <Botao>Entar</Botao>
      <Link mt={2}>
        <Text
          color={STYLES.colors.blue3[500]}
          fontSize="16px"
          fontWeight="bold">
          Esqueceu sua senha?
        </Text>
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text fontSize="16px">Ainda não tem conta?</Text>
        <TouchableOpacity>
          <Text
            fontSize="16px"
            marginLeft="8px"
            color={STYLES.colors.blue2[500]}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
