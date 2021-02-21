"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aluno_schema_1 = require("./aluno.schema");
let AlunosService = class AlunosService {
    constructor(alunoModel) {
        this.alunoModel = alunoModel;
    }
    async create(aluno) {
        const newAluno = new this.alunoModel(aluno);
        try {
            return aluno_schema_1.Aluno.clean(await newAluno.save());
        }
        catch (error) {
            return undefined;
        }
    }
    async readAll() {
        const result = await this.alunoModel.find().exec();
        return result.map(aluno_schema_1.Aluno.clean);
    }
    async readByTia(tia) {
        return await this.alunoModel.findOne({ 'tia': tia });
    }
    async readByCurso(curso) {
        return await this.alunoModel.find({ 'curso': curso }).exec();
    }
    async update(tia, aluno) {
        const query = { 'tia': tia };
        const update = {
            'nome': aluno.nome,
            'curso': aluno.curso,
            'foto': aluno.foto
        };
        const options = { new: true };
        return this.alunoModel.findOneAndUpdate(query, update, options);
    }
    async delete(tia) {
        return await this.alunoModel.findOneAndDelete({ 'tia': tia });
    }
};
AlunosService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Aluno')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AlunosService);
exports.AlunosService = AlunosService;
//# sourceMappingURL=alunos.service.js.map