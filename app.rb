require 'sinatra/base'

class App < Sinatra::Base

  ['/', '/index.html'].each do |url|
    get url do
      erb :index
    end
  end

  ['/mobil', '/mobil.html'].each do |url|
    get url do
      erb :mobil
    end
  end

  ['/ipad', '/ipad.html'].each do |url|
    get url do
      erb :ipad
    end
  end

end
