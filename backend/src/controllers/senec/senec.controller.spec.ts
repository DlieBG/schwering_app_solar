import { Test, TestingModule } from '@nestjs/testing';
import { SenecController } from './senec.controller';

describe('SenecController', () => {
  let controller: SenecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SenecController],
    }).compile();

    controller = module.get<SenecController>(SenecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
