import { getPostss} from "../../src/example";

const postss = getPostss();

export default async (req, res) => {
  res.json({ postss });
};
