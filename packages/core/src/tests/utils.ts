import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  rmdirSync,
  unlinkSync,
} from "fs";
import { tmpdir } from "os";
import { basename, join, resolve } from "path";

export const testProjectDir = resolve("__tests__/test-project");

const getTestProjectDirPath = (filename: string) =>
  join(tmpdir(), basename(filename).split(".")[0]);

const defaultPackageJsonPath = join(testProjectDir, "package.json");

export function createTestProjectDir(filename: string): string {
  const testProjectDirPath = getTestProjectDirPath(filename);
  if (existsSync(testProjectDirPath)) {
    deleteFolderRecursive(testProjectDirPath);
  }

  mkdirSync(testProjectDirPath);
  mkdirSync(join(testProjectDirPath, ".git"));

  restorePackageJson(filename);

  return testProjectDirPath;
}

export function restorePackageJson(filename: string): void {
  const testProjectDirPath = getTestProjectDirPath(filename);
  if (!existsSync(testProjectDirPath)) {
    throw new Error(`Test project dir "${testProjectDirPath}" does not exist`);
  }
  copyFileSync(defaultPackageJsonPath, join(testProjectDirPath, "package.json"));
}

export function removeTestProjectDir(filename: string): void {
  const testProjectDirPath = getTestProjectDirPath(filename);
  if (!existsSync(testProjectDirPath)) {
    throw new Error(`Test project dir "${testProjectDirPath}" does not exist`);
  }
  deleteFolderRecursive(testProjectDirPath);
}

function deleteFolderRecursive(path: string) {
  if (existsSync(path)) {
    readdirSync(path).forEach((file) => {
      const curPath = join(path, file);
      if (lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        unlinkSync(curPath);
      }
    });
    rmdirSync(path);
  }
}
