import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryController } from 'src/core/category-controller';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'price', 'category', 'description', 'buttons'];
  allCategories = [];
  isError: boolean;
  isLoading: boolean;

  constructor(private categoryController: CategoryController,
    private translate: TranslateService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.assignControllsLoading(true, false);
    this.categoryController.getCategories((res) => {
      this.assignControllsLoading(false, false);
      this.allCategories = res;
    }, error => {
      this.assignControllsLoading(false, true);
    });
  }

  showProductsCategory(category) {
    this.router.navigate([`product/list/category/${category}`]);
  }

  assignControllsLoading(loading, error) {
    this.isLoading = loading;
    this.isError = error;
  }

}
