export interface PlayerModel {
    id: number;
    name: string;
    club: string;
    position: string;
    nationality: string;
    statistics: {
        matches: number,
        goals: number,
        assists: number,
        shotsOnTarget: number,
        yellowCards: number,
        redCards: number
    };
};