class CreatePhoneNumberQueries < ActiveRecord::Migration
  def change
    create_table :phone_number_queries do |t|
      t.string :phonenumber

      t.timestamps null: false
    end
  end
end
