import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async add() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      seatsQty: this.req.body.seatsQty,
      doorsQty: this.req.body.doorsQty,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
    };

    try {
      const newCar = await this.service.add(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;