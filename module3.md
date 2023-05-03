# we can assert the type by using "as" keyword

# example:

```javascript
let emni: any;

emni = "Amar ja mon chay ami tai korbo";

console.log((emni as string).length);
or,
console.log(<string> emni.length)
```

<!-- here emni was 'any' type but we converted it to string  -->
<!--- by using type assertion typescript will trust us and take the input what we will type -->

# for the premitive type , we will use type alias and for the object type, we will use interface
