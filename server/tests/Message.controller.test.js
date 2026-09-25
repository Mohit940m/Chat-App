import { jest } from '@jest/globals';
import { getMessages, markMessageSeen } from '../controllers/Message.controller.js';
import Message from '../models/Message.model.js';

// Mock models and socket
jest.mock('../models/Message.model.js');
jest.mock('../server.js', () => ({
  io: { to: jest.fn().mockReturnThis(), emit: jest.fn() },
  userSocketMep: {}
}));

describe('Message Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { user: { _id: 'myId' }, params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  describe('getMessages', () => {
    it('should fetch messages and mark as seen', async () => {
      req.params.id = 'otherUser';
      Message.find.mockResolvedValue([{ text: 'Hello' }]);
      Message.updateMany.mockResolvedValue({});

      await getMessages(req, res);
      expect(Message.find).toHaveBeenCalled();
      expect(Message.updateMany).toHaveBeenCalledWith(
        { senderId: 'otherUser', receiverId: 'myId' },
        { seen: true }
      );
      expect(res.json).toHaveBeenCalledWith({ success: true, messages: [{ text: 'Hello' }] });
    });
  });

  describe('markMessageSeen', () => {
    it('should mark message as seen', async () => {
      req.params.id = 'msg1';
      Message.findByIdAndUpdate.mockResolvedValue({});

      await markMessageSeen(req, res);
      expect(Message.findByIdAndUpdate).toHaveBeenCalledWith('msg1', { seen: true });
      expect(res.json).toHaveBeenCalledWith({ success: true });
    });
  });
});
