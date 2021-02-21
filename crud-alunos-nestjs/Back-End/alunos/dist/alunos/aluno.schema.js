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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoSchema = exports.Aluno = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Aluno = class Aluno {
    static clean(aluno) {
        return {
            nome: aluno.nome,
            tia: aluno.tia,
            curso: aluno.curso,
            foto: aluno.foto || 'https://images.unsplash.com/photo-1567960110005-6be7e9f11e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        };
    }
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Aluno.prototype, "nome", void 0);
__decorate([
    mongoose_1.Prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Aluno.prototype, "tia", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Aluno.prototype, "curso", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Aluno.prototype, "foto", void 0);
Aluno = __decorate([
    mongoose_1.Schema()
], Aluno);
exports.Aluno = Aluno;
exports.AlunoSchema = mongoose_1.SchemaFactory.createForClass(Aluno);
//# sourceMappingURL=aluno.schema.js.map