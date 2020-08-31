import { SendCode, SendMsg } from '~/types';

import Koa from 'koa';
import { Send } from '@serve/Core';

export default function Middleware() {
  return async function Middleware(ctx: Koa.BaseContext, next) {
    await next();
    if (!ctx.body) Send(ctx).fail(SendCode.Wrongful, SendMsg.Wrongful);
  };
}
