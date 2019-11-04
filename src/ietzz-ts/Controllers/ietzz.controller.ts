import { Get, Controller, Post, Body } from "@nestjs/common";
import { async } from "rxjs/internal/scheduler/async";
import { get } from "http";
import { IetzzModel } from "../models/ietzz.model";

@Controller('v1/ietzz')
export class ietzzController{
    constructor(){}

    @Post()
    async create(@Body() model: IetzzModel){
        return model;
    }

    @Get()
    async get(): Promise<IetzzModel[]> {
        return [];
    }

}