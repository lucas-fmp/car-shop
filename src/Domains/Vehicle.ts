import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status: boolean;

  constructor(
    {
      id,
      model,
      year,
      color,
      buyValue,
      status,
    }: IVehicle,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.status = status || false;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setBuyValye(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
}

export default Vehicle;