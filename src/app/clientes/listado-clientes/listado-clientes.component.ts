import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente, Grupo } from '../cliente.model';


@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})

export class ListadoClientesComponent implements OnInit{
  clientes!:Cliente [];
  grupos: Grupo[]=[];
  entrada="";
  resultado: Cliente[]=[];
  constructor(private clientesService: ClientesService) { }

  ngOnInit(){
    this.clientes = this.clientesService.getClientes();
  }

  deleteCliente(indice:number){
    this.clientes.splice(indice,1)
  }

  buscarCliente(){
    this.resultado=[]
    this.clientes.forEach(element=>{
      if(element.nombre.toLocaleUpperCase().includes(this.entrada) || element.nombre.toLocaleLowerCase().includes(this.entrada) && this.entrada !==""){
        this.resultado.push(element)
      }
    })
  }

  ordenAscendente(){
    this.clientes.sort((a,b)=>a.nombre.localeCompare(b.nombre))
  }
  ordenDescendente(){
    this.clientes.sort((a,b)=>b.nombre.localeCompare(a.nombre))
  }
}
