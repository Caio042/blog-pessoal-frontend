import { Publicacoes } from "./Publicacoes"

export class User{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public publicacoes: Publicacoes[]
}