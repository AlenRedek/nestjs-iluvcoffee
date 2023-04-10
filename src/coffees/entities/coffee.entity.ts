import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Flavor } from './flavor.entity';

@Entity() // SQL table Coffee
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() // Join the 2 tables - only the owner-side does this
  @ManyToMany(
    () => Flavor,
    (flavor) => flavor.coffees, // What is Coffee within the Flavor entity
  )
  flavors: Array<string>;
}
