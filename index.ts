function LCS(arr: number[]|string[],k) {
    if (k===1) {
        console.log(arr)
    } else {
        for (let i = 0; i < k; i++) {
            LCS(arr, k-1)

        if (k%2==0) {
            let temp = arr[i]
            arr[i] = arr[k-1]
            arr[k-1] = temp
        } else {
            let temp  = arr[0]
            arr[0] = arr[k-1]
            arr[k-1] = temp
        }
        }
    }
}
LCS([1,2,3], 3)
