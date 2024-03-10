---
tag: 'star'
date: '2024/3/10'
---

### 5-2 求解活动安排问题(贪心)

- 加入有一个需要使用某一资源的 N 个活动组成的集合 S, S={1, ..., n}
- 资源任何时刻只能被一个活动占用，活动 i 占用资源的时间段为 [bi, ei)
- 执行时间为 ei - bi，假设最早执行时间为 0
- 设计一个最优活动安排方案，使得所有安排的活动个数最多

```cpp
#include <stdio.h>
#include <string.h>

#include <algorithm>
#include <iostream>

using namespace std;

#define MAX 51

struct Action {
    int b;  // start
    int e;  // end
    bool operator<(const Action &s) const { return e <= s.e; }
};

int n;
Action a[MAX];
bool flag[MAX];
int Count = 0;

void solve() {
    memset(&flag, 0, sizeof(flag));
    sort(a, a + n);
    int preend = 0;  // 前一个兼容活动的结束时间
    for (int i = 0; i < n; i++) {
        if (a[i].b >= preend) {
            preend = a[i].e;
            flag[i] = 1;
        }
    }
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> a[i].b >> a[i].e;
    }
    solve();

    for (int i = 0; i < n; i++) {
        if (flag[i]) {
            printf("[%d %d]\n", a[i].b, a[i].e);
            Count++;
        }
    }
    cout << Count << endl;
}
/**
 * 11
 * 1 4
 * 3 5
 * 0 6
 * 5 7
 * 3 8
 * 5 9
 * 6 10
 * 8 11
 * 8 12
 * 2 13
 * 12 15
 */
```
