class LibraryBooksController < ApplicationController
    def index
        @books = LibraryBook.all
    end
end
