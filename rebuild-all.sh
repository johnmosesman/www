heroku config:set REBUILD_ALL=true
git commit -am 'rebuild' --allow-empty
git push heroku master
heroku config:unset REBUILD_ALL
