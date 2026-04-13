import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  ...jest.requireActual<typeof import('lodash')>('lodash'),
  throttle: jest.fn((fn: (...args: unknown[]) => unknown) => fn),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('throttledGetDataFromApi', () => {
  const mockGet = jest.fn();

  beforeEach(() => {
    mockGet.mockResolvedValue({ data: { id: 1, title: 'test' } });
    mockedAxios.create.mockReturnValue({
      get: mockGet,
    } as unknown as ReturnType<typeof axios.create>);
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi('/posts');

    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi('/posts');

    expect(mockGet).toHaveBeenCalledWith('/posts');
  });

  test('should return response data', async () => {
    const responseData = { id: 1, title: 'test' };
    mockGet.mockResolvedValue({ data: responseData });

    const result = await throttledGetDataFromApi('/posts');

    expect(result).toEqual(responseData);
  });
});
