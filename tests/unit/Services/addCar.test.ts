import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('A camada service de carros', function () {
  it('deveria adicionar com sucesso um carro', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    Sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.add(carInput);

    expect(result).to.be.deep.equal(carOutput);

    Sinon.restore();
  });

  it('deveria listar todos os carros com sucesso', async function () {
    const carsInputArray: ICar[] = [
      {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        model: 'Uno',
        year: 1998,
        color: 'Blue',
        status: true,
        buyValue: 7.990,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    
    const carsOutput: Car[] = carsInputArray.map((car) => new Car(car));

    Sinon.stub(Model, 'find').resolves(carsOutput);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carsOutput);

    Sinon.restore();
  });

  it('deveria listar um carro pelo id com sucesso', async function () {
    const carOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    Sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});