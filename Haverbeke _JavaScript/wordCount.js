function wordCount(str, word) {
    let a = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == word) {
            a = a + 1
        }
    }
    console.log(a)
}
wordCount('111111', '1')