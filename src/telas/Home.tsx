import { VStack, Text, ScrollView, Box } from "native-base";
import { LogoMedClin } from "../components/Logo";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { Form } from "../components/Form";
import { Botao } from "../components/Button";

export default function Home() {
  return (
    <ScrollView flex={1}>
      <VStack alignItems="center">
        <LogoMedClin />
        <Titulo color={STYLES.colors.blue2[500]}> Boas-Vindas! </Titulo>
        <Box
          mt={5}
          mb={5}
          padding={4}
          borderRadius={8}
          bg="#f9f9f9" 
          shadow={8} 
        
          alignItems="center">
          <Form  label="" placeholder="Digite a especialidade" />
          <Form label="" placeholder="Digite sua localização" />
          <Botao width="80" >Buscar</Botao>
        </Box>
      </VStack>
    </ScrollView>
  );
}
