import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordfileService } from '../recordfile.service';

@Component({
  selector: 'app-moredata',
  templateUrl: './moredata.component.html',
  styleUrls: ['./moredata.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoredataComponent implements OnInit {
  records$: Record[];
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);   // local

  constructor(private recordFile: RecordfileService) { }
  ngOnInit() {

    return this.recordFile.getUsers()
      .subscribe(data => this.records$ = data);
  }
}
