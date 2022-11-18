import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];
  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }

  findOneById(id: string): Book {
    return this.books.find((book) => book.id === id);
  }
}
