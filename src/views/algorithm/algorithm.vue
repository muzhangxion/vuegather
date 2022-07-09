<template>
  <div class="Algorithm same_page">
    <h1>排序算法</h1>
    <div>
      <h4>冒泡排序</h4>
      <p>{{ bubbling(bubblingList) }}</p>
    </div>
    <div>
      <h4>选择排序</h4>
      <p>{{ choose(chooseList) }}</p>
    </div>
    <div>
      <h4>插入排序</h4>
      <p>{{ insert(insertList) }}</p>
    </div>
    <div>
      <h4>快速排序</h4>
      <p>{{ fast(fastList) }}</p>
    </div>
    <div>
      <h4>归并排序</h4>
      <p>{{ mergeSort(mergeList) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Algorithm extends Vue {
  bubblingList: Array<any> = [1, 4, 6, 2, 67, 45, 0, 11];
  chooseList: Array<any> = [9, 0, 18, 2, 57, 33, 0, 10];
  insertList: Array<any> = [5, 4, 9, 11, 23, 8, 35, 11];
  fastList: Array<any> = [12, 3, 25, 7, 7, 24, 35, 24];
  mergeList: Array<any> = [6,5,7,2,5, 9];
  mounted() {
    console.log("Senior");
  }

  // 冒泡排序
  /**
   * 冒泡排序
   * 就是从前往后依次比较相邻的两个值，
   * 如果前一个大于后一个值就交换位置，
   * 一趟之后最大的值就排在最后一位了，
   * 然后同理在排序剩下的n-1 ，n-2 …个数代码如下：
   * [1, 4, 6, 2, 67, 45, 0, 11]
   */
  bubbling(list: any) {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - i; j++) {
        if (list[j] > list[j + 1]) {
          let temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    return list;
  }

  // 选择排序
  /**
   * 选择排序的基本思路，
   * 将数组分为左侧的有序序列如：[a0,…ai]，
   * 和右侧的无序待排序列[a[i+1],…an],
   * 每次将无序序列中选出一个最小值放入到有序序列的最后一个
   * [9, 0, 18, 2, 57, 33, 0, 10]
   */
  choose(list: any) {
    for (let i = 0; i < list.length - 1; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[i]) {
          let temp = list[i];
          list[i] = list[j];
          list[j] = temp;
        }
      }
    }
    return list;
  }

  // 插入排序
  /**
   * 插入排序的思想也是将数组分为有序序列和无序序列两个部分，
   * 每次从无序序列中拿出第一个，
   * 然后在有序序列中比较插入到适当的位置，
   * 然后重复操作直到数列完全有序
   * [5, 4, 9, 11, 23, 8, 35, 11]
   */
  insert(list: any) {
    for (let i = 1; i < list.length; i++) {
      for (let j = i; j > 0; j--) {
        if (list[j] < list[j - 1]) {
          let temp = list[j];
          list[j] = list[j - 1];
          list[j - 1] = temp;
        }
      }
    }
    return list;
  }

  // 快速排序
  /**
   *
   * 通常情况下快速排序可以称得上是效率最高的排序方法了。
   * 快排的基本思想是通过在数列中找到一个中间值，
   * 使小于中间值的值排在左边，
   * 大于中间值的排在右边，
   * 左边的任意一个值都要小于等于右边数列的值，
   * 然后再分别对左侧和右侧的数列进行分割以此类推，知道整个数列有序
   *  [12, 3, 25, 7, 7, 24, 35, 24]
   */
  fast(list: any) {
    this.quick(list, 0, list.length-1);
    return list;
  }
  quick(list: any, start: any, end: any) {
    let lower = start,
      height = end,
      key = Math.floor((start + end) / 2),
      powkey = list[key];
    list[key] = list[lower];
    list[lower] = powkey;
    while (height > lower) {
      while (list[height] >= powkey && height > lower) {
        height--;
      }
      if (lower < height) {
        list[lower++] = list[height];
      }
      while (list[lower] <= powkey && height > lower) {
        lower++;
      }
      if (lower < height) {
        list[height--] = list[lower];
      }
    }
    list[lower] = powkey;
    if (start + 1 < lower) {
      this.quick(list, start, lower - 1);
    }
    if (lower + 1 < end) {
      this.quick(list, lower + 1, end);
    }
  }

  // 归并排序
  /**
   * 归并排序的思维也是对数组进行一分为二分割，
   * 不同的是归并排序不是按照关键值进行分割，
   * 而是从中间将数组一分为二，然后不断分割形成一颗二叉树
   *  [6,5,7,2,5, 9]
   */
  mergeSort(list: any) {
    return this.sort(list);
  }
  merge(left: any, right: any) {
    let list = [];
    while (left[0] && right[0]) {
      if (left[0] < right[0]) {
        list.push(left.shift());
      } else {
        list.push(right.shift());
      }
    }
    list = list.concat(left).concat(right);
    return list;
  }

  sort(arr: any): any {
    if (arr.length === 1) {
      return arr;
    }
    let mid = Math.floor((arr.length + 1) / 2);
    return this.merge(this.sort(arr.slice(0, mid)), this.sort(arr.slice(mid)));
  }
}
</script>

<style lang="less" scoped>
</style>
