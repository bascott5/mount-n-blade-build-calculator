/*This is a character build calculator for Mount & Blade: Warband. 
It will start by asking the player about their backstory while telling them the consequence on their character's stats of their choice.
After that the player can freely add to their stats.
They should then be able to save the information and load it back into the website at a later time.
Scaling would feature the inclusion of a seperate build calculator for Bannerlord, as well as other Warband mods.*/
import { Inter } from '@next/font/google'
import { createContext, Dispatch, useReducer } from 'react'
import Background from '@/components/background';
import Attributes from '@/components/attributes';
import Proficiencies from '@/components/proficiencies';
import Skills from '@/components/skills';

export const context = createContext<{ contextState: any, contextDispatch: Dispatch<string> } | null>(null);

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
  }
}

interface test {
  [keys: string]: number
}

export default function Home() {
  const reducer = (state: any, action: string) => {
    switch(action) {
      //ATTRIBUTES
      case "inc_Attributes":
        return {
          ...state, Attributes: Object.entries(state.Attributes).map(([keys, value] /*{keys}: test*/) => ({[keys]: value + 1}))
        }
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
            if (state.Attributes.STR > 5){
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
                    STR: state.Attributes.STR = 5
                  }
                }
              }
            case "dec_AGI":
              if (state.Attributes.AGI > 5){
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
                    AGI: state.Attributes.AGI = 5
                  }
                }
              }
            case "dec_INT":
              if (state.Attributes.INT > 4){
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
                    INT: state.Attributes.INT = 4
                  }
                }
              }
              case "dec_CHA":
                if (state.Attributes.CHA > 5){
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
                    CHA: state.Attributes.CHA = 5
                  }
                }
              }

      //PROFICIENCIES
      case "inc_One_Handed_Weapons":
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              One_Handed_Weapons: state.Proficiencies.One_Handed_Weapons + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
      case "inc_Two_Handed_Weapons":
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Two_Handed_Weapons: state.Proficiencies.Two_Handed_Weapons + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
      case "inc_Polearms":
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Polearms: state.Proficiencies.Polearms + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
      case "inc_Archery":
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Archery: state.Proficiencies.Archery + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
      case "inc_Crossbows":
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Crossbows: state.Proficiencies.Crossbows + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }
      case "inc_Throwing":
          return {
            ...state,
            Proficiencies: {
              ...state.Proficiencies,
              Throwing: state.Proficiencies.Throwing + 1
            },
            Proficiency_Points: state.Proficiency_Points - 1
          }

      //SKILLS
      case "inc_Ironflesh":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Power_Strike":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Power_Throw":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Power_Draw":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Weapon_Master":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Shield":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Athletics":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Riding":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Horse_Archery":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Looting":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Trainer":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Tracking":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Tactics":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Path_Finding":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Spotting":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Inventory_Management":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Wound_Treatment":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Surgery":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_First_Aid":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Engineer":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Persuasion":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Prisoner_Management":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Leadership":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
          }
      case "inc_Trade":
          return {
            ...state,
            Skills: {
              ...state.Skills,
              Ironflesh: state.Skills.Ironflesh + 1
            },
            Skill_Points: state.Skill_Points - 1
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
      <Skills />
      <Proficiencies/>
    </context.Provider>
  )
}