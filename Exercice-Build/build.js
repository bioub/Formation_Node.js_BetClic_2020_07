const fs = require("fs-extra");
const path = require("path");
const del = require("del");
const md5 = require("md5");
const UglifyJS = require("uglify-es");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkDir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
}

async function concatFiles(srcFilesPath, destPath) {
  const buffers = await Promise.all(
    srcFilesPath.map((filePath) => fs.readFile(filePath))
  );

  const concatBuffer = Buffer.concat(buffers);

  await fs.writeFile(destPath, concatBuffer);
}

async function copyAndModify(srcPath, destPath, transformCb) {
  const content = await fs.readFile(srcPath, { encoding: 'utf-8' });

  await fs.writeFile(destPath, transformCb(content));
}

(async () => {
  await rmAndMkDir(distPath);
  console.log("rmDir and mkDir Done");
  await concatFiles([horlogeJsPath, indexJsPath], appJsDistPath);
  console.log("build js done");
  await copyAndModify(indexHtmlPath, indexHtmlDistPath, (content) => {
    const distTag = '<script src="app.js"></script>';
    const regex = /<script.*<\/script>/s;

    return content.replace(regex, distTag);
  });
  console.log("build done");
})().catch((err) => console.log(err));
