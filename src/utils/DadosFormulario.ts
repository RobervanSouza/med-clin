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
