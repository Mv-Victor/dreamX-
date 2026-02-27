/**
 * DreamX Studio API Client
 * 基础请求封装 + 错误处理 + 响应格式统一
 */

export enum ErrorCode {
  SUCCESS = 0,
  VALIDATION_ERROR = 1001,
  UNAUTHORIZED = 1002,
  FORBIDDEN = 1003,
  NOT_FOUND = 1004,
  RATE_LIMITED = 1005,
  INSUFFICIENT_CREDITS = 1006,
  GENERATION_FAILED = 2001,
  TIMEOUT = 2002,
  SERVER_ERROR = 5000,
}

export interface ApiResponse<T> {
  code: ErrorCode | number;
  message: string;
  data: T;
}

export interface ApiError {
  code: number;
  message: string;
  details?: Record<string, string>;
}

export class ApiClientError extends Error {
  code: number;
  details?: Record<string, string>;

  constructor(code: number, message: string, details?: Record<string, string>) {
    super(message);
    this.name = 'ApiClientError';
    this.code = code;
    this.details = details;
  }
}

// Mock mode flag - 切换到真实 API 时改为 false
const MOCK_MODE = true;

// 基础 URL（真实环境）
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

/**
 * 基础请求函数
 */
async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  if (MOCK_MODE) {
    // Mock 模式下从 mock 模块导入数据
    console.log('[Mock API]', endpoint, options);
    // 实际 mock 数据由各模块提供
    throw new Error('Mock mode: use module-specific functions');
  }

  const url = `${BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result: ApiResponse<T> = await response.json();

    if (result.code !== ErrorCode.SUCCESS) {
      throw new ApiClientError(result.code, result.message);
    }

    return result;
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error;
    }
    throw new ApiClientError(
      ErrorCode.SERVER_ERROR,
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
}

/**
 * GET 请求
 */
export async function get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
  const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
  return request<T>(`${endpoint}${queryString}`, { method: 'GET' });
}

/**
 * POST 请求
 */
export async function post<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
  return request<T>(endpoint, {
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
  });
}

/**
 * PUT 请求
 */
export async function put<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
  return request<T>(endpoint, {
    method: 'PUT',
    body: body ? JSON.stringify(body) : undefined,
  });
}

/**
 * DELETE 请求
 */
export async function del<T>(endpoint: string): Promise<ApiResponse<T>> {
  return request<T>(endpoint, { method: 'DELETE' });
}

export const api = {
  get,
  post,
  put,
  delete: del,
};
