---
tag: 'star'
date: '2024/3/10'
---

### 5-3 田忌赛马问题(贪心)

- 双人各出300🐎，在上中下3个等级中选一匹比赛
- 每一轮获胜的从输的那里得到200银币，平局不出钱

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
