import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,

  Link,
  useToast,
} from "native-base";
import { STYLES } from "./styles/styles";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./components/Titulo";
import { Form } from "./components/Form";
import { Botao } from "./components/Button";
import { LogoMedClin } from "./components/Logo";
import { useEffect, useState } from "react";
import { fazerLogin } from "./servicos/autenticacaoServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";


export default function Login( {navigation} : any  ) {

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [carregando, setCarregando] = useState(true);

  const toast = useToast()

  useEffect(() => {
    AsyncStorage.removeItem('token')
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
      navigation.replace("Tela");

      } 
      setCarregando(false)
   }
   verificarLogin();
    
  }, []);

   async function Login() {
    const reponse = await fazerLogin(email, senha)
    if (reponse){
      const {token} = reponse
      AsyncStorage.setItem('token', token)
      const tokenDecotificado = jwtDecode(token) as any
      const pacienteId = tokenDecotificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tela')
    } else {
      toast.show({title: 'Login Error', description: 'Email ou senha não confere', backgroundColor: 'red.500'})
    }
   }
   if (carregando){
    return null
   }

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <LogoMedClin />
      <Titulo>Faça login em sua conta</Titulo>
      <Box width="100%" >
        <FormControl mt={3}>
          <Form  label="Email" placeholder="Digite seu Email" value={email} onChangeText={setEmail}
          secureTextEntry
           />
          <Form  label="Senha" placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry />
        </FormControl>
      </Box>
      <Botao onPress={Login}>Entrar</Botao>
      <Link mt={2}>
        <Text
          color={STYLES.colors.blue3[500]}
          fontSize="16px"
          fontWeight="bold">
          Esqueceu sua senha?
        </Text>
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text fontSize="16px">Ainda não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text
            fontSize="16px"
            marginLeft="8px"
            color={STYLES.colors.blue2[500]}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
