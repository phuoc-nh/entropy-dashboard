export const localStorageMethods = {
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      console.error('Error saving to localStorage', error)      
    }
  },
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.error('Error getting from localStorage', error)
      return null
    }
  },
}