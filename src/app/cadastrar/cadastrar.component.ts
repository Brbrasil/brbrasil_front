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

  cadastrar(){
    this.usuario.telefone = this.telefone;

    if(this.usuario.telefone == this.telefone) {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Conta Atualizada com sucesso')
        this.router.navigate(['/entrar'])
      })
    } else {
      alert('Preencha os dados corretos.')
    }
  }
}
