import { Cargo } from "./cargo";
import { Chamado } from "./chamado";

export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    perfil?: string;
    senha?: string;
    foto?: string;
    cargo: Cargo;
}
