class CreateAgeVerifications < ActiveRecord::Migration[5.2]
  def change
    create_table :age_verifications do |t|
      t.text :content
      t.timestamps
    end
  end
end
