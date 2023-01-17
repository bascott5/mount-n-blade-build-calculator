/*This is a character build calculator for Mount & Blade: Warband. 
It will start by asking the player about their backstory while telling them the consequence on their character's stats of their choice.
After that the player can freely add to their stats.
They should then be able to save the information and load it back into the website at a later time.
Scaling would feature the inclusion of a seperate build calculator for Bannerlord, as well as other Warband mods.*/
import { Inter } from '@next/font/google'
import Background from '@/components/background';
import { createContext, Dispatch, useReducer } from 'react'
import Attributes from '@/components/attributes';

export const initialState = {
  Level: 1,
  Gender: "",
  Father: "",
  Early_Life: "",
  Adulthood: "",
  Adventuring_Reason: "",
  Attributes: {
    STR: 5,
    AGI: 5,
    INT: 4,
    CHA: 5
  },
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
  Proficiencies: {
    One_Handed_Weapons: 23,
    Two_Handed_Weapons: 15,
    Polearms: 20,
    Archery: 15,
    Crossbows: 15,
    Throwing: 19
  }
}

/*interface test {
  contextState: any,
  contextDispatch: Dispatch<string>
}*/

export const context = createContext<{ contextState: any, contextDispatch: Dispatch<string> } | null>(null);

export default function Home() {
  const reducer = (state: any, action: string) => {
    switch(action) {

      case "inc_STR":
        return {
          ...state,
          Attributes: {
            ...state.Attributes,
            STR: state.Attributes.STR + 1
          }
        }

      case "Male":
        if (state.Gender != "Male") {
          return {
            ...state,
              Gender: "Male",
              Attributes: {
                ...state.Attributes, 
                STR: state.Attributes.STR + 1,
                CHA: state.Attributes.CHA + 1
              }
          }
        }

      case "Female":
        if (state.Gender != "Female") {
          return {
            ...state, 
              Gender: "Female",
              Attributes: {
                ...state.Attributes, 
                AGI: state.Attributes.AGI + 1,
                INT: state.Attributes.INT + 1
              }
          }
        }
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <context.Provider value={{contextState: state, contextDispatch: dispatch}}>
      <Attributes />
    </context.Provider>
  )
}