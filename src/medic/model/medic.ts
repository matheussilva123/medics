import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { MedicDTO } from "../dto/medic.dto";

@Entity({name: "medics"})
export class Medic {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({name: 'crmuf', length: 30}) // talvez um id?
    crmuf: string;

    @Column({name: 'nome', length: 40})
    nome: string;

    @Column({name: 'cpf', length:22})
    cpf: string;

    @Column({name: 'telefone', length: 50})
    telefone: string;

    @Column({name: 'email', length: 100})
    email: string;

    @Column({name: 'estado', length: 2})
    estado: string;

    @Column({name: 'endereco', length: 255})
    endereco: string;
        
    @Column({name: 'crm', length: 20})
    crm: string;
    
    @Column({name: 'data_inscricao'})
    data_inscricao: Date;

    @Column({name: 'primeira_inscricao'})
    primeira_inscricao: Date;

    @Column({name: 'situacao', length: 20})
    situacao: string;

    @Column({name: 'especialidade', length: 50})
    especialidade: string;


    static fromDTO(medicDTO: MedicDTO): Medic {
        const medic = new Medic();
        medic.crmuf = medicDTO.crmuf;
        medic.nome = medicDTO.nome;
        medic.cpf = medicDTO.cpf;
        medic.telefone = medicDTO.telefone;
        medic.email = medicDTO.email;
        medic.estado = medicDTO.estado;
        medic.endereco = medicDTO.endereco;
        medic.crm = medicDTO.crm;
        medic.data_inscricao = medicDTO.data_inscricao;
        medic.primeira_inscricao = medicDTO.primeira_inscricao;
        medic.situacao = medicDTO.situacao;
        medic.especialidade = medicDTO.especialidade;
        return medic;
    }

}
