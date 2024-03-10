---
tag: 'star'
date: '2024/3/10'
---

### 5-5 Hanoi 汉诺塔问题是一个经典的递归问题

- 设有 ABC 三个塔座，A 塔上有 n 个盘子，盘子大小不等，大的在下，小的在上
- 要求将 A 塔上的盘子全部移到 C 塔上，移动过程中有如下规则：

  1.  每次只能移动一个盘子
  2.  盘子可以放在 A、B、C 三个塔座上
  3.  任何时刻都不能将大的盘子放在小的盘子上面

- 请编写程序实现汉诺塔问题

```cpp
#include <stdio.h>

#include <algorithm>

using namespace std;
#define MAX 1001

// 问题
int n;
int a[MAX];
int b[MAX];

// 答案
int ans;

void solve() {
    sort(a, a + n);
    sort(b, b + n);
    ans = 0;
    int leftA = 0, leftB = 0;
    int rightA = n - 1, rightB = n - 1;

    while (leftA <= rightA) {  // noop
        if (a[rightA] > b[rightB]) {
            ans += 200;
            rightA--;  // noop
            rightB--;  // noop
        } else if (a[rightA] < b[rightB]) {
            ans -= 200;
            leftA++;   // noop
            rightB--;  // noop
        } else {
            if (a[leftA] > b[leftB]) {
                ans += 200;
                leftA++;  // noop
                leftB++;  // noop
            } else {
                if (a[leftA] < b[rightB]) {
                    ans -= 200;
                    leftA++;   // noop
                    rightB--;  // noop
                }
            }
        }
    }
}

int main() {
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
    for (int i = 0; i < n; i++) {
        scanf("%d", &b[i]);
    }
    solve();
    printf("%d", ans);
    return 0;
}

/**
 * 3
 * 92 83 71
 * 95 87 74
 */
```
