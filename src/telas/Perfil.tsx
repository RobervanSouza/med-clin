import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Paciente } from "../interfaces/Paciente";
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Botao } from "../components/Button";

export default function Perfil({ navigation } : any) {
  const [dadoPaciente, setDadosPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function dadosDoPaciente() {
      const pacienteId = await AsyncStorage.getItem("pacienteId");
      if (!pacienteId) return null;

      const response = await pegarDadosPaciente(pacienteId);
      if (response) {
        setDadosPaciente(response);
        console.log(response);
      }
    }
    dadosDoPaciente();
  }, []);

  function Deslogar() {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("pacienteId");
    navigation.replace('Login')
  }

  return (
    <ScrollView flex={1} mt={14}>
      <VStack flex={1} alignItems="center" p={15}>
        <Titulo color={STYLES.colors.blue2[500]}> Meu Perfil </Titulo>
        <Avatar
          source={{
            uri: dadoPaciente.imagem,
          }}
          mt={13}
          size="xl"
        />
        <Titulo mt={14} color={STYLES.colors.blue2[500]}>
          Informações pessoais:
        </Titulo>
        <Titulo fontSize="lg"> {dadoPaciente.nome} </Titulo>
        <Text mt={2}> {dadoPaciente.email} </Text>
        <Text mt={2}> {dadoPaciente.endereco?.estado} </Text>

        <Divider
          mt={5}
          color="black"
          fontWeight="black"
          width={311}
          height={0.5}
        />
        <Titulo color={STYLES.colors.blue2[500]}>Planos de saúde:</Titulo>
        {dadoPaciente.planosSaude?.map((plano, index) => (
          <Text key={index}> {plano} </Text>
        ))}

        <Botao onPress={Deslogar} >  Deslogar </Botao>
      </VStack>
    </ScrollView>
  );
}
