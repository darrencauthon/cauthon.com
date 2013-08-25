require './app'
require 'mobvious'
use Mobvious::Manager
use App

class QueryStringDetection
  def get_device_type(request)
    if request.query_string['mobile']
      :mobile
    elsif request.query_string['tablet']
      :tablet
    else
      nil
    end
  end
end

Mobvious.configure do |config|
  config.strategies = [ QueryStringDetection.new,
                        Mobvious::Strategies::MobileESP.new(:mobile_tablet_desktop) ]
end

run Sinatra::Application
