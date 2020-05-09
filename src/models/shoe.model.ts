import { Request, Response, NextFunction } from 'express';

export class Shoe {
    _model: any;
    constructor(norm: any) {
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

        }, 'A table to store user Shoe model',
        [
            {
                route: '/get-all-shoes',
                method: 'GET',
                callback: this.getAllShoes,
                requireToken: true,
            },
            {
                route: '/get-shoes-by-id/:id',
                method: 'GET',
                callback: this.getShoesById,
                requireToken: true,
            },
        ]
        ];
    }

    getAllShoes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let shoesCtrl = model.controller;
            let resp = await shoesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getShoesById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            }
            let shoesCtrl = model.controller;
            let resp = await shoesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    set model(model: any) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}