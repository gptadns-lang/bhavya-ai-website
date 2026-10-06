const sharp = require("sharp");
const path = require("path");

async function main() {
  const pub = path.join(__dirname, "..", "public");
  const logo = path.join(pub, "logo.png");
  const meta = await sharp(logo).metadata();
  console.log("logo size:", meta.width + "x" + meta.height);
  await sharp(logo).resize(192, 192, { fit: "cover" }).png().toFile(path.join(pub, "icon-192.png"));
  await sharp(logo).resize(512, 512, { fit: "cover" }).png().toFile(path.join(pub, "icon-512.png"));
  console.log("icons done");
}

main().catch((e) => { console.error(e); process.exit(1); });
