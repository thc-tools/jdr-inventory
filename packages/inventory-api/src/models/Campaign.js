// Libs
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Campaign {
    @PrimaryColumn("number")
    id;

    @Column("text")
    firstName;

    @Column("text")
    lastName;

    @Column("text")
    email;
}
