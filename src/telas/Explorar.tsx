import { VStack, Text, ScrollView, Box, Avatar } from "native-base";
import { Botao } from "../components/Button";
import { Form } from "../components/Form";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";



export default function Explorar() {
  return (
    <ScrollView>
      <VStack alignItems="center" mb={78} >
        <Box
          mt={5}
          mb={5}
          padding={4}
          borderRadius={8}
          bg="#f9f9f9"
          shadow={8}
          alignItems="center"
          width={321}
          >
            
          <Form width="100%" label="" placeholder="Digite a especialidade" />
          <Form  width="100%" label="" placeholder="Digite sua localização" />
          <Botao width="100%">Buscar</Botao>
        </Box>
        <Titulo color={STYLES.colors.blue2[500]}>Resultados da busca</Titulo>
        <Box
          mt={5}
          mb={5}
          padding={2}
          borderRadius={8}
          bg="#f9f9f9"
          shadow={8}
          width={321}
          justifyContent="flex-start"
          flexDirection="row">
          <Avatar
            source={{
              uri: "https://github.com/RobervanSouza.png",
            }}
            mt={13}
            size="xl"
          />
          <Box p={3}>
            <Titulo marginLeft={-6} fontSize="lg">
              Dr. Robervan Souza
            </Titulo>
            <Text color={STYLES.colors.gray[500]} mt={2}>
              {" "}
              Angiologista{" "}
            </Text>
           
            <Botao marginLeft={-105} width={295} mt={41}>
              Agendar consulta
            </Botao>
          </Box>
        </Box>
        <Box
          mt={5}
          mb={5}
          padding={2}
          borderRadius={8}
          bg="#f9f9f9"
          shadow={8}
          width={321}
          justifyContent="flex-start"
          flexDirection="row">
          <Avatar
            source={{
              uri: "https://github.com/RobervanSouza.png",
            }}
            mt={13}
            size="xl"
          />
          <Box p={3}>
            <Titulo marginLeft={-6} fontSize="lg">
              Dr. Robervan Souza
            </Titulo>
            <Text color={STYLES.colors.gray[500]} mt={2}>
              {" "}
              Angiologista{" "}
            </Text>
           
            <Botao marginLeft={-105} width={295} mt={41}>
              Agendar consulta
            </Botao>
          </Box>
        </Box>
        <Box
          mt={5}
          mb={5}
          padding={2}
          borderRadius={8}
          bg="#f9f9f9"
          shadow={8}
          width={321}
          justifyContent="flex-start"
          flexDirection="row">
          <Avatar
            source={{
              uri: "https://github.com/RobervanSouza.png",
            }}
            mt={13}
            size="xl"
          />
          <Box p={3}>
            <Titulo marginLeft={-6} fontSize="lg">
              Dr. Robervan Souza
            </Titulo>
            <Text color={STYLES.colors.gray[500]} mt={2}>
              {" "}
              Angiologista{" "}
            </Text>
           
            <Botao marginLeft={-105} width={295} mt={41}>
              Agendar consulta
            </Botao>
          </Box>
        </Box>
      </VStack>
    </ScrollView>
  );
}
