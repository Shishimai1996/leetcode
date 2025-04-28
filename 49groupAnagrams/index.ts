function groupAnagrams(strs: string[]): string[][] {

    let result:string[][] = []

    if(strs.length === 0){
        return result
    }

    if( strs.length === 1){
        result.push([strs[0]])
        return result
    }
    const sortLetter = strs.map(str =>
        str.split('').sort((a, b) => a.localeCompare(b)).join('')
      );
  
 //["aet", "aet", "ant", "aet", "ant", "abt"]
    const used = new Array(strs.length).fill(false)

    for(let i = 0; i < sortLetter.length; i++){
        if(used[i]) continue

        const buffer = [strs[i]]
        used[i] = true

        for(let j = i+1; j < sortLetter.length; j++){
            if(!used[j] && sortLetter[i] === sortLetter[j]){
           
                buffer.push(strs[j])
                used[j] = true
            }
        }
        result.push(buffer)
    }
    return result
};

const strings = ["eat","tea","tan","ate","nat","bat"]
// const strings = [""]
// const strings = ["a"]
console.log(groupAnagrams(strings))