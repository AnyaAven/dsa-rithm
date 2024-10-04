type tRecurNumArray = (number | tRecurNumArray)[];

/** Does array contain item? (recursive search) */
// 3 minutes
function arrayContains(nums: tRecurNumArray, sought: number): boolean {
  for (const val of nums) {
    if (val === sought) return true

    if (Array.isArray(val)) return arrayContains(val, sought)
  }

  return false
}

// Could solve with binary search


export { arrayContains };
