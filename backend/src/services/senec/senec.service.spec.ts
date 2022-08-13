import { Test, TestingModule } from '@nestjs/testing';
import { SenecService } from './senec.service';

describe('SenecService', () => {
  let service: SenecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SenecService],
    }).compile();

    service = module.get<SenecService>(SenecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
