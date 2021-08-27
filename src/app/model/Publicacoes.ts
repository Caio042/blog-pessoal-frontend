import { Tema } from "./Tema"
import { User } from "./User"

export class Publicacoes{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: User
    public tema: Tema
}