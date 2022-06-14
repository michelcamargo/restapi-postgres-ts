import {getContentByGroupName, getContentByTitle} from "../controllers/content/content.controller";

const contentRoutes = (router: any) => {
  router.get('/api/content/group/:groupName', getContentByGroupName);
  router.get('/api/content/:title', getContentByTitle);
}

export default contentRoutes;