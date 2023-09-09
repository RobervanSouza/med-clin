export interface Paciente {
  cpf: string | number;
  nome: string;
  email: string;
  endereco: Endereco;
  senha: string;
  telefone: string;
  possuiPlanoSaude: boolean;
  planosSaude?: number[];
  imagem?: string;
}

export interface Endereco {
  cep: string | number;
  rua: string;
  numero: number;
  complemento?: string;
  estado: string;
}