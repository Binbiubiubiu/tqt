import { dirname, resolve } from "path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";

const r = (...args: string[]) => resolve(dirname(fileURLToPath(import.meta.url)), ...args);

async function run() {
  fs.writeFile(r("../types/shims-qn.d.ts"), '/// <reference types="@tqtjs/shims/qn" />\n');
}

run();
