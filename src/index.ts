import express from "express";
import cors from "cors";

const main = async () => {
	const app = express();
	const PORT = 3000;

	app.use(cors());
	app.use(express.json());

	app.listen(PORT, () => {
		console.log(`TOAD-O Server running on the port ${PORT}.`);
	});
};

main();
