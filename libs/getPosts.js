import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "@/utils/sortByDate";

const blogDirFiles = fs.readdirSync(path.join("content/blog"));
// This is used to synchronously read the contents of a given directory. The method returns an array with all the file names or objects in the directory.
const blogs = blogDirFiles.filter((f) => f.includes(".md"));

export function getPosts() {
  const returnDirFiles = blogs.map((filename) => {
    const slug = filename.replace(".md", "");
    const dirFileContents = fs.readFileSync(
      path.join("content/blog", filename),
      "utf8"
    );

    const { data: frontMatter, content } = matter(dirFileContents);

    return {
      slug,
      frontMatter,
      content,
    };
  });
  return returnDirFiles.sort(sortByDate);
}
