// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { PeoplePictureSize } from "../../constants/common";
import { PeopleData } from "../../types/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        let result = makePeopleData();
        await sleep(5000);
        res.status(200).json({ people: [...result] });
    } else {
        res.status(404).end();
    }
}

function makePeopleData(): PeopleData[] {
    let arr: PeopleData[] = [];

    for (let i = 0; i < 20; i++) {
        let picture: string = faker.image.animals(
            PeoplePictureSize.width,
            PeoplePictureSize.height,
            true
        );
        let name: string = faker.name.findName();
        let age: number = faker.datatype.number({ min: 10, max: 90 });
        let obj: PeopleData = { picture, name, age };
        arr.push(obj);
    }

    return arr;
}

async function sleep(time: number) {
    await new Promise((resolve) => setTimeout(resolve, time));
}
