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

    createShoes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let shoesCtrl = model.controller;
            let resp = await shoesCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }

    }

    updateShoes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          let shoesCtrl = model.controller;
          let resp = await shoesCtrl.update(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }

    set model (model: any) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}