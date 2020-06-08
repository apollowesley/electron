import '@views/assets/css/style.less';
import '@views/indexedDB/hello';

import ReactDOM from 'react-dom';
import Root from '@views/routes';
import { remote } from 'electron';

ReactDOM.render(Root, window.document.getElementById('root'), () => {
  remote.getCurrentWindow().show();
});
