import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      const carObj = {
        buyValue: car.buyValue,
        color: car.color,
        doorsQty: car.doorsQty,
        model: car.model,
        seatsQty: car.seatsQty,
        year: car.year,
        id: car.id,
      };
      return new Car(carObj);
    }
    return null;
  }

  public async add(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.add(car);
    return this.createCarDomain(newCar);
  }
}

export default CarService;