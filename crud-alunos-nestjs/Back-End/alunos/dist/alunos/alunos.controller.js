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
exports.AlunosController = void 0;
const common_1 = require("@nestjs/common");
const aluno_schema_1 = require("./aluno.schema");
const alunos_service_1 = require("./alunos.service");
let AlunosController = class AlunosController {
    constructor(alunosService) {
        this.alunosService = alunosService;
    }
    async create(aluno) {
        const result = await this.alunosService.create(aluno);
        if (result == undefined) {
            throw new common_1.HttpException('O TIA deve ser único e todos os parâmetros precisam ser informados', common_1.HttpStatus.BAD_REQUEST);
        }
        return result;
    }
    async readAll() {
        return await this.alunosService.readAll();
    }
    async readByTia(params) {
        const result = await this.alunosService.readByTia(params.tia);
        if (result == undefined) {
            throw new common_1.NotFoundException();
        }
        return result;
    }
    async readByCurso(params) {
        return await this.alunosService.readByCurso(params.id);
    }
    async update(params, aluno) {
        const result = await this.alunosService.update(params.tia, aluno);
        if (result == undefined) {
            throw new common_1.NotFoundException();
        }
        return result;
    }
    async delete(params) {
        const result = await this.alunosService.delete(params.tia);
        if (result == undefined) {
            throw new common_1.NotFoundException();
        }
        return result;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aluno_schema_1.Aluno]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "readAll", null);
__decorate([
    common_1.Get(':tia'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "readByTia", null);
__decorate([
    common_1.Get('/cursos/:tia'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "readByCurso", null);
__decorate([
    common_1.Put(':tia'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aluno_schema_1.Aluno]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "update", null);
__decorate([
    common_1.Delete(':tia'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "delete", null);
AlunosController = __decorate([
    common_1.Controller('alunos'),
    __metadata("design:paramtypes", [alunos_service_1.AlunosService])
], AlunosController);
exports.AlunosController = AlunosController;
//# sourceMappingURL=alunos.controller.js.map