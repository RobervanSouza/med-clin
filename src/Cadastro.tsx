import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Link,
  Checkbox,
  ScrollView,
} from "native-base";
import { STYLES } from "./styles/styles";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./components/Titulo";
import { Form } from "./components/Form";
import { Botao, BotaoVoltar } from "./components/Button";
import { LogoMedClin } from "./components/Logo";
import { useState } from "react";
import { formulario } from "./utils/DadosFormulario";
export default function Cadastro() {
  const [secao, setSecao] = useState(0);


  function avancar() {
    if (secao < formulario.length - 1) {
      setSecao(secao + 1);
    }
  }
  function voltar() {
    if (secao > 0) {
      setSecao(secao - 1);
    }
  }


  const cadastrar = secao === formulario.length -1;

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
          {formulario[secao]?.textoFormulario?.map((form) => {
            return <Form label={form.label} placeholder={form.placeholder} />;
          })}
        </Box>
        <Box>
          {formulario[secao].checkbox.map((checked) => {
            return (
              <Checkbox key={checked.id} value={checked.valeu}>
                {checked.valeu}
              </Checkbox>
            );
          })}
        </Box>
      </Box>

      {secao > 0 && <BotaoVoltar onPress={() => voltar()}>Voltar</BotaoVoltar>}
      <Botao mb={12} onPress={() => (cadastrar ? cadastrar() : avancar())}>
        {cadastrar ? "Cadastrar" : "Avançar"}
      </Botao>
    </ScrollView>
  );
}
