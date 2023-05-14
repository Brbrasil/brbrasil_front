import { Postagem } from "./Postagem";

export class Usuario {
  public id: number;
  public nome: string
  public agencia: String
  public conta: String
  public usuario: string;
  public senha: string
  public senha_digitos: string
  public cpf: string
  public telefone: String
  public postagem: Postagem[]
}
