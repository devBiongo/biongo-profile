import { NextResponse } from 'next/server';

export default class AjaxResult<T> {
  constructor(code: number, msg: string, data: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  code: number;
  msg: string;
  data: T;
  public static fail(code: number, msg: string) {
    return NextResponse.json(new AjaxResult(code, msg, null));
  }
  public static ok(data: unknown, code?: number, msg?: string) {
    return NextResponse.json(new AjaxResult(code || 200, msg || '', data));
  }
}
