export interface Interactors {
  handle<T, Z>(data: T): Promise<Z>;
}
