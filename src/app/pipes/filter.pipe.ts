import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any, termino: any, buscarEn: any): any {

    // Si la data esta vacia no continuamos, así evitamos enviar al ngFor un undefined
    if (!data) {
      return data;
    }

    // Si el termino esta vacio no continuamos
    if (!termino) {
      return data;
    }

    // Aplicamos el filtro para el parametro title y devolvemos la data
    if (buscarEn === 'title') {
      return data.filter((data: any) => {
        return data.title.includes(termino);
      });
    }

    // Aplicamos el filtro para el parametro name y devolvemos la data
    if (buscarEn === 'name') {
      return data.filter((data: any) => {
        return data.name.includes(termino);
      });
    }

  }

}
