import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column({ type: "date" })
  createdAt: Date;

  @ManyToOne(() => User,{ eager: true,onDelete: "CASCADE" })
    user: User;
}
