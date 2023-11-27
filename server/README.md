# Getting Started with the Go Backend Development
Install sqlite db via homebrew
```sh
brew install sqlite
```

Create database
```sh
sqlite3 -batch "go-react.db" < "../db/initdb.sql"
```

Run server
```sh
go run main.go
```

Make a Request
```sh
curl localhost:8080/api/timestamp
```
