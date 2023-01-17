import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    {
      id,
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
      status,
    }: ICar,
  ) {
    super(
      {
        id,
        model,
        year,
        color,
        buyValue,
        status,
      },
    );
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;