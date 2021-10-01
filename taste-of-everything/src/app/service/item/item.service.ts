import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/class/item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemIdList: Array<number>;
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/item";
    this.itemIdList = [];
  }

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);
  }

  public updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url, item);
  }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + "s");
  }

  public getItemByCategory(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + "/categoryId/" + id);
  }

  public deleteItem(id: number) {
    this.http.delete(this.url + "/" + id).subscribe();
  }
}
