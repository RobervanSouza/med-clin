import { VStack, Text, ScrollView, Box, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { Botao } from "../components/Button";
import { useEffect, useState } from "react";
import { CardConsulta } from "../components/CardConsulta";
import { ConsultasPassadas, FoiConsultado } from "../utils/DadosFormulario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosConsultas } from "../servicos/PacienteServico";

interface Especialista{
  id: string;
  nome: string;
  imagem: string;
  especialidade: string;
}
interface Consulta {
  id: string;
  data: string;
  especialista: Especialista;
}

export default function Consultas() {

  const [consultasPassadas, setConsultasPassadas] = useState<Consulta[]>([]);
  const [proximasConsultas, setProximasConsultas] = useState<Consulta[]>([]);

   useEffect(() => {
      async function pegarConsultas() {
        const pacienteId = await AsyncStorage.getItem('pacienteId')
        if (!pacienteId) return null;

        const todasConsultas: Consulta[] = await pegarDadosConsultas(pacienteId)

        const momentoCriada = new Date();

        const proximas = todasConsultas.filter((consulta) => new Date(consulta.data) > momentoCriada)

        const passadas = todasConsultas.filter((consulta) => new Date(consulta.data) <= momentoCriada)

        setConsultasPassadas(passadas)
        setProximasConsultas(proximas)
      }
      pegarConsultas();
   }, []);


  return (
    <ScrollView flex={1} padding={3}>
      <VStack flex={1} alignItems="center" mb={63}>
        <Titulo color={STYLES.colors.blue2[500]}>Minhas consultas</Titulo>
        <Botao width="90%">Agendar outra Consultas</Botao>
        <Titulo marginLeft="-35%" mt={5} color={STYLES.colors.blue2[500]}>
          Proxímas consultas
        </Titulo>

        {proximasConsultas?.map((consulta) => (
          <CardConsulta
            key={consulta.id}
            nome={consulta?.especialista?.nome}
            especialidade={consulta?.especialista?.especialidade}
            data={consulta?.data}
            avatar={consulta?.especialista?.imagem}
            foiAgendado
          />
        ))}

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
        {consultasPassadas?.map((consulta) => (
          <CardConsulta
            key={consulta.id}
            nome={consulta?.especialista?.nome}
            especialidade={consulta?.especialista?.especialidade}
            data={consulta?.data}
            avatar={consulta?.especialista?.imagem}
            foiAtendido
          />
        ))}
      </VStack>
    </ScrollView>
  );
}
