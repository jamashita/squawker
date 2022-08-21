export type Primitive = undefined | null | boolean | number | string | symbol | bigint;

export type Nullable<T> = null | T;
export type Undefiable<T> = undefined | T;

export type Some<T> = {
  exists: true;
  value: T;
};
export type None = {
  exists: false;
};
export type Optional<T> = Some<T> | None;

export type Success<T> = {
  succeeded: true;
  value: T;
};
export type Failure<E extends Error> = {
  succeeded: false;
  error: E;
};
export type Result<T, E extends Error> = Success<T> | Failure<E>;
