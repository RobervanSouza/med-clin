import { Avatar, Box, ScrollView, VStack, Text } from "native-base";
import { STYLES } from "../styles/styles";
import { Botao } from "./Button";
import { Titulo } from "./Titulo";

interface CardProps {
  nome: string;
  avatar: string;
  especialidade: string;
  data?: number | string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
  botaoNome?: string;
  onPress?: ( ) => void;
}

export function CardConsulta({
  avatar,
  onPress,
  nome,
  especialidade,
  data,
  foiAgendado,
  foiAtendido,
  botaoNome
}: CardProps) {
  return (
    <ScrollView>
      <VStack>
        <Box
          mt={5}
          mb={5}
          padding={2}
          borderRadius={8}
          bg={foiAtendido ? 'blue.100': 'white'}
          shadow={8}
          width={321}
          justifyContent="flex-start"
          flexDirection="row">
          <Avatar
            source={{
              uri: avatar,
            }}
            mt={13}
            size="xl"
          />
          <Box p={3}>
            <Titulo marginLeft={-69} fontSize="lg">
            {nome}
            </Titulo>
            <Text color={STYLES.colors.gray[500]} mt={2}>
             {especialidade}
            </Text>
            <Text color={STYLES.colors.gray[500]} mt={2}>
              
             {data}
            </Text>
            <Botao marginLeft={-105} width={295} onPress={onPress} >
              {foiAgendado? 'Cancelar consulta': 'Agendar consulta' || botaoNome}
            </Botao>
          </Box>
        </Box>
      </VStack>
    </ScrollView>
  );
}
