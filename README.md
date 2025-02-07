# vanilla-go-react
Building a vanilla go backend and react frontend. Connect both and serve as a docker container.

## Quickstart
```sh
docker build -t go-server .
```

```sh
docker run --detach --name react-client -p 3000:8080 -d go-server
```

open browser: http://localhost:3000
