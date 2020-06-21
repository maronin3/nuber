export type Resolver = (parent: any, args: any, context: any, info: any) => any;

export interface Resolver {
  [key: string]: {
    [key: string]: Resolver;
  };
}