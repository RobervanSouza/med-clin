import {
  Text,
  Box,
  ScrollView,
  Checkbox,
  useToast,
} from "native-base";
import { STYLES } from "./styles/styles";

import { Titulo } from "./components/Titulo";
import { Form } from "./components/Form";
import { Botao, BotaoVoltar } from "./components/Button";
import { LogoMedClin } from "./components/Logo";
import { useState } from "react";
import { formulario } from "./utils/DadosFormulario";
import { cadastrarPaciente } from "./servicos/PacienteServico";

export default function Cadastro({ navigation }: any) {
  const [secao, setSecao] = useState(0);
  const [dados, setDados] = useState({} as any);
  const [planos, setPlanos] = useState([] as number[]); //3 vetor de numeros
  const toast = useToast();

  function avancar() {
    if (secao < formulario.length - 1) {
      setSecao(secao + 1);
    } else {
      console.log(dados);
      
      cadastrar();
    }
  }
  function voltar() {
    if (secao > 0) {
      setSecao(secao - 1);
    }
  }
  const cadastrarBotao = secao === formulario.length - 1;

  function atualizarDados(id: string, valor: string) {
    setDados({ ...dados, [id]: valor });
  }

  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento,
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem,
    });

    if (resultado) {
      toast.show({
        title: "Cadastro realizado com sucesso",
        description: "Você já pode fazer login",
        backgroundColor: "green.500",
      });
      navigation.replace("Login");
    } else {
      toast.show({
        title: "Erro ao cadastrar",
        description: "Verifique os dados e tente novamente",
        backgroundColor: "red.500",
      });
    }
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
                onChangeText={(text) => atualizarDados(formu.name, text)}
              />
            );
          })}
        </Box>
        <Box>
          {formulario[secao].checkbox.map((checked) => {
            return (
              <Checkbox
                key={checked.id}
                value={checked.value}
                onChange={() =>
                  setPlanos((planosAnteriores) => {
                    if (planosAnteriores.includes(checked.id)) {
                      return planosAnteriores.filter((id) => id !== checked.id);
                    }
                    return [...planosAnteriores, checked.id];
                  })
                }
                isChecked={planos.includes(checked.id)}>
                {checked.value}
              </Checkbox>
            );
          })}
        </Box>
      </Box>

      {secao > 0 && <BotaoVoltar onPress={() => voltar()}>Voltar</BotaoVoltar>}
      <Botao onPress={() => avancar()} mt={4} mb={20}>
        {secao ==2 ? "Cadastrar" : "Avançar"}
      </Botao>
    </ScrollView>
  );
}
