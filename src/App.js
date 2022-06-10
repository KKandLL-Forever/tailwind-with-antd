import{ useState } from 'react';
import { ConfigProvider, DatePicker, Button } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './App.css';

moment.locale('zh-cn');

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    setDate(value);
  };
  return (
    <div className="App-header">
      <ConfigProvider locale={zhCN}>
        <div className="border rounded-md p-2">
          <DatePicker onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
          </div>
          <Button>Default Button</Button>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;
