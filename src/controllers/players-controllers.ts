import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerData, UpdatePlayerService } from "../service/players-service";
import { badRequest, noContent } from "../utils/http-helper";
import { PlayerModel } from "../module/player-module";
import { parse } from "node:path";

export const getPlayer = async (req: Request, res: Response) => {
    const response = await getPlayerData();

    res.status(response.statusCode).json(response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({
            message: 'ID inválido'
        });
    }

    const httpResponse = await getPlayerByIdService(id);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const response = await badRequest();
        res.status(response.statusCode).json(response.body);
    }
};

export const postPlayer = async(req: Request, res: Response) => {
    const body = req.body as PlayerModel;
    const httpResponse = await createPlayerService(body);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const response = await badRequest();
        res.status(response.statusCode).json(response.body);
    }

};

export const deletePlayerById  = async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const httpResponse = await deletePlayerService(id);

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({
            message: 'ID inválido'
        });
    }

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const response = await badRequest();
        res.status(response.statusCode).json(response.body);
    }
}

export const UpdatePlayer = async(req: Request, res: Response) => {
    const id = parseInt(String(req.params.id));
    const httpResponse = await UpdatePlayerService(id, req.body);

     if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({
            message: 'ID inválido'
        });
    }

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const response = await badRequest();
        res.status(response.statusCode).json(response.body);
    }
}