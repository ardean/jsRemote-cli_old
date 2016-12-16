import {
  EventEmitter
} from "events";
import io from "../sockets/socket.io.js";

export default class Connection extends EventEmitter {
  constructor() {
    super();

    this.isConnected = false;

    this.socket = io(location.host, {
      path: location.pathname + "sockets"
    });

    this.socket
      .on("connect", () => {
        this.isConnected = true;
        this.emit("connect");
      })
      .on("disconnect", () => {
        this.isConnected = false;
        this.emit("disconnect");
      });
  }
}
