import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  base: '/courselist/',
  mode: "history",
  routes: [
    {
      path: "/"
      ,alias: "/courses"
      ,name: "course-list"
      ,component: () => import("./components/CourseList")
    },
    // {
    //     path: "/courses/:id"
    //     ,name: "courseDetails"
    //     ,component: () => import("./components/Course")
    // },
    // {
    //     path: "/addCourse"
    //     ,name: "addCourse"
    //     ,component: () => import("./components/AddCourse")
    // }
  ]
});