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
