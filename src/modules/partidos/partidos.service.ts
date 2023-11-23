import { Injectable } from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Partido } from './entities/partido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartidosService {


  constructor(
    @InjectRepository(Partido) private partidoRepository: Repository<Partido> 
  ) { }



  create(createPartidoDto: CreatePartidoDto) {
    return 'This action adds a new partido';
  }

  findAll() {
    return `This action returns all partidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partido`;
  }

  update(id: number, updatePartidoDto: UpdatePartidoDto) {
    return `This action updates a #${id} partido`;
  }

  remove(id: number) {
    return `This action removes a #${id} partido`;
  }
}
