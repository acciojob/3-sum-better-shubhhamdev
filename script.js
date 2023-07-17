function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize closestSum to maximum possible value
  let closestSum = Infinity;

  // Iterate over each element up to the third-to-last element
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer to the element on the right of arr[i]
    let right = arr.length - 1; // Pointer to the last element

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right]; // Calculate the current sum

      // Update closestSum if currentSum is closer to the target
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Move the pointers based on the current sum
      if (currentSum > target) {
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        // Found the exact target, return it
        return target;
      }
    }
  }

  // Return the sum of three integers closest to the target
  return closestSum;
}

module.exports = threeSum;
