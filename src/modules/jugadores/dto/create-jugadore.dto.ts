import { IsEnum, IsNumber, IsPositive, IsString } from "class-validator";
import { Usuario } from "src/modules/usuarios/entities/usuario.entity";



export class CreateJugadorDto {

  

    @IsString()
    readonly nombre: string    

    @IsEnum(['masculina', 'femenina'])
    readonly rama: 'masculina' | 'femenina'

    @IsEnum(['A', 'B+', 'B', 'C+', 'C', 'D'])
    readonly categoria: 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D'  

    @IsEnum(['A', 'B+', 'B', 'C+', 'C', 'D'])
    readonly categoria_dobles: 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D'  
  
    readonly userid: Usuario


}
