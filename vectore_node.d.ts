/* tslint:disable */
/* eslint-disable */
/**
*/
export class F64ArrayCollection {
  free(): void;
}
/**
*/
export class F64Collection {
  free(): void;
/**
* @param {Float64Array} vectore
* @returns {F64Collection}
*/
  static new(vectore: Float64Array): F64Collection;
}
/**
*/
export class StringCollection {
  free(): void;
/**
* @param {(string)[]} vectore
* @returns {StringCollection}
*/
  static new(vectore: (string)[]): StringCollection;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {(string)[]}
*/
  get_vectore(): (string)[];
}
/**
* `VectorStore` is a data structure that allows storing and querying
* high-dimensional vectors (embeddings) efficiently using a k-d tree.
*
* # Fields
*
* * `db`: A `KdTree` data structure for indexing the high-dimensional vectors.
* * `url`: An optional field to store a URL related to the `VectorStore`.
* * `words`: A list of words, where each word is associated with a vector in the `db`.
*/
export class VectorStore {
  free(): void;
/**
* Constructs a new instance of the struct, initializing the URL, vector dimension, and creating an empty KdTree.
* If the vector dimension is not provided, it defaults to 384.
*
* # Arguments
*
* * `url` - An optional String representing the URL.
* * `vectore_dimension` - An optional usize representing the dimension of vectors. If not provided, defaults to 384.
*
* # Returns
*
* A new instance of the struct with the specified URL, vector dimension, and an empty KdTree.
* @param {string | undefined} [url]
* @param {number | undefined} [vectore_dimension]
* @returns {VectorStore}
*/
  static new(url?: string, vectore_dimension?: number): VectorStore;
/**
* Asynchronously adds a vector by word to the KdTree.
*
* # Arguments
*
* * `name` - A String representing the word.
*
* # Returns
*
* * `Result<(), JsValue>` - A Result indicating success or an error wrapped in JsValue.
*                          - Ok(()) if the operation succeeds.
*                          - Err(JsValue) if there is an error during the asynchronous operation.
*
* # Remarks
*
* This function retrieves the embedding vector for the given word asynchronously using `request_util::get_embbide_request`.
* If successful, it adds the word and its vector to the KdTree.
* @param {string} name
* @returns {Promise<void>}
*/
  add_vectore_by_word(name: string): Promise<void>;
/**
* Asynchronously adds vectors by text to the KdTree.
*
* # Arguments
*
* * `text` - A String representing the text containing words separated by newline characters.
*
* # Returns
*
* * `Result<(), JsValue>` - A Result indicating success or an error wrapped in JsValue.
*                          - Ok(()) if the operation succeeds.
*                          - Err(JsValue) if there is an error during the asynchronous operation.
*
* # Remarks
*
* This function splits the input text into an array of words using newline ('\n') as the delimiter.
* It then iterates over chunks of 50 words at a time, retrieves their embedding vectors asynchronously
* using `request_util::get_embbide_request_array`, and adds each word and its corresponding vector to the KdTree.
* @param {string} text
* @returns {Promise<void>}
*/
  add_vectore_by_text(text: string): Promise<void>;
/**
* Retrieves a clone of the words stored in the KdTree.
*
* # Returns
*
* * `Vec<String>` - A vector containing the words stored in the KdTree.
* @returns {(string)[]}
*/
  get_words(): (string)[];
/**
* Asynchronously retrieves a collection of similar words to the given word from the KdTree.
*
* # Arguments
*
* * `word` - A String representing the word to find similar words for.
* * `top_k` - A usize specifying the number of similar words to retrieve.
*
* # Returns
*
* * `Result<StringCollection, JsValue>` - A Result indicating success or an error wrapped in JsValue.
*                                        - Ok(StringCollection) containing the collection of similar words.
*                                        - Err(JsValue) if there is an error during the asynchronous operation.
*
* # Remarks
*
* This function retrieves the embedding vector for the given word asynchronously using `request_util::get_embbide_request`.
* It then finds the top `top_k` similar words based on the cosine similarity of their vectors in the KdTree.
* The result is wrapped in a StringCollection.
* @param {string} word
* @param {number} top_k
* @returns {Promise<StringCollection>}
*/
  similar_words(word: string, top_k: number): Promise<StringCollection>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_vectorstore_free: (a: number) => void;
  readonly vectorstore_new: (a: number, b: number, c: number, d: number) => number;
  readonly vectorstore_add_vectore_by_word: (a: number, b: number, c: number) => number;
  readonly vectorstore_add_vectore_by_text: (a: number, b: number, c: number) => number;
  readonly vectorstore_get_words: (a: number, b: number) => void;
  readonly vectorstore_similar_words: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_stringcollection_free: (a: number) => void;
  readonly stringcollection_new: (a: number, b: number) => number;
  readonly stringcollection_len: (a: number) => number;
  readonly stringcollection_get_vectore: (a: number, b: number) => void;
  readonly __wbg_f64collection_free: (a: number) => void;
  readonly f64collection_new: (a: number, b: number) => number;
  readonly __wbg_f64arraycollection_free: (a: number) => void;
  readonly __wbindgen_export_0: (a: number, b: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_export_3: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_4: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_5: (a: number) => void;
  readonly __wbindgen_export_6: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
