import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "br.com.todolist",
  appName: "capacitor-todo-list-android",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://10.0.2.2:3000",
    cleartext: true,
  },
};

export default config;
