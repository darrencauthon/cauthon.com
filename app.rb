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

  before do
    @word_styles = ['fashion', 'art', 'design', 'people']
  end

  before do
    @mode = env['mobvious.device_type'].to_s
  end

  ['/', '/index.html'].each do |url|
    get url do
      @home = {
                name:         'Darren Cauthon',
                title:        'Developer',
                linked_in:    'http://www.linkedin.com/in/darrencauthon',
                google_plus:  'https://plus.google.com/101398632683411111544',
                facebook:     'http://www.facebook.com/darrencauthon',
                twitter:      'http://www.twitter.com/darrencauthon',
                big_words:    ['tdd', 'ruby', 'c#'],
                small_images: ['https://s3.amazonaws.com/cauthondotcom/family.jpg',
                               'https://s3.amazonaws.com/cauthondotcom/github.jpg' ],
                big_images:   ['https://s3.amazonaws.com/cauthondotcom/image00.jpg',
                              'https://s3.amazonaws.com/cauthondotcom/automoq.png']


              }
      @about_me = {
                    name: 'Darren Cauthon',
                    email: 'darren@cauthon.com',
                    phone: '913-940-5373'
                  }
      erb :index
    end
  end
end
