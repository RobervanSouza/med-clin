import {
  Text,
  Box,
  Checkbox,
  ScrollView,
} from "native-base";
import { STYLES } from "./styles/styles";

import { Titulo } from "./components/Titulo";
import { Form } from "./components/Form";
import { Botao, BotaoVoltar } from "./components/Button";
import { LogoMedClin } from "./components/Logo";
import { useState } from "react";
import { formulario } from "./utils/DadosFormulario";

export default function Cadastro() {
  const [secao, setSecao] = useState(0);
  const [dados, setDados] = useState({} as any);

  function avancar() {
    if (secao < formulario.length - 1) {
      setSecao(secao + 1);
    }
    else{
      console.log(dados)
    }
  }
  function voltar() {
    if (secao > 0) {
      setSecao(secao - 1);
    }
  }
  const cadastrar = secao === formulario.length -1;

  function atualizarDados(id: string, valor: string) {
    setDados( { ...dados, [id]: valor})
  }
  return (
    <ScrollView flex={1} padding={3}>
      <LogoMedClin />
      <Titulo> {formulario[secao].titulo} </Titulo>
      <Box w="100%">
        <Text fontSize={20} color={STYLES.colors.blue3[500]} fontWeight="bold">
          {" "}
          {formulario[secao].descrição}{" "}
        </Text>
        <Box>
          {formulario[secao]?.entradaTexto?.map((formu) => {
            return (
              <Form
                label={formu.label}
                placeholder={formu.placeholder}
                key={formu.id}
                value={dados[formu.name]}
                secureTextEntry={formu.secureTextEntry}
                onChangeText={(text) => atualizarDados(formu.label, text)}
              />
            );
          })}
        </Box>
        <Box>
          {formulario[secao].checkbox.map((checked) => {
            return (
              <Checkbox key={checked.id} value={checked.value}>
                {checked.value}
              </Checkbox>
            );
          })}
        </Box>
      </Box>

      {secao > 0 && <BotaoVoltar onPress={() => voltar()}>Voltar</BotaoVoltar>}
      <Botao onPress={() => avancar()} mt={4} mb={20}>
        {cadastrar ? "Cadastrar" : "Avançar"}
      </Botao>
    </ScrollView>
  );
}
