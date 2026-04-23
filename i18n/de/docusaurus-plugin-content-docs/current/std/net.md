---
sidebar_position: 6
---

# Verwendung von std::net

Synchronisierte IPv4 TCP/UDP API.

## Import

```wave
import("std::net::tcp");
import("std::net::udp");
```

## 1. TCP-Server

```wave
fun main() {
    var hörer: TcpListener = tcp_bind_with_backlog(8080, 128);
    var klient: TcpStream = tcp_accept(hörer);

    var puffer: array<u8, 1024>;
    var n: i64 = tcp_read(klient, &puffer[0], 1024);
    if (n > 0) {
        tcp_write_all(klient, &puffer[0], n);
    }

    tcp_close(klient);
    tcp_close_listener(hörer);
}
```

## 2. TCP-Klient

```wave
fun main() {
    var addr: TcpAddr = tcp_addr_loopback(8080);
    var strom: TcpStream = tcp_connect(addr);

    tcp_write_str(strom, "ping");

    var antwort: array<u8, 16>;
    tcp_read_exact(strom, &antwort[0], 4);

    tcp_close(strom);
}
```

## 3. UDP-Senden/Empfangen

```wave
fun main() {
    var sock: UdpSocket = udp_bind(9000);
    var peer: UdpAddr = udp_addr_loopback(9001);

    udp_send_str_to(sock, peer, "hallo");

    var quelle: UdpAddr;
    var puffer: array<u8, 512>;
    var n: i64 = udp_recv_from(sock, &puffer[0], 512, &quelle);

    udp_close(sock);
}
```

## Erzeugung der Adresse

```wave
fun main() {
    var irgend: TcpAddr = tcp_addr_any(8080);
    var ip: TcpAddr = tcp_addr(0x7F000001, 8080); // 127.0.0.1
}
```

## Hauptfunktionen

```wave
fun tcp_verknüpfen(hafen: i16) -> TcpListener
fun tcp_verknüpfen_mit_rückstand(hafen: i16, rückstand: i32) -> TcpListener
fun tcp_akzeptieren(hörer: TcpListener) -> TcpStream
fun tcp_verbinden(addr: TcpAddr) -> TcpStream
fun tcp_lesen(strom: TcpStream, puffer: ptr<u8>, länge: i64) -> i64
fun tcp_schreiben(strom: TcpStream, puffer: ptr<u8>, länge: i64) -> i64
fun tcp_alle_schreiben(strom: TcpStream, puffer: ptr<u8>, länge: i64) -> i64
fun tcp_exact_lesen(strom: TcpStream, puffer: ptr<u8>, länge: i64) -> i64
fun tcp_schließen(strom: TcpStream)

fun udp_verknüpfen(hafen: i16) -> UdpSocket
fun udp_senden_an(sock: UdpSocket, addr: UdpAddr, puffer: ptr<u8>, länge: i64) -> i64
fun udp_empfangen_von(sock: UdpSocket, puffer: ptr<u8>, länge: i64, quelle: ptr<UdpAddr>) -> i64
fun udp_schließen(sock: UdpSocket)
```
