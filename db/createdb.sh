#!/usr/bin/env sh

sqlite3 -batch "$PWD/go-react.db" < "$PWD/db/initdb.sql"
