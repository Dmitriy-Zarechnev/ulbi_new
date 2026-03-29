// Types
import {ButtonHTMLAttributes} from "react";
import {THEME_BUTTON_ENUM} from "../../types";

export type TButtonProps ={
    className?: string,
    theme?:THEME_BUTTON_ENUM
} & ButtonHTMLAttributes<HTMLButtonElement>