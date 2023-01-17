import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('A camada service de motos', function () {
  it('deveria adicionar com sucesso uma moto', async function () {
    const motorcycleInput: IMotorcycle = {
      model: 'XRE',
      year: 2012,
      color: 'Red',
      status: true,
      buyValue: 12.990,
      category: 'Trail',
      engineCapacity: 300,
    };

    const motorcycleOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'XRE',
      year: 2012,
      color: 'Red',
      status: true,
      buyValue: 12.990,
      category: 'Trail',
      engineCapacity: 300,
    });

    Sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.add(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);

    Sinon.restore();
  });

  it('deveria listar todas as motos com sucesso', async function () {
    const motorcyclesInputArray: IMotorcycle[] = [
      {
        model: 'XRE',
        year: 2012,
        color: 'Red',
        status: true,
        buyValue: 12.990,
        category: 'Trail',
        engineCapacity: 300,
      },
      {
        model: 'Titan',
        year: 2020,
        color: 'Black',
        status: true,
        buyValue: 12.990,
        category: 'Street',
        engineCapacity: 160,
      },
    ];
    
    const motorcyclesOutput: Motorcycle[] = motorcyclesInputArray
      .map((motorcycle) => new Motorcycle(motorcycle));

    Sinon.stub(Model, 'find').resolves(motorcyclesOutput);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcyclesOutput);

    Sinon.restore();
  });

  it('deveria listar uma moto pelo id com sucesso', async function () {
    const motorcycleOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'XRE',
      year: 2012,
      color: 'Red',
      status: true,
      buyValue: 12.990,
      category: 'Trail',
      engineCapacity: 300,
    });

    Sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.getById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motorcycleOutput);

    Sinon.restore();
  });
});