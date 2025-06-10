function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let k = nums1.length - 1;
  for (let i = nums2.length - 1; i < nums2.length; i++) {
    if (nums1[m] < nums2[i]) {
      nums1[k] = nums2[i];
      k--;
    } else {
      nums1[m - 1] = nums2[i];
    }
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const c = 3;

console.log(merge(nums1, m, nums2, c));
