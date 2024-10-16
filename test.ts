import { timeout } from "@reactive/utils";


// import express from 'express';
// const app = express();
// const port = 3000;

// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// interface GameSettings {
//     // Known up-front properties
//     speed: "fast" | "medium" | "slow";
//     quality: "high" | "low";
   
//     // Assume anything unknown to the interface
//     // is a string.
//     [key: string]: string;
//   }
   
//   const getSettings = (): GameSettings => {
//     throw Error('TODO');
//   };

//   const settings = getSettings();
//   settings.speed;

//   settings.quality;
//   settings.username;


// import express from "npm:express";

// const app = express();

// app.get("/", function (_req, res) {
//   res.send("hello");
// });

// app.listen(3000, () => {
//   console.log("Express listening on :3000");
// });

const add = ((): boolean | undefined => {

    return false;
})();

if (add) {
    console.info('aaa');
}

const main = async (bbb: string | undefined): Promise<void> => {

    console.info('hello');

    await timeout(1000);

    console.info('world');

    // const aaa = process
};

const aaa: Record<string, string> = {};

const bbb = aaa['dd'];

await main(bbb);


for await (const entry of Deno.readDir('.')) {
    console.info(entry);
}
const aaa1 = Deno.args[0];

console.info(Deno.args);
