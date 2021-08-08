import { createContext } from 'react';

type Episode = { 
    title:string;
    members: string;
    thumbanil: string;
    duration: string;
    url: string;
};

type PlayerContextData = { 
    episodeList: Episode[];
    currentEpisodeIndex: number;
};

export const PlayerContext = createContext({} as PlayerContextData);