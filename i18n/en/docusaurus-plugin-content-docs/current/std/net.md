---
sidebar_position: 6
---

# Usage of std::net

This is a synchronous IPv4 TCP/UDP API.

## import

```wave
import("std::net::tcp");
import("std::net::udp");
```

## 1. TCP Server

```wave
fun main() {
    var listener: TcpListener = tcp_bind_with_backlog(8080, 128);
    var client: TcpStream = tcp_accept(listener);

    var buf: array<u8, 1024>;
    var n: i64 = tcp_read(client, &buf[0], 1024);
    if (n > 0) {
        tcp_write_all(client, &buf[0], n);
    }

    tcp_close(client);
    tcp_close_listener(listener);
}
```

## 2. TCP Client

```wave
fun main() {
    var addr: TcpAddr = tcp_addr_loopback(8080);
    var stream: TcpStream = tcp_connect(addr);

    tcp_write_str(stream, "ping");

    var reply: array<u8, 16>;
    tcp_read_exact(stream, &reply[0], 4);

    tcp_close(stream);
}
```

## 3. UDP Communication

```wave
fun main() {
    var sock: UdpSocket = udp_bind(9000);
    var peer: UdpAddr = udp_addr_loopback(9001);

    udp_send_str_to(sock, peer, "hello");

    var src: UdpAddr;
    var buf: array<u8, 512>;
    var n: i64 = udp_recv_from(sock, &buf[0], 512, &src);

    udp_close(sock);
}
```

## Address Creation

```wave
fun main() {
    var any: TcpAddr = tcp_addr_any(8080);
    var ip: TcpAddr = tcp_addr(0x7F000001, 8080); // 127.0.0.1
}
```

## 주요 함수

```wave
fun tcp_bind(port: i16) -> TcpListener
fun tcp_bind_with_backlog(port: i16, backlog: i32) -> TcpListener
fun tcp_accept(listener: TcpListener) -> TcpStream
fun tcp_connect(addr: TcpAddr) -> TcpStream
fun tcp_read(stream: TcpStream, buf: ptr<u8>, len: i64) -> i64
fun tcp_write(stream: TcpStream, buf: ptr<u8>, len: i64) -> i64
fun tcp_write_all(stream: TcpStream, buf: ptr<u8>, len: i64) -> i64
fun tcp_read_exact(stream: TcpStream, buf: ptr<u8>, len: i64) -> i64
fun tcp_close(stream: TcpStream)

fun udp_bind(port: i16) -> UdpSocket
fun udp_send_to(sock: UdpSocket, addr: UdpAddr, buf: ptr<u8>, len: i64) -> i64
fun udp_recv_from(sock: UdpSocket, buf: ptr<u8>, len: i64, src: ptr<UdpAddr>) -> i64
fun udp_close(sock: UdpSocket)
```
