# Sortify
# Sortify — Sorting Algorithm Visualizer 🧠✨

**Sortify** is a simple and interactive sorting algorithm visualizer built using vanilla JavaScript and Tailwind CSS. It demonstrates how various sorting algorithms work through animated bar graphs and allows users to control the speed of visualization.

---

## 🔍 Features

- **Array Generation**
  - Creates a random array of bars with varying heights.
  - Dynamically updates the visualization container.
  
- **Supported Algorithms**
  - 🫧 Bubble Sort
  - 🔍 Selection Sort
  - 🧩 Insertion Sort
  - 🔀 Merge Sort
  - ⚡ Quick Sort
  - 🧮 Radix Sort

- **Visualization Controls**
  - Adjustable speed using a slider.
  - Color-coded steps:
    - 🔵 Default: Unsorted
    - 🔴 Comparison
    - 🟡 Pivot / Minimum / Key
    - 🟢 Sorted position

- **Lightweight & Fast**
  - No frameworks – built with pure JavaScript.
  - Tailwind CSS for responsive and modern UI.
  
---

## 🛠️ Built With

- **JavaScript (ES6+)**
- **Tailwind CSS**
- **HTML5**

---

## 🚀 Getting Started

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/4702chahat/Sortify.git
   cd Sortify


2. **Open index.html directly in a browser**
    No build tools or installation needed!
---
    📚 How It Works
A random array of values is generated and represented as vertical bars.

Each algorithm animates step-by-step actions like comparison, swap, and placement.

The sleep() function introduces delays based on the selected speed to slow down animations.

DOM manipulation updates bar heights and colors in real-time to reflect algorithm progress.

---
🧪 Algorithms Explained
Each sorting function uses:

sleep(ms): for animation timing

DOM-based updates: using .style.height and classList.replace() to change appearance

In-place array mutation for performance and accurate visual feedback

---
🤝 Contributing
Feel free to fork this project and add more sorting algorithms, enhance UI, or integrate new features like:

Time and space complexity display

Sorting audio feedback

Dark mode support

---
📄 License
This project is licensed under the MIT License.

---
Developed with ❤️ to make learning sorting algorithms fun and visual.
