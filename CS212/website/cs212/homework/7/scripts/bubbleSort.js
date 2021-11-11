const bubbleSort = (array) => {
    let len = array.length;
    for (let outIndex = 0; outIndex < len; outIndex++) {
        for (let inIndex = 0; inIndex < len; inIndex++) {
            if (array[inIndex] > array[inIndex + 1]) {
                // Swap
                let temp = array[inIndex];
                array[inIndex] = array[inIndex + 1];
                array[inIndex + 1] = temp;
            }
        }
    }

    return array;
}

const changeText = () => {
    let arr = [12, 54, 6, 190, 239, 1, 5, 92, 34, 1098];

    let sorted = bubbleSort(arr);
    let sortedText = '[ ';

    for (let index = 0; index < arr.length; index++) {
        sortedText += `${sorted[index]}, `
    }

    sortedText = sortedText.substring(0, sortedText.length - 2);
    sortedText += ' ]';

    document.getElementById('answer').innerHTML = sortedText;
}
