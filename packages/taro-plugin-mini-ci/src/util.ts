export function options2args(options: Record<string, any>): Array<string> {
  const args: string[] = [];
  for (const key in options) {
    switch (typeof options[key]) {
      case "boolean":
        options[key] && args.push(`--${key}`);
        break;
      case "string":
        args.push(`--${key}`, options[key]);
        break;
      default:
        break;
    }
  }
  return args;
}
