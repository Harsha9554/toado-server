import express, { Application, Response } from "express";
import cors from "cors";

const main = async () => {
	const app: Application = express();
	const PORT: number = 3000;

	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.get("/", async (res: Response): Promise<Response> => {
		return res.status(200).send({ message: "TOAD-O" });
	});

	try {
		app.listen(PORT, (): void => {
			console.log(`TOAD-O Server running on the port ${PORT}.`);
		});
	} catch (error) {
		console.error(`Error : ${error}`);
	}
};

main();
