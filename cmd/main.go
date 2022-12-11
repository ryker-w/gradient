package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/lishimeng/go-log"
	"github.com/lishimeng/gradient/internal"
	"github.com/lishimeng/gradient/static"
	_ "html/template"
	"io"
	"io/ioutil"
	"net/http"
	"time"
)

var addr = ":80"

var u = websocket.Upgrader{
	ReadBufferSize:   1024,
	WriteBufferSize:  1024,
	HandshakeTimeout: 5 * time.Second,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

var connections = make(map[string]*websocket.Conn)

func broadcast(payload internal.Model) {

	log.Info("broadcast")
	var bs, err = json.Marshal(payload)
	if err != nil {
		log.Info(err)
		return
	}

	for name, c := range connections {
		log.Info("broadcast to: %s:%s", name, string(bs))
		_ = c.WriteMessage(websocket.TextMessage, bs)
	}
}

func subscribe(w http.ResponseWriter, r *http.Request) {
	var id = fmt.Sprintf("c%d", time.Now().Nanosecond())
	log.Info("id: %s", id)
	// 完成和Client HTTP >>> WebSocket的协议升级
	c, err := u.Upgrade(w, r, nil)
	if err != nil {
		log.Info("upgrade:", err)
		return
	}
	defer func() {
		delete(connections, id)
		log.Info("%s退出", id)
		_ = c.Close()
	}()

	log.Info("%s上线", id)

	connections[id] = c
	for {
		// 接收客户端message
		_, message, err := c.ReadMessage()
		if err != nil {
			log.Info("read:", err)
			break
		}
		log.Info("recv: %s", message)
	}
}

func hook(w http.ResponseWriter, r *http.Request) {
	var body []byte

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Info(err)
		return
	}
	log.Info("hook: %s", string(body))
	var model internal.Model

	var uplink internal.Uplink
	err = json.Unmarshal(body, &uplink)
	if err != nil {
		log.Info(err)
		return
	}
	model.Name = uplink.Dev
	model.X = uplink.Data.X
	model.Y = uplink.Data.Y
	model.Z = uplink.Data.Z
	broadcast(model)
	w.WriteHeader(200)
	_, err = io.WriteString(w, "success")
	if err != nil {
		log.Info(err)
	}
}

func main() {
	log.Info("app start")
	mux := http.NewServeMux()
	mux.HandleFunc("/subscribe", subscribe)
	mux.HandleFunc("/hook", hook)
	mux.Handle("/", http.FileServer(http.FS(static.Static)))
	log.Info(http.ListenAndServe(addr, mux))
}
