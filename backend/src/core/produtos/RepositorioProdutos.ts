import Produto from "./Produto";

export default class RepositorioProdutos {
  items: Produto[] = [new Produto("Colher", 5.99), new Produto("Mouse", 39.99), new Produto('Teclado', 99.99)];

  obterTodos(){
    return this.items;
  }
}
