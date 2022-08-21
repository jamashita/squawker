import { ValueObject } from '../ValueObject';

export class DateTime implements ValueObject {
  private readonly _years: number;
  private readonly _months: number;
  private readonly _dates: number;
  private readonly _hours: number;
  private readonly _minutes: number;
  private readonly _seconds: number;

  public static now(): DateTime {
    const now: Date = new Date();

    return new DateTime(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
  }

  public constructor(years: number, months: number, dates: number, hours: number, minutes: number, seconds: number) {
    this._years = years;
    this._months = months;
    this._dates = dates;
    this._hours = hours;
    this._minutes = minutes;
    this._seconds = seconds;
  }

  public get dates(): number {
    return this._dates;
  }

  public get hours(): number {
    return this._hours;
  }

  public get minutes(): number {
    return this._minutes;
  }

  public get months(): number {
    return this._months;
  }

  public get seconds(): number {
    return this._seconds;
  }

  public get years(): number {
    return this._years;
  }
}
