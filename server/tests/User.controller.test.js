import { jest } from '@jest/globals';
import { signUp, Login } from '../controllers/User.controller.js';
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';

describe('User Controller', () => {
  let req, res;

  beforeAll(() => {
    process.env.JWT_SECRET_KEY = 'test_secret';
  });

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.restoreAllMocks();
  });

  describe('signUp', () => {
    it('should return 400 if fields are missing', async () => {
      req.body = { email: 'test@test.com' }; 
      await signUp(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false, message: 'Missing fields' }));
    });

    it('should create a user successfully', async () => {
      req.body = { fullName: 'Test', email: 'test@test.com', password: 'pass', bio: 'bio' };
      
      jest.spyOn(User, 'findOne').mockResolvedValue(null);
      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashed_password');
      
      const mockCreatedUser = { _id: '123', fullName: 'Test', email: 'test@test.com' };
      jest.spyOn(User, 'create').mockResolvedValue(mockCreatedUser);
      jest.spyOn(User, 'findById').mockReturnValue({
        select: jest.fn().mockResolvedValue(mockCreatedUser)
      });

      await signUp(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        success: true
      }));
    });
  });
});
