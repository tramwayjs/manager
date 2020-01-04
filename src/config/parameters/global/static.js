import express from 'express';
import path from 'path';

export const staticPath = path.resolve(__dirname, '../../../../dashboard/build');
export const staticRoute = '/';
export const staticRouteMiddleware = express.static(staticPath);