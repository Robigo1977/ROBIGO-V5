import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("src/assets/images");
const outputDir = path.resolve("src/assets/optimized");

const allowedExtensions = [
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
];


async function optimizeImage(inputPath, outputPath) {

  await sharp(inputPath)

    .resize({
      width: 1600,
      withoutEnlargement: true,
    })

    .webp({
      quality: 82,
    })

    .toFile(outputPath);


  console.log(
    `✓ ${path.basename(inputPath)}`
  );

}



async function processDirectory(directory) {

  const files =
    fs.readdirSync(
      directory,
      {
        withFileTypes: true,
      }
    );


  for (const file of files) {


    const fullPath =
      path.join(
        directory,
        file.name
      );


    if (file.isDirectory()) {

      await processDirectory(fullPath);

      continue;

    }



    const ext =
      path.extname(file.name)
        .toLowerCase();



    if (!allowedExtensions.includes(ext)) {

      continue;

    }



    const relative =
      path.relative(
        inputDir,
        fullPath
      );


    const outputPath =
      path.join(
        outputDir,
        relative.replace(
          ext,
          ".webp"
        )
      );



    fs.mkdirSync(
      path.dirname(outputPath),
      {
        recursive: true,
      }
    );



    await optimizeImage(
      fullPath,
      outputPath
    );

  }

}



fs.mkdirSync(
  outputDir,
  {
    recursive: true,
  }
);



processDirectory(inputDir)

  .then(() => {

    console.log(
      "\n✅ Image optimization complete"
    );

  })

  .catch((error) => {

    console.error(error);

    process.exit(1);

  });