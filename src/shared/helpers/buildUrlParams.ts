import { URL as API_URL } from "../api";

export const buildUrlParams = <T extends object>(
  endpoint: string,
  params: T
): string => {
  const url = new URL(`http://localhost:3030${endpoint}`, API_URL);

  Object.entries(params).forEach(([key, value]) => {
    if (value || value === 0) {
      url.searchParams.append(key, String(value));
    }
  });

  return url.toString();
};
