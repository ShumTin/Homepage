import request from "./request";

/**
 * 分页获取博客
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}
