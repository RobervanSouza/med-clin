import { VStack, Text, ScrollView, Box, Avatar } from "native-base";
import { Botao } from "../components/Button";
import { Form } from "../components/Form";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { FoiConsultado } from "../utils/DadosFormulario";
import { useState } from "react";
import { CardConsulta } from "../components/CardConsulta";



export default function Explorar() {
  const [Consultado, setConsultado] = useState(0);

  return (
    <ScrollView>
      <VStack alignItems="center" mb={78}>
        <Box
          mt={5}
          mb={5}
          padding={4}
          borderRadius={8}
          bg="#f9f9f9"
          shadow={8}
          alignItems="center"
          width={321}>
          <Form width="100%" label="" placeholder="Digite a especialidade" />
          <Form width="100%" label="" placeholder="Digite sua localização" />
          <Botao width="100%">Buscar</Botao>
        </Box>
        <Titulo color={STYLES.colors.blue2[500]}>Resultados da busca</Titulo>
        {FoiConsultado[Consultado]?.atendido?.map((consulta) => {
          return (
            <CardConsulta
              nome={consulta.nome}
              especialidade={consulta.especialidade}
           
              avatar={consulta.avatar}
              botaoNome="Agendar Consulta"
              
            />
          );
        })}
      </VStack>
    </ScrollView>
  );
}
