import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const table = "ContactSubmissions";

const docClient = DynamoDBDocumentClient.from(client);

export async function scanMessages() {
  const { Items } = await docClient.send(new ScanCommand({ TableName: table }));
  return Items || [];
}

export async function createMessage(message) {
  console.log (message)
  await docClient.send(new PutCommand({ TableName: table, Item: message }));
}


export async function deleteMessage(id) {
  await docClient.send(new DeleteCommand({ TableName: table, Key: { id } }));
}
