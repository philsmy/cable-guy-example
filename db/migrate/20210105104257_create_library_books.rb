class CreateLibraryBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :library_books do |t|
      t.string :title
      t.string :status
      t.datetime :status_date

      t.timestamps
    end
  end
end
