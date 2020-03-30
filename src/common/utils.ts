import engine from 'store/src/store-engine';
import lclStorage from 'store/storages/localStorage';

export const store = engine.createStore([lclStorage]);

export const dedupe = (array: string[]) => [...new Set(array)];