source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# Use GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Theme
gem "minima", "~> 2.5"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  # Add more plugins here as needed
end

# Windows-specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  # Timezone data for Windows
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  
  # Performance booster for Windows directory watching
  gem "wdm", "~> 0.1"
end

# JRuby-specific dependencies
platforms :jruby do
  # Lock http_parser.rb to v0.6.x for JRuby compatibility
  gem "http_parser.rb", "~> 0.6.0"
end

# Development dependencies
group :development do
  # Add development-specific gems here
end
