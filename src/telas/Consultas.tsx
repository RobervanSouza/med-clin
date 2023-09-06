import { VStack, Text, ScrollView, Box, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { Botao } from "../components/Button";
import { useState } from "react";
import { CardConsulta } from "../components/CardConsulta";
import { ConsultasPassadas, FoiConsultado } from "../utils/DadosFormulario";


export default function Consultas() {
  const [Consultas, setConsultas] = useState(0);
  const [Consultado, setConsultado] = useState(0);
  return (
    <ScrollView flex={1} padding={3}>
      <VStack flex={1} alignItems="center" mb={63}>
        <Titulo color={STYLES.colors.blue2[500]}>Minhas consultas</Titulo>
        <Botao width="90%">Agendar outra Consultas</Botao>
        <Titulo marginLeft="-35%" mt={5} color={STYLES.colors.blue2[500]}>
          Proxímas consultas
        </Titulo>

        <CardConsulta
          nome={ConsultasPassadas[Consultas].nome}
          especialidade={ConsultasPassadas[Consultas].especialidade}
          data={ConsultasPassadas[Consultas].data}
          avatar={ConsultasPassadas[Consultas].avatar}
          foiAgendado
        />

        <Divider
          mt={5}
          color="black"
          fontWeight="black"
          width={311}
          height={0.5}
        />
        <Titulo marginLeft="-35%" mt={5} color={STYLES.colors.blue2[500]}>
          Consultas passadas
        </Titulo>
       {
        FoiConsultado[Consultado]?.atendido?.map((consulta) => {
          return (
            <CardConsulta
              nome={consulta.nome}
              especialidade={consulta.especialidade}
              data={consulta.data}
              avatar={consulta.avatar}
              foiAtendido
            />
          );
        })
       }
      </VStack>
    </ScrollView>
  );
}
