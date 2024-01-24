import { StateSchema } from 'app/providers/StorePrivider'

export const getCounter = (state: StateSchema) => state.counter
