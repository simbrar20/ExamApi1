import { Request, Response, NextFunction } from 'express';
export declare class Phone {
    _model: any;
    constructor(norm: any);
    getAllPhones(model: any): (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getPhoneById(model: any): (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    createPhone(model: any): (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    updatePhone(model: any): (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
