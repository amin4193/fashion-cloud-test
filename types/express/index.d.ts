// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request, Response } from 'express'

interface ResponseWithResult extends Response {
  result: any
}

declare global {
  namespace Express {
    interface Response {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any
    }
  }
}