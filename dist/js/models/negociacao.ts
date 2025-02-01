export class Negociacao {
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get getData() {
    return this._data;
  }

  get getQuantidade() {
    return this._quantidade;
  }

  get getValor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}
