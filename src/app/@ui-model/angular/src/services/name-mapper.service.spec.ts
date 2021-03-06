import { inject, TestBed } from '@angular/core/testing';

import { NameMapper } from './name-mapper.service';

describe('NameMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameMapper],
    });
  });

  let mapper: NameMapper;

  beforeEach(inject([NameMapper], (service: NameMapper) => {
    mapper = service;
  }));

  it('should create', () => {
    expect(mapper).toBeTruthy();
  });

  it('should tokenize', () => {
    expect(mapper.tokenize('composedWord')).toEqual(['composed', 'Word']);
  });

  it('should convert simple word to nature case', () => {
    expect(mapper.toNatureCase('word')).toEqual('Word');
  });

  it('should convert composedWord to nature case', () => {
    expect(mapper.toNatureCase('composedWord')).toEqual('Composed word');
  });

  it('should convert composedWordWith123Number to nature case', () => {
    expect(mapper.toNatureCase('composedWordWith123Number')).toEqual('Composed word with123 number');
  });

  it('should convert ComposedWord to nature case', () => {
    expect(mapper.toNatureCase('ComposedWord')).toEqual('Composed word');
  });

  it('should convert ComposedABBRWord to nature case', () => {
    expect(mapper.toNatureCase('ComposedABBRWord')).toEqual('Composed ABBR word');
  });
});
