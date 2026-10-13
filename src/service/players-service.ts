import { PlayerModel } from "../module/player-module";
import { deletePlayerById, findAllPlayer, findPlayerById, insertPlayer, UpdatePlayerById } from "../repository/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerData = async () => {
    const data =  await findAllPlayer();
    let response = null;

    if(data) { 
        response = await ok(data);
    }else{
        response = await noContent();
    }
    
    return response;
};

export const getPlayerByIdService = async (id:number) => {
    const dataById = await findPlayerById(id);
    let response = null;

    if(!dataById) { 
        response = await noContent();
    }else{
        response = await ok(dataById);
    }
    
    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;
    if(Object.keys(player).length !== 0){
        await insertPlayer(player);
        response = await created();
    }else {
        response = await badRequest();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {
    const dataById = await deletePlayerById(id)
    let response = null 

    if(!dataById){
        response = await noContent();
    }else {
        response = await ok(dataById);
    }
    return response;
}

export const UpdatePlayerService = async(id: number, updatedData: Partial<PlayerModel>) => {
    const dataById = await UpdatePlayerById(id, updatedData);
    let response = null 

    if(!dataById){
        response = await noContent();
    }else {
        response = await ok(dataById);
    }
    return response;
}