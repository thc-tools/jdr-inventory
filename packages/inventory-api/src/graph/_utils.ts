// Types
import { DataSources } from "../datasources";

export type ResolverFn<A, R, P = any> = (parent: P, args: A, context: { dataSources: DataSources }) => Promise<R>;
