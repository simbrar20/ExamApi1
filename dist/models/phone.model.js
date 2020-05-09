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
class Phone {
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
            }, 'A table to store user phone model',
            [
                {
                    route: '/get-all-phones',
                    method: 'GET',
                    callback: this.getAllPhones,
                    requireToken: true,
                },
                {
                    route: '/get-phone-by-id/:id',
                    method: 'GET',
                    callback: this.getPhoneById,
                    requireToken: true,
                },
                {
                    route: '/create-phone',
                    method: 'POST',
                    callback: this.createPhone,
                    requireToken: true,
                },
                {
                    route: '/update-phone/id/:id',
                    method: 'PUT',
                    callback: this.updatePhone,
                    requireToken: true,
                },
                {
                    route: '/delete-phone/id/:id',
                    method: 'DELETE',
                    callback: this.deletePhone,
                    requireToken: true,
                },
            ]
        ];
    }
    getAllPhones(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let phoneCtrl = model.controller;
            let resp = yield phoneCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getPhoneById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let phoneCtrl = model.controller;
            let resp = yield phoneCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createPhone(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let phoneCtrl = model.controller;
            let resp = yield phoneCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updatePhone(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let phoneCtrl = model.controller;
            let resp = yield phoneCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deletePhone(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let phoneCtrl = model.controller;
            let resp = yield phoneCtrl.remove(req, null, null);
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
exports.Phone = Phone;
