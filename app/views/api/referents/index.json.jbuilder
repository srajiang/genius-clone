@referents.each do |referent|
  json.set! referent.id do

    json.partial! 'referent', referent: referent 
    json.annotation_ids referent.annotation_ids

  end
end