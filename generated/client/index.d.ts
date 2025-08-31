
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model AlertEmail
 * 
 */
export type AlertEmail = $Result.DefaultSelection<Prisma.$AlertEmailPayload>
/**
 * Model InvitedPeople
 * 
 */
export type InvitedPeople = $Result.DefaultSelection<Prisma.$InvitedPeoplePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  User: 'User',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertEmail`: Exposes CRUD operations for the **AlertEmail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertEmails
    * const alertEmails = await prisma.alertEmail.findMany()
    * ```
    */
  get alertEmail(): Prisma.AlertEmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitedPeople`: Exposes CRUD operations for the **InvitedPeople** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvitedPeople
    * const invitedPeople = await prisma.invitedPeople.findMany()
    * ```
    */
  get invitedPeople(): Prisma.InvitedPeopleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    AlertEmail: 'AlertEmail',
    InvitedPeople: 'InvitedPeople'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "alertEmail" | "invitedPeople"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      AlertEmail: {
        payload: Prisma.$AlertEmailPayload<ExtArgs>
        fields: Prisma.AlertEmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertEmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertEmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>
          }
          findFirst: {
            args: Prisma.AlertEmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertEmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>
          }
          findMany: {
            args: Prisma.AlertEmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>[]
          }
          create: {
            args: Prisma.AlertEmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>
          }
          createMany: {
            args: Prisma.AlertEmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertEmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>
          }
          update: {
            args: Prisma.AlertEmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>
          }
          deleteMany: {
            args: Prisma.AlertEmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertEmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertEmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertEmailPayload>
          }
          aggregate: {
            args: Prisma.AlertEmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertEmail>
          }
          groupBy: {
            args: Prisma.AlertEmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertEmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertEmailCountArgs<ExtArgs>
            result: $Utils.Optional<AlertEmailCountAggregateOutputType> | number
          }
        }
      }
      InvitedPeople: {
        payload: Prisma.$InvitedPeoplePayload<ExtArgs>
        fields: Prisma.InvitedPeopleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitedPeopleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitedPeopleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>
          }
          findFirst: {
            args: Prisma.InvitedPeopleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitedPeopleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>
          }
          findMany: {
            args: Prisma.InvitedPeopleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>[]
          }
          create: {
            args: Prisma.InvitedPeopleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>
          }
          createMany: {
            args: Prisma.InvitedPeopleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvitedPeopleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>
          }
          update: {
            args: Prisma.InvitedPeopleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>
          }
          deleteMany: {
            args: Prisma.InvitedPeopleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitedPeopleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvitedPeopleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitedPeoplePayload>
          }
          aggregate: {
            args: Prisma.InvitedPeopleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitedPeople>
          }
          groupBy: {
            args: Prisma.InvitedPeopleGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitedPeopleGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitedPeopleCountArgs<ExtArgs>
            result: $Utils.Optional<InvitedPeopleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    alertEmail?: AlertEmailOmit
    invitedPeople?: InvitedPeopleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    reset_code: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    reset_code: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    reset_code: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    reset_code?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    reset_code?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    reset_code?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    reset_code: string | null
    role: $Enums.Role
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    reset_code?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    reset_code?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "reset_code" | "role" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      reset_code: string | null
      role: $Enums.Role
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly reset_code: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly is_active: FieldRef<"Users", 'Boolean'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model AlertEmail
   */

  export type AggregateAlertEmail = {
    _count: AlertEmailCountAggregateOutputType | null
    _avg: AlertEmailAvgAggregateOutputType | null
    _sum: AlertEmailSumAggregateOutputType | null
    _min: AlertEmailMinAggregateOutputType | null
    _max: AlertEmailMaxAggregateOutputType | null
  }

  export type AlertEmailAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type AlertEmailSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type AlertEmailMinAggregateOutputType = {
    id: number | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type AlertEmailMaxAggregateOutputType = {
    id: number | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type AlertEmailCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type AlertEmailAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type AlertEmailSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type AlertEmailMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type AlertEmailMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type AlertEmailCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type AlertEmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertEmail to aggregate.
     */
    where?: AlertEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEmails to fetch.
     */
    orderBy?: AlertEmailOrderByWithRelationInput | AlertEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertEmails
    **/
    _count?: true | AlertEmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertEmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertEmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertEmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertEmailMaxAggregateInputType
  }

  export type GetAlertEmailAggregateType<T extends AlertEmailAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertEmail[P]>
      : GetScalarType<T[P], AggregateAlertEmail[P]>
  }




  export type AlertEmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertEmailWhereInput
    orderBy?: AlertEmailOrderByWithAggregationInput | AlertEmailOrderByWithAggregationInput[]
    by: AlertEmailScalarFieldEnum[] | AlertEmailScalarFieldEnum
    having?: AlertEmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertEmailCountAggregateInputType | true
    _avg?: AlertEmailAvgAggregateInputType
    _sum?: AlertEmailSumAggregateInputType
    _min?: AlertEmailMinAggregateInputType
    _max?: AlertEmailMaxAggregateInputType
  }

  export type AlertEmailGroupByOutputType = {
    id: number
    email: string
    created_at: Date
    updated_at: Date
    created_by: number | null
    updated_by: number | null
    _count: AlertEmailCountAggregateOutputType | null
    _avg: AlertEmailAvgAggregateOutputType | null
    _sum: AlertEmailSumAggregateOutputType | null
    _min: AlertEmailMinAggregateOutputType | null
    _max: AlertEmailMaxAggregateOutputType | null
  }

  type GetAlertEmailGroupByPayload<T extends AlertEmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertEmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertEmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertEmailGroupByOutputType[P]>
            : GetScalarType<T[P], AlertEmailGroupByOutputType[P]>
        }
      >
    >


  export type AlertEmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["alertEmail"]>



  export type AlertEmailSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type AlertEmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "created_at" | "updated_at" | "created_by" | "updated_by", ExtArgs["result"]["alertEmail"]>

  export type $AlertEmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertEmail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      created_at: Date
      updated_at: Date
      created_by: number | null
      updated_by: number | null
    }, ExtArgs["result"]["alertEmail"]>
    composites: {}
  }

  type AlertEmailGetPayload<S extends boolean | null | undefined | AlertEmailDefaultArgs> = $Result.GetResult<Prisma.$AlertEmailPayload, S>

  type AlertEmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertEmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertEmailCountAggregateInputType | true
    }

  export interface AlertEmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertEmail'], meta: { name: 'AlertEmail' } }
    /**
     * Find zero or one AlertEmail that matches the filter.
     * @param {AlertEmailFindUniqueArgs} args - Arguments to find a AlertEmail
     * @example
     * // Get one AlertEmail
     * const alertEmail = await prisma.alertEmail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertEmailFindUniqueArgs>(args: SelectSubset<T, AlertEmailFindUniqueArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertEmail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertEmailFindUniqueOrThrowArgs} args - Arguments to find a AlertEmail
     * @example
     * // Get one AlertEmail
     * const alertEmail = await prisma.alertEmail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertEmailFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertEmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertEmail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailFindFirstArgs} args - Arguments to find a AlertEmail
     * @example
     * // Get one AlertEmail
     * const alertEmail = await prisma.alertEmail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertEmailFindFirstArgs>(args?: SelectSubset<T, AlertEmailFindFirstArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertEmail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailFindFirstOrThrowArgs} args - Arguments to find a AlertEmail
     * @example
     * // Get one AlertEmail
     * const alertEmail = await prisma.alertEmail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertEmailFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertEmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertEmails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertEmails
     * const alertEmails = await prisma.alertEmail.findMany()
     * 
     * // Get first 10 AlertEmails
     * const alertEmails = await prisma.alertEmail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertEmailWithIdOnly = await prisma.alertEmail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertEmailFindManyArgs>(args?: SelectSubset<T, AlertEmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertEmail.
     * @param {AlertEmailCreateArgs} args - Arguments to create a AlertEmail.
     * @example
     * // Create one AlertEmail
     * const AlertEmail = await prisma.alertEmail.create({
     *   data: {
     *     // ... data to create a AlertEmail
     *   }
     * })
     * 
     */
    create<T extends AlertEmailCreateArgs>(args: SelectSubset<T, AlertEmailCreateArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertEmails.
     * @param {AlertEmailCreateManyArgs} args - Arguments to create many AlertEmails.
     * @example
     * // Create many AlertEmails
     * const alertEmail = await prisma.alertEmail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertEmailCreateManyArgs>(args?: SelectSubset<T, AlertEmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlertEmail.
     * @param {AlertEmailDeleteArgs} args - Arguments to delete one AlertEmail.
     * @example
     * // Delete one AlertEmail
     * const AlertEmail = await prisma.alertEmail.delete({
     *   where: {
     *     // ... filter to delete one AlertEmail
     *   }
     * })
     * 
     */
    delete<T extends AlertEmailDeleteArgs>(args: SelectSubset<T, AlertEmailDeleteArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertEmail.
     * @param {AlertEmailUpdateArgs} args - Arguments to update one AlertEmail.
     * @example
     * // Update one AlertEmail
     * const alertEmail = await prisma.alertEmail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertEmailUpdateArgs>(args: SelectSubset<T, AlertEmailUpdateArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertEmails.
     * @param {AlertEmailDeleteManyArgs} args - Arguments to filter AlertEmails to delete.
     * @example
     * // Delete a few AlertEmails
     * const { count } = await prisma.alertEmail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertEmailDeleteManyArgs>(args?: SelectSubset<T, AlertEmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertEmails
     * const alertEmail = await prisma.alertEmail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertEmailUpdateManyArgs>(args: SelectSubset<T, AlertEmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlertEmail.
     * @param {AlertEmailUpsertArgs} args - Arguments to update or create a AlertEmail.
     * @example
     * // Update or create a AlertEmail
     * const alertEmail = await prisma.alertEmail.upsert({
     *   create: {
     *     // ... data to create a AlertEmail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertEmail we want to update
     *   }
     * })
     */
    upsert<T extends AlertEmailUpsertArgs>(args: SelectSubset<T, AlertEmailUpsertArgs<ExtArgs>>): Prisma__AlertEmailClient<$Result.GetResult<Prisma.$AlertEmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailCountArgs} args - Arguments to filter AlertEmails to count.
     * @example
     * // Count the number of AlertEmails
     * const count = await prisma.alertEmail.count({
     *   where: {
     *     // ... the filter for the AlertEmails we want to count
     *   }
     * })
    **/
    count<T extends AlertEmailCountArgs>(
      args?: Subset<T, AlertEmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertEmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertEmailAggregateArgs>(args: Subset<T, AlertEmailAggregateArgs>): Prisma.PrismaPromise<GetAlertEmailAggregateType<T>>

    /**
     * Group by AlertEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertEmailGroupByArgs} args - Group by arguments.
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
      T extends AlertEmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertEmailGroupByArgs['orderBy'] }
        : { orderBy?: AlertEmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertEmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertEmail model
   */
  readonly fields: AlertEmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertEmail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertEmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlertEmail model
   */
  interface AlertEmailFieldRefs {
    readonly id: FieldRef<"AlertEmail", 'Int'>
    readonly email: FieldRef<"AlertEmail", 'String'>
    readonly created_at: FieldRef<"AlertEmail", 'DateTime'>
    readonly updated_at: FieldRef<"AlertEmail", 'DateTime'>
    readonly created_by: FieldRef<"AlertEmail", 'Int'>
    readonly updated_by: FieldRef<"AlertEmail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlertEmail findUnique
   */
  export type AlertEmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * Filter, which AlertEmail to fetch.
     */
    where: AlertEmailWhereUniqueInput
  }

  /**
   * AlertEmail findUniqueOrThrow
   */
  export type AlertEmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * Filter, which AlertEmail to fetch.
     */
    where: AlertEmailWhereUniqueInput
  }

  /**
   * AlertEmail findFirst
   */
  export type AlertEmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * Filter, which AlertEmail to fetch.
     */
    where?: AlertEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEmails to fetch.
     */
    orderBy?: AlertEmailOrderByWithRelationInput | AlertEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertEmails.
     */
    cursor?: AlertEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertEmails.
     */
    distinct?: AlertEmailScalarFieldEnum | AlertEmailScalarFieldEnum[]
  }

  /**
   * AlertEmail findFirstOrThrow
   */
  export type AlertEmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * Filter, which AlertEmail to fetch.
     */
    where?: AlertEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEmails to fetch.
     */
    orderBy?: AlertEmailOrderByWithRelationInput | AlertEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertEmails.
     */
    cursor?: AlertEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertEmails.
     */
    distinct?: AlertEmailScalarFieldEnum | AlertEmailScalarFieldEnum[]
  }

  /**
   * AlertEmail findMany
   */
  export type AlertEmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * Filter, which AlertEmails to fetch.
     */
    where?: AlertEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertEmails to fetch.
     */
    orderBy?: AlertEmailOrderByWithRelationInput | AlertEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertEmails.
     */
    cursor?: AlertEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertEmails.
     */
    skip?: number
    distinct?: AlertEmailScalarFieldEnum | AlertEmailScalarFieldEnum[]
  }

  /**
   * AlertEmail create
   */
  export type AlertEmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * The data needed to create a AlertEmail.
     */
    data: XOR<AlertEmailCreateInput, AlertEmailUncheckedCreateInput>
  }

  /**
   * AlertEmail createMany
   */
  export type AlertEmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertEmails.
     */
    data: AlertEmailCreateManyInput | AlertEmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertEmail update
   */
  export type AlertEmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * The data needed to update a AlertEmail.
     */
    data: XOR<AlertEmailUpdateInput, AlertEmailUncheckedUpdateInput>
    /**
     * Choose, which AlertEmail to update.
     */
    where: AlertEmailWhereUniqueInput
  }

  /**
   * AlertEmail updateMany
   */
  export type AlertEmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertEmails.
     */
    data: XOR<AlertEmailUpdateManyMutationInput, AlertEmailUncheckedUpdateManyInput>
    /**
     * Filter which AlertEmails to update
     */
    where?: AlertEmailWhereInput
    /**
     * Limit how many AlertEmails to update.
     */
    limit?: number
  }

  /**
   * AlertEmail upsert
   */
  export type AlertEmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * The filter to search for the AlertEmail to update in case it exists.
     */
    where: AlertEmailWhereUniqueInput
    /**
     * In case the AlertEmail found by the `where` argument doesn't exist, create a new AlertEmail with this data.
     */
    create: XOR<AlertEmailCreateInput, AlertEmailUncheckedCreateInput>
    /**
     * In case the AlertEmail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertEmailUpdateInput, AlertEmailUncheckedUpdateInput>
  }

  /**
   * AlertEmail delete
   */
  export type AlertEmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
    /**
     * Filter which AlertEmail to delete.
     */
    where: AlertEmailWhereUniqueInput
  }

  /**
   * AlertEmail deleteMany
   */
  export type AlertEmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertEmails to delete
     */
    where?: AlertEmailWhereInput
    /**
     * Limit how many AlertEmails to delete.
     */
    limit?: number
  }

  /**
   * AlertEmail without action
   */
  export type AlertEmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertEmail
     */
    select?: AlertEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertEmail
     */
    omit?: AlertEmailOmit<ExtArgs> | null
  }


  /**
   * Model InvitedPeople
   */

  export type AggregateInvitedPeople = {
    _count: InvitedPeopleCountAggregateOutputType | null
    _avg: InvitedPeopleAvgAggregateOutputType | null
    _sum: InvitedPeopleSumAggregateOutputType | null
    _min: InvitedPeopleMinAggregateOutputType | null
    _max: InvitedPeopleMaxAggregateOutputType | null
  }

  export type InvitedPeopleAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type InvitedPeopleSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type InvitedPeopleMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    additional_guest: boolean | null
    additional_guest_name: string | null
    confirmed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type InvitedPeopleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    additional_guest: boolean | null
    additional_guest_name: string | null
    confirmed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type InvitedPeopleCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    additional_guest: number
    additional_guest_name: number
    confirmed: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type InvitedPeopleAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type InvitedPeopleSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type InvitedPeopleMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    additional_guest?: true
    additional_guest_name?: true
    confirmed?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type InvitedPeopleMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    additional_guest?: true
    additional_guest_name?: true
    confirmed?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type InvitedPeopleCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    additional_guest?: true
    additional_guest_name?: true
    confirmed?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type InvitedPeopleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvitedPeople to aggregate.
     */
    where?: InvitedPeopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitedPeople to fetch.
     */
    orderBy?: InvitedPeopleOrderByWithRelationInput | InvitedPeopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitedPeopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitedPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvitedPeople
    **/
    _count?: true | InvitedPeopleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitedPeopleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitedPeopleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitedPeopleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitedPeopleMaxAggregateInputType
  }

  export type GetInvitedPeopleAggregateType<T extends InvitedPeopleAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitedPeople]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitedPeople[P]>
      : GetScalarType<T[P], AggregateInvitedPeople[P]>
  }




  export type InvitedPeopleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitedPeopleWhereInput
    orderBy?: InvitedPeopleOrderByWithAggregationInput | InvitedPeopleOrderByWithAggregationInput[]
    by: InvitedPeopleScalarFieldEnum[] | InvitedPeopleScalarFieldEnum
    having?: InvitedPeopleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitedPeopleCountAggregateInputType | true
    _avg?: InvitedPeopleAvgAggregateInputType
    _sum?: InvitedPeopleSumAggregateInputType
    _min?: InvitedPeopleMinAggregateInputType
    _max?: InvitedPeopleMaxAggregateInputType
  }

  export type InvitedPeopleGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string
    additional_guest: boolean
    additional_guest_name: string | null
    confirmed: boolean
    created_at: Date
    updated_at: Date
    created_by: number | null
    updated_by: number | null
    _count: InvitedPeopleCountAggregateOutputType | null
    _avg: InvitedPeopleAvgAggregateOutputType | null
    _sum: InvitedPeopleSumAggregateOutputType | null
    _min: InvitedPeopleMinAggregateOutputType | null
    _max: InvitedPeopleMaxAggregateOutputType | null
  }

  type GetInvitedPeopleGroupByPayload<T extends InvitedPeopleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitedPeopleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitedPeopleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitedPeopleGroupByOutputType[P]>
            : GetScalarType<T[P], InvitedPeopleGroupByOutputType[P]>
        }
      >
    >


  export type InvitedPeopleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    additional_guest?: boolean
    additional_guest_name?: boolean
    confirmed?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["invitedPeople"]>



  export type InvitedPeopleSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    additional_guest?: boolean
    additional_guest_name?: boolean
    confirmed?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type InvitedPeopleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "additional_guest" | "additional_guest_name" | "confirmed" | "created_at" | "updated_at" | "created_by" | "updated_by", ExtArgs["result"]["invitedPeople"]>

  export type $InvitedPeoplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvitedPeople"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string
      additional_guest: boolean
      additional_guest_name: string | null
      confirmed: boolean
      created_at: Date
      updated_at: Date
      created_by: number | null
      updated_by: number | null
    }, ExtArgs["result"]["invitedPeople"]>
    composites: {}
  }

  type InvitedPeopleGetPayload<S extends boolean | null | undefined | InvitedPeopleDefaultArgs> = $Result.GetResult<Prisma.$InvitedPeoplePayload, S>

  type InvitedPeopleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitedPeopleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitedPeopleCountAggregateInputType | true
    }

  export interface InvitedPeopleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvitedPeople'], meta: { name: 'InvitedPeople' } }
    /**
     * Find zero or one InvitedPeople that matches the filter.
     * @param {InvitedPeopleFindUniqueArgs} args - Arguments to find a InvitedPeople
     * @example
     * // Get one InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitedPeopleFindUniqueArgs>(args: SelectSubset<T, InvitedPeopleFindUniqueArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvitedPeople that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitedPeopleFindUniqueOrThrowArgs} args - Arguments to find a InvitedPeople
     * @example
     * // Get one InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitedPeopleFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitedPeopleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvitedPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleFindFirstArgs} args - Arguments to find a InvitedPeople
     * @example
     * // Get one InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitedPeopleFindFirstArgs>(args?: SelectSubset<T, InvitedPeopleFindFirstArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvitedPeople that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleFindFirstOrThrowArgs} args - Arguments to find a InvitedPeople
     * @example
     * // Get one InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitedPeopleFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitedPeopleFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvitedPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.findMany()
     * 
     * // Get first 10 InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitedPeopleWithIdOnly = await prisma.invitedPeople.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitedPeopleFindManyArgs>(args?: SelectSubset<T, InvitedPeopleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvitedPeople.
     * @param {InvitedPeopleCreateArgs} args - Arguments to create a InvitedPeople.
     * @example
     * // Create one InvitedPeople
     * const InvitedPeople = await prisma.invitedPeople.create({
     *   data: {
     *     // ... data to create a InvitedPeople
     *   }
     * })
     * 
     */
    create<T extends InvitedPeopleCreateArgs>(args: SelectSubset<T, InvitedPeopleCreateArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvitedPeople.
     * @param {InvitedPeopleCreateManyArgs} args - Arguments to create many InvitedPeople.
     * @example
     * // Create many InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitedPeopleCreateManyArgs>(args?: SelectSubset<T, InvitedPeopleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InvitedPeople.
     * @param {InvitedPeopleDeleteArgs} args - Arguments to delete one InvitedPeople.
     * @example
     * // Delete one InvitedPeople
     * const InvitedPeople = await prisma.invitedPeople.delete({
     *   where: {
     *     // ... filter to delete one InvitedPeople
     *   }
     * })
     * 
     */
    delete<T extends InvitedPeopleDeleteArgs>(args: SelectSubset<T, InvitedPeopleDeleteArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvitedPeople.
     * @param {InvitedPeopleUpdateArgs} args - Arguments to update one InvitedPeople.
     * @example
     * // Update one InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitedPeopleUpdateArgs>(args: SelectSubset<T, InvitedPeopleUpdateArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvitedPeople.
     * @param {InvitedPeopleDeleteManyArgs} args - Arguments to filter InvitedPeople to delete.
     * @example
     * // Delete a few InvitedPeople
     * const { count } = await prisma.invitedPeople.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitedPeopleDeleteManyArgs>(args?: SelectSubset<T, InvitedPeopleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvitedPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitedPeopleUpdateManyArgs>(args: SelectSubset<T, InvitedPeopleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvitedPeople.
     * @param {InvitedPeopleUpsertArgs} args - Arguments to update or create a InvitedPeople.
     * @example
     * // Update or create a InvitedPeople
     * const invitedPeople = await prisma.invitedPeople.upsert({
     *   create: {
     *     // ... data to create a InvitedPeople
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvitedPeople we want to update
     *   }
     * })
     */
    upsert<T extends InvitedPeopleUpsertArgs>(args: SelectSubset<T, InvitedPeopleUpsertArgs<ExtArgs>>): Prisma__InvitedPeopleClient<$Result.GetResult<Prisma.$InvitedPeoplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvitedPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleCountArgs} args - Arguments to filter InvitedPeople to count.
     * @example
     * // Count the number of InvitedPeople
     * const count = await prisma.invitedPeople.count({
     *   where: {
     *     // ... the filter for the InvitedPeople we want to count
     *   }
     * })
    **/
    count<T extends InvitedPeopleCountArgs>(
      args?: Subset<T, InvitedPeopleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitedPeopleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvitedPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitedPeopleAggregateArgs>(args: Subset<T, InvitedPeopleAggregateArgs>): Prisma.PrismaPromise<GetInvitedPeopleAggregateType<T>>

    /**
     * Group by InvitedPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitedPeopleGroupByArgs} args - Group by arguments.
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
      T extends InvitedPeopleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitedPeopleGroupByArgs['orderBy'] }
        : { orderBy?: InvitedPeopleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitedPeopleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitedPeopleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvitedPeople model
   */
  readonly fields: InvitedPeopleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvitedPeople.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitedPeopleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvitedPeople model
   */
  interface InvitedPeopleFieldRefs {
    readonly id: FieldRef<"InvitedPeople", 'Int'>
    readonly name: FieldRef<"InvitedPeople", 'String'>
    readonly phone: FieldRef<"InvitedPeople", 'String'>
    readonly email: FieldRef<"InvitedPeople", 'String'>
    readonly additional_guest: FieldRef<"InvitedPeople", 'Boolean'>
    readonly additional_guest_name: FieldRef<"InvitedPeople", 'String'>
    readonly confirmed: FieldRef<"InvitedPeople", 'Boolean'>
    readonly created_at: FieldRef<"InvitedPeople", 'DateTime'>
    readonly updated_at: FieldRef<"InvitedPeople", 'DateTime'>
    readonly created_by: FieldRef<"InvitedPeople", 'Int'>
    readonly updated_by: FieldRef<"InvitedPeople", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InvitedPeople findUnique
   */
  export type InvitedPeopleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * Filter, which InvitedPeople to fetch.
     */
    where: InvitedPeopleWhereUniqueInput
  }

  /**
   * InvitedPeople findUniqueOrThrow
   */
  export type InvitedPeopleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * Filter, which InvitedPeople to fetch.
     */
    where: InvitedPeopleWhereUniqueInput
  }

  /**
   * InvitedPeople findFirst
   */
  export type InvitedPeopleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * Filter, which InvitedPeople to fetch.
     */
    where?: InvitedPeopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitedPeople to fetch.
     */
    orderBy?: InvitedPeopleOrderByWithRelationInput | InvitedPeopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvitedPeople.
     */
    cursor?: InvitedPeopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitedPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitedPeople.
     */
    distinct?: InvitedPeopleScalarFieldEnum | InvitedPeopleScalarFieldEnum[]
  }

  /**
   * InvitedPeople findFirstOrThrow
   */
  export type InvitedPeopleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * Filter, which InvitedPeople to fetch.
     */
    where?: InvitedPeopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitedPeople to fetch.
     */
    orderBy?: InvitedPeopleOrderByWithRelationInput | InvitedPeopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvitedPeople.
     */
    cursor?: InvitedPeopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitedPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitedPeople.
     */
    distinct?: InvitedPeopleScalarFieldEnum | InvitedPeopleScalarFieldEnum[]
  }

  /**
   * InvitedPeople findMany
   */
  export type InvitedPeopleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * Filter, which InvitedPeople to fetch.
     */
    where?: InvitedPeopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitedPeople to fetch.
     */
    orderBy?: InvitedPeopleOrderByWithRelationInput | InvitedPeopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvitedPeople.
     */
    cursor?: InvitedPeopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitedPeople.
     */
    skip?: number
    distinct?: InvitedPeopleScalarFieldEnum | InvitedPeopleScalarFieldEnum[]
  }

  /**
   * InvitedPeople create
   */
  export type InvitedPeopleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * The data needed to create a InvitedPeople.
     */
    data: XOR<InvitedPeopleCreateInput, InvitedPeopleUncheckedCreateInput>
  }

  /**
   * InvitedPeople createMany
   */
  export type InvitedPeopleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvitedPeople.
     */
    data: InvitedPeopleCreateManyInput | InvitedPeopleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvitedPeople update
   */
  export type InvitedPeopleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * The data needed to update a InvitedPeople.
     */
    data: XOR<InvitedPeopleUpdateInput, InvitedPeopleUncheckedUpdateInput>
    /**
     * Choose, which InvitedPeople to update.
     */
    where: InvitedPeopleWhereUniqueInput
  }

  /**
   * InvitedPeople updateMany
   */
  export type InvitedPeopleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvitedPeople.
     */
    data: XOR<InvitedPeopleUpdateManyMutationInput, InvitedPeopleUncheckedUpdateManyInput>
    /**
     * Filter which InvitedPeople to update
     */
    where?: InvitedPeopleWhereInput
    /**
     * Limit how many InvitedPeople to update.
     */
    limit?: number
  }

  /**
   * InvitedPeople upsert
   */
  export type InvitedPeopleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * The filter to search for the InvitedPeople to update in case it exists.
     */
    where: InvitedPeopleWhereUniqueInput
    /**
     * In case the InvitedPeople found by the `where` argument doesn't exist, create a new InvitedPeople with this data.
     */
    create: XOR<InvitedPeopleCreateInput, InvitedPeopleUncheckedCreateInput>
    /**
     * In case the InvitedPeople was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitedPeopleUpdateInput, InvitedPeopleUncheckedUpdateInput>
  }

  /**
   * InvitedPeople delete
   */
  export type InvitedPeopleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
    /**
     * Filter which InvitedPeople to delete.
     */
    where: InvitedPeopleWhereUniqueInput
  }

  /**
   * InvitedPeople deleteMany
   */
  export type InvitedPeopleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvitedPeople to delete
     */
    where?: InvitedPeopleWhereInput
    /**
     * Limit how many InvitedPeople to delete.
     */
    limit?: number
  }

  /**
   * InvitedPeople without action
   */
  export type InvitedPeopleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitedPeople
     */
    select?: InvitedPeopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitedPeople
     */
    omit?: InvitedPeopleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    reset_code: 'reset_code',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AlertEmailScalarFieldEnum: {
    id: 'id',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type AlertEmailScalarFieldEnum = (typeof AlertEmailScalarFieldEnum)[keyof typeof AlertEmailScalarFieldEnum]


  export const InvitedPeopleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    additional_guest: 'additional_guest',
    additional_guest_name: 'additional_guest_name',
    confirmed: 'confirmed',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type InvitedPeopleScalarFieldEnum = (typeof InvitedPeopleScalarFieldEnum)[keyof typeof InvitedPeopleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    reset_code: 'reset_code'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const AlertEmailOrderByRelevanceFieldEnum: {
    email: 'email'
  };

  export type AlertEmailOrderByRelevanceFieldEnum = (typeof AlertEmailOrderByRelevanceFieldEnum)[keyof typeof AlertEmailOrderByRelevanceFieldEnum]


  export const InvitedPeopleOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    email: 'email',
    additional_guest_name: 'additional_guest_name'
  };

  export type InvitedPeopleOrderByRelevanceFieldEnum = (typeof InvitedPeopleOrderByRelevanceFieldEnum)[keyof typeof InvitedPeopleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    reset_code?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    is_active?: BoolFilter<"Users"> | boolean
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_code?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringNullableFilter<"Users"> | string | null
    password?: StringFilter<"Users"> | string
    reset_code?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    is_active?: BoolFilter<"Users"> | boolean
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_code?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    reset_code?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    is_active?: BoolWithAggregatesFilter<"Users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type AlertEmailWhereInput = {
    AND?: AlertEmailWhereInput | AlertEmailWhereInput[]
    OR?: AlertEmailWhereInput[]
    NOT?: AlertEmailWhereInput | AlertEmailWhereInput[]
    id?: IntFilter<"AlertEmail"> | number
    email?: StringFilter<"AlertEmail"> | string
    created_at?: DateTimeFilter<"AlertEmail"> | Date | string
    updated_at?: DateTimeFilter<"AlertEmail"> | Date | string
    created_by?: IntNullableFilter<"AlertEmail"> | number | null
    updated_by?: IntNullableFilter<"AlertEmail"> | number | null
  }

  export type AlertEmailOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _relevance?: AlertEmailOrderByRelevanceInput
  }

  export type AlertEmailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AlertEmailWhereInput | AlertEmailWhereInput[]
    OR?: AlertEmailWhereInput[]
    NOT?: AlertEmailWhereInput | AlertEmailWhereInput[]
    created_at?: DateTimeFilter<"AlertEmail"> | Date | string
    updated_at?: DateTimeFilter<"AlertEmail"> | Date | string
    created_by?: IntNullableFilter<"AlertEmail"> | number | null
    updated_by?: IntNullableFilter<"AlertEmail"> | number | null
  }, "id" | "email">

  export type AlertEmailOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: AlertEmailCountOrderByAggregateInput
    _avg?: AlertEmailAvgOrderByAggregateInput
    _max?: AlertEmailMaxOrderByAggregateInput
    _min?: AlertEmailMinOrderByAggregateInput
    _sum?: AlertEmailSumOrderByAggregateInput
  }

  export type AlertEmailScalarWhereWithAggregatesInput = {
    AND?: AlertEmailScalarWhereWithAggregatesInput | AlertEmailScalarWhereWithAggregatesInput[]
    OR?: AlertEmailScalarWhereWithAggregatesInput[]
    NOT?: AlertEmailScalarWhereWithAggregatesInput | AlertEmailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlertEmail"> | number
    email?: StringWithAggregatesFilter<"AlertEmail"> | string
    created_at?: DateTimeWithAggregatesFilter<"AlertEmail"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AlertEmail"> | Date | string
    created_by?: IntNullableWithAggregatesFilter<"AlertEmail"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"AlertEmail"> | number | null
  }

  export type InvitedPeopleWhereInput = {
    AND?: InvitedPeopleWhereInput | InvitedPeopleWhereInput[]
    OR?: InvitedPeopleWhereInput[]
    NOT?: InvitedPeopleWhereInput | InvitedPeopleWhereInput[]
    id?: IntFilter<"InvitedPeople"> | number
    name?: StringFilter<"InvitedPeople"> | string
    phone?: StringFilter<"InvitedPeople"> | string
    email?: StringFilter<"InvitedPeople"> | string
    additional_guest?: BoolFilter<"InvitedPeople"> | boolean
    additional_guest_name?: StringNullableFilter<"InvitedPeople"> | string | null
    confirmed?: BoolFilter<"InvitedPeople"> | boolean
    created_at?: DateTimeFilter<"InvitedPeople"> | Date | string
    updated_at?: DateTimeFilter<"InvitedPeople"> | Date | string
    created_by?: IntNullableFilter<"InvitedPeople"> | number | null
    updated_by?: IntNullableFilter<"InvitedPeople"> | number | null
  }

  export type InvitedPeopleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    additional_guest?: SortOrder
    additional_guest_name?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _relevance?: InvitedPeopleOrderByRelevanceInput
  }

  export type InvitedPeopleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: InvitedPeopleWhereInput | InvitedPeopleWhereInput[]
    OR?: InvitedPeopleWhereInput[]
    NOT?: InvitedPeopleWhereInput | InvitedPeopleWhereInput[]
    name?: StringFilter<"InvitedPeople"> | string
    additional_guest?: BoolFilter<"InvitedPeople"> | boolean
    additional_guest_name?: StringNullableFilter<"InvitedPeople"> | string | null
    confirmed?: BoolFilter<"InvitedPeople"> | boolean
    created_at?: DateTimeFilter<"InvitedPeople"> | Date | string
    updated_at?: DateTimeFilter<"InvitedPeople"> | Date | string
    created_by?: IntNullableFilter<"InvitedPeople"> | number | null
    updated_by?: IntNullableFilter<"InvitedPeople"> | number | null
  }, "id" | "phone" | "email">

  export type InvitedPeopleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    additional_guest?: SortOrder
    additional_guest_name?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: InvitedPeopleCountOrderByAggregateInput
    _avg?: InvitedPeopleAvgOrderByAggregateInput
    _max?: InvitedPeopleMaxOrderByAggregateInput
    _min?: InvitedPeopleMinOrderByAggregateInput
    _sum?: InvitedPeopleSumOrderByAggregateInput
  }

  export type InvitedPeopleScalarWhereWithAggregatesInput = {
    AND?: InvitedPeopleScalarWhereWithAggregatesInput | InvitedPeopleScalarWhereWithAggregatesInput[]
    OR?: InvitedPeopleScalarWhereWithAggregatesInput[]
    NOT?: InvitedPeopleScalarWhereWithAggregatesInput | InvitedPeopleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InvitedPeople"> | number
    name?: StringWithAggregatesFilter<"InvitedPeople"> | string
    phone?: StringWithAggregatesFilter<"InvitedPeople"> | string
    email?: StringWithAggregatesFilter<"InvitedPeople"> | string
    additional_guest?: BoolWithAggregatesFilter<"InvitedPeople"> | boolean
    additional_guest_name?: StringNullableWithAggregatesFilter<"InvitedPeople"> | string | null
    confirmed?: BoolWithAggregatesFilter<"InvitedPeople"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"InvitedPeople"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"InvitedPeople"> | Date | string
    created_by?: IntNullableWithAggregatesFilter<"InvitedPeople"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"InvitedPeople"> | number | null
  }

  export type UsersCreateInput = {
    name?: string | null
    email: string
    password: string
    reset_code?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    reset_code?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    reset_code?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertEmailCreateInput = {
    email: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type AlertEmailUncheckedCreateInput = {
    id?: number
    email: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type AlertEmailUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertEmailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertEmailCreateManyInput = {
    id?: number
    email: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type AlertEmailUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertEmailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvitedPeopleCreateInput = {
    name: string
    phone: string
    email: string
    additional_guest?: boolean
    additional_guest_name?: string | null
    confirmed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type InvitedPeopleUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email: string
    additional_guest?: boolean
    additional_guest_name?: string | null
    confirmed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type InvitedPeopleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    additional_guest?: BoolFieldUpdateOperationsInput | boolean
    additional_guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvitedPeopleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    additional_guest?: BoolFieldUpdateOperationsInput | boolean
    additional_guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvitedPeopleCreateManyInput = {
    id?: number
    name: string
    phone: string
    email: string
    additional_guest?: boolean
    additional_guest_name?: string | null
    confirmed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type InvitedPeopleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    additional_guest?: BoolFieldUpdateOperationsInput | boolean
    additional_guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvitedPeopleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    additional_guest?: BoolFieldUpdateOperationsInput | boolean
    additional_guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_code?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_code?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reset_code?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AlertEmailOrderByRelevanceInput = {
    fields: AlertEmailOrderByRelevanceFieldEnum | AlertEmailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlertEmailCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type AlertEmailAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type AlertEmailMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type AlertEmailMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type AlertEmailSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type InvitedPeopleOrderByRelevanceInput = {
    fields: InvitedPeopleOrderByRelevanceFieldEnum | InvitedPeopleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InvitedPeopleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    additional_guest?: SortOrder
    additional_guest_name?: SortOrder
    confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type InvitedPeopleAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type InvitedPeopleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    additional_guest?: SortOrder
    additional_guest_name?: SortOrder
    confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type InvitedPeopleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    additional_guest?: SortOrder
    additional_guest_name?: SortOrder
    confirmed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type InvitedPeopleSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}