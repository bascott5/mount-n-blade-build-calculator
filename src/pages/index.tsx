/*This is a character build calculator for Mount & Blade: Warband. 
It will start by asking the player about their backstory while telling them the consequence on their character's stats of their choice.
After that the player can freely add to their stats.
They should then be able to save the information and load it back into the website at a later time.
Scaling would feature the inclusion of a seperate build calculator for Bannerlord, as well as other Warband mods.*/
import { Inter } from '@next/font/google'
import { createContext, Dispatch, useEffect, useReducer } from 'react'
import Background from '@/components/background';
import Attributes from '@/components/attributes';
import Proficiencies from '@/components/proficiencies';
import Skills from '@/components/skills';
import Dropdown from '@/components/dropdown';
import App from '@/pages/mnb_calculator'

export const context = createContext<{ contextState: any, contextDispatch: Dispatch<string> } | null>(null);

export const initialState = {
  Level: 1,
  Background: {
    Gender: "Male",
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
}

export default function Home() {
  const reducer = (state: any, action: string) => {
    switch(action) {
      case "inc_STR":
        if (state.Attribute_Points > 0){
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
              STR: state.Attributes.STR + 1
            },
            Attribute_Points: state.Attribute_Points - 1
          }
        } else {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR = state.Attributes.STR
              }
            }
          }
        case "inc_AGI":
          if (state.Attribute_Points > 0){
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                AGI: state.Attributes.AGI + 1
              },
              Attribute_Points: state.Attribute_Points - 1
            }
          } else {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                AGI: state.Attributes.AGI = state.Attributes.AGI
              }
            }
          }
        case "inc_INT":
          if (state.Attribute_Points > 0){
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                INT: state.Attributes.INT + 1
              },
              Attribute_Points: state.Attribute_Points - 1
            }
          } else {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                INT: state.Attributes.INT = state.Attributes.INT
              }
            }
          }
          case "inc_CHA":
            if (state.Attribute_Points > 0){
              return {
                ...state,
                Attributes: {
                  ...state.Attributes,
                  CHA: state.Attributes.CHA + 1
                },
                Attribute_Points: state.Attribute_Points - 1
              }
            } else {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                CHA: state.Attributes.CHA = state.Attributes.CHA
              }
            }
          }
          case "dec_STR":
            if (state.Attributes.STR > state.Limits.STR_Min){
              return {
                ...state,
                Attributes: {
                  ...state.Attributes,
                  STR: state.Attributes.STR - 1
                },
                Attribute_Points: state.Attribute_Points + 1
              }
            } else {
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                    STR: state.Attributes.STR = state.Attributes.STR
                  }
                }
              }
            case "dec_AGI":
              if (state.Attributes.AGI > state.Limits.AGI_Min){
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                    AGI: state.Attributes.AGI - 1
                  },
                  Attribute_Points: state.Attribute_Points + 1
                }
              } else {
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                    AGI: state.Attributes.AGI = state.Attributes.AGI
                  }
                }
              }
            case "dec_INT":
              if (state.Attributes.INT > state.Limits.INT_Min){
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                    INT: state.Attributes.INT - 1
                  },
                  Attribute_Points: state.Attribute_Points + 1
                }
              } else {
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                    INT: state.Attributes.INT = state.Attributes.INT
                  }
                }
              }
              case "dec_CHA":
                if (state.Attributes.CHA > state.Limits.CHA_Min){
                  return {
                    ...state,
                    Attributes: {
                      ...state.Attributes,
                      CHA: state.Attributes.CHA - 1
                    },
                    Attribute_Points: state.Attribute_Points + 1
                  }
                } else {
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                    CHA: state.Attributes.CHA = state.Attributes.CHA
                  }
                }
              }

      //PROFICIENCIES
      case "inc_One_Handed_Weapons":
        if ((state.Proficiency_Points > 0) && (state.Proficiencies > 0)) { //TODO: Add second check to all proficiency statements
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons = state.Proficiencies.One_Handed_Weapons
            }
          }
        }
      case "inc_Two_Handed_Weapons":
        if (state.Proficiency_Points > 0) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons = state.Proficiencies.Two_Handed_Weapons
            }
          }
        }
      case "inc_Polearms":
        if (state.Proficiency_Points > 0) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Polearms: state.Proficiencies.Polearms + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Polearms: state.Proficiencies.Polearms = state.Proficiencies.Polearms
            }
          }
        }
      case "inc_Archery":
        if (state.Proficiency_Points > 0) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Archery: state.Proficiencies.Archery + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Archery: state.Proficiencies.Archery = state.Proficiencies.Archery
            }
          }
        }
      case "inc_Crossbows":
        if (state.Proficiency_Points > 0) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Crossbows: state.Proficiencies.Crossbows + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Crossbows: state.Proficiencies.Crossbows = state.Proficiencies.Crossbows
            }
          }
        }
      case "inc_Throwing":
        if (state.Proficiency_Points > 0) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Throwing: state.Proficiencies.Throwing + 1  
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Throwing: state.Proficiencies.Throwing = state.Proficiencies.Throwing
            }
          }
        }
        case "dec_One_Handed_Weapons":
        if (state.Proficiencies.One_Handed_Weapons > state.Limits.One_Handed_Weapons_Min) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 1
            },
            Proficiency_Points: state.Proficiency_Points + 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons = state.Proficiencies.One_Handed_Weapons
            }
          }
        }
      case "dec_Two_Handed_Weapons":
        if (state.Proficiencies.Two_Handed_Weapons > state.Limits.Two_Handed_Weapons_Min) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 1
            },
            Proficiency_Points: state.Proficiency_Points + 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons = state.Proficiencies.Two_Handed_Weapons
            }
          }
        }
      case "dec_Polearms":
        if (state.Proficiencies.Polearms > state.Limits.Polearms_Min) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Polearms: state.Proficiencies.Polearms - 1
            },
            Proficiency_Points: state.Proficiency_Points + 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Polearms: state.Proficiencies.Polearms = state.Proficiencies.Polearms
            }
          }
        }
      case "dec_Archery":
        if (state.Proficiencies.Archery > state.Limits.Archery_Min) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Archery: state.Proficiencies.Archery - 1
            },
            Proficiency_Points: state.Proficiency_Points + 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Archery: state.Proficiencies.Archery = state.Proficiencies.Archery
            }
          }
        }
      case "dec_Crossbows":
        if (state.Proficiencies.Crossbows > state.Limits.Crossbows_Min) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Crossbows: state.Proficiencies.Crossbows - 1
            },
            Proficiency_Points: state.Proficiency_Points + 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Crossbows: state.Proficiencies.Crossbows = state.Proficiencies.Crossbows
            }
          }
        }
      case "dec_Throwing":
        if (state.Proficiencies.Throwing > state.Limits.Throwing_Min) {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Throwing: state.Proficiencies.Throwing - 1  
            },
            Proficiency_Points: state.Proficiency_Points + 1
          }
        } else {
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Throwing: state.Proficiencies.Throwing = state.Proficiencies.Throwing
            }
          }
        }

      //SKILLS
      case "inc_Ironflesh":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Ironflesh: state.Skills.Ironflesh = state.Skills.Ironflesh
              }
            }
          }
      case "inc_Power_Strike":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Power_Strike: state.Skills.Power_Strike + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Power_Strike: state.Skills.Power_Strike = state.Skills.Power_Strike
              }
            }
          }
      case "inc_Power_Throw":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Power_Throw: state.Skills.Power_Throw + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Power_Throw: state.Skills.Power_Throw = state.Skills.Power_Throw
              }
            }
          }
      case "inc_Power_Draw":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Power_Draw: state.Skills.Power_Draw + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Power_Draw: state.Skills.Power_Draw = state.Skills.Power_Draw
              }
            }
          }
      case "inc_Weapon_Master":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Weapon_Master: state.Skills.Weapon_Master + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Weapon_Master: state.Skills.Weapon_Master = state.Skills.Weapon_Master
              }
            }
          }
      case "inc_Shield":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Shield: state.Skills.Shield + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Shield: state.Skills.Shield = state.Skills.Shield
              }
            }
          }
      case "inc_Athletics":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Athletics: state.Skills.Athletics + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Athletics: state.Skills.Athletics = state.Skills.Athletics
              }
            }
          }
      case "inc_Riding":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Riding: state.Skills.Riding + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Riding: state.Skills.Riding = state.Skills.Riding
              }
            }
          }
      case "inc_Horse_Archery":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Horse_Archery: state.Skills.Horse_Archery + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Horse_Archery: state.Skills.Horse_Archery = state.Skills.Horse_Archery
              }
            }
          }
      case "inc_Looting":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Looting: state.Skills.Looting + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Looting: state.Skills.Looting = state.Skills.Looting
              }
            }
          }
      case "inc_Trainer":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Trainer: state.Skills.Trainer + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Trainer: state.Skills.Trainer = state.Skills.Trainer
              }
            }
          }
      case "inc_Tracking":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Tracking: state.Skills.Tracking + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Tracking: state.Skills.Tracking = state.Skills.Tracking
              }
            }
          }
      case "inc_Tactics":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Tactics: state.Skills.Tactics + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Tactics: state.Skills.Tactics = state.Skills.Tactics
              }
            }
          }
      case "inc_Path_Finding":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Path_Finding: state.Skills.Path_Finding + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Path_Finding: state.Skills.Path_Finding = state.Skills.Path_Finding
              }
            }
          }
      case "inc_Spotting":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Spotting: state.Skills.Spotting + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Spotting: state.Skills.Spotting = state.Skills.Spotting
              }
            }
          }
      case "inc_Inventory_Management":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Inventory_Management: state.Skills.Inventory_Management + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Inventory_Management: state.Skills.Inventory_Management = state.Skills.Inventory_Management
              }
            }
          }
      case "inc_Wound_Treatment":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Wound_Treatment: state.Skills.Wound_Treatment + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Wound_Treatment: state.Skills.Wound_Treatment = state.Skills.Wound_Treatment
              }
            }
          }
      case "inc_Surgery":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Surgery: state.Skills.Surgery + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Surgery: state.Skills.Surgery = state.Skills.Surgery
              }
            }
          }
      case "inc_First_Aid":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              First_Aid: state.Skills.First_Aid + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                First_Aid: state.Skills.First_Aid = state.Skills.First_Aid
              }
            }
          }
      case "inc_Engineer":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Engineer: state.Skills.Engineer + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Engineer: state.Skills.Engineer = state.Skills.Engineer
              }
            }
          }
      case "inc_Persuasion":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Persuasion: state.Skills.Persuasion + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Persuasion: state.Skills.Persuasion = state.Skills.Persuasion
              }
            }
          }
      case "inc_Prisoner_Management":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Prisoner_Management: state.Skills.Prisoner_Management + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Prisoner_Management: state.Skills.Prisoner_Management = state.Skills.Prisoner_Management
              }
            }
          }
      case "inc_Leadership":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Leadership: state.Skills.Leadership + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Leadership: state.Skills.Leadership = state.Skills.Leadership
              }
            }
          }
      case "inc_Trade":
        if (state.Skill_Points > 0) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Trade: state.Skills.Trade + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Trade: state.Skills.Trade = state.Skills.Trade
              }
            }
          }
      case "dec_Ironflesh":
        if (state.Skills.Ironflesh > state.Limits.Ironflesh_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Ironflesh: state.Skills.Ironflesh = state.Skills.Ironflesh
              }
            }
          }
      case "dec_Power_Strike":
        if (state.Skills.Power_Strike > state.Limits.Power_Strike_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Power_Strike: state.Skills.Power_Strike - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Power_Strike: state.Skills.Power_Strike = state.Skills.Power_Strike
              }
            }
          }
      case "dec_Power_Throw":
        if (state.Skills.Power_Throw > state.Limits.Power_Throw_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Power_Throw: state.Skills.Power_Throw - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Power_Throw: state.Skills.Power_Throw = state.Skills.Power_Throw
              }
            }
          }
      case "dec_Power_Draw":
        if (state.Skills.Power_Draw > state.Limits.Power_Draw_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Power_Draw: state.Skills.Power_Draw - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Power_Draw: state.Skills.Power_Draw = state.Skills.Power_Draw
              }
            }
          }
      case "dec_Weapon_Master":
        if (state.Skills.Weapon_Master > state.Limits.Weapon_Master_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Weapon_Master: state.Skills.Weapon_Master - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Weapon_Master: state.Skills.Weapon_Master = state.Skills.Weapon_Master
              }
            }
          }
      case "dec_Shield":
        if (state.Skills.Shield > state.Limits.Shield_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Shield: state.Skills.Shield - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Shield: state.Skills.Shield = state.Skills.Shield
              }
            }
          }
      case "dec_Athletics":
        if (state.Skills.Athletics > state.Limits.Athletics_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Athletics: state.Skills.Athletics - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Athletics: state.Skills.Athletics = state.Skills.Athletics
              }
            }
          }
      case "dec_Riding":
        if (state.Skills.Riding > state.Limits.Riding_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Riding: state.Skills.Riding - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Riding: state.Skills.Riding = state.Skills.Riding
              }
            }
          }
      case "dec_Horse_Archery":
        if (state.Skills.Horse_Archery > state.Limits.Horse_Archery_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Horse_Archery: state.Skills.Horse_Archery - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Horse_Archery: state.Skills.Horse_Archery = state.Skills.Horse_Archery
              }
            }
          }
      case "dec_Looting":
        if (state.Skills.Looting > state.Limits.Looting_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Looting: state.Skills.Looting - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Looting: state.Skills.Looting = state.Skills.Looting
              }
            }
          }
      case "dec_Trainer":
        if (state.Skills.Trainer > state.Limits.Trainer_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Trainer: state.Skills.Trainer - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Trainer: state.Skills.Trainer = state.Skills.Trainer
              }
            }
          }
      case "dec_Tracking":
        if (state.Skills.Tracking > state.Limits.Tracking_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Tracking: state.Skills.Tracking - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Tracking: state.Skills.Tracking = state.Skills.Tracking
              }
            }
          }
      case "dec_Tactics":
        if (state.Skills.Tactics > state.Limits.Tactics_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Tactics: state.Skills.Tactics - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Tactics: state.Skills.Tactics = state.Skills.Tactics
              }
            }
          }
      case "dec_Path_Finding":
        if (state.Skills.Path_Finding > state.Limits.Path_Finding_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Path_Finding: state.Skills.Path_Finding - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Path_Finding: state.Skills.Path_Finding = state.Skills.Path_Finding
              }
            }
          }
      case "dec_Spotting":
        if (state.Skills.Spotting > state.Limits.Spotting_Min) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Spotting: state.Skills.Spotting - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Spotting: state.Skills.Spotting = state.Skills.Spotting
              }
            }
          }
      case "dec_Inventory_Management":
        if (state.Skills.Inventory_Management > state.Limits.Inventory_Management) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Inventory_Management: state.Skills.Inventory_Management - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Inventory_Management: state.Skills.Inventory_Management = state.Skills.Inventory_Management
              }
            }
          }
      case "dec_Wound_Treatment":
        if (state.Skills.Wound_Treatment > state.Limits.Wound_Treatment) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Wound_Treatment: state.Skills.Wound_Treatment - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Wound_Treatment: state.Skills.Wound_Treatment = state.Skills.Wound_Treatment
              }
            }
          }
      case "dec_Surgery":
        if (state.Skills.Surgery > state.Limits.Surgery) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Surgery: state.Skills.Surgery - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Surgery: state.Skills.Surgery = state.Skills.Surgery
              }
            }
          }
      case "dec_First_Aid":
        if (state.Skills.First_Aid > state.Limits.First_Aid) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              First_Aid: state.Skills.First_Aid - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                First_Aid: state.Skills.First_Aid = state.Skills.First_Aid
              }
            }
          }
      case "dec_Engineer":
        if (state.Skills.Engineer > state.Limits.Engineer) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Engineer: state.Skills.Engineer - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Engineer: state.Skills.Engineer = state.Skills.Engineer
              }
            }
          }
      case "dec_Persuasion":
        if (state.Skills.Persuasion > state.Limits.Persuasion) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Persuasion: state.Skills.Persuasion - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Persuasion: state.Skills.Persuasion = state.Skills.Persuasion
              }
            }
          }
      case "dec_Prisoner_Management":
        if (state.Skills.Prisoner_Management > state.Limits.Prisoner_Management) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Prisoner_Management: state.Skills.Prisoner_Management - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Prisoner_Management: state.Skills.Prisoner_Management = state.Skills.Prisoner_Management
              }
            }
          }
      case "dec_Leadership":
        if (state.Skills.Leadership > state.Limits.Leadership) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Leadership: state.Skills.Leadership - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Leadership: state.Skills.Leadership = state.Skills.Leadership
              }
            }
          }
      case "dec_Trade":
        if (state.Skills.Trade > state.Limits.Trade) {
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Trade: state.Skills.Trade - 1
            },
            Skill_Points: state.Skill_Points + 1
          }
        } else {
            return {
              ...state,
              Skills: {
                ...state.Skills,
                Trade: state.Skills.Trade = state.Skills.Trade
              }
            }
          }
      
      case "changeFromMale":
        if (state.Gender == "Male") {
          return {
            ...state,
              Attributes: state.Attributes = state.Attributes,
              Skills: state.Skills = state.Skills,
              Proficiencies: state.Proficiencies = state.Proficiencies,
              Denars: state.Denars = state.Denars,
              Renown: state.Renown = state.Renown,
              Honor: state.Honor = state.Honor
          }
        } else if (state.Gender == "Female") {
          return {
            ...state,
              Gender: "Male",
              Attributes: {
                ...state.Attributes,
                AGI: state.Attributes.AGI - 1,
                INT: state.Attributes.INT - 1
              }
          }
        } else {
          return {
            ...state,
            Gender: "Male"
          }
        }
      case "changeToMale":
        return {
          ...state,
            Attributes: {
              ...state.Attributes, 
              STR: state.Attributes.STR + 1,
              CHA: state.Attributes.CHA + 1
            }
        }
      case "changeFromFemale":
        if (state.Gender == "Male") {
          return {
            ...state,
              Gender: "Female",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                CHA: state.Attributes.CHA - 1,
              }
          }
        } else if (state.Gender == "Female") {
          return {
            ...state,
              Attributes: state.Attributes = state.Attributes,
              Skills: state.Skills = state.Skills,
              Proficiencies: state.Proficiencies = state.Proficiencies,
              Denars: state.Denars = state.Denars,
              Renown: state.Renown = state.Renown,
              Honor: state.Honor = state.Honor
          }
        } else {
          return {
            ...state,
            Gender: "Female"
          }
        }
      case "changeToFemale":
        return {
          ...state,
            Attributes: {
              ...state.Attributes,
              AGI: state.Attributes.AGI + 1,
              INT: state.Attributes.INT + 1
            }
        }

        case "changeFromNoble": //TODO: Make gender a bool type called isFemale? Or can it stay strings but have no "" and implement gender into the use effect tree
          if (state.Father == "Noble") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Father == "Merchant") {
            return {
              ...state,
              Father: "Noble",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1,
                  Leadership: state.Skills.Leadership - 1,
                  Trade: state.Skills.Trade - 2
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15,
                  Polearms: state.Proficiencies.Polearms - 7
              },
              Denars: state.Denars - 250,
              Renown: state.Renown - 20
            }
          } else if (state.Father == "Warrior") {
            return {
              ...state,
              Father: "Noble",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1,
                  Power_Strike: state.Skills.Power_Strike - 1,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Trainer: state.Skills.Trainer - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                  Polearms: state.Proficiencies.Polearms - 33,
                  Throwing: state.Proficiencies.Throwing - 15
              },
              Denars: state.Denars - 50,
              Renown: state.Renown - 10,
              //Equipment: state.Equipment - "Battered Old Round Shield"
            }
          } else if (state.Father == "Hunter") {
            return {
              ...state,
                Father: "Noble",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 1,
                    AGI: state.Attributes.AGI - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Ironflesh: state.Skills.Ironflesh - 1,
                    Power_Strike: state.Skills.Power_Strike - 1,
                    Weapon_Master: state.Skills.Weapon_Master - 1,
                    Trainer: state.Skills.Trainer - 1,
                    Leadership: state.Skills.Leadership - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                    Polearms: state.Proficiencies.Polearms - 33,
                    Throwing: state.Proficiencies.Throwing - 15
                },
                Denars: state.Denars - 50,
                Renown: state.Renown - 10,
            }
          } else if (state.Father == "Nomad") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Noble",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 10,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Noble",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Power_Draw: state.Skills.Power_Draw - 1,
                      Horse_Archery: state.Skills.Horse_Archery - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 49,
                      Throwing: state.Proficiencies.Throwing - 15
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Noble",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 5,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 20,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
            }
          } else if (state.Father == "Thief") {
            return {
              ...state,
              Father: "Noble",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 3
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Athletics: state.Skills.Athletics - 2,
                  Looting: state.Skills.Looting - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                  Polearms: state.Proficiencies.Polearms - 7,
                  Throwing: state.Proficiencies.Throwing - 31
              },
              Denars: state.Denars - 25,
              //Equipment: state.Equipment + "Throwing Knives"
            }
          } else {
            return {
              ...state,
              Father: "Noble"
            }
          }
        
        case "changeToNoble": //TODO: change all previously made cases to "changeToBlank" and remove the father
          if (state.Gender == "") {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT + 1,
                  CHA: state.Attributes.CHA + 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding + 1,
                  Leadership: state.Skills.Leadership + 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                  Polearms: state.Proficiencies.Polearms + 7
              },
              Denars: state.Denars + 100,
              Renown: state.Renown + 50,
              //Equipment: state.Equipment.push("Battered Old Round Shield", "Banner")
            }
          } else if (state.Gender == "Male") {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT + 1,
                  CHA: state.Attributes.CHA + 2
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding + 1,
                  Leadership: state.Skills.Leadership + 1,
                  Power_Strike: state.Skills.Power_Strike + 1,
                  Weapon_Master: state.Skills.Weapon_Master + 1,
                  Tactics: state.Skills.Tactics + 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                  Polearms: state.Proficiencies.Polearms + 21,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 15
              },
              Denars: state.Denars + 100,
              Renown: state.Renown + 100,
              Honor: state.Honor + 3,
              //Equipment: state.Equipment.push("Battered Old Round Shield", "Banner")
            }
          } else if (state.Gender == "Female") {
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT + 2,
                  CHA: state.Attributes.CHA + 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding + 2,
                  Leadership: state.Skills.Leadership + 1,
                  Wound_Treatment: state.Skills.Wound_Treatment + 1,
                  First_Aid: state.Skills.First_Aid + 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 14,
                  Polearms: state.Proficiencies.Polearms + 7
              },
              Denars: state.Denars + 100,
              Renown: state.Renown + 50,
              //Equipment: state.Equipment + "Battered Old Round Shield" + "Banner"
            }
          }
        
        /*switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT + 1,
                      CHA: state.Attributes.CHA + 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding + 1,
                      Leadership: state.Skills.Leadership + 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                      Polearms: state.Proficiencies.Polearms + 7
                  },
                  Denars: state.Denars + 100,
                  Renown: state.Renown + 50,
                  //Equipment: state.Equipment.push("Battered Old Round Shield", "Banner")
                }
              case "Male":
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT + 1,
                      CHA: state.Attributes.CHA + 2
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding + 1,
                      Leadership: state.Skills.Leadership + 1,
                      Power_Strike: state.Skills.Power_Strike + 1,
                      Weapon_Master: state.Skills.Weapon_Master + 1,
                      Tactics: state.Skills.Tactics + 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                      Polearms: state.Proficiencies.Polearms + 21,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 15
                  },
                  Denars: state.Denars + 100,
                  Renown: state.Renown + 100,
                  Honor: state.Honor + 3,
                  //Equipment: state.Equipment.push("Battered Old Round Shield", "Banner")
                }
              case "Female":
                return {
                  ...state,
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT + 2,
                      CHA: state.Attributes.CHA + 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding + 2,
                      Leadership: state.Skills.Leadership + 1,
                      Wound_Treatment: state.Skills.Wound_Treatment + 1,
                      First_Aid: state.Skills.First_Aid + 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 14,
                      Polearms: state.Proficiencies.Polearms + 7
                  },
                  Denars: state.Denars + 100,
                  Renown: state.Renown + 50,
                  //Equipment: state.Equipment + "Battered Old Round Shield" + "Banner"
                }
            
           }*/

        case "changeFromMerchant":
          if (state.Father == "Noble") {
            if (state.Gender == "") {
              return {
                ...state,
                Father: "Merchant",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Leadership: state.Skills.Leadership - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Polearms: state.Proficiencies.Polearms - 7
                },
                Denars: state.Denars - 100,
                Renown: state.Renown - 50,
                //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
              }
            } else if (state.Gender == "Male") {
              return {
                ...state,
                Father: "Merchant",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 2
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Leadership: state.Skills.Leadership - 1,
                    Power_Strike: state.Skills.Power_Strike - 1,
                    Weapon_Master: state.Skills.Weapon_Master - 1,
                    Tactics: state.Skills.Tactics - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Polearms: state.Proficiencies.Polearms - 21,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15
                },
                Denars: state.Denars - 100,
                Renown: state.Renown - 100,
                Honor: state.Honor - 3,
                //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
              }
            } else if (state.Gender == "Female") {
              return {
                ...state,
                Father: "Merchant",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 2,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 2,
                    Leadership: state.Skills.Leadership - 1,
                    Wound_Treatment: state.Skills.Wound_Treatment - 1,
                    First_Aid: state.Skills.First_Aid - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                    Polearms: state.Proficiencies.Polearms - 7
                },
                Denars: state.Denars - 100,
                Renown: state.Renown - 50,
                //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
              }
            }
          } else if (state.Father == "Merchant") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Father == "Warrior") {
            return {
              ...state,
              Father: "Merchant",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1,
                  Power_Strike: state.Skills.Power_Strike - 1,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Trainer: state.Skills.Trainer - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                  Polearms: state.Proficiencies.Polearms - 33,
                  Throwing: state.Proficiencies.Throwing - 15
              },
              Denars: state.Denars - 50,
              Renown: state.Renown - 10,
              //Equipment: state.Equipment - "Battered Old Round Shield"
            }
          } else if (state.Father == "Hunter") {
            return {
              ...state,
                Father: "Merchant",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 1,
                    AGI: state.Attributes.AGI - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Ironflesh: state.Skills.Ironflesh - 1,
                    Power_Strike: state.Skills.Power_Strike - 1,
                    Weapon_Master: state.Skills.Weapon_Master - 1,
                    Trainer: state.Skills.Trainer - 1,
                    Leadership: state.Skills.Leadership - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                    Polearms: state.Proficiencies.Polearms - 33,
                    Throwing: state.Proficiencies.Throwing - 15
                },
                Denars: state.Denars - 50,
                Renown: state.Renown - 10,
            }
          } else if (state.Father == "Nomad") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Merchant",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 10,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Merchant",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Power_Draw: state.Skills.Power_Draw - 1,
                      Horse_Archery: state.Skills.Horse_Archery - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 49,
                      Throwing: state.Proficiencies.Throwing - 15
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Merchant",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 5,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 20,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
            }
          } else if (state.Father == "Thief") {
            return {
              ...state,
              Father: "Merchant",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 3
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Athletics: state.Skills.Athletics - 2,
                  Looting: state.Skills.Looting - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                  Polearms: state.Proficiencies.Polearms - 7,
                  Throwing: state.Proficiencies.Throwing - 31
              },
              Denars: state.Denars - 25,
              //Equipment: state.Equipment + "Throwing Knives"
            }
          } else {
            return {
              ...state,
              Father: "Merchant"
            }
          }

        case "changeToMerchant":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                INT: state.Attributes.INT + 2,
                CHA: state.Attributes.CHA + 1
            },
            Skills: {
              ...state.Skills,
                Riding: state.Skills.Riding + 1,
                Inventory_Management: state.Skills.Inventory_Management + 1,
                Leadership: state.Skills.Leadership + 1,
                Trade: state.Skills.Trade + 2
            },
            Proficiencies: {
              ...state.Proficiencies,
                Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 15,
                Polearms: state.Proficiencies.Polearms + 7
            },
            Denars: state.Denars + 250,
            Renown: state.Renown + 20
          }

        case "changeFromWarrior":
          if (state.Father == "Noble") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Warrior",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Warrior",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 2
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Tactics: state.Skills.Tactics - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 21,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 100,
                  Honor: state.Honor - 3,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Warrior",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 2,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Leadership: state.Skills.Leadership - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
            }
          } else if (state.Father == "Merchant") {
            return {
              ...state,
              Father: "Warrior",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1,
                  Leadership: state.Skills.Leadership - 1,
                  Trade: state.Skills.Trade - 2
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15,
                  Polearms: state.Proficiencies.Polearms - 7
              },
              Denars: state.Denars - 250,
              Renown: state.Renown - 20
            }
          } else if (state.Father == "Warrior") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Father == "Hunter") {
            return {
              ...state,
                Father: "Warrior",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 1,
                    AGI: state.Attributes.AGI - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Ironflesh: state.Skills.Ironflesh - 1,
                    Power_Strike: state.Skills.Power_Strike - 1,
                    Weapon_Master: state.Skills.Weapon_Master - 1,
                    Trainer: state.Skills.Trainer - 1,
                    Leadership: state.Skills.Leadership - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                    Polearms: state.Proficiencies.Polearms - 33,
                    Throwing: state.Proficiencies.Throwing - 15
                },
                Denars: state.Denars - 50,
                Renown: state.Renown - 10,
            }
          } else if (state.Father == "Nomad") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Warrior",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 10,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Warrior",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Power_Draw: state.Skills.Power_Draw - 1,
                      Horse_Archery: state.Skills.Horse_Archery - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 49,
                      Throwing: state.Proficiencies.Throwing - 15
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Warrior",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 5,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 20,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
            }
          } else if (state.Father == "Thief") {
            return {
              ...state,
              Father: "Warrior",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 3
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Athletics: state.Skills.Athletics - 2,
                  Looting: state.Skills.Looting - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                  Polearms: state.Proficiencies.Polearms - 7,
                  Throwing: state.Proficiencies.Throwing - 31
              },
              Denars: state.Denars - 25,
              //Equipment: state.Equipment + "Throwing Knives"
            }
          } else {
            return {
              ...state,
              Father: "Warrior"
            }
          }

        case "changeToWarrior":
          return {
            ...state,
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR + 1,
                  AGI: state.Attributes.AGI + 1,
                  CHA: state.Attributes.CHA + 1
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh + 1,
                  Power_Strike: state.Skills.Power_Strike + 1,
                  Weapon_Master: state.Skills.Weapon_Master + 1,
                  Trainer: state.Skills.Trainer + 1,
                  Leadership: state.Skills.Leadership + 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 23,
                  Polearms: state.Proficiencies.Polearms + 33,
                  Throwing: state.Proficiencies.Throwing + 15
              },
              Denars: state.Denars + 50,
              Renown: state.Renown + 10,
          }
          
        case "changeFromHunter":
          if (state.Father == "Noble") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Hunter",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Hunter",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 2
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Tactics: state.Skills.Tactics - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 21,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 100,
                  Honor: state.Honor - 3,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Hunter",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 2,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Leadership: state.Skills.Leadership - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
            }
          } else if (state.Father == "Merchant") {
            return {
              ...state,
              Father: "Hunter",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1,
                  Leadership: state.Skills.Leadership - 1,
                  Trade: state.Skills.Trade - 2
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15,
                  Polearms: state.Proficiencies.Polearms - 7
              },
              Denars: state.Denars - 250,
              Renown: state.Renown - 20
            }
          } else if (state.Father == "Warrior") {
            return {
              ...state,
              Father: "Hunter",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1,
                  Power_Strike: state.Skills.Power_Strike - 1,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Trainer: state.Skills.Trainer - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                  Polearms: state.Proficiencies.Polearms - 33,
                  Throwing: state.Proficiencies.Throwing - 15
              },
              Denars: state.Denars - 50,
              Renown: state.Renown - 10,
              //Equipment: state.Equipment - "Battered Old Round Shield"
            }
          } else if (state.Father == "Hunter") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Father == "Nomad") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Hunter",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 10,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Hunter",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Power_Draw: state.Skills.Power_Draw - 1,
                      Horse_Archery: state.Skills.Horse_Archery - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 49,
                      Throwing: state.Proficiencies.Throwing - 15
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Hunter",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 5,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 20,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
            }
          } else if (state.Father == "Thief") {
            return {
              ...state,
              Father: "Hunter",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 3
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Athletics: state.Skills.Athletics - 2,
                  Looting: state.Skills.Looting - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                  Polearms: state.Proficiencies.Polearms - 7,
                  Throwing: state.Proficiencies.Throwing - 31
              },
              Denars: state.Denars - 25,
              //Equipment: state.Equipment + "Throwing Knives"
            }
          } else {
            return {
              ...state,
              Father: "Hunter"
            }
          }

        case "changeToHunter":
              return {
                ...state,
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR + 1,
                    AGI: state.Attributes.AGI + 2
                },
                Skills: {
                  ...state.Skills,
                    Power_Draw: state.Skills.Power_Draw + 1,
                    Athletics: state.Skills.Athletics + 1,
                    Tracking: state.Skills.Tracking + 1,
                    Path_Finding: state.Skills.Path_Finding + 1,
                    Spotting: state.Skills.Spotting + 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 15,
                    Polearms: state.Proficiencies.Polearms + 7,
                    Archery: state.Proficiencies.Archery + 49
                },
                Denars: state.Denars + 30
              }

        case "changeFromNomad":
          if (state.Father == "Noble") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Nomad",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Nomad",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 2
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Tactics: state.Skills.Tactics - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 21,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 100,
                  Honor: state.Honor - 3,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Nomad",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 2,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Leadership: state.Skills.Leadership - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
            }
          } else if (state.Father == "Merchant") {
            return {
              ...state,
              Father: "Nomad",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1,
                  Leadership: state.Skills.Leadership - 1,
                  Trade: state.Skills.Trade - 2
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15,
                  Polearms: state.Proficiencies.Polearms - 7
              },
              Denars: state.Denars - 250,
              Renown: state.Renown - 20
            }
          } else if (state.Father == "Warrior") {
            return {
              ...state,
              Father: "Nomad",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1,
                  Power_Strike: state.Skills.Power_Strike - 1,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Trainer: state.Skills.Trainer - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                  Polearms: state.Proficiencies.Polearms - 33,
                  Throwing: state.Proficiencies.Throwing - 15
              },
              Denars: state.Denars - 50,
              Renown: state.Renown - 10,
              //Equipment: state.Equipment - "Battered Old Round Shield"
            }
          } else if (state.Father == "Hunter") {
            return {
              ...state,
                Father: "Nomad",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 1,
                    AGI: state.Attributes.AGI - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Ironflesh: state.Skills.Ironflesh - 1,
                    Power_Strike: state.Skills.Power_Strike - 1,
                    Weapon_Master: state.Skills.Weapon_Master - 1,
                    Trainer: state.Skills.Trainer - 1,
                    Leadership: state.Skills.Leadership - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                    Polearms: state.Proficiencies.Polearms - 33,
                    Throwing: state.Proficiencies.Throwing - 15
                },
                Denars: state.Denars - 50,
                Renown: state.Renown - 10,
            }
          } else if (state.Father == "Nomad") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Father == "Thief") {
            return {
              ...state,
              Father: "Nomad",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 3
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Athletics: state.Skills.Athletics - 2,
                  Looting: state.Skills.Looting - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                  Polearms: state.Proficiencies.Polearms - 7,
                  Throwing: state.Proficiencies.Throwing - 31
              },
              Denars: state.Denars - 25,
              //Equipment: state.Equipment + "Throwing Knives"
            }
          } else {
            return {
              ...state,
              Father: "Nomad"
            }
          }

          case "changeToNomad":
              switch (state.Gender) {
                case "":
                  return {
                    ...state,
                    Attributes: {
                      ...state.Attributes,
                        STR: state.Attributes.STR + 1,
                        AGI: state.Attributes.AGI + 1,
                        INT: state.Attributes.INT + 1
                    },
                    Skills: {
                      ...state.Skills,
                        Riding: state.Skills.Riding + 2,
                        Path_Finding: state.Skills.Path_Finding + 1,
                    },
                    Proficiencies: {
                      ...state.Proficiencies,
                        One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                        Polearms: state.Proficiencies.Polearms + 7,
                        Archery: state.Proficiencies.Archery + 32,
                        Throwing: state.Proficiencies.Throwing + 7
                    },
                    Denars: state.Denars + 15,
                    Renown: state.Renown + 10,
                    //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                  }
                case "Male":
                  return {
                    ...state,
                    Attributes: {
                      ...state.Attributes,
                        STR: state.Attributes.STR + 1,
                        AGI: state.Attributes.AGI + 1,
                        INT: state.Attributes.INT + 1
                    },
                    Skills: {
                      ...state.Skills,
                        Riding: state.Skills.Riding + 2,
                        Path_Finding: state.Skills.Path_Finding + 1,
                        Power_Draw: state.Skills.Power_Draw + 1,
                        Horse_Archery: state.Skills.Horse_Archery + 1
                    },
                    Proficiencies: {
                      ...state.Proficiencies,
                        One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 2,
                        Polearms: state.Proficiencies.Polearms + 7,
                        Archery: state.Proficiencies.Archery + 49,
                        Throwing: state.Proficiencies.Throwing + 15
                    },
                    Denars: state.Denars + 15,
                    Renown: state.Renown + 20,
                    //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                  }
                case "Female":
                  return {
                    ...state,
                    Attributes: {
                      ...state.Attributes,
                        STR: state.Attributes.STR + 1,
                        AGI: state.Attributes.AGI + 1,
                        INT: state.Attributes.INT + 1
                    },
                    Skills: {
                      ...state.Skills,
                        Riding: state.Skills.Riding + 2,
                        Path_Finding: state.Skills.Path_Finding + 1,
                        Wound_Treatment: state.Skills.Wound_Treatment + 1,
                        First_Aid: state.Skills.First_Aid + 1
                    },
                    Proficiencies: {
                      ...state.Proficiencies,
                        One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 5,
                        Polearms: state.Proficiencies.Polearms + 7,
                        Archery: state.Proficiencies.Archery + 32,
                        Throwing: state.Proficiencies.Throwing + 7
                    },
                    Denars: state.Denars + 20,
                    Renown: state.Renown + 20,
                    //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                  }
                }

        case "changeFromThief":
          if (state.Father == "Noble") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Thief",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Thief",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 2
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Tactics: state.Skills.Tactics - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 21,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 100,
                  Honor: state.Honor - 3,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Thief",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 2,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Leadership: state.Skills.Leadership - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 14,
                      Polearms: state.Proficiencies.Polearms - 7
                  },
                  Denars: state.Denars - 100,
                  Renown: state.Renown - 50,
                  //Equipment: state.Equipment - "Battered Old Round Shield" - "Banner"
                }
            }
          } else if (state.Father == "Merchant") {
            return {
              ...state,
              Father: "Thief",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding - 1,
                  Inventory_Management: state.Skills.Inventory_Management - 1,
                  Leadership: state.Skills.Leadership - 1,
                  Trade: state.Skills.Trade - 2
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 15,
                  Polearms: state.Proficiencies.Polearms - 7
              },
              Denars: state.Denars - 250,
              Renown: state.Renown - 20
            }
          } else if (state.Father == "Warrior") {
            return {
              ...state,
              Father: "Thief",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1,
                  CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1,
                  Power_Strike: state.Skills.Power_Strike - 1,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Trainer: state.Skills.Trainer - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                  Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                  Polearms: state.Proficiencies.Polearms - 33,
                  Throwing: state.Proficiencies.Throwing - 15
              },
              Denars: state.Denars - 50,
              Renown: state.Renown - 10,
              //Equipment: state.Equipment - "Battered Old Round Shield"
            }
          } else if (state.Father == "Hunter") {
            return {
              ...state,
                Father: "Thief",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 1,
                    AGI: state.Attributes.AGI - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Ironflesh: state.Skills.Ironflesh - 1,
                    Power_Strike: state.Skills.Power_Strike - 1,
                    Weapon_Master: state.Skills.Weapon_Master - 1,
                    Trainer: state.Skills.Trainer - 1,
                    Leadership: state.Skills.Leadership - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 23,
                    Polearms: state.Proficiencies.Polearms - 33,
                    Throwing: state.Proficiencies.Throwing - 15
                },
                Denars: state.Denars - 50,
                Renown: state.Renown - 10,
            }
          } else if (state.Father == "Nomad") {
            switch (state.Gender) {
              case "":
                return {
                  ...state,
                  Father: "Thief",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 10,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Male":
                return {
                  ...state,
                  Father: "Thief",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Power_Draw: state.Skills.Power_Draw - 1,
                      Horse_Archery: state.Skills.Horse_Archery - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 2,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 49,
                      Throwing: state.Proficiencies.Throwing - 15
                  },
                  Denars: state.Denars - 15,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
              case "Female":
                return {
                  ...state,
                  Father: "Thief",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1,
                      INT: state.Attributes.INT - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 2,
                      Path_Finding: state.Skills.Path_Finding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      First_Aid: state.Skills.First_Aid - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 5,
                      Polearms: state.Proficiencies.Polearms - 7,
                      Archery: state.Proficiencies.Archery - 32,
                      Throwing: state.Proficiencies.Throwing - 7
                  },
                  Denars: state.Denars - 20,
                  Renown: state.Renown - 20,
                  //Equipment: state.Equipment + "Battered Plain Cavalry Shield"
                }
            }
          } else if (state.Father == "Thief") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else {
            return {
              ...state,
              Father: "Thief"
            }
          }

          case "changeToThief":
              return {
                ...state,
                Attributes: {
                  ...state.Attributes,
                    AGI: state.Attributes.AGI + 3
                },
                Skills: {
                  ...state.Skills,
                    Power_Throw: state.Skills.Power_Throw + 1,
                    Athletics: state.Skills.Athletics + 2,
                    Looting: state.Skills.Looting + 1,
                    Inventory_Management: state.Skills.Inventory_Management + 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 14,
                    Polearms: state.Proficiencies.Polearms + 7,
                    Throwing: state.Proficiencies.Throwing + 31
                },
                Denars: state.Denars + 25,
                //Equipment: state.Equipment + "Throwing Knives"
              }

        case "changeFromPage":
          if (state.Early_Life == "Page") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Early_Life == "Apprentice") {
            return {
              ...state,
              Early_Life: "Page",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                Engineer: state.Skills.Engineer - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Assistant") {
            return {
              ...state,
              Early_Life: "Page",
              Attributes: {
                ...state.Attributes,
                INT: state.Attributes.INT - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Inventory_Management: state.Skills.Inventory_Management - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Urchin") {
            return {
              ...state,
              Early_Life: "Page",
                Attributes: {
                  ...state.Attributes,
                    AGI: state.Attributes.AGI - 1,
                    INT: state.Attributes.INT - 1
                },
                Skills: {
                  ...state.Skills,
                    Looting: state.Skills.Looting - 1,
                    Spotting: state.Skills.Spotting - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                    Throwing: state.Proficiencies.Throwing - 7
                }
            }
          } else if (state.Early_Life == "Steppe Child") {
            return {
              ...state,
              Early_Life: "Page",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Horse_Archery: state.Skills.Horse_Archery - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Archery: state.Proficiencies.Archery - 24,
              },
              Renown: state.Renown - 5
            }
          } else {
            return {
              ...state,
              Early_Life: "Page"
            }
          }

        case "changeToPage":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
              STR: state.Attributes.STR + 1,
              CHA: state.Attributes.CHA + 1
            },
            Skills: {
              ...state.Skills,
              Power_Strike: state.Skills.Power_Strike + 1,
              Persuasion: state.Skills.Persuasion + 1
            },
            Proficiencies: {
              ...state.Proficiencies,
              One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 8,
              Polearms: state.Proficiencies.Polearms + 3
            }
          }

        case "changeFromApprentice":
          if (state.Early_Life == "Page") {
            return {
              ...state,
              Early_Life: "Apprentice",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Power_Strike: state.Skills.Power_Strike - 1,
                Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                Polearms: state.Proficiencies.Polearms - 3
              }
            }
          } else if (state.Early_Life == "Apprentice") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Early_Life == "Assistant") {
            return {
              ...state,
              Early_Life: "Apprentice",
              Attributes: {
                ...state.Attributes,
                INT: state.Attributes.INT - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Inventory_Management: state.Skills.Inventory_Management - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Urchin") {
            return {
              ...state,
              Early_Life: "Apprentice",
                Attributes: {
                  ...state.Attributes,
                    AGI: state.Attributes.AGI - 1,
                    INT: state.Attributes.INT - 1
                },
                Skills: {
                  ...state.Skills,
                    Looting: state.Skills.Looting - 1,
                    Spotting: state.Skills.Spotting - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                    Throwing: state.Proficiencies.Throwing - 7
                }
            }
          } else if (state.Early_Life == "Steppe Child") {
            return {
              ...state,
              Early_Life: "Apprentice",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Horse_Archery: state.Skills.Horse_Archery - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Archery: state.Proficiencies.Archery - 24,
              },
              Renown: state.Renown - 5
            }
          } else {
            return {
              ...state,
              Early_Life: "Apprentice"
            }
          }

        case "changeToApprentice":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
              STR: state.Attributes.STR + 1,
              INT: state.Attributes.INT + 1
            },
            Skills: {
              ...state.Skills,
              Engineer: state.Skills.Engineer + 1,
              Trade: state.Skills.Trade + 1
            }
          }

        case "changeFromAssistant":
          if (state.Early_Life == "Page") {
            return {
              ...state,
              Early_Life: "Assistant",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Power_Strike: state.Skills.Power_Strike - 1,
                Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                Polearms: state.Proficiencies.Polearms - 3
              }
            }
          } else if (state.Early_Life == "Apprentice") {
            return {
              ...state,
              Early_Life: "Assistant",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                Engineer: state.Skills.Engineer - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Assistant") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Early_Life == "Urchin") {
            return {
              ...state,
              Early_Life: "Assistant",
                Attributes: {
                  ...state.Attributes,
                    AGI: state.Attributes.AGI - 1,
                    INT: state.Attributes.INT - 1
                },
                Skills: {
                  ...state.Skills,
                    Looting: state.Skills.Looting - 1,
                    Spotting: state.Skills.Spotting - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                    Throwing: state.Proficiencies.Throwing - 7
                }
            }
          } else if (state.Early_Life == "Steppe Child") {
            return {
              ...state,
              Early_Life: "Assistant",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Horse_Archery: state.Skills.Horse_Archery - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Archery: state.Proficiencies.Archery - 24,
              },
              Renown: state.Renown - 5
            }
          } else {
            return {
              ...state,
              Early_Life: "Assistant"
            }
          }

        case "changeToAssistant":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
              INT: state.Attributes.INT + 1,
              CHA: state.Attributes.CHA + 1
            },
            Skills: {
              ...state.Skills,
              Inventory_Management: state.Skills.Inventory_Management + 1,
              Trade: state.Skills.Trade + 1
            }
          }
          
        case "changeFromUrchin":
          if (state.Early_Life == "Page") {
            return {
              ...state,
              Early_Life: "Urchin",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Power_Strike: state.Skills.Power_Strike - 1,
                Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                Polearms: state.Proficiencies.Polearms - 3
              }
            }
          } else if (state.Early_Life == "Apprentice") {
            return {
              ...state,
              Early_Life: "Urchin",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                Engineer: state.Skills.Engineer - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Assistant") {
            return {
              ...state,
              Early_Life: "Urchin",
              Attributes: {
                ...state.Attributes,
                INT: state.Attributes.INT - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Inventory_Management: state.Skills.Inventory_Management - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Urchin") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Early_Life == "Steppe Child") {
            return {
              ...state,
              Early_Life: "Urchin",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Throw: state.Skills.Power_Throw - 1,
                  Horse_Archery: state.Skills.Horse_Archery - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Archery: state.Proficiencies.Archery - 24,
              },
              Renown: state.Renown - 5
            }
          } else {
            return {
              ...state,
              Early_Life: "Urchin"
            }
          }

        case "changeToUrchin":
          return {
            ...state,
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI + 1,
                  INT: state.Attributes.INT + 1
              },
              Skills: {
                ...state.Skills,
                  Looting: state.Skills.Looting + 1,
                  Spotting: state.Skills.Spotting + 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 8,
                  Throwing: state.Proficiencies.Throwing + 7
              }
          }

        case "changeFromSteppeChild":
          if (state.Early_Life == "Page") {
            return {
              ...state,
              Early_Life: "Steppe Child",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Power_Strike: state.Skills.Power_Strike - 1,
                Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                Polearms: state.Proficiencies.Polearms - 3
              }
            }
          } else if (state.Early_Life == "Apprentice") {
            return {
              ...state,
              Early_Life: "Steppe Child",
              Attributes: {
                ...state.Attributes,
                STR: state.Attributes.STR - 1,
                INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                Engineer: state.Skills.Engineer - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Assistant") {
            return {
              ...state,
              Early_Life: "Steppe Child",
              Attributes: {
                ...state.Attributes,
                INT: state.Attributes.INT - 1,
                CHA: state.Attributes.CHA - 1
              },
              Skills: {
                ...state.Skills,
                Inventory_Management: state.Skills.Inventory_Management - 1,
                Trade: state.Skills.Trade - 1
              }
            }
          } else if (state.Early_Life == "Urchin") {
            return {
              ...state,
              Early_Life: "Steppe Child",
                Attributes: {
                  ...state.Attributes,
                    AGI: state.Attributes.AGI - 1,
                    INT: state.Attributes.INT - 1
                },
                Skills: {
                  ...state.Skills,
                    Looting: state.Skills.Looting - 1,
                    Spotting: state.Skills.Spotting - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                    Throwing: state.Proficiencies.Throwing - 7
                }
            }
          } else if (state.Early_Life == "Steppe Child") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else {
            return {
              ...state,
              Early_Life: "Steppe Child"
            }
          }

        case "changeToSteppeChild":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                STR: state.Attributes.STR + 1,
                AGI: state.Attributes.AGI + 1
            },
            Skills: {
              ...state.Skills,
                Power_Throw: state.Skills.Power_Throw + 1,
                Horse_Archery: state.Skills.Horse_Archery + 1
            },
            Proficiencies: {
              ...state.Proficiencies,
                Archery: state.Proficiencies.Archery + 24,
            },
            Renown: state.Renown + 5
          }
        
        case "changeFromSquire/LadyInWaiting":
          if (state.Adulthood == "Squire/LadyInWaiting") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adulthood == "Troubadour") {
            return {
              ...state,
              Adulthood: "Squire/LadyInWaiting",
              Attributes: {
                ...state.Attributes,
                  CHA: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Path_Finding: state.Skills.Path_Finding - 1,
                  Persuasion: state.Skills.Persuasion - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 19,
                  Crossbows: state.Proficiencies.Crossbows - 16
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Tabard" - "Ragged Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
            }
          } else if (state.Adulthood == "Student") {
            return {
              ...state,
              Adulthood: "Squire/LadyInWaiting",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Wound_Treatment: state.Skills.Wound_Treatment - 1,
                  Surgery: state.Skills.Surgery - 1,
                  Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 15,
                  Crossbows: state.Proficiencies.Crossbows - 32
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Linen Tunic" - "Woolen Hose" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Book (random)"
            }
          } else if (state.Adulthood == "Peddler") {
            return {
              ...state,
                Adulthood: "Squire/LadyInWaiting",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Path_Finding: state.Skills.Path_Finding - 1,
                    Inventory_Management: state.Skills.Inventory_Management - 1,
                    Trade: state.Skills.Trade - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    Polearm: state.Proficiencies.Polearm - 11
                },
                Denars: state.Denars - 90,
                //Equipment: state.Equipment - "Fur Hat" - "Leather Jacket" - "Ragged Leather Boots" - "Leather Gloves" - "Saddle Horses" - "Staff" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Linen" - "Pottery" - "2x Wool" - "Sumpter Horse"
            }
          } else if (state.Adulthood == "Smith") {
            return {
              ...state,
              Adulthood: "Squire/LadyInWaiting",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Tactics: state.Skills.Tactics - 1,
                  Engineer: state.Skills.Engineer - 1,
                  Trade: state.Skills.Trade - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 11
              },
              Denars: state.Denars - 100,
              //Equipment: state.Equipment - "Tunic with Vest" - "Ragged Leather Boots" - "Saddle Horse" - "Balanced Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Tools"
            }
          } else if (state.Adulthood == "Poacher") {
            return {
              ...state,
              Adulthood: "Squire/LadyInWaiting",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Draw: state.Skills.Power_Draw - 1,
                  Athletics: state.Skills.Athletics - 1,
                  Tracking: state.Skills.Tracking - 1,
                  Spotting: state.Skills.Spotting - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Polearm: state.Proficiencies.Polearm - 7,
                  Archery: state.Proficiencies.Archery - 57
              },
              Denars: state.Denars - 10,
              //Equipment: state.Equipment.filter((str: string) => str == "Rawhide Coat" + "Hide Boots" + "Heavy Sumpter Horse" + "Chipped Axe" + "Hunting Bow" + "Barbed Arrows" + "2x Dried Meat" + "2x Furs")
            }
          } else {
            return {
              ...state,
              Adulthood: "Squire/LadyInWaiting"
            }
          }

        case "changeToSquire/LadyInWaiting":
          switch(state.Gender) {
            case "Male":
              return {
                ...state,
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR + 1,
                    AGI: state.Attributes.AGI + 1
                },
                Skills: {
                  ...state.Skills,
                    Power_Strike: state.Skills.Power_Strike + 1,
                    Weapon_Master: state.Skills.Weapon_Master + 1,
                    Riding: state.Skills.Riding + 1,
                    Leadership: state.Skills.Leadership + 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 23,
                    Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 38,
                    Polearms: state.Proficiencies.Polearms + 22,
                    Archery: state.Proficiencies.Archery + 16,
                    Crossbows: state.Proficiencies.Crossbows + 16,
                    Throwing: state.Proficiencies.Throwing + 14
                },
                Denars: state.Denars + 20,
                //Equipment: state.Equipment - "Ragged Leather Jerkin" - "Tattered Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
              }
            case "Female":
              return {
                ...state,
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT + 1,
                    CHA: state.Attributes.CHA + 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding + 1,
                    Wound_Treatment: state.Skills.Wound_Treatment + 1,
                    Persuasion: state.Skills.Persuasion + 2,
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 8,
                    Crossbows: state.Proficiencies.Crossbows + 24
                },
                Denars: state.Denars + 100,
                //Equipment: state.Equipment - "Sturdy Woolen Hood" - "Sturdy Woolen Dress" - "Spirited Courser" - "Dagger" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
              }
            }

        case "changeFromTroubadour":
          if (state.Adulthood == "Squire/LadyInWaiting") {
            switch(state.Gender) {
              case "Male":
                return {
                  ...state,
                  Adulthood: "Troubadour",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 23,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 38,
                      Polearms: state.Proficiencies.Polearms - 22,
                      Archery: state.Proficiencies.Archery - 16,
                      Crossbows: state.Proficiencies.Crossbows - 16,
                      Throwing: state.Proficiencies.Throwing - 14
                  },
                  Denars: state.Denars - 20,
                  //Equipment: state.Equipment - "Ragged Leather Jerkin" - "Tattered Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              case "Female":
                return {
                  ...state,
                  Adulthood: "Troubadour",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      Persuasion: state.Skills.Persuasion - 2,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                      Crossbows: state.Proficiencies.Crossbows - 24
                  },
                  Denars: state.Denars - 100,
                  //Equipment: state.Equipment - "Sturdy Woolen Hood" - "Sturdy Woolen Dress" - "Spirited Courser" - "Dagger" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              }
          } else if (state.Adulthood == "Troubadour") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adulthood == "Student") {
            return {
              ...state,
              Adulthood: "Troubadour",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Wound_Treatment: state.Skills.Wound_Treatment - 1,
                  Surgery: state.Skills.Surgery - 1,
                  Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 15,
                  Crossbows: state.Proficiencies.Crossbows - 32
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Linen Tunic" - "Woolen Hose" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Book (random)"
            }
          } else if (state.Adulthood == "Peddler") {
            return {
              ...state,
                Adulthood: "Troubadour",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Path_Finding: state.Skills.Path_Finding - 1,
                    Inventory_Management: state.Skills.Inventory_Management - 1,
                    Trade: state.Skills.Trade - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    Polearm: state.Proficiencies.Polearm - 11
                },
                Denars: state.Denars - 90,
                //Equipment: state.Equipment - "Fur Hat" - "Leather Jacket" - "Ragged Leather Boots" - "Leather Gloves" - "Saddle Horses" - "Staff" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Linen" - "Pottery" - "2x Wool" - "Sumpter Horse"
            }
          } else if (state.Adulthood == "Smith") {
            return {
              ...state,
              Adulthood: "Troubadour",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Tactics: state.Skills.Tactics - 1,
                  Engineer: state.Skills.Engineer - 1,
                  Trade: state.Skills.Trade - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 11
              },
              Denars: state.Denars - 100,
              //Equipment: state.Equipment - "Tunic with Vest" - "Ragged Leather Boots" - "Saddle Horse" - "Balanced Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Tools"
            }
          } else if (state.Adulthood == "Poacher") {
            return {
              ...state,
              Adulthood: "Troubadour",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Draw: state.Skills.Power_Draw - 1,
                  Athletics: state.Skills.Athletics - 1,
                  Tracking: state.Skills.Tracking - 1,
                  Spotting: state.Skills.Spotting - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Polearm: state.Proficiencies.Polearm - 7,
                  Archery: state.Proficiencies.Archery - 57
              },
              Denars: state.Denars - 10,
              //Equipment: state.Equipment.filter((str: string) => str == "Rawhide Coat" + "Hide Boots" + "Heavy Sumpter Horse" + "Chipped Axe" + "Hunting Bow" + "Barbed Arrows" + "2x Dried Meat" + "2x Furs")
            }
          } else {
            return {
              ...state,
              Adulthood: "Troubadour"
            }
          }

        case "changeFromTroubadour":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                CHA: state.Attributes.CHA + 2
            },
            Skills: {
              ...state.Skills,
                Weapon_Master: state.Skills.Weapon_Master + 1,
                Path_Finding: state.Skills.Path_Finding + 1,
                Persuasion: state.Skills.Persuasion + 1,
                Leadership: state.Skills.Leadership + 1
            },
            Proficiencies: {
              ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 19,
                Crossbows: state.Proficiencies.Crossbows + 16
            },
            Denars: state.Denars + 80,
            //Equipment: state.Equipment - "Sturdy Tabard" - "Ragged Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
          }

        case "changeFromStudent":
          if (state.Adulthood == "Squire/LadyInWaiting") {
            switch(state.Gender) {
              case "Male":
                return {
                  ...state,
                  Adulthood: "Student",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 23,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 38,
                      Polearms: state.Proficiencies.Polearms - 22,
                      Archery: state.Proficiencies.Archery - 16,
                      Crossbows: state.Proficiencies.Crossbows - 16,
                      Throwing: state.Proficiencies.Throwing - 14
                  },
                  Denars: state.Denars - 20,
                  //Equipment: state.Equipment - "Ragged Leather Jerkin" - "Tattered Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              case "Female":
                return {
                  ...state,
                  Adulthood: "Student",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      Persuasion: state.Skills.Persuasion - 2,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                      Crossbows: state.Proficiencies.Crossbows - 24
                  },
                  Denars: state.Denars - 100,
                  //Equipment: state.Equipment - "Sturdy Woolen Hood" - "Sturdy Woolen Dress" - "Spirited Courser" - "Dagger" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              }
          } else if (state.Adulthood == "Troubadour") {
            return {
              ...state,
              Adulthood: "Student",
              Attributes: {
                ...state.Attributes,
                  CHA: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Path_Finding: state.Skills.Path_Finding - 1,
                  Persuasion: state.Skills.Persuasion - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 19,
                  Crossbows: state.Proficiencies.Crossbows - 16
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Tabard" - "Ragged Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
            }
          } else if (state.Adulthood == "Student") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adulthood == "Peddler") {
            return {
              ...state,
                Adulthood: "Student",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Path_Finding: state.Skills.Path_Finding - 1,
                    Inventory_Management: state.Skills.Inventory_Management - 1,
                    Trade: state.Skills.Trade - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    Polearm: state.Proficiencies.Polearm - 11
                },
                Denars: state.Denars - 90,
                //Equipment: state.Equipment - "Fur Hat" - "Leather Jacket" - "Ragged Leather Boots" - "Leather Gloves" - "Saddle Horses" - "Staff" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Linen" - "Pottery" - "2x Wool" - "Sumpter Horse"
            }
          } else if (state.Adulthood == "Smith") {
            return {
              ...state,
              Adulthood: "Student",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Tactics: state.Skills.Tactics - 1,
                  Engineer: state.Skills.Engineer - 1,
                  Trade: state.Skills.Trade - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 11
              },
              Denars: state.Denars - 100,
              //Equipment: state.Equipment - "Tunic with Vest" - "Ragged Leather Boots" - "Saddle Horse" - "Balanced Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Tools"
            }
          } else if (state.Adulthood == "Poacher") {
            return {
              ...state,
              Adulthood: "Student",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Draw: state.Skills.Power_Draw - 1,
                  Athletics: state.Skills.Athletics - 1,
                  Tracking: state.Skills.Tracking - 1,
                  Spotting: state.Skills.Spotting - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Polearm: state.Proficiencies.Polearm - 7,
                  Archery: state.Proficiencies.Archery - 57
              },
              Denars: state.Denars - 10,
              //Equipment: state.Equipment.filter((str: string) => str == "Rawhide Coat" + "Hide Boots" + "Heavy Sumpter Horse" + "Chipped Axe" + "Hunting Bow" + "Barbed Arrows" + "2x Dried Meat" + "2x Furs")
            }
          } else {
            return {
              ...state,
              Adulthood: "Student"
            }
          }

        case "changeFromStudent":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                INT: state.Attributes.INT + 2
            },
            Skills: {
              ...state.Skills,
                Weapon_Master: state.Skills.Weapon_Master + 1,
                Wound_Treatment: state.Skills.Wound_Treatment + 1,
                Surgery: state.Skills.Surgery + 1,
                Persuasion: state.Skills.Persuasion + 1
            },
            Proficiencies: {
              ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 15,
                Crossbows: state.Proficiencies.Crossbows + 32
            },
            Denars: state.Denars + 80,
            //Equipment: state.Equipment - "Sturdy Linen Tunic" - "Woolen Hose" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Book (random)"
          }

        case "changeFromPeddler":
          if (state.Adulthood == "Squire/LadyInWaiting") {
            switch(state.Gender) {
              case "Male":
                return {
                  ...state,
                  Adulthood: "Peddler",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 23,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 38,
                      Polearms: state.Proficiencies.Polearms - 22,
                      Archery: state.Proficiencies.Archery - 16,
                      Crossbows: state.Proficiencies.Crossbows - 16,
                      Throwing: state.Proficiencies.Throwing - 14
                  },
                  Denars: state.Denars - 20,
                  //Equipment: state.Equipment - "Ragged Leather Jerkin" - "Tattered Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              case "Female":
                return {
                  ...state,
                  Adulthood: "Peddler",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      Persuasion: state.Skills.Persuasion - 2,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                      Crossbows: state.Proficiencies.Crossbows - 24
                  },
                  Denars: state.Denars - 100,
                  //Equipment: state.Equipment - "Sturdy Woolen Hood" - "Sturdy Woolen Dress" - "Spirited Courser" - "Dagger" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              }
          } else if (state.Adulthood == "Troubadour") {
            return {
              ...state,
              Adulthood: "Peddler",
              Attributes: {
                ...state.Attributes,
                  CHA: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Path_Finding: state.Skills.Path_Finding - 1,
                  Persuasion: state.Skills.Persuasion - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 19,
                  Crossbows: state.Proficiencies.Crossbows - 16
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Tabard" - "Ragged Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
            }
          } else if (state.Adulthood == "Student") {
            return {
              ...state,
              Adulthood: "Peddler",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Wound_Treatment: state.Skills.Wound_Treatment - 1,
                  Surgery: state.Skills.Surgery - 1,
                  Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 15,
                  Crossbows: state.Proficiencies.Crossbows - 32
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Linen Tunic" - "Woolen Hose" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Book (random)"
            }
          } else if (state.Adulthood == "Peddler") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adulthood == "Smith") {
            return {
              ...state,
              Adulthood: "Peddler",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Tactics: state.Skills.Tactics - 1,
                  Engineer: state.Skills.Engineer - 1,
                  Trade: state.Skills.Trade - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 11
              },
              Denars: state.Denars - 100,
              //Equipment: state.Equipment - "Tunic with Vest" - "Ragged Leather Boots" - "Saddle Horse" - "Balanced Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Tools"
            }
          } else if (state.Adulthood == "Poacher") {
            return {
              ...state,
              Adulthood: "Peddler",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Draw: state.Skills.Power_Draw - 1,
                  Athletics: state.Skills.Athletics - 1,
                  Tracking: state.Skills.Tracking - 1,
                  Spotting: state.Skills.Spotting - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Polearm: state.Proficiencies.Polearm - 7,
                  Archery: state.Proficiencies.Archery - 57
              },
              Denars: state.Denars - 10,
              //Equipment: state.Equipment.filter((str: string) => str == "Rawhide Coat" + "Hide Boots" + "Heavy Sumpter Horse" + "Chipped Axe" + "Hunting Bow" + "Barbed Arrows" + "2x Dried Meat" + "2x Furs")
            }
          } else {
            return {
              ...state,
              Adulthood: "Peddler"
            }
          }

        case "changeToPeddler":
          return {
            ...state,
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT + 1,
                  CHA: state.Attributes.CHA + 1
              },
              Skills: {
                ...state.Skills,
                  Riding: state.Skills.Riding + 1,
                  Path_Finding: state.Skills.Path_Finding + 1,
                  Inventory_Management: state.Skills.Inventory_Management + 1,
                  Trade: state.Skills.Trade + 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Polearm: state.Proficiencies.Polearm + 11
              },
              Denars: state.Denars + 90,
              //Equipment: state.Equipment - "Fur Hat" - "Leather Jacket" - "Ragged Leather Boots" - "Leather Gloves" - "Saddle Horses" - "Staff" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Linen" - "Pottery" - "2x Wool" - "Sumpter Horse"
          }

        case "changeFromSmith":
          if (state.Adulthood == "Squire/LadyInWaiting") {
            switch(state.Gender) {
              case "Male":
                return {
                  ...state,
                  Adulthood: "Smith",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 23,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 38,
                      Polearms: state.Proficiencies.Polearms - 22,
                      Archery: state.Proficiencies.Archery - 16,
                      Crossbows: state.Proficiencies.Crossbows - 16,
                      Throwing: state.Proficiencies.Throwing - 14
                  },
                  Denars: state.Denars - 20,
                  //Equipment: state.Equipment - "Ragged Leather Jerkin" - "Tattered Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              case "Female":
                return {
                  ...state,
                  Adulthood: "Smith",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      Persuasion: state.Skills.Persuasion - 2,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                      Crossbows: state.Proficiencies.Crossbows - 24
                  },
                  Denars: state.Denars - 100,
                  //Equipment: state.Equipment - "Sturdy Woolen Hood" - "Sturdy Woolen Dress" - "Spirited Courser" - "Dagger" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              }
          } else if (state.Adulthood == "Troubadour") {
            return {
              ...state,
              Adulthood: "Smith",
              Attributes: {
                ...state.Attributes,
                  CHA: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Path_Finding: state.Skills.Path_Finding - 1,
                  Persuasion: state.Skills.Persuasion - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 19,
                  Crossbows: state.Proficiencies.Crossbows - 16
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Tabard" - "Ragged Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
            }
          } else if (state.Adulthood == "Student") {
            return {
              ...state,
              Adulthood: "Smith",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Wound_Treatment: state.Skills.Wound_Treatment - 1,
                  Surgery: state.Skills.Surgery - 1,
                  Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 15,
                  Crossbows: state.Proficiencies.Crossbows - 32
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Linen Tunic" - "Woolen Hose" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Book (random)"
            }
          } else if (state.Adulthood == "Peddler") {
            return {
              ...state,
                Adulthood: "Smith",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Path_Finding: state.Skills.Path_Finding - 1,
                    Inventory_Management: state.Skills.Inventory_Management - 1,
                    Trade: state.Skills.Trade - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    Polearm: state.Proficiencies.Polearm - 11
                },
                Denars: state.Denars - 90,
                //Equipment: state.Equipment - "Fur Hat" - "Leather Jacket" - "Ragged Leather Boots" - "Leather Gloves" - "Saddle Horses" - "Staff" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Linen" - "Pottery" - "2x Wool" - "Sumpter Horse"
            }
          } else if (state.Adulthood == "Smith") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adulthood == "Poacher") {
            return {
              ...state,
              Adulthood: "Smith",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  AGI: state.Attributes.AGI - 1
              },
              Skills: {
                ...state.Skills,
                  Power_Draw: state.Skills.Power_Draw - 1,
                  Athletics: state.Skills.Athletics - 1,
                  Tracking: state.Skills.Tracking - 1,
                  Spotting: state.Skills.Spotting - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  Polearm: state.Proficiencies.Polearm - 7,
                  Archery: state.Proficiencies.Archery - 57
              },
              Denars: state.Denars - 10,
              //Equipment: state.Equipment.filter((str: string) => str == "Rawhide Coat" + "Hide Boots" + "Heavy Sumpter Horse" + "Chipped Axe" + "Hunting Bow" + "Barbed Arrows" + "2x Dried Meat" + "2x Furs")
            }
          } else {
            return {
              ...state,
              Adulthood: "Smith"
            }
          }

        case "changeToSmith":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                STR: state.Attributes.STR + 1,
                INT: state.Attributes.INT + 1
            },
            Skills: {
              ...state.Skills,
                Weapon_Master: state.Skills.Weapon_Master + 1,
                Tactics: state.Skills.Tactics + 1,
                Engineer: state.Skills.Engineer + 1,
                Trade: state.Skills.Trade + 1
            },
            Proficiencies: {
              ...state.Proficiencies,
                One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 11
            },
            Denars: state.Denars + 100,
            //Equipment: state.Equipment - "Tunic with Vest" - "Ragged Leather Boots" - "Saddle Horse" - "Balanced Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Tools"
          }

        case "changeFromPoacher":
          if (state.Adulthood == "Squire/LadyInWaiting") {
            switch(state.Gender) {
              case "Male":
                return {
                  ...state,
                  Adulthood: "Poacher",
                  Attributes: {
                    ...state.Attributes,
                      STR: state.Attributes.STR - 1,
                      AGI: state.Attributes.AGI - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Power_Strike: state.Skills.Power_Strike - 1,
                      Weapon_Master: state.Skills.Weapon_Master - 1,
                      Riding: state.Skills.Riding - 1,
                      Leadership: state.Skills.Leadership - 1
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 23,
                      Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons - 38,
                      Polearms: state.Proficiencies.Polearms - 22,
                      Archery: state.Proficiencies.Archery - 16,
                      Crossbows: state.Proficiencies.Crossbows - 16,
                      Throwing: state.Proficiencies.Throwing - 14
                  },
                  Denars: state.Denars - 20,
                  //Equipment: state.Equipment - "Ragged Leather Jerkin" - "Tattered Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              case "Female":
                return {
                  ...state,
                  Adulthood: "Poacher",
                  Attributes: {
                    ...state.Attributes,
                      INT: state.Attributes.INT - 1,
                      CHA: state.Attributes.CHA - 1
                  },
                  Skills: {
                    ...state.Skills,
                      Riding: state.Skills.Riding - 1,
                      Wound_Treatment: state.Skills.Wound_Treatment - 1,
                      Persuasion: state.Skills.Persuasion - 2,
                  },
                  Proficiencies: {
                    ...state.Proficiencies,
                      One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 8,
                      Crossbows: state.Proficiencies.Crossbows - 24
                  },
                  Denars: state.Denars - 100,
                  //Equipment: state.Equipment - "Sturdy Woolen Hood" - "Sturdy Woolen Dress" - "Spirited Courser" - "Dagger" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
                }
              }
          } else if (state.Adulthood == "Troubadour") {
            return {
              ...state,
              Adulthood: "Poacher",
              Attributes: {
                ...state.Attributes,
                  CHA: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Path_Finding: state.Skills.Path_Finding - 1,
                  Persuasion: state.Skills.Persuasion - 1,
                  Leadership: state.Skills.Leadership - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 19,
                  Crossbows: state.Proficiencies.Crossbows - 16
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Tabard" - "Ragged Leather Boots" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish"
            }
          } else if (state.Adulthood == "Student") {
            return {
              ...state,
              Adulthood: "Poacher",
              Attributes: {
                ...state.Attributes,
                  INT: state.Attributes.INT - 2
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Wound_Treatment: state.Skills.Wound_Treatment - 1,
                  Surgery: state.Skills.Surgery - 1,
                  Persuasion: state.Skills.Persuasion - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 15,
                  Crossbows: state.Proficiencies.Crossbows - 32
              },
              Denars: state.Denars - 80,
              //Equipment: state.Equipment - "Sturdy Linen Tunic" - "Woolen Hose" - "Swaybacked Saddle Horse" - "Rusty Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Book (random)"
            }
          } else if (state.Adulthood == "Peddler") {
            return {
              ...state,
                Adulthood: "Poacher",
                Attributes: {
                  ...state.Attributes,
                    INT: state.Attributes.INT - 1,
                    CHA: state.Attributes.CHA - 1
                },
                Skills: {
                  ...state.Skills,
                    Riding: state.Skills.Riding - 1,
                    Path_Finding: state.Skills.Path_Finding - 1,
                    Inventory_Management: state.Skills.Inventory_Management - 1,
                    Trade: state.Skills.Trade - 1
                },
                Proficiencies: {
                  ...state.Proficiencies,
                    Polearm: state.Proficiencies.Polearm - 11
                },
                Denars: state.Denars - 90,
                //Equipment: state.Equipment - "Fur Hat" - "Leather Jacket" - "Ragged Leather Boots" - "Leather Gloves" - "Saddle Horses" - "Staff" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Linen" - "Pottery" - "2x Wool" - "Sumpter Horse"
            }
          } else if (state.Adulthood == "Smith") {
            return {
              ...state,
              Adulthood: "Poacher",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1,
                  Tactics: state.Skills.Tactics - 1,
                  Engineer: state.Skills.Engineer - 1,
                  Trade: state.Skills.Trade - 1
              },
              Proficiencies: {
                ...state.Proficiencies,
                  One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons - 11
              },
              Denars: state.Denars - 100,
              //Equipment: state.Equipment - "Tunic with Vest" - "Ragged Leather Boots" - "Saddle Horse" - "Balanced Sword" - "Hunting Crossbow" - "Bolts" - "Smoked Fish" - "Tools"
            }
          } else if (state.Adulthood == "Poacher") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else {
            return {
              ...state,
              Adulthood: "Poacher"
            }
          }

        case "changeToPoacher":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                STR: state.Attributes.STR + 1,
                AGI: state.Attributes.AGI + 1
            },
            Skills: {
              ...state.Skills,
                Power_Draw: state.Skills.Power_Draw + 1,
                Athletics: state.Skills.Athletics + 1,
                Tracking: state.Skills.Tracking + 1,
                Spotting: state.Skills.Spotting + 1
            },
            Proficiencies: {
              ...state.Proficiencies,
                Polearm: state.Proficiencies.Polearm + 7,
                Archery: state.Proficiencies.Archery + 57
            },
            Denars: state.Denars + 10,
            //Equipment: state.Equipment.filter((str: string) => str == "Rawhide Coat" + "Hide Boots" + "Heavy Sumpter Horse" + "Chipped Axe" + "Hunting Bow" + "Barbed Arrows" + "2x Dried Meat" + "2x Furs")
          }

        case "changeFromRevenge":
          if (state.Adventuring_Reason == "Revenge") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adventuring_Reason == "Loss") {
            return {
              ...state,
              Adventuring_Reason: "Revenge",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1
              }
            }
          } else if (state.Adventuring_Reason == "Wanderlust") {
            return {
              ...state,
              Adventuring_Reason: "Revenge",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 2
              },
              Skills: {
                ...state.Skills,
                  Path_Finding: state.Skills.Path_Finding - 1
              }
            }
          } else if (state.Adventuring_Reason == "Forced Out") {
            return {
              ...state,
              Adventuring_Reason: "Revenge",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1
              }
            }
          } else if (state.Adventuring_Reason == "Money") {
            return {
              ...state,
              Adventuring_Reason: "Revenge",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Looting: state.Skills.Looting - 1
              }
            }
          } else {
            return {
              ...state,
              Adventuring_Reason: "Revenge"
            }
          }

        case "changeToRevenge":
          return {
            ...state,
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR + 2
              },
              Skills: {
                ...state.Skills,
                  Power_Strike: state.Skills.Power_Strike + 1
              }
          }

        case "changeFromLoss":
          if (state.Adventuring_Reason == "Revenge") {
            return {
              ...state,
                Adventuring_Reason: "Loss",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 2
                },
                Skills: {
                  ...state.Skills,
                    Power_Strike: state.Skills.Power_Strike - 1
                }
            }
          } else if (state.Adventuring_Reason == "Loss") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adventuring_Reason == "Wanderlust") {
            return {
              ...state,
              Adventuring_Reason: "Loss",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 2
              },
              Skills: {
                ...state.Skills,
                  Path_Finding: state.Skills.Path_Finding - 1
              }
            }
          } else if (state.Adventuring_Reason == "Forced Out") {
            return {
              ...state,
              Adventuring_Reason: "Loss",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1
              }
            }
          } else if (state.Adventuring_Reason == "Money") {
            return {
              ...state,
              Adventuring_Reason: "Loss",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Looting: state.Skills.Looting - 1
              }
            }
          } else {
            return {
              ...state,
              Adventuring_Reason: "Loss"
            }
          }

        case "changeToLoss":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                STR: state.Attributes.CHA + 2
            },
            Skills: {
              ...state.Skills,
                Ironflesh: state.Skills.Ironflesh + 1
            }
          }

        case "changeFromWanderlust":
          if (state.Adventuring_Reason == "Revenge") {
            return {
              ...state,
                Adventuring_Reason: "Wanderlust",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 2
                },
                Skills: {
                  ...state.Skills,
                    Power_Strike: state.Skills.Power_Strike - 1
                }
            }
          } else if (state.Adventuring_Reason == "Loss") {
            return {
              ...state,
              Adventuring_Reason: "Wanderlust",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1
              }
            }
          } else if (state.Adventuring_Reason == "Wanderlust") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adventuring_Reason == "Forced Out") {
            return {
              ...state,
              Adventuring_Reason: "Wanderlust",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1
              }
            }
          } else if (state.Adventuring_Reason == "Money") {
            return {
              ...state,
              Adventuring_Reason: "Wanderlust",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Looting: state.Skills.Looting - 1
              }
            }
          } else {
            return {
              ...state,
              Adventuring_Reason: "Wanderlust"
            }
          }

        case "changeToWanderlust":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                AGI: state.Attributes.AGI + 2
            },
            Skills: {
              ...state.Skills,
                Path_Finding: state.Skills.Path_Finding + 1
            }
          }

        case "changeFromForcedOut":
          if (state.Adventuring_Reason == "Revenge") {
            return {
              ...state,
                Adventuring_Reason: "Forced Out",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 2
                },
                Skills: {
                  ...state.Skills,
                    Power_Strike: state.Skills.Power_Strike - 1
                }
            }
          } else if (state.Adventuring_Reason == "Loss") {
            return {
              ...state,
              Adventuring_Reason: "Forced Out",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1
              }
            }
          } else if (state.Adventuring_Reason == "Wanderlust") {
            return {
              ...state,
              Adventuring_Reason: "Forced Out",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 2
              },
              Skills: {
                ...state.Skills,
                  Path_Finding: state.Skills.Path_Finding - 1
              }
            }
          } else if (state.Adventuring_Reason == "Forced Out") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else if (state.Adventuring_Reason == "Money") {
            return {
              ...state,
              Adventuring_Reason: "Forced Out",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Looting: state.Skills.Looting - 1
              }
            }
          } else {
            return {
              ...state,
              Adventuring_Reason: "Forced Out"
            }
          }

        case "changeToForcedOut":
          return {
            ...state,
            Attributes: {
              ...state.Attributes,
                STR: state.Attributes.STR - 1,
                INT: state.Attributes.INT - 1
            },
            Skills: {
              ...state.Skills,
                Weapon_Master: state.Skills.Weapon_Master - 1
            }
          }

        case "changeFromMoney":
          if (state.Adventuring_Reason == "Revenge") {
            return {
              ...state,
                Adventuring_Reason: "Money",
                Attributes: {
                  ...state.Attributes,
                    STR: state.Attributes.STR - 2
                },
                Skills: {
                  ...state.Skills,
                    Power_Strike: state.Skills.Power_Strike - 1
                }
            }
          } else if (state.Adventuring_Reason == "Loss") {
            return {
              ...state,
              Adventuring_Reason: "Money",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.CHA - 2
              },
              Skills: {
                ...state.Skills,
                  Ironflesh: state.Skills.Ironflesh - 1
              }
            }
          } else if (state.Adventuring_Reason == "Wanderlust") {
            return {
              ...state,
              Adventuring_Reason: "Money",
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI - 2
              },
              Skills: {
                ...state.Skills,
                  Path_Finding: state.Skills.Path_Finding - 1
              }
            }
          } else if (state.Adventuring_Reason == "Forced Out") {
            return {
              ...state,
              Adventuring_Reason: "Money",
              Attributes: {
                ...state.Attributes,
                  STR: state.Attributes.STR - 1,
                  INT: state.Attributes.INT - 1
              },
              Skills: {
                ...state.Skills,
                  Weapon_Master: state.Skills.Weapon_Master - 1
              }
            }
          } else if (state.Adventuring_Reason == "Money") {
            return {
              ...state,
                Attributes: state.Attributes = state.Attributes,
                Skills: state.Skills = state.Skills,
                Proficiencies: state.Proficiencies = state.Proficiencies,
                Denars: state.Denars = state.Denars,
                Renown: state.Renown = state.Renown,
                Honor: state.Honor = state.Honor
            }
          } else {
            return {
              ...state,
              Adventuring_Reason: "Money"
            }
          }
        
          case "changeToMoney":
            return {
              ...state,
              Attributes: {
                ...state.Attributes,
                  AGI: state.Attributes.AGI + 1,
                  INT: state.Attributes.INT + 1
              },
              Skills: {
                ...state.Skills,
                  Looting: state.Skills.Looting + 1
              }
            }
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.Gender == "Male") {
      dispatch("changeToMale");
    } else if (state.Gender == "Female") {
      dispatch("changeToFemale");
    } else if (state.Adulthood == "Squire/LadyInWaiting") {
      dispatch("changeFromSquire/LadyInWaiting")
    }
  }, [state.Gender]);

  useEffect(() => {
    if (state.Father == "Noble") {
      dispatch("changeToNoble");
    } else if (state.Father == "Merchant") {
      dispatch("changeToMerchant");
    } else if (state.Father == "Warrior") {
      dispatch("changeToWarrior");
    } else if (state.Father == "Hunter") {
      dispatch("changeToHunter");
    } else if (state.Father == "Nomad") {
      dispatch("changeToNomad");
    } else if (state.Father == "Thief") {
      dispatch("changeToThief");
    }
  }, [state.Father]);

  useEffect(() => {
    if (state.Early_Life == "Page") {
      dispatch("changeToPage");
    } else if (state.Early_Life == "Apprentice") {
      dispatch("changeToApprentice");
    } else if (state.Early_Life == "Assistant") {
      dispatch("changeToAssistant");
    } else if (state.Early_Life == "Urchin") {
      dispatch("changeToUrchin");
    } else if (state.Early_Life == "Steppe Child") {
      dispatch("changeToSteppeChild");
    }
  }, [state.Early_Life]);

  useEffect(() => {
    if (state.Adulthood == "Squire/LadyInWaiting") {
      dispatch("changeToSquire/LadyInWaiting");
    } else if (state.Adulthood == "Troubadour") {
      dispatch("changeToTroubadour");
    } else if (state.Adulthood == "Student") {
      dispatch("changeToStudent");
    } else if (state.Adulthood == "Peddler") {
      dispatch("changeToPeddler");
    } else if (state.Adulthood == "Smith") {
      dispatch("changeToSmith");
    } else if (state.Adulthood == "Poacher") {
      dispatch("changeToPoacher");
    }
  }, [state.Adulthood]);

  useEffect(() => {
    if (state.Adventuring_Reason == "Revenge") {
      dispatch("changeToRevenge");
    } else if (state.Adventuring_Reason == "Loss") {
      dispatch("changeToLoss");
    } else if (state.Adventuring_Reason == "Wanderlust") {
      dispatch("changeToWanderlust");
    } else if (state.Adventuring_Reason == "Forced out") {
      dispatch("changeToForcedOut");
    } else if (state.Adventuring_Reason == "Money") {
      dispatch("changeToMoney");
    }
  }, [state.Adventuring_Reason]);

  return (
    <context.Provider value={{contextState: state, contextDispatch: dispatch}}>
      {state.Gender}
      <button onClick={() => dispatch('changeFromMale')}>Male</button>
      <button onClick={() => dispatch('changeFromFemale')}>Female</button>
      
      {state.Father}
      <button onClick={() => dispatch('changeFromNoble')}>Noble</button>
      <button onClick={() => dispatch('changeFromMerchant')}>Merchant</button>
      <button onClick={() => dispatch('changeFromWarrior')}>Warrior</button>
      <button onClick={() => dispatch('changeFromHunter')}>Hunter</button>
      <button onClick={() => dispatch('changeFromNomad')}>Nomad</button>
      <button onClick={() => dispatch('changeFromThief')}>Thief</button>

      {state.Early_Life}
      <button onClick={() => dispatch('changeFromPage')}>Page</button>
      <button onClick={() => dispatch('changeFromApprentice')}>Apprentice</button>
      <button onClick={() => dispatch('changeFromAssistant')}>Assistant</button>
      <button onClick={() => dispatch('changeFromUrchin')}>Urchin</button>
      <button onClick={() => dispatch('changeFromSteppeChild')}>Steppe Child</button>

      {state.Adulthood}
      <button onClick={() => dispatch('changeFromSquire/LadyInWaiting')}>Squire/LadyInWaiting</button>
      <button onClick={() => dispatch('changeFromTroubadour')}>Troubadour</button>
      <button onClick={() => dispatch('changeFromStudent')}>Student</button>
      <button onClick={() => dispatch('changeFromPeddler')}>Peddler</button>
      <button onClick={() => dispatch('changeFromSmith')}>Smith</button>
      <button onClick={() => dispatch('changeFromPoacher')}>Poacher</button>

      {state.Adventuring_Reason}
      <button onClick={() => dispatch('changeFromRevenge')}>Revenge</button>
      <button onClick={() => dispatch('changeFromLoss')}>Loss</button>
      <button onClick={() => dispatch('changeFromWanderlust')}>Wanderlust</button>
      <button onClick={() => dispatch('changeFromForcedOut')}>Forced Out</button>
      <button onClick={() => dispatch('changeFromMoney')}>Money</button>
      <Dropdown title = "Gender">
        <div>
        </div>
      </Dropdown>
      <Dropdown title = "Father">
        <div>
        </div>
      </Dropdown>
      <Attributes />
      <Skills />
      <Proficiencies/>
    </context.Provider>
  )
}