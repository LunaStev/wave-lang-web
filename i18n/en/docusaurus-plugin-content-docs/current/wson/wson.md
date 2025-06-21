---
sidebar_position: 3
---

# Wave Serialized Object Notation (WSON)
WSON (Wave Serialized Object Notation) is the default data serialization format for the Wave programming language. It is designed to overcome the limitations of JSON and provide more powerful features and greater efficiency. While maintaining a structure that is easy for humans to read and write, WSON maximizes performance to enable safer and faster data exchange across various environments.

## Features
### 1. Strict Type System
WSON maintains clear data types, eliminating the unpredictability caused by JSON’s dynamic typing. This ensures type safety during both serialization and deserialization.

### 2. High Performance
WSON is designed with minimal overhead, enabling fast data processing speeds. This is especially effective when serializing large volumes of data.

### 3. Wave-Friendly Design
WSON is built to integrate seamlessly with the Wave programming language and is fully supported by Wave’s standard library.

### 4. Readability and Easy Parsing
While maintaining syntax similar to JSON, WSON allows for more concise expressions, making it easier for humans to read and edit. It is also optimized for efficient parsing.

### 5. Support for Complex Data Structures
In addition to simple key-value pairs, WSON supports native arrays, structs, tuples, and other complex data structures. This allows for more flexible data representation.

## Use Cases
- Data storage and transmission for Wave-based applications

- Network communication and API data formats

- File storage and configuration files

- Serialization and deserialization of large datasets

## Conclusion
WSON reflects the philosophy of the Wave language by aiming for efficient and powerful data serialization. It complements the weaknesses of JSON while preserving intuitive syntax, making it easy for developers to adopt. WSON is expected to become the standard data format within the Wave ecosystem and deliver strong performance across various environments.
