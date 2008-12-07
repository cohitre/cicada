#!/usr/bin/env ruby -wKU

require "rubygems"
require "perro"

s = Perro::Server.new( 3000 )


s.get("/:file.js" , :javascript) do |p|
  open("./#{p[:file]}.js" ).read
end

s.get("/:file.css" , :stylesheet) do |p|
  open("./#{p[:file]}.css" ).read
end
s.haml("/","./index.haml")

s.start