import { Hombre } from '../categorias/hombre.enum';
import { Mujer } from '../categorias/mujer.enum';
import { Niño } from '../categorias/niño.enum';
import { Imagen } from './imagen';

export class Producto {
  public imagenes: Imagen[];
  public categoria: Hombre | Mujer | Niño;
  public tallas;
  public colores;
  public productId: string;
  public titulo: string;
  public descripcion: string;
}
