const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({});

export async function uploadFileToS3(params) {
  const { Bucket, Body, Key } = params;

  const command = new PutObjectCommand({ Bucket, Body, Key });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
