import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import Skills from '../views/personalInformation/SkillsView.vue';
import WorkExperience from '../views/personalInformation/WorkExperienceView.vue';
import EducationBackground from '../views/personalInformation/EducationBackgroundView.vue';
import Others from '../views/personalInformation/OthersView.vue';
import ExternalApi from '../views/codeTesting/ExternalApiView.vue';
import TestingVue3View from '../views/codeTesting/TestingVue3View.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/personalInformation/skills',
    name: 'skills',
    component: Skills,
  },
  {
    path: '/personalInformation/workExperience',
    name: 'workExperience',
    component: WorkExperience,
  },
  {
    path: '/personalInformation/educationBackground',
    name: 'educationBackground',
    component: EducationBackground,
  },
  {
    path: '/personalInformation/others',
    name: 'others',
    component: Others,
  },
  {
    path: '/codeTesting/externalApi',
    name: 'externalApi',
    component: ExternalApi,
  },
  {
    path: '/codeTesting/testingVue3',
    name: 'testingVue3',
    component: TestingVue3View,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
