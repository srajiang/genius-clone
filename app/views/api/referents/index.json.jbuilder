@referents.each do |referent|
  json.set! referent.id do

    json.partial! 'referent', referent: referent 

  end
end