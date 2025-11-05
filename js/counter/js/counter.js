import { saveDataLocal, loadDataLocal } from './storage.js';

export let count = loadDataLocal('counter') || 0;

export function increment() {
    count++;

    saveDataLocal('counter', count);
}

export function decrement() {
    count--;

    saveDataLocal('counter', count);
}
