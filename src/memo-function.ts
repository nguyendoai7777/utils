export function memoFunc<T extends (...args: any[]) => any>(func: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args) || args.toString(); // Tạo key từ các tham số

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  } as T;
}
