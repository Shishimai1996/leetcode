# Call by value and call by reference

## call by value
when passing value a to b, copying a value and pass it to b. 
so original value of a will not be changed.

ex.
``
function call(value){
    a = 0
    b = a
    b = 5
}

console.log(a) //0 original a will not be changed.
console.log(b) //5
``

## call by reference
when passing objective a to b, passing a itself to b.
so original a will be changed. 

ex.
``
function call(objective){
    a = [0,1,2]
    b = a
    b[0] = 5
}

console.log(a) //[5,1,2] a has been changed.
console.log(b) //[5,1,2]
``

### In javascript, primitive types takes the call by value way and Object types takes the call by reference way

primitive type:
- Integer
- string
- boolean
- null
- undefined

Object type:
- {}
- []