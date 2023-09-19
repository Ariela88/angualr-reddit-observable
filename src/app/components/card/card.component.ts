import { Component, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Post } from '../list/list.component';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() post: Post[] = [];

}
