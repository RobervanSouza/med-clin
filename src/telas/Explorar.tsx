import { VStack, Text, ScrollView, Box, Avatar } from "native-base";
import { Botao } from "../components/Button";
import { Form } from "../components/Form";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { FoiConsultado } from "../utils/DadosFormulario";
import { useState } from "react";
import { CardConsulta } from "../components/CardConsulta";
import { BuscaEspecialistaEstado } from "../servicos/EspecialistaServico";



export default function Explorar() {
  const [Consultado, setConsultado] = useState(0);
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [busca, setBusca] = useState([]);

  interface Especialista {
    nome: string;
    imagem: string;
    especialidade: string;
  }

 async function buscaDados() {
  if(!especialidade || !busca ) return null;
    const response = await BuscaEspecialistaEstado(estado, especialidade)
    if (response) {
      setBusca(response)
      console.log(response)
    
  }
 }

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
          <Form 
          width="100%" 
          placeholder="Digite a especialidade" 
          value={especialidade}
          onChangeText={setEspecialidade}
          />
          <Form 
          width="100%" 
          placeholder="Digite sua localização"
          value={estado}
          onChangeText={setEstado}
          />
          <Botao width="100%" onPress={buscaDados} >Buscar</Botao>
        </Box>
        <Titulo color={STYLES.colors.blue2[500]}>Resultados da busca</Titulo>
        {busca?.map((especialista: Especialista, index) => 
           (
            <VStack>
            <CardConsulta
            key={index}
            nome={especialista.nome}
            especialidade={especialista.especialidade}
            
            avatar={especialista.imagem}
            botaoNome="Agendar Consulta"
            
            />
            </VStack>
          ))}
      </VStack>
    </ScrollView>
  );
}
