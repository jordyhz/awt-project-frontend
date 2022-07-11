export interface Book {
  _id: String;
  sender: String;
  bookImageLink: String;
  bookThumbnail: String;
  bookTitle: String;
  bookAuthors: String[];
  bookPreviewLink: String;
  createdAt?: Date;
}
