// Libs
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// Models
import { Campaign } from "./Campaign";
import { User } from "./User";

@Entity()
export class Character {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    creationDate: string;

    @UpdateDateColumn()
    updateDate: string;

    @ManyToOne(() => Campaign)
    campaign: Campaign;

    @ManyToOne(() => User)
    user: User;
}
