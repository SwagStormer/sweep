import { Component, Input, OnInit } from '@angular/core';
import { GradeCategoryService, IGradingCategory } from '../../../shared/models/grade-category-service';

@Component({
  selector: 'app-grade-categories',
  templateUrl: './grade-categories.component.html',
  styleUrls: ['./grade-categories.component.scss']
})
export class GradeCategoriesComponent implements OnInit {

  private _filters: any;

  @Input() set filters(value: any) {
    this._filters = value;
    this.updateCategories();
  }

  public gradeCategories: IGradingCategory[] = [];

  constructor(private gradeCategoryService: GradeCategoryService) { }

  ngOnInit() {
  }

  updateCategories() {
    this.gradeCategoryService.readList(this._filters).subscribe(gradeCategories => {
      this.gradeCategories = gradeCategories;
    });
  }

}
