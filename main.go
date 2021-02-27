package main

import (
	"log"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	log.SetFlags(log.Lshortfile)
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	hub := newHub()
	go hub.run()

	e.Static("/", "./public")
	e.GET("/ws", func(c echo.Context) error {
		return serveWs(hub, c)
	})

	e.Logger.Fatal(e.Start(":1323"))
}
