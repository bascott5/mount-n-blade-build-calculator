/*This is a character build calculator for Mount & Blade: Warband. 
It will start by asking the player about their backstory while telling them the consequence on their character's stats of their choice.
After that the player can freely add to their stats.
They should then be able to save the information and load it back into the website at a later time.
Scaling would feature the inclusion of a seperate build calculator for Bannerlord, as well as other Warband mods.*/
import { Inter } from '@next/font/google'
import { useContext, useReducer } from 'react'

export default function Home() {
  const initialState = {
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
      Ironflesh: 0,
      Power_Strike: 0,
      Power_Throw: 0,
      Power_Draw: 0,
      Weapon_Master: 0,
      Shield: 0,
      Athletics: 0,
      Riding: 1,
      Horse_Archery: 0,
      Looting: 0,
      Trainer: 0,
      Tracking: 0,
      Tactics: 0,
      Path_Finding: 0,
      Spotting: 0,
      Inventory_Management: 0,
      Wound_Treatment: 0,
      Surgery: 0,
      First_Aid: 0,
      Engineer: 0,
      Persuasion: 0,
      Prisoner_Management: 0,
      Leadership: 1,
      Trade: 0
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
  const reducer = (state: any, action: string) => {
    switch(action) {
      case "Male":
        return {
          ...state, Attributes: {
            ...state.Attributes, 
            STR: state.Attributes.STR + 1,
            CHA: state.Attributes.CHA + 1
          }
        }
      case "Female":
        return {
          ...state, Attributes: {
            ...state.Attributes, 
            AGI: state.Attributes.AGI + 1,
            INT: state.Attributes.INT + 1
          }
        }
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)
}