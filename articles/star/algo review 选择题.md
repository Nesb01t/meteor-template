---
tag: 'star'
date: '2024/3/10'
---

## 1. 不能用贪心法解决的是

- √ N 皇后问题
- 背包问题, 最小花费生成树问题, 单源最短路径问题

## 2. 用贪心算法求解最优解的问题，一般重要性质为

- √ 最优子结构性质和贪心选择性质
- 重叠子问题性质和贪心选择性质
- 预排序与递归调用

## 3. 一个问题可以用动态规划或者贪心法求解的特征是问题的

- √ 最优子结构性质
- 贪心选择性质, 重叠子问题, 定义最优解

## 4. 贪心算法是运筹学的一种，每一步的求解都是当下最优解，然后层层递进最终得到最终规模最优解，比如删数问题就是，要求删除任意数字后，剩下的数字按照原来的顺序组成的新数是当下最小的；如果数字为 153008，按照贪心算法，删除一个数字后剩下的新数最小，应该是什么？

- √ 5
- 8, 3, 1

## 5. 贪心算法的最优装载问题主要计算量在于将集装箱从小到大排序，因此复杂度为

- √ O(nlog2n)
- × O(n), O(n^2), O(n^3)

## 6. 下列排序算法中用了分支思想的

- √ 归并排序，快速排序
- × 选择排序，冒泡排序

## 7. 寻找 n 个元素中第 k 小元素的问题中，如果使用快排，使用分治法进行划分，应该如何划分基准

- √ 都可以，但复杂度上界可能不同
- 随机选择，取子序列的第一个元素，用中位数取

## 8. Abs 函数的复杂度是？

- O(1)

```cpp
int Abs(int n){
    int m;
    if (n >= 0) {
        m = n;
    } else {
        m = -n;
    }
    return m;
}
```

## 9. Power 函数的时间复杂度为

- O(n)

```cpp
double Power(double x, int n){
    double y = 1.0f;
    int k;
    for (k = 1; k <= n; ++k){
        y *= x;
    }
    return y;
}
```

## 10. 这个 Power 函数呢

- O(log2n)

```cpp
double Power(double x, int n){
    double y = 1.0, p = x;
    int t = n;
    for (t = n; t > 0; t /= 2){
        if (t % 2) {
            y *= p;
        }
        p *= p;
    }
    return y;
}
```

## 11. SumPower 呢

- O(nLog2n)

```cpp
double sumPower(double x, int n) {
    double y = 0.0;
    int k;
    for (k = 1; k <= n; ++k) {
        y += Power(x, n)
    }
    return y;
}

```

## 12. 这个复杂度呢

- O(log2n)

```cpp
double Power(double x, int n) {
    double y;
    if (n > 0) {
        y = Power(x, n / 2);
        y *= y;
        if (n % 2) {
            y *= x;
        }
    } else {
        y = 1.0;
    }
    return y;
}
```

## 13. 这个 sum 呢

- O(nLog2n)

```cpp
double sumPower(double x, int n) {
    double y;
    if (n > 0) {
        y = sumPower(x, n - 1) + Power(x, n);
    } else {
        y = 1.0;
    }
    return y;
}
```

## 14. 下面程序段的时间复杂度是

- O(1)

```cpp
x = 90;
y = 100;
while (y > 0)
    if (x > 100)
        { x -= 10; y--; }
    else x++;
```

## 15. 下面的复杂度是

- O(n^2)

```cpp
s = 0;
for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
        s += B[i][j]
sum = s;
```

## 16. 下面的复杂度是

- O(log3n)

```cpp
i = 1;
while (i<=n)
    i *= 3;
```
