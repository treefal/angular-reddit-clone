import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
})
export class PostTileComponent implements OnInit {
  faComments = faComments;
  @Input() posts: PostModel[];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
