import { VStack, Text, ScrollView, Box, Divider } from "native-base";
import { LogoMedClin } from "../components/Logo";
import { Titulo } from "../components/Titulo";
import { STYLES } from "../styles/styles";
import { Form } from "../components/Form";
import { Botao } from "../components/Button";

export default function Home() {
  return (
    <ScrollView flex={1}>
      <VStack alignItems="center">
        <LogoMedClin />
        <Titulo color={STYLES.colors.blue2[500]}> Boas-Vindas! </Titulo>
        <Box
          mt={5}
          mb={5}
          padding={4}
          borderRadius={8}
          bg="#f9f9f9"
          shadow={8}
          alignItems="center">
          <Form label="" placeholder="Digite a especialidade" />
          <Form label="" placeholder="Digite sua localização" />
          <Botao width="80">Buscar</Botao>
        </Box>
        <Titulo color={STYLES.colors.blue3[500]}>Depoimentos</Titulo>
        <Box width={323} mt={5}>
          <Text color={STYLES.colors.gray[500]}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </Text>
          <Titulo> Julio, 40 anos, são paulo/SP</Titulo>
        </Box>
        <Divider
          mt={5}
          color="black"
          fontWeight="black"
          width={411}
          height={0.5}
        />
        <Box width={323} mt={5} >
          <Text color={STYLES.colors.gray[500]}>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </Text>
          <Titulo> Julio, 40 anos, são paulo/SP</Titulo>
        </Box>
        <Divider
          mt={5}
          color="black"
          fontWeight="black"
          width={411}
          height={0.5}
        />
        <Box width={323} mt={5}>
          <Text color={STYLES.colors.gray[500]}>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores.
          </Text>
          <Titulo> Julio, 40 anos, são paulo/SP</Titulo>
        </Box>
        <Divider
          mb="8"
          color="black"
          fontWeight="black"
          width={411}
          mt={5}
          height={0.5}
        />
      </VStack>
    </ScrollView>
  );
}
