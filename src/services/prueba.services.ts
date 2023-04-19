import { Services } from '../core/entities/Iservices'

class PruebaServices implements Services {
  create(data: any): Promise<{}> {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): Promise<{}> {
    throw new Error('Method not implemented.');
  }
  update(id: number, changes: any): Promise<{}> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<number> {
    throw new Error('Method not implemented.');
  }
  find(): Promise<[]> {
    throw new Error('Method not implemented.');
  }



}

