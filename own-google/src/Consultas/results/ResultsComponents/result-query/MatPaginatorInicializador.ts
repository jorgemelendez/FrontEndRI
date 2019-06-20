import { MatPaginatorIntl } from '@angular/material';
// Clase que extiende de MatPaginatorIntl para modificar las etiquetas del paginador
export class MatPaginatorInicializador extends MatPaginatorIntl {
  // Etiqueta para la cantidad de items por pag
  itemsPerPageLabel = 'Documentos por pagina';
  // Etiqueta para el boton de la siguiente pag
  nextPageLabel     = 'Siguiente pagina';
  // Etiqueta para el boton de la pag anterior
  previousPageLabel = 'Pagina anterior';
  // Funcion para la etiqueta de x-y de z pag
  getRangeLabel = function(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
  };

}
