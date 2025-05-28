import { GetPaperInfo, Paperinfo } from './components/Paperinfo';
import {describe, expect, test} from '@jest/globals';

  describe('Paper Info', () => {
    it('doi test', () => {
    expect(GetPaperInfo('10.5281/zenodo.1005176').DOI).toBe('10.5281/ZENODO.1005176');
    });
    })

    describe('Paper Info', () => {
      it('date test', () => {
      expect(GetPaperInfo('10.5281/zenodo.1005176').issued?.getFullYear()).toBe(2018);
      });
      })