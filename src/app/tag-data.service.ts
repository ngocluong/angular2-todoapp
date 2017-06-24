import { Injectable } from '@angular/core';
import { Tag } from './tag'

@Injectable()
export class TagDataService {
  tags: any[] = [
    {
      name: 'a',
      children: [
        {name: 'a'},
        {name: 'b'}
      ]
    },
    {
      name: 'a1',
      children: [
        {name: 'a1'},
        {name: 'b1'}
      ]
    }
  ];

  constructor() { }

  getAllTags(): any[] {
    return this.tags
  }
}
