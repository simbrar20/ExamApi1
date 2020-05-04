import { Request, Response, NextFunction } from 'express';
export declare class Test {
    private norm;
    _model: any;
    constructor(norm: any);
    model: any;
    testFunc: (model: any) => (req: Request<import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/admin/Desktop/ExamAPI1/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => void;
}
