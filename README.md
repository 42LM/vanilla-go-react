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

> [!IMPORTANT]
> If you are running on an `arm64` architecture you need to set the following env variable:
> ```sh
> export DOCKER_DEFAULT_PLATFORM=linux/amd64
> ```
