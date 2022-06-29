const keyExistCheck = (obj, key) => {
  // Helper function to check if a key exist in a nested object, source : "https://javascript.plainenglish.io/how-to-test-for-existence-of-nested-javascript-object-key-4bc56a96086f"
  if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
    return false;
  } else if (obj.hasOwnProperty(key)) {
    return true;
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const result = keyExistCheck(obj[i], key);
      if (result) {
        return result;
      }
    }
  } else {
    for (const k in obj) {
      const result = keyExistCheck(obj[k], key);
      if (result) {
        return result;
      }
    }
  }

  return false;
};

export default keyExistCheck;
