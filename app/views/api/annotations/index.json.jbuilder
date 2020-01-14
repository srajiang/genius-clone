@annotations.each do |annotation|
  
  json.set! annotation.id do
    json.partial! 'annotation', annotation: annotation
  end

end