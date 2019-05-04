class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.string :text
      t.integer :category_id

      t.timestamps
    end
  end
end
