require 'sinatra/base'

class App < Sinatra::Base

  ['/', '/index.html'].each do |url|
    get url do
      erb :index
    end
  end

end
