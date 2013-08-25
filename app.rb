require 'sinatra/base'

class App < Sinatra::Base

  helpers do
    def appropriate_view_for name
      if env['mobvious.device_type'] == :mobile
        name = "#{name}_mobile"
      end
      name.to_sym
    end
  end

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
