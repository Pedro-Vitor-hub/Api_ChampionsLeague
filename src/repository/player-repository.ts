import path from "node:path";
import fs from "fs";
import { PlayerModel } from "../module/player-module";
import { json } from "node:stream/consumers";


const datapath = path.join(__dirname, "./football.json");

export const findAllPlayer = async (): Promise<PlayerModel[]> => {
    const rawdata = fs.readFileSync(datapath, 'utf-8');
    let jsonFile = JSON.parse(rawdata);
    return  jsonFile;
}

export const findPlayerById = async (id: number): Promise<PlayerModel[]> =>{
    const rawdata = fs.readFileSync(datapath, 'utf-8');
    let jsonFile = JSON.parse(rawdata);
    if(id){
        jsonFile = jsonFile.find((playerId: PlayerModel) => playerId.id === id);
    }

    return jsonFile;
};

export const insertPlayer = async (player: PlayerModel) => {
    const rawdata = fs.readFileSync(datapath, 'utf-8');
    let jsonFileInsert: PlayerModel[] = JSON.parse(rawdata);

    jsonFileInsert.push(player);

    fs.writeFileSync(
        datapath,
        JSON.stringify(jsonFileInsert, null, 2),
        'utf-8'
    );

    return player;
}

export const deletePlayerById = async (id: number): Promise<PlayerModel | null> =>{
    const rawdata = fs.readFileSync(datapath, 'utf-8');
    let jsonFile: PlayerModel[] = JSON.parse(rawdata);

    const playerIndex = jsonFile.findIndex(
        (player) => player.id === id
    );

    if(playerIndex === -1){
        return null; 
    }

    const [deletedPlayer] = jsonFile.splice(playerIndex, 1);

    fs.writeFileSync(
        datapath,
        JSON.stringify(jsonFile, null,2),
        "utf-8"
    );

    return deletedPlayer;
};

export const UpdatePlayerById = async(id: number, updatedData: Partial<PlayerModel>): Promise<PlayerModel | null> => {
    const rawdata = fs.readFileSync(datapath, 'utf-8');
    let jsonFile: PlayerModel[] = JSON.parse(rawdata);

    const playerIndex = jsonFile.findIndex(
        (player) => player.id === id
    );

    if(playerIndex === -1){
        return null; 
    }

    jsonFile[playerIndex] = {
        ...jsonFile[playerIndex],
        ...updatedData,
        id
    }

    fs.writeFileSync(
        datapath,
        JSON.stringify(jsonFile, null,2),
        "utf-8"
    );

    return jsonFile[playerIndex];
}