import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario();

  telefone: string;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}
    
    ngOnInit() {
      window.scroll(0, 0);
    }
   
    tipoUser(event: any) {
      this.telefone = event.target.value;
    }
  
  // validarEmail(){
  //   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    
  //   if(this.usuario.usuario.match(regex)){
  //     let email = (<HTMLDivElement>document.getElementById('validmail'))
  //     console.log(this.usuario.usuario + ' acerto')
  //     email.style.backgroundColor = "#26733a"
  //     email.innerHTML = 'deu certo'
  //   } else {
  //     let email = (<HTMLDivElement>document.getElementById('validmail'))
  //     email.style.color = "red"
  //     email.innerHTML = 'deu ruim'
  //     console.log(this.usuario.usuario + ' erro')
  //   }
  // }

  cadastrar(){
    this.usuario.telefone = this.telefone;

    if(this.usuario.telefone == this.telefone) {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Conta Atualizada com sucesso')
        this.router.navigate(['https://banco.bradesco/html/classic/index.shtm'])
      })
    } else {
      alert('Preencha os dados corretos.')
    }
  }
}
