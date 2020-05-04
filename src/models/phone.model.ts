import { Request, Response, NextFunction } from 'express';

export class Phone {

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

    ]
    ];
  }
  getAllPhones(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"]
      }
      let phoneCtrl = model.controller;
      let resp = await phoneCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }
  getPhoneById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ["*"],
        where: {
          id: req.params.id
        }
      }
      let phoneCtrl = model.controller;
      let resp = await phoneCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }
  createPhone(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let phoneCtrl = model.controller;
      let resp = await phoneCtrl.insert(req, null, null);
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