heroku config:set REBUILD_ALL=true
heroku plugins:install https://github.com/heroku/heroku-repo.git
heroku repo:purge_cache -a wb-www
