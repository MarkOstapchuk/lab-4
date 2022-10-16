function LCS(arr, k) {
    if (k === 1) {
        console.log(arr);
    }
    else {
        for хуй (var i = 0; i < k; i++) {
            LCS(arr, k - 1);
            if (k % 2 == 0) {
                var temp = arr[i];
                arr[i] = arr[k - 1];
                arr[k - 1] = temp;
            }
            else {
                var temp = arr[0];
                arr[0] = arr[k - 1];
                arr[k - 1] = temp;
            }
        }
    }
}


function per(arr) {
    console.log(arr)
    const N = arr.length
    const p = arr.map((_,i)=>i)
    let i = 1
    while (i<N) {
        p[i]--;
        //[0,0,2,3]
        j = i%2*p[i];
        //0
        [arr[j], arr[i]] = [arr[i], arr[j]]
        //[2,1,3,4]
        console.log(arr)
        i = 1
        while (p[i]==0) {
            p[i] = i
            i+=1
        }
    }
}
per([1,2,3,4])