import { jest } from '@jest/globals';
import { signUp, Login } from '../controllers/User.controller.js';
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';

// Mock dependencies
jest.mock('../models/User.model.js');
jest.mock('bcryptjs');
jest.mock('../lib/utils.js', () => ({
  generateToken: jest.fn(() => 'mocked_token')
}));

describe('User Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    it('should return 400 if fields are missing', async () => {
      req.body = { email: 'test@test.com' }; // Missing fullName, password, bio
      await signUp(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false, message: 'Missing fields' }));
    });

    it('should create a user successfully', async () => {
      req.body = { fullName: 'Test', email: 'test@test.com', password: 'pass', bio: 'bio' };
      User.findOne.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue('hashed_password');
      
      const mockCreatedUser = { _id: '123', fullName: 'Test', email: 'test@test.com' };
      User.create.mockResolvedValue(mockCreatedUser);
      User.findById.mockReturnValue({
        select: jest.fn().mockResolvedValue(mockCreatedUser)
      });

      await signUp(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        success: true,
        token: 'mocked_token'
      }));
    });
  });
});
