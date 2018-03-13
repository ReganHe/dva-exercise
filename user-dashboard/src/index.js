import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';
import models from './models';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
models.forEach((m) => {
  app.model(m.default);
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
