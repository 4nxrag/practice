### The 4-Step Thinking Framework


#### Step 1: Input, Output, Constraints (The "Contract")
```
 Before you think about algorithms, define exactly what you have and what you need.
 Input: What am I getting? (Array? String? Are they sorted? Are there negatives?)
 Output: What do they want back? (The number? The index? The actual elements?)
 Constraints: How big is N
 ?N < 1,000 -> You can use nested loops $O(N^2)$.
 N > 100,000 -> You MUST do $O(N)$ or $O(N \log N)$.
This eliminates 90% of wrong approaches immediately.
```

#### Step 2: The "Human Algorithm" (Manual Mode)
```
Forget code.
 If I gave you this problem on a piece of paper with 5 numbers, how would you solve it with your eyes and hands?
 "I would point at the first number, then look at the rest to see if any match..."
 "I would sort them first so it's easier to find things..."
 Write down exactly what you just thought.
  That is your algorithm.
```

####  Step 3: Pattern Matching (The "Toolbox")
  ```
  Now, map your "Human Algorithm" to a technical pattern.
  "I need to find a pair..." -> Two Pointers.
  "I need to look things up quickly..." -> Hash Map.
  "I need to find the shortest path..." -> BFS (Queue).
  ```

####  Step 4: Optimization (Refactoring)

  ```
  Start with the "Brute Force" (The stupid solution).
  "I can check every single combination." -> That’s $O(N^2)$.
  "Can I do better?" -> "If I sort it first, I don't need to check everything.
  " -> That’s $O(N \log N)$.
  ```