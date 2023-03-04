export function promisefy(taro: any, global: any, sfcApis: Set<string>, cbApis?: Set<string>) {
  Object.keys(global || {}).forEach((key) => {
    if (cbApis?.has(key)) {
      taro[key] = (options = {}, ...args: any[]) => {
        const obj = Object.assign({}, options);
        return new Promise((resolve) => {
          const [cb] = args;
          args[0] = (res: any) => {
            cb?.(res);
            resolve(res);
          };
          global[key](obj, ...args);
        });
      };
    } else if (sfcApis.has(key)) {
      taro[key] = (options = {}, ...args: any[]) => {
        const obj = Object.assign({}, options);
        if (typeof options === "string") {
          if (args.length) {
            return global[key](options, ...args);
          }
          return global[key](options);
        }

        return new Promise((resolve, reject) => {
          ["fail", "success", "complete"].forEach((k) => {
            obj[k] = (res: any) => {
              options[k]?.(res);
              if (k === "success") {
                resolve(res);
              } else if (k === "fail") {
                reject(res);
              }
            };
          });
          if (args.length) {
            global[key](obj, ...args);
          } else {
            global[key](obj);
          }
        });
      };
    } else {
      const target = global[key];
      if (typeof target === "function") {
        taro[key] = (...args: any[]) => target.apply(global, args);
      } else {
        taro[key] = target;
      }
    }
  });
}
