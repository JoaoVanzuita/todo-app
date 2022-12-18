import * as create from './create'
import * as updateById from './updateById'
import * as deleteById from './deleteById'
import * as getByDate from './getByDate'
import * as getByTitle from './getByTitle'

export const NotesController = {
  ...create,
  ...updateById,
  ...deleteById,
  ...getByDate,
  ...getByTitle
}