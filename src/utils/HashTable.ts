class HashTable<K, V> {
    private table: { [key: string]: V } = {};

    private hash(key: K): string {
        return JSON.stringify(key);
    }

    set(key: K, value: V): void {
        const hashedKey = this.hash(key);
        this.table[hashedKey] = value;
    }

    get(key: K): V | undefined {
        const hashedKey = this.hash(key);
        return this.table[hashedKey];
    }

    delete(key: K): void {
        const hashedKey = this.hash(key);
        delete this.table[hashedKey];
    }
}

/**
 * Una tabla hash es una estructura de datos que mapea claves a valores utilizando una función hash.
 */
export const expHashTable = () => {
    let hashTable = new HashTable<string, number>();
    hashTable.set('key1', 1);
    console.log(hashTable.get('key1')); // 1
    hashTable.delete('key1');
    console.log(hashTable.get('key1')); // undefined
}
