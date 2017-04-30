import { Component, Input, OnInit } from '@angular/core';
import { ILetterGrade, LetterGradeService } from '../../../shared/models/letter-grade-service';

@Component({
  selector: 'app-grading-scale',
  templateUrl: './grading-scale.component.html',
  styleUrls: ['./grading-scale.component.scss']
})
export class GradingScaleComponent implements OnInit {

  public letterGrades: ILetterGrade[] = [];

  private _filters: any;

  @Input() set filters(value: any) {
    this._filters = value;
    this.updateFilters();
  }

  constructor(private letterGradeService: LetterGradeService) { }

  ngOnInit() {
  }

  updateFilters() {
    this.letterGradeService.readList(this._filters).subscribe(letterGrades => {
      this.letterGrades = letterGrades;
    });
  }

}
