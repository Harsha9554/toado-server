import "reflect-metadata";
import express, { Application, Response } from "express";
import { createConnection, getConnectionOptions } from "typeorm";
import cors from "cors";

const main = async () => {
	const app: Application = express();
	const port = process.env.PORT || 3000;

	await createConnection(await getConnectionOptions());

	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.get("/", async (res: Response): Promise<Response> => {
		return res.status(200).send({ message: "TOAD-O" });
	});

	app.listen(port, (): void => {
		console.log(`TOAD-O Server running on ${port}.`);
	});
};

main().catch((error) => {
	console.error(error);
});
