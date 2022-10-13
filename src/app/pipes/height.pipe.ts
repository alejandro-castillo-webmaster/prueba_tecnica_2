import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(height?: string, ...args: unknown[]): any {

    if (!height) {
      return 'No Data';
    }
    
    let heightTemp: number = Number(height);

    if (heightTemp > 200) {
      return 'height';
    }

    if (heightTemp <= 200 && heightTemp >= 100) {
      return 'normal';
    }

    if (heightTemp < 100) {
      return 'low';
    }


  }

}
