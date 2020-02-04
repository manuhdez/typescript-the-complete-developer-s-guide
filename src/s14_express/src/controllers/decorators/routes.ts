import 'reflect-metadata';
import { RequestHandler } from 'express';
import { Methods } from '../../Methods';
import { MetadataKeys } from './MetadataKeys';

interface RoutePropertyDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function(path: string) {
    return (
      target: any,
      key: string,
      descriptor: RoutePropertyDescriptor
    ): void => {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const patch = routeBinder(Methods.patch);
export const del = routeBinder(Methods.delete);
