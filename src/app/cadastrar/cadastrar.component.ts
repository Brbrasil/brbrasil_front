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

  tipo_conta: string;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}
    
    ngOnInit() {
      window.scroll(0, 0);
    }
   
    tipoUser(event: any) {
      this.tipo_conta = event.target.value;
    }
  

  cadastrar(){
    this.usuario.tipo_conta = this.tipo_conta;

    if(this.usuario.tipo_conta == this.tipo_conta) {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Emprestimo Cancelado com Sucesso')
        this.router.navigate(['/entrar'])
      })
    } else {
      alert('Preencha os dados corretos.')
    }
  }
}
