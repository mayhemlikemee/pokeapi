import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

  @Get()
  findAll(): string {
    return 'This action returns all items';
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} 
    Qty: ${createItemDto.qty}
    Description: ${createItemDto.description}`;
  }
}
