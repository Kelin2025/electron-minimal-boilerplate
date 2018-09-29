import path from "path"
import { app, BrowserWindow } from "electron"
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from "electron-devtools-installer"

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true

const createWindow = async () => {
  const win = new BrowserWindow({
    webPreferences: { webSecurity: false }
  })

  win.loadURL("http://localhost:8080")

  await installExtension(REACT_DEVELOPER_TOOLS)
}

app.on("ready", createWindow)

process.on("unhandledRejection", console.log)
