import { VStack, Text, ScrollView, Box, Divider } from "native-base";
import { LogoMedClin } from "../components/Logo";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { Form } from "../components/Form";
import { Botao } from "../components/Button";
import { Depoimentos } from "../utils/DadosFormulario";
import { useState } from "react";

export default function Home() {
  const [depoinmentos, setdepoinmentos] = useState(0);
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" justifyContent="flex-start" p={4}>
        <LogoMedClin />
        <Titulo color={STYLES.colors.blue2[500]}> Boas-Vindas! </Titulo>
        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          shadow="1"
          borderRightRadius="md"
          alignItems="center"
          mt={10}>
          <Form width="90%" label="" placeholder="Digite a especialidade" />
          <Form width="90%" label="" placeholder="Digite sua localização" />
          <Botao width="90%">Buscar</Botao>
        </Box>

        <Titulo color={STYLES.colors.blue3[500]}>Depoimentos</Titulo>
        <VStack space={3} w="100%" p={5} >
          <Box width={323} mt={5} mb={3}>
            {Depoimentos.map((depoimentos) => (
              <Box mb={5} key={depoimentos.id}>
                <Text  fontSize={16}>{depoimentos.text}</Text>
                <Titulo fontSize="18"> {depoimentos.nome} </Titulo>
                <Divider
                  mt={5}
                  color="black"
                  fontWeight="black"
                  width={311}
                  height={0.5}
                />
              </Box>
            ))}
          </Box>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
