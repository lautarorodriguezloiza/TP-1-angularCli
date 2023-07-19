import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'apellidos'
})
export class FormatoApellidoPipe implements PipeTransform {
    transform(apellido: string): string {
    if (!apellido) {
        return '-';
    }
    return apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
    }
}