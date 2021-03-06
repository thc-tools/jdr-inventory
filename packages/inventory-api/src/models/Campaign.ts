// Libs
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

// Models
import { User } from "./User";

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    creationDate: string;

    @UpdateDateColumn()
    updateDate: string;

    @ManyToOne(() => User)
    gameMaster: User;
}
