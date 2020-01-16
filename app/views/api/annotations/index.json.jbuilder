@annotations.each do |annotation|
  
  json.set! annotation.id do

    json.partial! 'annotation', annotation: annotation
    json.annotator annotation.annotator.username

  end

end