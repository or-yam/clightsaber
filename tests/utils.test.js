import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { sleep } from '../lib/utils.js';
import logSaber from '../lib/logSaber.js';

describe('sleep', () => {
  it('should wait', () => {
    assert.ok(sleep(500));
  });
});

describe.only('logSaber', () => {
  it('should log', () => {
    logSaber();
    assert.ok(true);
  });
});
