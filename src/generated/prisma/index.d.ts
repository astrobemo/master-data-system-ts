/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Item
 *
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>;
/**
 * Model Subitem
 *
 */
export type Subitem = $Result.DefaultSelection<Prisma.$SubitemPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Unit: {
    PIECE: 'PIECE';
    YARD: 'YARD';
    KILOGRAM: 'KILOGRAM';
    LITER: 'LITER';
    METER: 'METER';
    BOX: 'BOX';
  };

  export type Unit = (typeof Unit)[keyof typeof Unit];
}

export type Unit = $Enums.Unit;

export const Unit: typeof $Enums.Unit;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subitem`: Exposes CRUD operations for the **Subitem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subitems
   * const subitems = await prisma.subitem.findMany()
   * ```
   */
  get subitem(): Prisma.SubitemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Item: 'Item';
    Subitem: 'Subitem';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'item' | 'subitem';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>;
        fields: Prisma.ItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateItem>;
          };
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>;
            result: $Utils.Optional<ItemCountAggregateOutputType> | number;
          };
        };
      };
      Subitem: {
        payload: Prisma.$SubitemPayload<ExtArgs>;
        fields: Prisma.SubitemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubitemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubitemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>;
          };
          findFirst: {
            args: Prisma.SubitemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubitemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>;
          };
          findMany: {
            args: Prisma.SubitemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>[];
          };
          create: {
            args: Prisma.SubitemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>;
          };
          createMany: {
            args: Prisma.SubitemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubitemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>[];
          };
          delete: {
            args: Prisma.SubitemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>;
          };
          update: {
            args: Prisma.SubitemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>;
          };
          deleteMany: {
            args: Prisma.SubitemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubitemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubitemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>[];
          };
          upsert: {
            args: Prisma.SubitemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubitemPayload>;
          };
          aggregate: {
            args: Prisma.SubitemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubitem>;
          };
          groupBy: {
            args: Prisma.SubitemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubitemGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubitemCountArgs<ExtArgs>;
            result: $Utils.Optional<SubitemCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    item?: ItemOmit;
    subitem?: SubitemOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    subitems: number;
  };

  export type ItemCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subitems?: boolean | ItemCountOutputTypeCountSubitemsArgs;
  };

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountSubitemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubitemWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
  };

  export type ItemAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
  };

  export type ItemSumAggregateOutputType = {
    id: number | null;
    price: number | null;
  };

  export type ItemMinAggregateOutputType = {
    id: number | null;
    sku_code: string | null;
    name: string | null;
    unit: $Enums.Unit | null;
    hasSubitem: boolean | null;
    description: string | null;
    price: number | null;
    isActive: boolean | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ItemMaxAggregateOutputType = {
    id: number | null;
    sku_code: string | null;
    name: string | null;
    unit: $Enums.Unit | null;
    hasSubitem: boolean | null;
    description: string | null;
    price: number | null;
    isActive: boolean | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ItemCountAggregateOutputType = {
    id: number;
    sku_code: number;
    name: number;
    unit: number;
    hasSubitem: number;
    description: number;
    price: number;
    isActive: number;
    isDeleted: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ItemAvgAggregateInputType = {
    id?: true;
    price?: true;
  };

  export type ItemSumAggregateInputType = {
    id?: true;
    price?: true;
  };

  export type ItemMinAggregateInputType = {
    id?: true;
    sku_code?: true;
    name?: true;
    unit?: true;
    hasSubitem?: true;
    description?: true;
    price?: true;
    isActive?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ItemMaxAggregateInputType = {
    id?: true;
    sku_code?: true;
    name?: true;
    unit?: true;
    hasSubitem?: true;
    description?: true;
    price?: true;
    isActive?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ItemCountAggregateInputType = {
    id?: true;
    sku_code?: true;
    name?: true;
    unit?: true;
    hasSubitem?: true;
    description?: true;
    price?: true;
    isActive?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Items
     **/
    _count?: true | ItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ItemMaxAggregateInputType;
  };

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>;
  };

  export type ItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ItemWhereInput;
    orderBy?:
      | ItemOrderByWithAggregationInput
      | ItemOrderByWithAggregationInput[];
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum;
    having?: ItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCountAggregateInputType | true;
    _avg?: ItemAvgAggregateInputType;
    _sum?: ItemSumAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
  };

  export type ItemGroupByOutputType = {
    id: number;
    sku_code: string;
    name: string;
    unit: $Enums.Unit;
    hasSubitem: boolean;
    description: string | null;
    price: number;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
  };

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ItemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
          : GetScalarType<T[P], ItemGroupByOutputType[P]>;
      }
    >
  >;

  export type ItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku_code?: boolean;
      name?: boolean;
      unit?: boolean;
      hasSubitem?: boolean;
      description?: boolean;
      price?: boolean;
      isActive?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      subitems?: boolean | Item$subitemsArgs<ExtArgs>;
      _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku_code?: boolean;
      name?: boolean;
      unit?: boolean;
      hasSubitem?: boolean;
      description?: boolean;
      price?: boolean;
      isActive?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku_code?: boolean;
      name?: boolean;
      unit?: boolean;
      hasSubitem?: boolean;
      description?: boolean;
      price?: boolean;
      isActive?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectScalar = {
    id?: boolean;
    sku_code?: boolean;
    name?: boolean;
    unit?: boolean;
    hasSubitem?: boolean;
    description?: boolean;
    price?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'sku_code'
    | 'name'
    | 'unit'
    | 'hasSubitem'
    | 'description'
    | 'price'
    | 'isActive'
    | 'isDeleted'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['item']
  >;
  export type ItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subitems?: boolean | Item$subitemsArgs<ExtArgs>;
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ItemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Item';
    objects: {
      subitems: Prisma.$SubitemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        sku_code: string;
        name: string;
        unit: $Enums.Unit;
        hasSubitem: boolean;
        description: string | null;
        price: number;
        isActive: boolean;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['item']
    >;
    composites: {};
  };

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> =
    $Result.GetResult<Prisma.$ItemPayload, S>;

  type ItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCountAggregateInputType | true;
  };

  export interface ItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Item'];
      meta: { name: 'Item' };
    };
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     *
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     *
     */
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     *
     */
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
     **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ItemAggregateArgs>(
      args: Subset<T, ItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetItemAggregateType<T>>;

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Item model
     */
    readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    subitems<T extends Item$subitemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Item$subitemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubitemPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<'Item', 'Int'>;
    readonly sku_code: FieldRef<'Item', 'String'>;
    readonly name: FieldRef<'Item', 'String'>;
    readonly unit: FieldRef<'Item', 'Unit'>;
    readonly hasSubitem: FieldRef<'Item', 'Boolean'>;
    readonly description: FieldRef<'Item', 'String'>;
    readonly price: FieldRef<'Item', 'Float'>;
    readonly isActive: FieldRef<'Item', 'Boolean'>;
    readonly isDeleted: FieldRef<'Item', 'Boolean'>;
    readonly createdAt: FieldRef<'Item', 'DateTime'>;
    readonly updatedAt: FieldRef<'Item', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item create
   */
  export type ItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
  };

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Item update
   */
  export type ItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to update.
     */
    limit?: number;
  };

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to update.
     */
    limit?: number;
  };

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput;
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
  };

  /**
   * Item delete
   */
  export type ItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to delete.
     */
    limit?: number;
  };

  /**
   * Item.subitems
   */
  export type Item$subitemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    where?: SubitemWhereInput;
    orderBy?:
      | SubitemOrderByWithRelationInput
      | SubitemOrderByWithRelationInput[];
    cursor?: SubitemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubitemScalarFieldEnum | SubitemScalarFieldEnum[];
  };

  /**
   * Item without action
   */
  export type ItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
  };

  /**
   * Model Subitem
   */

  export type AggregateSubitem = {
    _count: SubitemCountAggregateOutputType | null;
    _avg: SubitemAvgAggregateOutputType | null;
    _sum: SubitemSumAggregateOutputType | null;
    _min: SubitemMinAggregateOutputType | null;
    _max: SubitemMaxAggregateOutputType | null;
  };

  export type SubitemAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    itemId: number | null;
  };

  export type SubitemSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    itemId: number | null;
  };

  export type SubitemMinAggregateOutputType = {
    id: number | null;
    sku_code: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    isActive: boolean | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    itemId: number | null;
  };

  export type SubitemMaxAggregateOutputType = {
    id: number | null;
    sku_code: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    isActive: boolean | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    itemId: number | null;
  };

  export type SubitemCountAggregateOutputType = {
    id: number;
    sku_code: number;
    name: number;
    description: number;
    price: number;
    isActive: number;
    isDeleted: number;
    createdAt: number;
    updatedAt: number;
    itemId: number;
    _all: number;
  };

  export type SubitemAvgAggregateInputType = {
    id?: true;
    price?: true;
    itemId?: true;
  };

  export type SubitemSumAggregateInputType = {
    id?: true;
    price?: true;
    itemId?: true;
  };

  export type SubitemMinAggregateInputType = {
    id?: true;
    sku_code?: true;
    name?: true;
    description?: true;
    price?: true;
    isActive?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    itemId?: true;
  };

  export type SubitemMaxAggregateInputType = {
    id?: true;
    sku_code?: true;
    name?: true;
    description?: true;
    price?: true;
    isActive?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    itemId?: true;
  };

  export type SubitemCountAggregateInputType = {
    id?: true;
    sku_code?: true;
    name?: true;
    description?: true;
    price?: true;
    isActive?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    itemId?: true;
    _all?: true;
  };

  export type SubitemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subitem to aggregate.
     */
    where?: SubitemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subitems to fetch.
     */
    orderBy?:
      | SubitemOrderByWithRelationInput
      | SubitemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubitemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subitems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subitems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subitems
     **/
    _count?: true | SubitemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubitemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubitemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubitemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubitemMaxAggregateInputType;
  };

  export type GetSubitemAggregateType<T extends SubitemAggregateArgs> = {
    [P in keyof T & keyof AggregateSubitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubitem[P]>
      : GetScalarType<T[P], AggregateSubitem[P]>;
  };

  export type SubitemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubitemWhereInput;
    orderBy?:
      | SubitemOrderByWithAggregationInput
      | SubitemOrderByWithAggregationInput[];
    by: SubitemScalarFieldEnum[] | SubitemScalarFieldEnum;
    having?: SubitemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubitemCountAggregateInputType | true;
    _avg?: SubitemAvgAggregateInputType;
    _sum?: SubitemSumAggregateInputType;
    _min?: SubitemMinAggregateInputType;
    _max?: SubitemMaxAggregateInputType;
  };

  export type SubitemGroupByOutputType = {
    id: number;
    sku_code: string;
    name: string;
    description: string | null;
    price: number;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    itemId: number;
    _count: SubitemCountAggregateOutputType | null;
    _avg: SubitemAvgAggregateOutputType | null;
    _sum: SubitemSumAggregateOutputType | null;
    _min: SubitemMinAggregateOutputType | null;
    _max: SubitemMaxAggregateOutputType | null;
  };

  type GetSubitemGroupByPayload<T extends SubitemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubitemGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SubitemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubitemGroupByOutputType[P]>
            : GetScalarType<T[P], SubitemGroupByOutputType[P]>;
        }
      >
    >;

  export type SubitemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku_code?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      isActive?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      itemId?: boolean;
      item?: boolean | ItemDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subitem']
  >;

  export type SubitemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku_code?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      isActive?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      itemId?: boolean;
      item?: boolean | ItemDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subitem']
  >;

  export type SubitemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sku_code?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      isActive?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      itemId?: boolean;
      item?: boolean | ItemDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subitem']
  >;

  export type SubitemSelectScalar = {
    id?: boolean;
    sku_code?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    itemId?: boolean;
  };

  export type SubitemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'sku_code'
    | 'name'
    | 'description'
    | 'price'
    | 'isActive'
    | 'isDeleted'
    | 'createdAt'
    | 'updatedAt'
    | 'itemId',
    ExtArgs['result']['subitem']
  >;
  export type SubitemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    item?: boolean | ItemDefaultArgs<ExtArgs>;
  };
  export type SubitemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    item?: boolean | ItemDefaultArgs<ExtArgs>;
  };
  export type SubitemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    item?: boolean | ItemDefaultArgs<ExtArgs>;
  };

  export type $SubitemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Subitem';
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        sku_code: string;
        name: string;
        description: string | null;
        price: number;
        isActive: boolean;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
        itemId: number;
      },
      ExtArgs['result']['subitem']
    >;
    composites: {};
  };

  type SubitemGetPayload<
    S extends boolean | null | undefined | SubitemDefaultArgs,
  > = $Result.GetResult<Prisma.$SubitemPayload, S>;

  type SubitemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SubitemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubitemCountAggregateInputType | true;
  };

  export interface SubitemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Subitem'];
      meta: { name: 'Subitem' };
    };
    /**
     * Find zero or one Subitem that matches the filter.
     * @param {SubitemFindUniqueArgs} args - Arguments to find a Subitem
     * @example
     * // Get one Subitem
     * const subitem = await prisma.subitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubitemFindUniqueArgs>(
      args: SelectSubset<T, SubitemFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subitem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubitemFindUniqueOrThrowArgs} args - Arguments to find a Subitem
     * @example
     * // Get one Subitem
     * const subitem = await prisma.subitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubitemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubitemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemFindFirstArgs} args - Arguments to find a Subitem
     * @example
     * // Get one Subitem
     * const subitem = await prisma.subitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubitemFindFirstArgs>(
      args?: SelectSubset<T, SubitemFindFirstArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemFindFirstOrThrowArgs} args - Arguments to find a Subitem
     * @example
     * // Get one Subitem
     * const subitem = await prisma.subitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubitemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubitemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subitems
     * const subitems = await prisma.subitem.findMany()
     *
     * // Get first 10 Subitems
     * const subitems = await prisma.subitem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subitemWithIdOnly = await prisma.subitem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubitemFindManyArgs>(
      args?: SelectSubset<T, SubitemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Subitem.
     * @param {SubitemCreateArgs} args - Arguments to create a Subitem.
     * @example
     * // Create one Subitem
     * const Subitem = await prisma.subitem.create({
     *   data: {
     *     // ... data to create a Subitem
     *   }
     * })
     *
     */
    create<T extends SubitemCreateArgs>(
      args: SelectSubset<T, SubitemCreateArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subitems.
     * @param {SubitemCreateManyArgs} args - Arguments to create many Subitems.
     * @example
     * // Create many Subitems
     * const subitem = await prisma.subitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubitemCreateManyArgs>(
      args?: SelectSubset<T, SubitemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subitems and returns the data saved in the database.
     * @param {SubitemCreateManyAndReturnArgs} args - Arguments to create many Subitems.
     * @example
     * // Create many Subitems
     * const subitem = await prisma.subitem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subitems and only return the `id`
     * const subitemWithIdOnly = await prisma.subitem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubitemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubitemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subitem.
     * @param {SubitemDeleteArgs} args - Arguments to delete one Subitem.
     * @example
     * // Delete one Subitem
     * const Subitem = await prisma.subitem.delete({
     *   where: {
     *     // ... filter to delete one Subitem
     *   }
     * })
     *
     */
    delete<T extends SubitemDeleteArgs>(
      args: SelectSubset<T, SubitemDeleteArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subitem.
     * @param {SubitemUpdateArgs} args - Arguments to update one Subitem.
     * @example
     * // Update one Subitem
     * const subitem = await prisma.subitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubitemUpdateArgs>(
      args: SelectSubset<T, SubitemUpdateArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subitems.
     * @param {SubitemDeleteManyArgs} args - Arguments to filter Subitems to delete.
     * @example
     * // Delete a few Subitems
     * const { count } = await prisma.subitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubitemDeleteManyArgs>(
      args?: SelectSubset<T, SubitemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subitems
     * const subitem = await prisma.subitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubitemUpdateManyArgs>(
      args: SelectSubset<T, SubitemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subitems and returns the data updated in the database.
     * @param {SubitemUpdateManyAndReturnArgs} args - Arguments to update many Subitems.
     * @example
     * // Update many Subitems
     * const subitem = await prisma.subitem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subitems and only return the `id`
     * const subitemWithIdOnly = await prisma.subitem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubitemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubitemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subitem.
     * @param {SubitemUpsertArgs} args - Arguments to update or create a Subitem.
     * @example
     * // Update or create a Subitem
     * const subitem = await prisma.subitem.upsert({
     *   create: {
     *     // ... data to create a Subitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subitem we want to update
     *   }
     * })
     */
    upsert<T extends SubitemUpsertArgs>(
      args: SelectSubset<T, SubitemUpsertArgs<ExtArgs>>,
    ): Prisma__SubitemClient<
      $Result.GetResult<
        Prisma.$SubitemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemCountArgs} args - Arguments to filter Subitems to count.
     * @example
     * // Count the number of Subitems
     * const count = await prisma.subitem.count({
     *   where: {
     *     // ... the filter for the Subitems we want to count
     *   }
     * })
     **/
    count<T extends SubitemCountArgs>(
      args?: Subset<T, SubitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubitemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubitemAggregateArgs>(
      args: Subset<T, SubitemAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubitemAggregateType<T>>;

    /**
     * Group by Subitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubitemGroupByArgs['orderBy'] }
        : { orderBy?: SubitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubitemGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSubitemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subitem model
     */
    readonly fields: SubitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubitemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ItemDefaultArgs<ExtArgs>>,
    ): Prisma__ItemClient<
      | $Result.GetResult<
          Prisma.$ItemPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subitem model
   */
  interface SubitemFieldRefs {
    readonly id: FieldRef<'Subitem', 'Int'>;
    readonly sku_code: FieldRef<'Subitem', 'String'>;
    readonly name: FieldRef<'Subitem', 'String'>;
    readonly description: FieldRef<'Subitem', 'String'>;
    readonly price: FieldRef<'Subitem', 'Float'>;
    readonly isActive: FieldRef<'Subitem', 'Boolean'>;
    readonly isDeleted: FieldRef<'Subitem', 'Boolean'>;
    readonly createdAt: FieldRef<'Subitem', 'DateTime'>;
    readonly updatedAt: FieldRef<'Subitem', 'DateTime'>;
    readonly itemId: FieldRef<'Subitem', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Subitem findUnique
   */
  export type SubitemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * Filter, which Subitem to fetch.
     */
    where: SubitemWhereUniqueInput;
  };

  /**
   * Subitem findUniqueOrThrow
   */
  export type SubitemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * Filter, which Subitem to fetch.
     */
    where: SubitemWhereUniqueInput;
  };

  /**
   * Subitem findFirst
   */
  export type SubitemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * Filter, which Subitem to fetch.
     */
    where?: SubitemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subitems to fetch.
     */
    orderBy?:
      | SubitemOrderByWithRelationInput
      | SubitemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subitems.
     */
    cursor?: SubitemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subitems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subitems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subitems.
     */
    distinct?: SubitemScalarFieldEnum | SubitemScalarFieldEnum[];
  };

  /**
   * Subitem findFirstOrThrow
   */
  export type SubitemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * Filter, which Subitem to fetch.
     */
    where?: SubitemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subitems to fetch.
     */
    orderBy?:
      | SubitemOrderByWithRelationInput
      | SubitemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subitems.
     */
    cursor?: SubitemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subitems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subitems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subitems.
     */
    distinct?: SubitemScalarFieldEnum | SubitemScalarFieldEnum[];
  };

  /**
   * Subitem findMany
   */
  export type SubitemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * Filter, which Subitems to fetch.
     */
    where?: SubitemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subitems to fetch.
     */
    orderBy?:
      | SubitemOrderByWithRelationInput
      | SubitemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subitems.
     */
    cursor?: SubitemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subitems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subitems.
     */
    skip?: number;
    distinct?: SubitemScalarFieldEnum | SubitemScalarFieldEnum[];
  };

  /**
   * Subitem create
   */
  export type SubitemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subitem.
     */
    data: XOR<SubitemCreateInput, SubitemUncheckedCreateInput>;
  };

  /**
   * Subitem createMany
   */
  export type SubitemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subitems.
     */
    data: SubitemCreateManyInput | SubitemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subitem createManyAndReturn
   */
  export type SubitemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * The data used to create many Subitems.
     */
    data: SubitemCreateManyInput | SubitemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subitem update
   */
  export type SubitemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subitem.
     */
    data: XOR<SubitemUpdateInput, SubitemUncheckedUpdateInput>;
    /**
     * Choose, which Subitem to update.
     */
    where: SubitemWhereUniqueInput;
  };

  /**
   * Subitem updateMany
   */
  export type SubitemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subitems.
     */
    data: XOR<SubitemUpdateManyMutationInput, SubitemUncheckedUpdateManyInput>;
    /**
     * Filter which Subitems to update
     */
    where?: SubitemWhereInput;
    /**
     * Limit how many Subitems to update.
     */
    limit?: number;
  };

  /**
   * Subitem updateManyAndReturn
   */
  export type SubitemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * The data used to update Subitems.
     */
    data: XOR<SubitemUpdateManyMutationInput, SubitemUncheckedUpdateManyInput>;
    /**
     * Filter which Subitems to update
     */
    where?: SubitemWhereInput;
    /**
     * Limit how many Subitems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subitem upsert
   */
  export type SubitemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subitem to update in case it exists.
     */
    where: SubitemWhereUniqueInput;
    /**
     * In case the Subitem found by the `where` argument doesn't exist, create a new Subitem with this data.
     */
    create: XOR<SubitemCreateInput, SubitemUncheckedCreateInput>;
    /**
     * In case the Subitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubitemUpdateInput, SubitemUncheckedUpdateInput>;
  };

  /**
   * Subitem delete
   */
  export type SubitemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
    /**
     * Filter which Subitem to delete.
     */
    where: SubitemWhereUniqueInput;
  };

  /**
   * Subitem deleteMany
   */
  export type SubitemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subitems to delete
     */
    where?: SubitemWhereInput;
    /**
     * Limit how many Subitems to delete.
     */
    limit?: number;
  };

  /**
   * Subitem without action
   */
  export type SubitemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subitem
     */
    select?: SubitemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subitem
     */
    omit?: SubitemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubitemInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ItemScalarFieldEnum: {
    id: 'id';
    sku_code: 'sku_code';
    name: 'name';
    unit: 'unit';
    hasSubitem: 'hasSubitem';
    description: 'description';
    price: 'price';
    isActive: 'isActive';
    isDeleted: 'isDeleted';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ItemScalarFieldEnum =
    (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];

  export const SubitemScalarFieldEnum: {
    id: 'id';
    sku_code: 'sku_code';
    name: 'name';
    description: 'description';
    price: 'price';
    isActive: 'isActive';
    isDeleted: 'isDeleted';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    itemId: 'itemId';
  };

  export type SubitemScalarFieldEnum =
    (typeof SubitemScalarFieldEnum)[keyof typeof SubitemScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Unit'
  >;

  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Unit[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Deep Input Types
   */

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[];
    OR?: ItemWhereInput[];
    NOT?: ItemWhereInput | ItemWhereInput[];
    id?: IntFilter<'Item'> | number;
    sku_code?: StringFilter<'Item'> | string;
    name?: StringFilter<'Item'> | string;
    unit?: EnumUnitFilter<'Item'> | $Enums.Unit;
    hasSubitem?: BoolFilter<'Item'> | boolean;
    description?: StringNullableFilter<'Item'> | string | null;
    price?: FloatFilter<'Item'> | number;
    isActive?: BoolFilter<'Item'> | boolean;
    isDeleted?: BoolFilter<'Item'> | boolean;
    createdAt?: DateTimeFilter<'Item'> | Date | string;
    updatedAt?: DateTimeFilter<'Item'> | Date | string;
    subitems?: SubitemListRelationFilter;
  };

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    unit?: SortOrder;
    hasSubitem?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    subitems?: SubitemOrderByRelationAggregateInput;
  };

  export type ItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      sku_code?: string;
      AND?: ItemWhereInput | ItemWhereInput[];
      OR?: ItemWhereInput[];
      NOT?: ItemWhereInput | ItemWhereInput[];
      name?: StringFilter<'Item'> | string;
      unit?: EnumUnitFilter<'Item'> | $Enums.Unit;
      hasSubitem?: BoolFilter<'Item'> | boolean;
      description?: StringNullableFilter<'Item'> | string | null;
      price?: FloatFilter<'Item'> | number;
      isActive?: BoolFilter<'Item'> | boolean;
      isDeleted?: BoolFilter<'Item'> | boolean;
      createdAt?: DateTimeFilter<'Item'> | Date | string;
      updatedAt?: DateTimeFilter<'Item'> | Date | string;
      subitems?: SubitemListRelationFilter;
    },
    'id' | 'sku_code'
  >;

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    unit?: SortOrder;
    hasSubitem?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ItemCountOrderByAggregateInput;
    _avg?: ItemAvgOrderByAggregateInput;
    _max?: ItemMaxOrderByAggregateInput;
    _min?: ItemMinOrderByAggregateInput;
    _sum?: ItemSumOrderByAggregateInput;
  };

  export type ItemScalarWhereWithAggregatesInput = {
    AND?:
      | ItemScalarWhereWithAggregatesInput
      | ItemScalarWhereWithAggregatesInput[];
    OR?: ItemScalarWhereWithAggregatesInput[];
    NOT?:
      | ItemScalarWhereWithAggregatesInput
      | ItemScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Item'> | number;
    sku_code?: StringWithAggregatesFilter<'Item'> | string;
    name?: StringWithAggregatesFilter<'Item'> | string;
    unit?: EnumUnitWithAggregatesFilter<'Item'> | $Enums.Unit;
    hasSubitem?: BoolWithAggregatesFilter<'Item'> | boolean;
    description?: StringNullableWithAggregatesFilter<'Item'> | string | null;
    price?: FloatWithAggregatesFilter<'Item'> | number;
    isActive?: BoolWithAggregatesFilter<'Item'> | boolean;
    isDeleted?: BoolWithAggregatesFilter<'Item'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Item'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Item'> | Date | string;
  };

  export type SubitemWhereInput = {
    AND?: SubitemWhereInput | SubitemWhereInput[];
    OR?: SubitemWhereInput[];
    NOT?: SubitemWhereInput | SubitemWhereInput[];
    id?: IntFilter<'Subitem'> | number;
    sku_code?: StringFilter<'Subitem'> | string;
    name?: StringFilter<'Subitem'> | string;
    description?: StringNullableFilter<'Subitem'> | string | null;
    price?: FloatFilter<'Subitem'> | number;
    isActive?: BoolFilter<'Subitem'> | boolean;
    isDeleted?: BoolFilter<'Subitem'> | boolean;
    createdAt?: DateTimeFilter<'Subitem'> | Date | string;
    updatedAt?: DateTimeFilter<'Subitem'> | Date | string;
    itemId?: IntFilter<'Subitem'> | number;
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
  };

  export type SubitemOrderByWithRelationInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    itemId?: SortOrder;
    item?: ItemOrderByWithRelationInput;
  };

  export type SubitemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      sku_code?: string;
      AND?: SubitemWhereInput | SubitemWhereInput[];
      OR?: SubitemWhereInput[];
      NOT?: SubitemWhereInput | SubitemWhereInput[];
      name?: StringFilter<'Subitem'> | string;
      description?: StringNullableFilter<'Subitem'> | string | null;
      price?: FloatFilter<'Subitem'> | number;
      isActive?: BoolFilter<'Subitem'> | boolean;
      isDeleted?: BoolFilter<'Subitem'> | boolean;
      createdAt?: DateTimeFilter<'Subitem'> | Date | string;
      updatedAt?: DateTimeFilter<'Subitem'> | Date | string;
      itemId?: IntFilter<'Subitem'> | number;
      item?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
    },
    'id' | 'sku_code'
  >;

  export type SubitemOrderByWithAggregationInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    itemId?: SortOrder;
    _count?: SubitemCountOrderByAggregateInput;
    _avg?: SubitemAvgOrderByAggregateInput;
    _max?: SubitemMaxOrderByAggregateInput;
    _min?: SubitemMinOrderByAggregateInput;
    _sum?: SubitemSumOrderByAggregateInput;
  };

  export type SubitemScalarWhereWithAggregatesInput = {
    AND?:
      | SubitemScalarWhereWithAggregatesInput
      | SubitemScalarWhereWithAggregatesInput[];
    OR?: SubitemScalarWhereWithAggregatesInput[];
    NOT?:
      | SubitemScalarWhereWithAggregatesInput
      | SubitemScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Subitem'> | number;
    sku_code?: StringWithAggregatesFilter<'Subitem'> | string;
    name?: StringWithAggregatesFilter<'Subitem'> | string;
    description?: StringNullableWithAggregatesFilter<'Subitem'> | string | null;
    price?: FloatWithAggregatesFilter<'Subitem'> | number;
    isActive?: BoolWithAggregatesFilter<'Subitem'> | boolean;
    isDeleted?: BoolWithAggregatesFilter<'Subitem'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Subitem'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Subitem'> | Date | string;
    itemId?: IntWithAggregatesFilter<'Subitem'> | number;
  };

  export type ItemCreateInput = {
    sku_code: string;
    name: string;
    unit: $Enums.Unit;
    hasSubitem: boolean;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subitems?: SubitemCreateNestedManyWithoutItemInput;
  };

  export type ItemUncheckedCreateInput = {
    id?: number;
    sku_code: string;
    name: string;
    unit: $Enums.Unit;
    hasSubitem: boolean;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subitems?: SubitemUncheckedCreateNestedManyWithoutItemInput;
  };

  export type ItemUpdateInput = {
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit;
    hasSubitem?: BoolFieldUpdateOperationsInput | boolean;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subitems?: SubitemUpdateManyWithoutItemNestedInput;
  };

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit;
    hasSubitem?: BoolFieldUpdateOperationsInput | boolean;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subitems?: SubitemUncheckedUpdateManyWithoutItemNestedInput;
  };

  export type ItemCreateManyInput = {
    id?: number;
    sku_code: string;
    name: string;
    unit: $Enums.Unit;
    hasSubitem: boolean;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ItemUpdateManyMutationInput = {
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit;
    hasSubitem?: BoolFieldUpdateOperationsInput | boolean;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit;
    hasSubitem?: BoolFieldUpdateOperationsInput | boolean;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubitemCreateInput = {
    sku_code: string;
    name: string;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    item: ItemCreateNestedOneWithoutSubitemsInput;
  };

  export type SubitemUncheckedCreateInput = {
    id?: number;
    sku_code: string;
    name: string;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    itemId: number;
  };

  export type SubitemUpdateInput = {
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    item?: ItemUpdateOneRequiredWithoutSubitemsNestedInput;
  };

  export type SubitemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    itemId?: IntFieldUpdateOperationsInput | number;
  };

  export type SubitemCreateManyInput = {
    id?: number;
    sku_code: string;
    name: string;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    itemId: number;
  };

  export type SubitemUpdateManyMutationInput = {
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubitemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    itemId?: IntFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SubitemListRelationFilter = {
    every?: SubitemWhereInput;
    some?: SubitemWhereInput;
    none?: SubitemWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type SubitemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    unit?: SortOrder;
    hasSubitem?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
  };

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    unit?: SortOrder;
    hasSubitem?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    unit?: SortOrder;
    hasSubitem?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUnitFilter<$PrismaModel>;
    _max?: NestedEnumUnitFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput;
    isNot?: ItemWhereInput;
  };

  export type SubitemCountOrderByAggregateInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    itemId?: SortOrder;
  };

  export type SubitemAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    itemId?: SortOrder;
  };

  export type SubitemMaxOrderByAggregateInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    itemId?: SortOrder;
  };

  export type SubitemMinOrderByAggregateInput = {
    id?: SortOrder;
    sku_code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    isActive?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    itemId?: SortOrder;
  };

  export type SubitemSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    itemId?: SortOrder;
  };

  export type SubitemCreateNestedManyWithoutItemInput = {
    create?:
      | XOR<
          SubitemCreateWithoutItemInput,
          SubitemUncheckedCreateWithoutItemInput
        >
      | SubitemCreateWithoutItemInput[]
      | SubitemUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | SubitemCreateOrConnectWithoutItemInput
      | SubitemCreateOrConnectWithoutItemInput[];
    createMany?: SubitemCreateManyItemInputEnvelope;
    connect?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
  };

  export type SubitemUncheckedCreateNestedManyWithoutItemInput = {
    create?:
      | XOR<
          SubitemCreateWithoutItemInput,
          SubitemUncheckedCreateWithoutItemInput
        >
      | SubitemCreateWithoutItemInput[]
      | SubitemUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | SubitemCreateOrConnectWithoutItemInput
      | SubitemCreateOrConnectWithoutItemInput[];
    createMany?: SubitemCreateManyItemInputEnvelope;
    connect?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type SubitemUpdateManyWithoutItemNestedInput = {
    create?:
      | XOR<
          SubitemCreateWithoutItemInput,
          SubitemUncheckedCreateWithoutItemInput
        >
      | SubitemCreateWithoutItemInput[]
      | SubitemUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | SubitemCreateOrConnectWithoutItemInput
      | SubitemCreateOrConnectWithoutItemInput[];
    upsert?:
      | SubitemUpsertWithWhereUniqueWithoutItemInput
      | SubitemUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: SubitemCreateManyItemInputEnvelope;
    set?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    disconnect?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    delete?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    connect?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    update?:
      | SubitemUpdateWithWhereUniqueWithoutItemInput
      | SubitemUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?:
      | SubitemUpdateManyWithWhereWithoutItemInput
      | SubitemUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: SubitemScalarWhereInput | SubitemScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type SubitemUncheckedUpdateManyWithoutItemNestedInput = {
    create?:
      | XOR<
          SubitemCreateWithoutItemInput,
          SubitemUncheckedCreateWithoutItemInput
        >
      | SubitemCreateWithoutItemInput[]
      | SubitemUncheckedCreateWithoutItemInput[];
    connectOrCreate?:
      | SubitemCreateOrConnectWithoutItemInput
      | SubitemCreateOrConnectWithoutItemInput[];
    upsert?:
      | SubitemUpsertWithWhereUniqueWithoutItemInput
      | SubitemUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: SubitemCreateManyItemInputEnvelope;
    set?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    disconnect?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    delete?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    connect?: SubitemWhereUniqueInput | SubitemWhereUniqueInput[];
    update?:
      | SubitemUpdateWithWhereUniqueWithoutItemInput
      | SubitemUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?:
      | SubitemUpdateManyWithWhereWithoutItemInput
      | SubitemUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: SubitemScalarWhereInput | SubitemScalarWhereInput[];
  };

  export type ItemCreateNestedOneWithoutSubitemsInput = {
    create?: XOR<
      ItemCreateWithoutSubitemsInput,
      ItemUncheckedCreateWithoutSubitemsInput
    >;
    connectOrCreate?: ItemCreateOrConnectWithoutSubitemsInput;
    connect?: ItemWhereUniqueInput;
  };

  export type ItemUpdateOneRequiredWithoutSubitemsNestedInput = {
    create?: XOR<
      ItemCreateWithoutSubitemsInput,
      ItemUncheckedCreateWithoutSubitemsInput
    >;
    connectOrCreate?: ItemCreateOrConnectWithoutSubitemsInput;
    upsert?: ItemUpsertWithoutSubitemsInput;
    connect?: ItemWhereUniqueInput;
    update?: XOR<
      XOR<
        ItemUpdateToOneWithWhereWithoutSubitemsInput,
        ItemUpdateWithoutSubitemsInput
      >,
      ItemUncheckedUpdateWithoutSubitemsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>;
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUnitFilter<$PrismaModel>;
    _max?: NestedEnumUnitFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type SubitemCreateWithoutItemInput = {
    sku_code: string;
    name: string;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubitemUncheckedCreateWithoutItemInput = {
    id?: number;
    sku_code: string;
    name: string;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubitemCreateOrConnectWithoutItemInput = {
    where: SubitemWhereUniqueInput;
    create: XOR<
      SubitemCreateWithoutItemInput,
      SubitemUncheckedCreateWithoutItemInput
    >;
  };

  export type SubitemCreateManyItemInputEnvelope = {
    data: SubitemCreateManyItemInput | SubitemCreateManyItemInput[];
    skipDuplicates?: boolean;
  };

  export type SubitemUpsertWithWhereUniqueWithoutItemInput = {
    where: SubitemWhereUniqueInput;
    update: XOR<
      SubitemUpdateWithoutItemInput,
      SubitemUncheckedUpdateWithoutItemInput
    >;
    create: XOR<
      SubitemCreateWithoutItemInput,
      SubitemUncheckedCreateWithoutItemInput
    >;
  };

  export type SubitemUpdateWithWhereUniqueWithoutItemInput = {
    where: SubitemWhereUniqueInput;
    data: XOR<
      SubitemUpdateWithoutItemInput,
      SubitemUncheckedUpdateWithoutItemInput
    >;
  };

  export type SubitemUpdateManyWithWhereWithoutItemInput = {
    where: SubitemScalarWhereInput;
    data: XOR<
      SubitemUpdateManyMutationInput,
      SubitemUncheckedUpdateManyWithoutItemInput
    >;
  };

  export type SubitemScalarWhereInput = {
    AND?: SubitemScalarWhereInput | SubitemScalarWhereInput[];
    OR?: SubitemScalarWhereInput[];
    NOT?: SubitemScalarWhereInput | SubitemScalarWhereInput[];
    id?: IntFilter<'Subitem'> | number;
    sku_code?: StringFilter<'Subitem'> | string;
    name?: StringFilter<'Subitem'> | string;
    description?: StringNullableFilter<'Subitem'> | string | null;
    price?: FloatFilter<'Subitem'> | number;
    isActive?: BoolFilter<'Subitem'> | boolean;
    isDeleted?: BoolFilter<'Subitem'> | boolean;
    createdAt?: DateTimeFilter<'Subitem'> | Date | string;
    updatedAt?: DateTimeFilter<'Subitem'> | Date | string;
    itemId?: IntFilter<'Subitem'> | number;
  };

  export type ItemCreateWithoutSubitemsInput = {
    sku_code: string;
    name: string;
    unit: $Enums.Unit;
    hasSubitem: boolean;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ItemUncheckedCreateWithoutSubitemsInput = {
    id?: number;
    sku_code: string;
    name: string;
    unit: $Enums.Unit;
    hasSubitem: boolean;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ItemCreateOrConnectWithoutSubitemsInput = {
    where: ItemWhereUniqueInput;
    create: XOR<
      ItemCreateWithoutSubitemsInput,
      ItemUncheckedCreateWithoutSubitemsInput
    >;
  };

  export type ItemUpsertWithoutSubitemsInput = {
    update: XOR<
      ItemUpdateWithoutSubitemsInput,
      ItemUncheckedUpdateWithoutSubitemsInput
    >;
    create: XOR<
      ItemCreateWithoutSubitemsInput,
      ItemUncheckedCreateWithoutSubitemsInput
    >;
    where?: ItemWhereInput;
  };

  export type ItemUpdateToOneWithWhereWithoutSubitemsInput = {
    where?: ItemWhereInput;
    data: XOR<
      ItemUpdateWithoutSubitemsInput,
      ItemUncheckedUpdateWithoutSubitemsInput
    >;
  };

  export type ItemUpdateWithoutSubitemsInput = {
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit;
    hasSubitem?: BoolFieldUpdateOperationsInput | boolean;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ItemUncheckedUpdateWithoutSubitemsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit;
    hasSubitem?: BoolFieldUpdateOperationsInput | boolean;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubitemCreateManyItemInput = {
    id?: number;
    sku_code: string;
    name: string;
    description?: string | null;
    price: number;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubitemUpdateWithoutItemInput = {
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubitemUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubitemUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number;
    sku_code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
