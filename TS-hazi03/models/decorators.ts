export function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  let originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Adding item...`);
    originalMethod.apply(this, args);
  }
  return descriptor;
}