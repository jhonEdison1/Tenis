// usuario.entity.ts
import { Exclude } from 'class-transformer';
import { File } from 'src/modules/files/entities/file.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

export enum rolEnum {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  nombre_a_mostrar: string;

  @Column({
    type: 'enum',
    enum: rolEnum,
    default: rolEnum.USER,
  })
  rol: 'admin' | 'user';

  @Column({ nullable: true })
  contrasena: string;

  @Column({ unique: true, nullable: true })
  correo: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn({ name: 'imagen_perfil_id' })
  imagen_perfil: File;
}
