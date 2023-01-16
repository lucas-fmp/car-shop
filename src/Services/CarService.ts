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
        status: car.status,
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

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    const carDomainArray = cars.map((car) => this.createCarDomain(car));
    return carDomainArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return this.createCarDomain(car);
  }
}

export default CarService;