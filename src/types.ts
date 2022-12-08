// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare interface Window {
  versions: {
    node: () => string
    chrome: () => string
    electron: () => string
    ping: () => Promise<string>
  }
}
