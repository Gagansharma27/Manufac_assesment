
// grouping the data into alcohol classes as we need to calculate stats on that basis
export const groupByAlcoholType = (wineData) => {
    let groupedData = {};
    wineData.forEach((wine) => {
        if (!groupedData[wine.Alcohol]) {
            groupedData[wine.Alcohol] = [];
        }
        groupedData[wine.Alcohol].push(wine);
    });
    return groupedData;
}

//calculating mean -> this function accepts two parameters, 1- array grouped by alcohol type, 2 - propperty on which we want to calculate
export const mean = (arrByAlcoholType, property) => {
    if (arrByAlcoholType.length === 0) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arrByAlcoholType.length; i++) {
        sum = sum + parseFloat(arrByAlcoholType[i][property]);
    }

    const meanValue = sum / arrByAlcoholType.length;
    return parseFloat(meanValue).toFixed(3);
}
//calculating median -> this function accepts two parameters, 1- array grouped by alcohol type, 2 - propperty on which we want to calculate
export const median = (arr, property) => {
    if (arr.length === 0) {
        return null;
    }

    const sortedArr = arr.slice().sort((a, b) => a[property] - b[property]);

    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {

        const median = (parseFloat(sortedArr[middleIndex - 1][property]) + parseFloat(sortedArr[middleIndex][property])) / 2;
        return parseFloat(median.toFixed(3));
    } else {

        return parseFloat(sortedArr[middleIndex][property]).toFixed(3);
    }
}
//calculating mode -> this function accepts two parameters, 1- array grouped by alcohol type, 2 - propperty on which we want to calculate
export const mode = (arr, property) => {
    if (arr.length === 0) {
        return null; // If the array is empty, there is no mode
    }

    let modeMap = {};
    let maxCount = 0;
    let modes = [];

    arr.forEach(function (item) {
        const value = parseFloat(item[property]).toFixed(3);
        if (!modeMap[value]) modeMap[value] = 0;
        modeMap[value]++;
        if (modeMap[value] > maxCount) {
            maxCount = modeMap[value];
            modes = [value];
        } else if (modeMap[value] === maxCount) {
            modes.push(value);
        }
    });

    if (modes.length === Object.keys(modeMap).length) {
        return null; // If all values occur the same number of times, there is no mode
    } else {
        // Convert mode values to string format
        return modes.join(', ');
    }
}


// this fucntion is creating the gamma property in our dataset. 
export function createGamma(data, attributeName) {
    return data.map(point => ({
        ...point,
        [attributeName]: ((parseFloat(point.Ash) * parseFloat(point.Hue)) / parseFloat(point.Magnesium)).toFixed(2)
    }));
}