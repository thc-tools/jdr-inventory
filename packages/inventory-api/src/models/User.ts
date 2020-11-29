import { Column, Index, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @Index({ unique: true })
    email: string;

    @Column()
    @Index({ unique: true })
    username: string;

    @Column({ default: false, nullable: false })
    isActive?: boolean;

    @Column()
    @CreateDateColumn()
    creationDate: Date;

    @Column()
    @UpdateDateColumn()
    updateDate: Date;
}
