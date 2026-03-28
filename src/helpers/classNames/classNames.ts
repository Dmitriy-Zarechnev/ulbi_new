// Types
import {TMods} from "./types";

export const classNames = (cls: string, mods:TMods,  addition:string[]): string => {

    const modsResult = Object.entries(mods)
        .filter(([_, value])=>Boolean(value))
        .map(([className])=> className)

    return [cls, ...addition, ...modsResult ].join(' ')
}