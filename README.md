# vectore-db

![Rust](rust-mascot.png)

`vectore-db` is a Rust library leveraging WebAssembly to efficiently process and store string embeddings. It provides functionality to transform strings or string arrays into embeddings (arrays of floating-point numbers), which are then stored in a k-d tree data structure. Once stored, the library allows you to input a string and retrieve similar strings based on the embeddings.

## Demo

Check out this demo video to see `vectore-db` in action:

[![Demo Video](WebAssembly_Logo.svg.png)](demo.mp4)

## Features

- Store and query embeddings generated from strings
- Utilizes k-d tree data structure for efficient similarity searches
- Easy installation via npm
- Simple usage in JavaScript/TypeScript projects
- Add single or multiple words/texts to the vector database
- Retrieve all words/texts inserted in the vector database
-Find similar words/texts based on input string

## Installation

You can install `vectore-db` using `npm`:

```bash
npm i vectore_db
```

## Usage

Here's a simple example of how to use vectore-db in a react project:

``` javascript
import init, { VectorStore } from "vectore_node";
import { useEffect, useState } from "react";

export default function useVectoreStore() {
  const [vector_store, setVector_store] = useState();
  const [first, setfirst] = useState(false);
  
  useEffect(() => {
    async function initg() {
      await init();
      setVector_store(VectorStore.new());
    }
    
    if (!first) {
      setfirst(true);
      initg();
    }
  }, [first, vector_store]);
  
  return { vector_store };
}
```

In any client component, you can use the hook useVectoreStore() to access the vector store:

``` javascript
vector_store.get_words(); // Get all words or text inserted in the vectore database

await vector_store.add_vectore_by_word("hello world"); // Add a single word or text to the vectore database

await vector_store.add_vectore_by_text("sky\ncolor"); // Add multiple texts separated by \n to the vectore database

await vector_store.similar_words("color", 1); // Get similar words to the input string and specify the number of related strings desired
```

## Setting up an Embedding Server

To transform text into embeddings, you can set up an embedding server. The default server provided by our library has limited resources. Please note that the first request to the server may incur a wait time of 50 seconds due to rendering policy. However, if you prefer to use your own server, you can follow the example provided at the following URL:

[Example Embedding Server Configuration](url)

After configuring your own server, initialize the library with the server URL and the length of the embedding vector. For example:

```javascript
const vectore = VectoreStore.new(url, vectore_length);
```

## Troubleshooting

If you encounter any issues or have questions about using vectore-db, please check out our FAQ or open an issue on GitHub.

## License

vectore-db is licensed under the MIT License.
