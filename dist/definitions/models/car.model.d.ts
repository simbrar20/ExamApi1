import { Request, Response, NextFunction } from 'express';
export declare class Car {
    _model: any;
    constructor(norm: any);
    getAllCars(model: any): (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getCarById(model: any): (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
