import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(baseRoute: string) {
  return function(target: Function): void {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path: string = Reflect.getMetadata('path', target.prototype, key);
      const method: string = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${baseRoute}${path}`, routeHandler);
      }
    }
  };
}
