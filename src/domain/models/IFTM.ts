import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

@Entity()
export class IFTM {

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

}