---
tag: 'star'
date: '2024/3/10'
---

### 5-1 求解最优装载问题(贪心)

知识点: 标志位no, 分别排序

- 有 N 个集装箱要装上一个重量为 W 的船
- 其中第 i 个集装箱的重量为 wi
- 选出尽可能多的集装箱装上船，使船的载重量不超过 W

```cpp
#include <stdio.h>
#include <string.h>

#include <algorithm>
#include <iostream>

using namespace std;

#define MAXN 20

int n, W;  // 问题表示
int maxW;  // 结果表示

struct NodeType {  // 集装箱类型
    int no;        // 序号
    int wi;        // 重量
    int x;         // 是否被选择
    bool operator<(const NodeType &a) const {
        return wi < a.wi;  // 按 wi 递增排序
    }
};
NodeType w[MAXN] = {{0}};

bool cmp(const NodeType &a, const NodeType &b) { return a.no < b.no; }

void solve() {
    sort(w + 1, w + n + 1);  // ★1
    maxW = 0;
    int restW = W;
    for (int i = 1; i <= n && w[i].wi <= restW; i++) {  // ★2 遍历
        w[i].x = 1;                                     // 选择集装箱 i
        restW -= w[i].wi;                               // 减少剩余重量
        maxW = maxW + w[i].wi;  // ★3 增加已装载重量
    }
}

int main() {
    cin >> n >> W;
    for (int i = 1; i <= n; i++) {
        cin >> w[i].no >> w[i].wi;
        w[i].x = 0;
    }

    solve();
    sort(w + 1, w + n + 1, cmp);
    cout << "-->" << endl;
    for (int i = 1; i <= n; i++) {
        if (w[i].x == 1) {
            printf("%d %d\n", w[i].no, w[i].wi);
        }
    }
    printf("%d", maxW);
}

// 测试用例
/**
 * 5 10
 * 1 5
 * 2 2
 * 3 6
 * 4 4
 * 5 3
 */
```
