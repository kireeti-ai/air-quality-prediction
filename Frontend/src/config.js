// API Configuration
// Uses environment variable VITE_API_URL or defaults to '/api' for local development
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const API_ENDPOINTS = {
  PREDICT: `${API_BASE_URL}/predict`,
};
