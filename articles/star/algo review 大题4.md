---
tag: 'star'
date: '2024/3/10'
---

### 5-4 贪心法求多机调度问题

- 有 n 个独立的作业，由 m 台相同的机器进行加工处理
- 处理 i 所需要的时间为 ti，每个作业可以在任何一台机器上加工处理
- 设计一个最优的作业调度方案，使得完成所有作业的时间最早

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
