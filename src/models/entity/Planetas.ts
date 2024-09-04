import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Planetas {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  nome!: string;
}
