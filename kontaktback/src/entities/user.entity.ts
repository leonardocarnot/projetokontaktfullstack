import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contacts } from "./contact.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ type: "date" })
  createdAt: Date;

  @OneToMany(() => Contacts,  (contacts) => contacts.user)
  contacts: Contacts[];
}
