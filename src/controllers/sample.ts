/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express'

import Model, { ISample } from '../models/sample'

const exportResult = {

  // Create Sample
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: ISample = req.body
      const result = await Model.add(data)

      // ---- Use Socket.io
      // const io: SocketIO.Server = req.app.get('io')
      // io.emit('someEvent', { someData: '...' })

      res.result = (result as any)._doc
      next(res)
    } catch (err) { next(err) }
  },

  // List all Sample
  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query: Model.IQueryData = req.query as Model.IQueryData
      const result = await Model.list(query)
      res.result = result
      next(res)
    }
    catch (err) { next(err) }
  },

  // Show Sample Details
  async details(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sampleId: string = req.params.sampleId
      // const result = await Model.details(sampleId)

      // Get your custom method
      const result = await Model.greetings(sampleId)

      res.result = (result as any)._doc
      next(res)
    }
    catch (err) { next(err) }
  },

  // Update Sample
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sampleId: string = req.params.sampleId
      const result = await Model.updateById(sampleId, req.body)
      res.result = (result as any)._doc
      next(res)
    }
    catch (err) { next(err) }
  },

  // Archive Sample (Soft Delete)
  async archive(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sampleId: string = req.params.sampleId
      const result = await Model.softDelete(sampleId)
      res.result = (result as any)._doc
      next(res)
    }
    catch (err) { next(err) }
  },

  // Delete Sample From DB
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sampleId: string = req.params.sampleId
      const result = await Model.remove(sampleId)
      res.result = result
      next(res)
    }
    catch (err) { next(err) }
  },

}

export default exportResult