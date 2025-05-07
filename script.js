let array = [];

function generateArray() {
  array = [];
  const container = document.getElementById("array");
  container.innerHTML = "";

  for (let i = 0; i < 40; i++) {
    const value = Math.floor(Math.random() * 250) + 30;
    array.push(value);

    const bar = document.createElement("div");
    bar.style.height = `${value}px`;
    bar.style.width = `20px`;
    bar.classList.add("bg-blue-400", "transition-all", "duration-150");
    container.appendChild(bar);
  }
}

// Bubble Sort
async function bubbleSort() {
  const bars = document.getElementById("array").children;
  const speed = parseInt(document.getElementById("speed").value);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].classList.replace("bg-blue-400", "bg-red-400");
      bars[j + 1].classList.replace("bg-blue-400", "bg-red-400");

      if (array[j] > array[j + 1]) {
        await sleep(speed);
        swap(j, j + 1);
        updateBars(bars, j, j + 1);
      }

      await sleep(speed);
      bars[j].classList.replace("bg-red-400", "bg-blue-400");
      bars[j + 1].classList.replace("bg-red-400", "bg-blue-400");
    }
  }
}

function updateBars(bars, i, j) {
  const tempHeight = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = tempHeight;
}

function swap(i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Selection Sort
async function selectionSort() {
  const bars = document.getElementById("array").children;
  const speed = parseInt(document.getElementById("speed").value);

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    bars[minIndex].classList.replace("bg-blue-400", "bg-yellow-400");

    for (let j = i + 1; j < array.length; j++) {
      bars[j].classList.replace("bg-blue-400", "bg-red-400");
      await sleep(speed);

      if (array[j] < array[minIndex]) {
        if (minIndex !== i)
          bars[minIndex].classList.replace("bg-yellow-400", "bg-blue-400");
        minIndex = j;
        bars[minIndex].classList.replace("bg-red-400", "bg-yellow-400");
      } else {
        bars[j].classList.replace("bg-red-400", "bg-blue-400");
      }
    }

    if (minIndex !== 1) {
      swap(i, minIndex);
      updateBars(bars, i, minIndex);
    }

    await sleep(speed);
    bars[i].classList.replace("bg-yellow-400", "bg-green-400");
  }
}

// Insertion Sort
async function insertionSort() {
  const bars = document.getElementById("array").children;
  const speed = parseInt(document.getElementById("speed").value);

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    bars[i].classList.replace("bg-blue-400", "bg-yellow-400");
    await sleep(speed);

    while (j >= 0 && array[j] > key) {
      bars[j].classList.replace("bg-blue-400", "bg-red-400");
      array[j + 1] = array[j];
      bars[j + 1].style.height = `${array[j]}px`;

      await sleep(speed);

      bars[j].classList.replace("bg-red-400", "bg-blue-400");
      j--;
    }

    array[j + 1] = key;
    bars[j + 1].style.height = `${key}px`;

    await sleep(speed);

    bars[i].classList.replace("bg-yellow-400", "bg-green-400");
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].classList.replace("bg-blue-400", "bg-green-400");
  }
}

//Merge Sort
async function startMergeSort() {
  const bars = document.getElementById("array").children;
  const speed = parseInt(document.getElementById("speed").value);
  await mergeSort(array, 0, array.length - 1, bars, speed);

  // Mark all bars green when done
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.replace("bg-blue-400", "bg-green-400");
  }
}

async function mergeSort(arr, left, right, bars, speed) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  await mergeSort(arr, left, mid, bars, speed);
  await mergeSort(arr, mid + 1, right, bars, speed);
  await merge(arr, left, mid, right, bars, speed);
}

async function merge(arr, left, mid, right, bars, speed) {
  const leftPart = arr.slice(left, mid + 1);
  const rightPart = arr.slice(mid + 1, right + 1);

  let i = 0,
    j = 0,
    k = left;

  while (i < leftPart.length && j < rightPart.length) {
    bars[k].classList.replace("bg-blue-400", "bg-red-400");

    if (leftPart[i] <= rightPart[j]) {
      arr[k] = leftPart[i];
      bars[k].style.height = `${leftPart[i]}px`;
      i++;
    } else {
      arr[k] = rightPart[j];
      bars[k].style.height = `${rightPart[j]}px`;
      j++;
    }

    await sleep(speed);
    bars[k].classList.replace("bg-red-400", "bg-blue-400");
    k++;
  }

  while (i < leftPart.length) {
    arr[k] = leftPart[i];
    bars[k].style.height = `${leftPart[i]}px`;
    i++;
    k++;
    await sleep(speed);
  }

  while (j < rightPart.length) {
    arr[k] = rightPart[j];
    bars[k].style.height = `${rightPart[j]}px`;
    j++;
    k++;
    await sleep(speed);
  }
}

// Quick Sort
async function startQuickSort() {
  const bars = document.getElementById("array").children;
  const speed = parseInt(document.getElementById("speed").value);
  await quickSort(array, 0, array.length - 1, bars, speed);

  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.replace("bg-blue-400", "bg-green-400");
  }
}

async function quickSort(arr, low, high, bars, speed) {
  if (low < high) {
    const pi = await partition(arr, low, high, bars, speed);
    await quickSort(arr, low, pi - 1, bars, speed);
    await quickSort(arr, pi + 1, high, bars, speed);
  }
}

async function partition(arr, low, high, bars, speed) {
  let pivot = arr[high];
  bars[high].classList.replace("bg-blue-400", "bg-yellow-400");
  let i = low - 1;

  for (let j = low; j < high; j++) {
    bars[j].classList.replace("bg-blue-400", "bg-red-400");
    await sleep(speed);

    if (arr[j] < pivot) {
      i++;
      swap(i, j);
      updateBars(bars, i, j);
      await sleep(speed);
    }

    bars[j].classList.replace("bg-red-400", "bg-blue-400");
  }

  swap(i + 1, high);
  updateBars(bars, i + 1, high);
  bars[high].classList.replace("bg-yellow-400", "bg-blue-400");

  await sleep(speed);
  return i + 1;
}

// Radix Sort
async function startRadixSort() {
  const bars = document.getElementById("array").children;
  const speed = parseInt(document.getElementById("speed").value);
  await radixSort(array, bars, speed);

  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.replace("bg-blue-400", "bg-green-400");
  }
}

async function radixSort(arr, bars, speed) {
  const max = Math.max(...arr);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    await countingSortByDigit(arr, bars, exp, speed);
    exp *= 10;
  }
}

async function countingSortByDigit(arr, bars, exp, speed) {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
    bars[i].style.height = `${arr[i]}px`;
    bars[i].classList.replace("bg-blue-400", "bg-red-400");
    await sleep(speed);
    bars[i].classList.replace("bg-red-400", "bg-blue-400");
  }
}
generateArray();
