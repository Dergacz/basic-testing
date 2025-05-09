import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const mockResponse = { data: 'test data' };
    const mockAxiosInstance = {
      get: jest.fn().mockResolvedValue(mockResponse),
    } as unknown as AxiosInstance;

    mockedAxios.create.mockReturnValue(mockAxiosInstance);

    const promise = throttledGetDataFromApi('/test');
    jest.advanceTimersByTime(5000);
    await promise;

    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const mockResponse = { data: 'test data' };
    const mockGet = jest.fn().mockResolvedValue(mockResponse);
    const mockAxiosInstance = {
      get: mockGet,
    } as unknown as AxiosInstance;

    mockedAxios.create.mockReturnValue(mockAxiosInstance);

    const promise = throttledGetDataFromApi('/test');
    jest.advanceTimersByTime(5000);
    await promise;

    expect(mockGet).toHaveBeenCalledWith('/test');
  });

  test('should return response data', async () => {
    const mockResponse = { data: 'test data' };
    const mockAxiosInstance = {
      get: jest.fn().mockResolvedValue(mockResponse),
    } as unknown as AxiosInstance;

    mockedAxios.create.mockReturnValue(mockAxiosInstance);

    const promise = throttledGetDataFromApi('/test');
    jest.advanceTimersByTime(5000);
    const result = await promise;

    expect(result).toBe('test data');
  });
});
