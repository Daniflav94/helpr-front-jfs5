export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    perfil?: string;
    senha?: string;
    foto?: string;
    cargo: any; // precisa criar interface de cargo
}
