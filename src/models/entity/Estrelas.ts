import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Planetas } from "./Planetas";

@Entity("estrelas")
export class Estrelas {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column("varchar")
  nome!: string;

  @Column("float")
  ascensao_reta!: number;

  @Column("float")
  decliacao!: number;

  @Column("int")
  blur_radius!: number;

  @Column("int")
  spread_radius!: number; 

  // @ManyToOne(() => Planetas)
  // planeta!: Planetas;

  @Column("int")
  id_conexao!: number;
}