import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  userLogin: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.userLogin.tipo = this.tipoUsuario

    if(this.userLogin.senha != this.confirmarSenha){
      alert('senhas diferentes')
    }else{
      this.auth.cadastrar(this.userLogin).subscribe((resposta) =>{
        this.userLogin = resposta
        this.router.navigate(['/entrar'])
        alert ('Usuario cadastrado com sucesso')
      })
    }
  }
}
