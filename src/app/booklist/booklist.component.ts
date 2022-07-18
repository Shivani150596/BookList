import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../services/booklist.service';
import { Books } from '../shared/books';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  // bookList: any[] = [
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  //   {
  //     title :"Official Guide to OET",
  //     publishedDate: "2020-03-03",
  //       publisher: "Simon and Schuster"
  //   },
  
    
  // ]
  bookList: any[]
  errorMsg : boolean;
  constructor(private bookService: BooklistService) { }

  ngOnInit(): void {
    this.showBookList()
  }

  showBookList() {
    this.bookService.getBooks()
      .subscribe((data: Books) => {
        this.bookList = data.items
        console.log(data.items)
      },error => this.errorMsg = true)
  };


}
