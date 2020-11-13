// Libs
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn("number")
    id;

    @Column("text")
    name;
}
