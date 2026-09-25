import { jest } from '@jest/globals';
import Message from '../models/Message.model.js';

const mockTo = jest.fn().mockReturnThis();
const mockEmit = jest.fn();

jest.unstable_mockModule('../server.js', () => ({
  io: {
    to: mockTo,
    emit: mockEmit
  },
  userSocketMep: {
    'otherUser': 'socket123'
  }
}));

// We must import the controller dynamically AFTER mocking the module
const { getMessages, markMessageSeen, sendMessage } = await import('../controllers/Message.controller.js');

describe('Message Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { user: { _id: 'myId' }, params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.restoreAllMocks();
  });

  describe('getMessages', () => {
    it('should fetch messages and mark as seen', async () => {
      req.params.id = 'otherUser';
      jest.spyOn(Message, 'find').mockResolvedValue([{ text: 'Hello' }]);
      jest.spyOn(Message, 'updateMany').mockResolvedValue({});

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
      jest.spyOn(Message, 'findByIdAndUpdate').mockResolvedValue({});

      await markMessageSeen(req, res);
      expect(Message.findByIdAndUpdate).toHaveBeenCalledWith('msg1', { seen: true });
      expect(res.json).toHaveBeenCalledWith({ success: true });
    });
  });
});
