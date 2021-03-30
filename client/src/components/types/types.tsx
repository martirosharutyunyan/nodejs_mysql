import { actionTypes } from "./actionsTypes"

export type actionType = {
    type:actionTypes
    payload:any
}


export type Redux = {
    Reducer:{
        arr:any
    }
}

export type input =  React.ChangeEvent<HTMLInputElement>

export type button = React.MouseEvent<HTMLButtonElement>

export type jsx = JSX.Element

export type dataType = {
    email:string
    password:string
}

export type dataFromNodeType =dataType & {
    id:number
}