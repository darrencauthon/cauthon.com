require './app'
require 'rack/mobile-detect'
use Rack::MobileDetect
use App

run Sinatra::Application
