const Aws = require("aws-sdk");
const s3 = new Aws.S3();

export const uploadData = async (buffer: any, fileData: any) => {
  const awsUpload = await s3
    .upload(
      {
        Bucket: process.env.S3_BUCKET,
        Key: `${Date.now()}-${fileData.originalname}`,
        Body: buffer,
        ACL: "public-read",
        ContentType:
          fileData.fieldname === "img"
            ? "image/jpg image/png"
            : "video/mp4 video/avi video/wmv",
      },
      (err: object) => {
        if (err) {
          console.log("Error", err);
        }
      }
    )
    .promise();
  return awsUpload;
};

export const deleteData = async (key: any) => {
  console.log(key);

  await s3
    .deleteObject({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    })
    .promise()
    .then(() => {})
    .catch((err: any) => {
      console.log("Error", err);
    });
};