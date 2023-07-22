import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Privacy } from '../constants/privacy.constant';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  privacy: Privacy;

  @Column()
  description: string;

  @Column()
  cep: string;

  @Column()
  streetNumber: number;

  @Column()
  address: string;

  @Column()
  additionalInfo: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ type: 'date' })
  initialDate: Date;

  @Column({ type: 'timestamptz' })
  initialHour: Date;
}
