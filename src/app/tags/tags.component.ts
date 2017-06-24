import { Component, OnInit } from '@angular/core';
import { TagDataService } from '../tag-data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: any[];
  options = {
    allowDrag: true,
    allowDrop: true
  };
  maxID = 8;
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];

  constructor(private tagDataService: TagDataService) { }

  ngOnInit() {
    this.tags = this.tagDataService.getAllTags();
  }

  newSubItem(tree, node) {
    let arr_node = this.getNodeById(node.id);
    if(arr_node.children)
      arr_node.children.push({ id: this.maxID, name: 'a new child' });
    else
      arr_node.children = [{ id: this.maxID, name: 'a new child' }];
    this.maxID += 1;
    tree.treeModel.update();
  }

  newSiblingItem(tree, node) {
    let parent_node = this.getNodeById(node.parent.id);
    if(parent_node)
      parent_node.children.push({ id: this.maxID, name: 'a sibling' });
    else
      this.nodes.push({ id: this.maxID, name: 'a sibling', children: [] });
    this.maxID += 1;
    tree.treeModel.update();
  }

  removeNode(tree, node) {
    let parent_node = this.getNodeById(node.parent.id);
    if(parent_node)
      parent_node.children.splice(node.index, 1)
    else
      this.nodes.splice(node.index, 1)
    this.maxID += 1;
    tree.treeModel.update();
  }

  getNodeById(id){
    let node = this.nodes;
    let reduce = [].reduce;
    function runner(result, node){
      if(result || !node) return result;
      return node.id === id && node || //is this the proper node?
        runner(null, node.children) || //process this nodes children
        reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
    }
    return runner(null, node);
  }
}
