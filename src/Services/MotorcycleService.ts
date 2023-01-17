import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      const motorcycleObj = {
        buyValue: motorcycle.buyValue,
        color: motorcycle.color,
        model: motorcycle.model,
        year: motorcycle.year,
        id: motorcycle.id,
        status: motorcycle.status,
        category: motorcycle.category,
        engineCapacity: motorcycle.engineCapacity,
      };
      return new Motorcycle(motorcycleObj);
    }
    return null;
  }

  public async add(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.add(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findAll();
    const motorcycleDomainArray = motorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleDomainArray;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, motorcycleReq: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findByIdAndUpdate(id, motorcycleReq);
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotorcycleService;