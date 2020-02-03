import 'reflect-metadata';

export function get(path: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor): void => {
    Reflect.defineMetadata('path', path, target, key);
  };
}
