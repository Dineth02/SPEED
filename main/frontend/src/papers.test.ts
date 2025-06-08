import { GetPaperInfo } from './components/Paperinfo';
import { describe, expect } from '@jest/globals';

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

const bibtext = String.raw`@article{willighagen2019citation,
  title={Citation. js: a format-independent, modular bibliography tool for the browser and command line},
  author={Willighagen, Lars G},
  journal={PeerJ Computer Science},
  volume={5},
  pages={e214},
  year={2019},
  publisher={PeerJ Inc.}
}`;

describe('Bibtext Test',() => {
  it('title test', () => {
    expect(GetPaperInfo(bibtext).title).toBe('Citation. js: a format-independent, modular bibliography tool for the browser and command line');
  });
})

describe('Bibtext Test',() => {
  it('author test', () => {
    expect(GetPaperInfo(bibtext).authors?.length).toBe(1);
  });
})

describe('Bibtext Test',() => {
  it('date test', () => {
    expect(GetPaperInfo(bibtext).issued?.getFullYear()).toBe(2019);
  });
})