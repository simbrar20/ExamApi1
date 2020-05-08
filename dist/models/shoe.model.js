"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Shoe {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                brand: { type: String, maxlength: 24 },
                model: { type: String, maxlength: 24 },
                color: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store user clothes model',
            [
                {
                    route: '/get-all-shoes',
                    method: 'GET',
                    callback: this.getAllShoes,
                    requireToken: true,
                },
                {
                    route: '/get-shoe-by-id/:id',
                    method: 'GET',
                    callback: this.getShoesById,
                    requireToken: true,
                },
                {
                    route: '/create-shoes',
                    method: 'POST',
                    callback: this.createShoes,
                    requireToken: true,
                },
                {
                    route: '/update-shoes/id/:id',
                    method: 'PUT',
                    callback: this.updateShoes,
                    requireToken: true,
                },
            ]
        ];
    }
    getAllShoes(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let shoesCtrl = model.controller;
            let resp = yield shoesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getShoesById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let ShoesCtrl = model.controller;
            let resp = yield ShoesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createShoes(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ShoesCtrl = model.controller;
            let resp = yield ShoesCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateShoes(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ShoesCtrl = model.controller;
            let resp = yield ShoesCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Shoe = Shoe;
