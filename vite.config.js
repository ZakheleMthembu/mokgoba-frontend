export default {
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
    host: true
  },
  preview: {
    port: process.env.PORT || 5173,
    host: true
  }
}
