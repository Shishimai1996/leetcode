function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let k = nums1.length - 1;
  let i = m - 1;
  let j = n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const c = 3;

merge(nums1, m, nums2, c);
console.log(nums1);
