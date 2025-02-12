import path from 'node:path';

export const numberRegexp = /^\+(\d{12})$/;

export const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
