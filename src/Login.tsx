import { VStack, Image, Text, Box, FormControl, Input } from "native-base";
import Logo from './assets/Logo.png';


export default function Login() {
  return (
      <VStack flex={1} alignItems="center" p={5} >
        <Image source={Logo} alt="logoMedClin" />

        <Text
         fontSize="2xl"
         fontWeight="bold"
         color="gray.500"
         textAlign="center"
         mt={5}
         >
          Faça login em sua conta
        </Text>
        <Box>
          <FormControl mt={3}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
             placeholder="Digite Seu Email"
             size='lg'
             w='100%'
             borderRadius='lg'
             backgroundColor='gray.200'
             shadow={3}
             />
            <FormControl.Label>Senha</FormControl.Label>
            <Input
             placeholder="Digite Sua Senha"
             size='lg'
             w='100%'
             borderRadius='lg'
             backgroundColor='gray.200'
             shadow={3}
             />
           

          </FormControl>
        </Box>

      </VStack>
  );
}
