import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from '../../Methods';

export function controller(baseRoute: string) {
  return function(target: Function): void {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path: string = Reflect.getMetadata('path', target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        'path',
        target.prototype,
        key
      );

      if (path) {
        router[method](`${baseRoute}${path}`, routeHandler);
      }
    }
  };
}
