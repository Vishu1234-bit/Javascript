class LRUCache{
    constructor(limit){
        this.limit=limit;
        this.cache = new Map();
    }
    get(key){
        if(!this.cache.has(key)){
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value
    }
    set(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else if(this.cache.size === this.limit){
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        this.cache.set(key,value);
    }
}
const lru = new LRUCache(2);
lru.set(1,'one')
lru.set(2,'two')
console.log(lru.get(1))
lru.set(3,'three')
console.log(lru.get(2))
