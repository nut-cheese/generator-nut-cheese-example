import RootContainer from './components/RootContainer';
import TodoApp from './containers/todo';

const routerConfig = [{
  path: '/',
  component: RootContainer,
  childRoutes: [{
    path: 'todo',
    component: TodoApp
  }]
}];

export default routerConfig;
