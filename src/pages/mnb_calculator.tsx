/*This is a character build calculator for Mount & Blade: Warband. 
It will start by asking the player about their backstory while telling them the consequence on their character's stats of their choice.
After that the player can freely add to their stats.
They should then be able to save the information and load it back into the website at a later time.
Scaling would feature the inclusion of a seperate build calculator for Bannerlord, as well as other Warband mods.*/
import { Inter } from '@next/font/google'
import Background from '@/components/background';
import Attributes from '@/components/attributes';
import Proficiencies from '@/components/proficiencies';
import Skills from '@/components/skills';
import Dropdown from '@/components/dropdown';
import { createContext, Dispatch, useReducer, useContext } from 'react';

interface state {
  Attributes?: {
    [key: string]: number;
  };
  [key: string]: any;
}

interface action {
  type: string;
  payload: { [key: string]: string | number };
}

export const context = createContext<{
  contextState: state;
  contextDispatch: Dispatch<action>;
}>({ contextState: {}, contextDispatch: () => {} });

export const initialState = {
    Level: 1,
    Background: {
      Gender: "",
      Father: "",
      Early_Life: "",
      Adulthood: "",
      Adventuring_Reason: "",
    },
    Attribute_Points: 4,
    Attributes: {
      STR: 5,
      AGI: 5,
      INT: 4,
      CHA: 5
    },
    Skill_Points: 0,
    Skills: {
      Ironflesh: 1,
      Power_Strike: 1,
      Power_Throw: 1,
      Power_Draw: 1,
      Weapon_Master: 1,
      Shield: 1,
      Athletics: 1,
      Riding: 2,
      Horse_Archery: 1,
      Looting: 1,
      Trainer: 1,
      Tracking: 1,
      Tactics: 1,
      Path_Finding: 1,
      Spotting: 1,
      Inventory_Management: 1,
      Wound_Treatment: 1,
      Surgery: 1,
      First_Aid: 1,
      Engineer: 1,
      Persuasion: 1,
      Prisoner_Management: 1,
      Leadership: 2,
      Trade: 1
    },
    Proficiency_Points: 0,
    Proficiencies: {
      One_Handed_Weapons: 23,
      Two_Handed_Weapons: 15,
      Polearms: 20,
      Archery: 15,
      Crossbows: 15,
      Throwing: 19
    },
    Stats: {
      HP: 0
    },
    Denars: 0,
    Renown: 0,
    Honor: 0,
    Equipment: [],
    Limits: {
      STR_Min: 5,
      AGI_Min: 5,
      INT_Min: 4,
      CHA_Min: 5,
      Ironflesh_Min: 0,
      Power_Strike_Min: 0,
      Power_Throw_Min: 0,
      Power_Draw_Min: 0,
      Weapon_Master_Min: 0,
      Shield_Min: 0,
      Athletics_Min: 0,
      Riding_Min: 0,
      Horse_Archery_Min: 0,
      Looting_Min: 0,
      Trainer_Min: 0,
      Tracking_Min: 0,
      Tactics_Min: 0,
      Path_Finding_Min: 0,
      Spotting_Min: 0,
      Inventory_Management_Min: 0,
      Wound_Treatment_Min: 0,
      Surgery_Min: 0,
      First_Aid_Min: 0,
      Engineer_Min: 0,
      Persuasion_Min: 0,
      Prisoner_Management_Min: 0,
      Leadership_Min: 0,
      Trade_Min: 0,
      One_Handed_Weapons_Min: 0,
      Two_Handed_Weapons_Min: 0,
      Polearms_Min: 0,
      Archery_Min: 0,
      Crossbows_Min: 0,
      Throwing_Min: 0
    }
  };

  const reducer = (state: state, action: action) => {
    const { type, payload } = action;
    switch (type) {
      case 'inc_Attributes': {
        const { Attributes } = state;
        return {
          ...state,
          Attributes: Object.entries(Attributes!).reduce(
            (acc, [key, value]) =>
              payload[key]
                ? { ...acc, [key]: value + Number(payload[key]) }
                : { ...acc, [key]: value },
            {}
          ),
        };
      }
      case 'dec_Attributes': {
        const { Attributes } = state;
        return {
          ...state,
          Attributes: Object.entries(Attributes!).reduce(
            (acc, [key, value]) =>
              payload[key]
                ? { ...acc, [key]: value - Number(payload[key]) }
                : { ...acc, [key]: value },
            {}
          ),
        };
      }
      default: {
        return { ...state };
      }
    }
  };

  export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <context.Provider value={{ contextState: state, contextDispatch: dispatch }}>
        <Attributes />
      </context.Provider>
    );
  }