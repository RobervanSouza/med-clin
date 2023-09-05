import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";

export default function Perfil() {
  return (
    <ScrollView flex={1} mt={14}>
      <VStack flex={1} alignItems="center" p={15}>
        <Titulo color={STYLES.colors.blue2[500]}> Meu Perfil </Titulo>
        <Avatar
          source={{
            uri: "https://github.com/RobervanSouza.png",
          }}
          mt={13}
          size="xl"
        />
        <Titulo mt={14} color={STYLES.colors.blue2[500]}>
          Informações pessoais:
        </Titulo>
        <Titulo fontSize="lg" >Robervan Souza</Titulo>
        <Text mt={2}  > 07\10\1989</Text>
        <Text mt={2} > Pavussu/Píaui</Text>
        <Divider mt={5} color="black" fontWeight="black" width={311} height={0.5} />
        <Titulo color={STYLES.colors.blue2[500]} >Histórico médico:</Titulo>
        <Text mt={3} >Bronquite</Text>
        <Text mt={3} >Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
