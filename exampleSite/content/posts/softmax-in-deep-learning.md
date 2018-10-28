---
title: "Softmax in Deep Learning"
date: 2018-10-28T13:21:40+08:00
draft: true
---

本文介绍深度学习中的 `Softmax`。

<!--more-->

`Softmax` 将输入向量映射成概率分布，具体为[@goodfellow2016deep]：

$$ \mathrm{softmax}(\mathbf{z})_i = \frac{\exp(z_i)}{\sum_{j}\exp(z_j)} $$ {#eq:softmax}

其中，

$$ \mathbf{z} = \mathbf{W}^T\mathbf{h} + \mathbf{b}$$ {#eq:linear}

## 参考文献
