import { Grupo } from "src/modules/grupos/entities/grupo.entity";
import { Jornada } from "src/modules/jornadas/entities/jornada.entity";
import { Jugador } from "src/modules/jugadores/entities/jugadore.entity";
import { Pareja } from "src/modules/parejas/entities/pareja.entity";
import { Fases, Torneo } from "src/modules/torneos/entities/torneo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'partidos' })
export class Partido {

    @PrimaryGeneratedColumn()
    id: number; 


    @ManyToOne(() => Torneo, torneo => torneo.partidos)
    @JoinColumn({ name: 'torneoId' })
    torneo: Torneo;

    @Column()
    fase: 'grupos' | 'octavos' | 'cuartos' | 'semifinales' | 'final' | 'otra';    


    @Column({
        type: 'json',
        nullable: true,
        transformer: {
          to(value: any): string {
              if (typeof value === 'object') {
                  value = JSON.stringify(value);
              }
          
              return value;
          },
          from(value: string): any {
              if (typeof value === 'string') {
                  try {
                    return JSON.parse(value);
                  } catch (e) {
                    return value;
                  }
              }
    
              return value;
          },
          },
      })
    resultado: {
        sets: Array<{
            marcador: string; 
        }>,
        ganador: {
            tipo: 'jugador' | 'pareja'; 
            id: number; 
            setsGanados: number;
            setsPerdidos: number;
            puntosSets: number
        } | null,
        perdedor: {
            tipo: 'jugador' | 'pareja'; 
            id: number; 
            setsGanados: number;
            setsPerdidos: number;
            puntosSets: number
        } | null;
    }; 


    @Column({type: 'boolean', default: false})
    finalizado: boolean
   

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;
    
    @ManyToOne(() => Pareja, { nullable: true })  
    @JoinColumn({ name: 'pareja1Id' })
    pareja1: Pareja;

    @ManyToOne(() => Pareja, { nullable: true })
    @JoinColumn({ name: 'pareja2Id' })
    pareja2: Pareja;

    @ManyToOne(() => Jugador, { nullable: true })
    @JoinColumn({ name: 'jugador1Id' })
    jugador1: Jugador;

    @ManyToOne(() => Jugador, { nullable: true })
    @JoinColumn({ name: 'jugador2Id' })
    jugador2: Jugador;


    @ManyToOne(() => Grupo, { nullable: true })
    @JoinColumn({ name: 'grupoId' })
    grupo: Grupo;


    @ManyToOne(() => Jornada, { nullable: true })
    @JoinColumn({ name: 'jornadaId' })
    jornada: Jornada;
   
}