---
title: 'Firmas post-cuánticas ligeras con Rust'
excerpt: 'Experimentos con libsodium, PQClean y runtimes embebidos para asegurar comunicaciones en clientes offline.'
category: 'Criptografía'
publishedAt: '2024-07-18'
readingTime: '6 min'
tags:
  - PQC
  - Rust
  - TLS
---

### Por qué Rust

El ownership model evita fugas de memoria y me permite escribir bindings seguros para bibliotecas de criptografía post-cuántica.

### Stack mínimo

- `rustls` + `hpke` para encapsulado híbrido
- `pqcrypto` para firmas Dilithium
- SQLite cifrado para almacenar claves rotativas

### Validación

Automatizo pruebas diferenciales con `cargo nextest` y utilizo `criterion` para perf. El resultado: latencia adicional &lt; 5ms en dispositivos ARM.
