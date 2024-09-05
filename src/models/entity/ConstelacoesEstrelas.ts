import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("constelacao_estrelas")
export class ConstelacoesEstrelas {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column("int")
  constelacao_id!: number;

  @Column("int")
  estrela_id!: number;

}