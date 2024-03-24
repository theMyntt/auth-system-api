import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

const baseInfo = {
  _id: 1,
  name: 'example@domain.com',
  email: 'example@domain.com',
  password: '12345678',
}

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            setUser: jest.fn(),
            getLogin: jest.fn().mockResolvedValue(baseInfo),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  // TODO: fix later
  describe("getLogin", () => {
    it("should 'Não cadastrado' message ",async () => {
      const result = await userController.login(baseInfo.email, baseInfo.password);
      expect(result).toBe({});
    })
  });
});