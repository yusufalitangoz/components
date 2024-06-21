import { readdir } from "fs/promises";

export default defineNuxtPlugin(async () => {
  const files = await readdir("components/examples");
  const components = useState("components");
  components.value = files.map((file) => file.replace(".vue", ""));
});
