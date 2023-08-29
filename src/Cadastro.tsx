import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Link,
  Checkbox,
} from "native-base";
import { STYLES } from "./styles/styles";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./components/Titulo";
import { Form } from "./components/Form";
import { Botao, BotaoVoltar } from "./components/Button";
import { LogoMedClin } from "./components/Logo";
import { useState } from "react";

export default function Cadastro() {
  const [secao, setSecao] = useState(0);

  const formulario = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos:",
      textoFormulario: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Digite seu nome completo",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Digite seu email",
        },
        {
          id: 3,
          label: "Criar uma senha",
          placeholder: "Digite sua senha",
        },
        {
          id: 4,
          label: "Repetir nova senha",
          placeholder: "Digite sua senha",
        },
      ],
      checkbox: [],
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você:",
      textoFormulario: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Digite seu CEP",
        },
        {
          id: 2,
          label: "Endereço",
          placeholder: "Digite seu endereço",
        },
        {
          id: 3,
          label: "Número",
          placeholder: "Digite número de sua casa",
        },
        {
          id: 5,
          label: "Complemento",
          placeholder: "Insira seu complemento",
        },
        {
          id: 6,
          label: "Telefone",
          placeholder: "(00) 00000-0000",
        },
      ],
      checkbox: [],
    },
    {
      id: 3,
      titulo: "Para finalizar, qual seu plano de saúde?",
      descrição: "Selecione os planos:",
      textoFormulario: [],
      checkbox: [
        {
          id: 1,
          valeu: "Porto Seguro",
        },
        {
          id: 2,
          valeu: "Bradesco",
        },
        {
          id: 3,
          valeu: "Amil",
        },
        {
          id: 4,
          valeu: "Biovida",
        },
        {
          id: 5,
          valeu: "Não tenho plano",
        },
      ],
    },
  ];

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

  return (
    <VStack flex={1} alignItems="center" p={6} justifyContent="center">
      <LogoMedClin />
      <Titulo> {formulario[secao].titulo} </Titulo>
      <Box  w="100%" >
        <Text fontSize={20} color={STYLES.colors.blue3[500]} fontWeight='bold' > {formulario[secao].descrição} </Text>
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
      <Botao onPress={() => avancar()}>Avançar</Botao>
    </VStack>
  );
}
