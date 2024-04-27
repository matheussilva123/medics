import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "medics"})
export class Medic {

    @PrimaryColumn({name: 'crmuf', length: 30}) // talvez um id?
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
    
    @Column({name: 'data_incricao'})
    data_incricao: Date;

    @Column({name: 'primeira_incricao'})
    primeira_incricao: Date;

    @Column({name: 'situacao', length: 20})
    situacao: string;

    @Column({name: 'especialidade', length: 50})
    especialidade: string;

}
