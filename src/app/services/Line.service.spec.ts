import {LineService} from './Line.service';
import axios from 'axios';

describe('LineService', () => {
  test('sendPush()', () => {
    const lineService = new LineService();
    jest.spyOn(axios, 'post');
    lineService.sendPush('123');
    expect(axios.post).toHaveBeenCalled();
  });
});
