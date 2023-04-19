
export interface Services {

  //TODO 1. Cambiar el retorno por una promesa del objeto consultado
  //  * Método de creación que espera una data para poder insertarla en la base de datos
  create(data: any): Promise<{}>

  // * Método de búsqueda para todos los resultados sin ningún filtro
  find(): Promise<[]>

  //TODO 1. Cambiar por tipado dinamico para mayor escalabilidad
  //TODO 2. Cambiar el retorno por una promesa del objeto consultado
  // * Método de búsqueda para encontrar un solo resultado de la base de datos
  // * Se espera un id para poder buscarlo en la DB
  findOne(id: number): Promise<{}>

  //TODO 1. Cambiar por tipado dinamico para mayor escalabilidad
  //TODO 2. Cambiar el retorno por una promesa del objeto consultado
  // * Método de actualización de cualquier registro en la base de datos
  // * como primer parámetro se espera un id que identifique el registro
  // * como segundo parámetro se esperan los cambios que se quieren insertar
  update(id: number, changes: any): Promise<{}>

  //TODO 1. Cambiar por tipado dinamico para mayor escalabilidad
  // * Método de eliminación o desactivación de un elemento en la base de datos
  // * como primer parámetro se espera un id que identifique el registro
  delete(id: number): Promise<number>



}
