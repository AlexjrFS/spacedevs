import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity("constelacoes")
export class Constelacoes {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column("varchar")
  nome!: string;

  @Column("int")
  planeta_id!: number;

}