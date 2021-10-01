import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/class/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryId: number;
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/category";
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url, category);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.url, category);
  }

  public getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8080/categories");
  }

  public getCategoryByName(categoryName: string): Observable<any> {
    return this.http.get<Category[]>(this.url + "/categoryName/" + categoryName);
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(this.url + "/categoryId/" + id);
  }

  public deleteCategory(id: number) {
    this.http.delete(this.url + "/" + id).subscribe();
  }
}
