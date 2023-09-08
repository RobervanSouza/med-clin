const formulario = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
        name: "nome",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Digite seu email",
        name: "email",
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Insira sua senha",
        secureTextEntry: true,
        name: "senha",
      },
      {
        id: 4,
        label: "Confirme sua senha",
        placeholder: "Insira sua senha",
        secureTextEntry: true,
        name: "confirmaSenha",
      },
      {
        id: 5,
        label: "CPF",
        placeholder: "Insira seu CPF",
        name: "cpf",
      },
      {
        id: 6,
        label: "Foto de perfil",
        placeholder: "Link da foto",
        name: "imagem",
      },
    ],
    checkbox: [],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você:",
    entradaTexto: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Insira seu CEP",
        name: "cep",
      },
      {
        id: 2,
        label: "Rua",
        placeholder: "Nome da rua",
        name: "rua",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Insira seu número",
        name: "numero",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Insira seu complemento",
        name: "complemento",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "(00) 00000-0000",
        name: "telefone",
      },
      {
        id: 6,
        label: "Estado",
        placeholder: "Seu Estado",
        name: "estado",
      },
    ],
    checkbox: [],
  },
  {
    id: 3,
    titulo: "Para finalizar, quais são os seus planos?",
    entradaTexto: [],
    descrição: "Selecione os planos:",
    checkbox: [
      {
        id: 1,
        value: "Sulamerica",
      },
      {
        id: 2,
        value: "Unimed",
      },
      {
        id: 3,
        value: "Bradesco",
      },
      {
        id: 4,
        value: "Amil",
      },
      {
        id: 5,
        value: "Biosaúde",
      },
      {
        id: 6,
        value: "Biovida",
      },
      {
        id: 7,
        value: "Outros",
      },
    ],
  },
];

export { formulario };

const FoiConsultado= [
  {
    atendido: [
      {
        id: 1,
        nome: "Dra. Auriene",
        especialidade: "Dentista",
        data: "22/04/1993",
        avatar: "https://github.com/RobervanSouza.png",
      },
      {
        id: 1,
        nome: "Dra. Alice",
        especialidade: "Clinica Geral",
        data: "19/02/2016",
        avatar: "https://github.com/RobervanSouza.png",
      },
      {
        id: 1,
        nome: "Dra. Beatriz",
        especialidade: "Otorrino",
        data: "20/06/2020",
        avatar: "https://github.com/RobervanSouza.png",
      },
    ],
  },
];
export { FoiConsultado}
const ConsultasPassadas = [
  
  
      {
        id: 1,
        nome: "Dra. Auriene",
        especialidade: "Dentista",
        data: "22/04/1993",
        avatar: "https://github.com/RobervanSouza.png",
      },
      {
        id: 1,
        nome: "Dra. Alice",
        especialidade: "Clinica Geral",
        data: "19/02/2016",
        avatar: "https://github.com/RobervanSouza.png",
      },
      {
        id: 1,
        nome: "Dra. Beatriz",
        especialidade: "Otorrino",
        data: "20/06/2020",
        avatar: "https://github.com/RobervanSouza.png",
      },
    
];
export { ConsultasPassadas}
const Depoimentos = [
  {
    id: 1,
    nome: "Dra. Auriene, 30 anos, Piaui/PI",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    id: 1,
    nome: "Dra. Alice 07 anos, Piaui/PI",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
  {
    id: 1,
    nome: "Dra. Beatriz 03 anos, Piaui/PI",
    text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.",
  },
];
export { Depoimentos}
