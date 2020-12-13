import chunk from 'lodash/chunk';

export function createBatches(objects) {
  return chunk(objects, 100);
}
