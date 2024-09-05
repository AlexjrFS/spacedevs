import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("planetas")
export class Planetas {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column("varchar")
  nome!: string;
}
