import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ModalAdicionarComponent } from '../modal-adicionar/modal-adicionar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  redesSociais: any;
  paginas: any;
  paginasAdd: any;
  constructor(private demoService: DemoService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.demoService.findAllPaginas().subscribe(data => {
      this.paginas = data;
    })

    this.demoService.findAllRedesSociais().subscribe(data => {
      this.redesSociais = data;
    })
  }

  atualizar() {
    this.demoService.findAllRedesSociais().subscribe(data => {
      this.redesSociais = data;
    })
  }

  openModal(value): void {
    let dialogRef = this.dialog.open(ModalAdicionarComponent, {
      data: {
        redeSocial: value.nome,
        paginas: this.paginas.filter(e => e.channel_key == value.key)[0]
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  adicionarPagina(value: any) {
    let rede = value.rede;
    rede.paginaAdd = true;
    rede.paginaAdd = true;
    rede.urlPagina = value.pagina.url;
    rede.imgPagina = value.pagina.picture;
    rede.nomePagina = value.pagina.name;
    
    this.demoService.update(rede).subscribe(data => {
      if (data) {
        this.atualizar()
      }
    });
  }
}
