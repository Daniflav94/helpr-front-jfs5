import { Funcionario } from './funcionario';
import { Cliente } from './cliente';

export interface Chamado {
    idChamado?: number;
    titulo: string;
    descricao: string;
    dataAbertura?: string;
    dataFechamento?: string;
    status?: string;
    funcionario: Funcionario;
    cliente: Cliente;
}
