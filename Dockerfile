FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /server
WORKDIR /server
COPY api/Gemfile /server/Gemfile
COPY api/Gemfile.lock /server/Gemfile.lock
RUN bundle install
COPY api /server
RUN rails db:create
RUN rails db:migrate
RUN rails db:seed
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
