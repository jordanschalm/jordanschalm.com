export const invokeOnce = (f) => {
  let invoked = false
  return () => {
    if (invoked) {
      return
    }
    invoked = true
    return f()
  }
}
