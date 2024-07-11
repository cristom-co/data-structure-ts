class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEndOfWord: boolean = false;
}

class Trie {
    private root: TrieNode = new TrieNode();

    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)!;
        }
        return node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)!;
        }
        return true;
    }
}

/**
 * Un trie es una estructura de datos especial utilizada para almacenar un conjunto dinámico de cadenas.
 */
export const expTries = () => {
    let trie = new Trie();
    trie.insert("apple");
    console.log(trie.search("apple")); // true
    console.log(trie.search("app")); // false
    console.log(trie.startsWith("app")); // true
}
